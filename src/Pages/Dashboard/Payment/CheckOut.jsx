import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Component/hook/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../Component/hook/useAuth";
// import './checkOut.css'

const CheckOut = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transitionId, setTransitionId] = useState('');

    useEffect(() => {
        if( price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
            })
        }
        else {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: ` Your payment Successfully ${paymentMethod.created}`,
                showConfirmButton: false,
                timer: 1500
            })
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${confirmError.message}`,
            })
        }
        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransitionId(paymentIntent.id)
            // save payment information to the server
            const payment = {
                email: user?.email,
                transitionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                status: 'service pending',
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.foodItemId),
                itemName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        //display confirm
                    }
                })
        }
    }

    return (
        <div>
            <form className="" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="mt-8">
                    <button
                        className="py-1 px-20 bg-primary text-lg text-white font-Inter font-medium rounded-md"
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {
                transitionId && <p
                    className="mt-4 text-3xl font-Inter font-medium text-center text-green-600"> Transition Complete <br /> with transitionId : <span className="bg-yellow-300 text-lg font-normal p-2">{transitionId}</span> </p>
            }
        </div>
    );
};

export default CheckOut;