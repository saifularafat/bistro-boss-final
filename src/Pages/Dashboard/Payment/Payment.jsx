import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Component/useCart/useCart";

/* TODO : provide publishable key */
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Payment</title>
            </Helmet>
            <SectionTitle
                heading='PAYMENT'
                subHeading='Please Process'
            />
            <h2 className="text-3xl my-6 text-center">Oh teka oh teka pakhi uira uira </h2>

            <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={price} />
            </Elements>

        </div>
    );
};

export default Payment;