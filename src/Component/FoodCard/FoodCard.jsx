import { useContext } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../useCart/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;

    const { user } = useContext(AuthContext)

    const [ , refetch ] = useCart();

    const navigate = useNavigate();
    const location = useLocation();

    const handlerAddToCart = item => {
        console.log('This is a Items', item);
        if (user && user?.email) {
            const cartItem = { foodItemId: _id, name, image, price, email: user?.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId){
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food Add on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to order the food.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card md:w-96 bg-slate-100 shadow-2xl mx-3">
            {/* <figure> */}
            <img src={image} alt="Shoes" />
            {/* </figure> */}
            <p className="absolute right-0 mr-4 top-5 py-1 px-2 bg-titleColor text-white font-Inter rounded">{'$' + price}</p>
            <div className="card-body">
                <h2 className="menu_title">{name}</h2>
                <p className="recipe_style">{recipe}</p>
                <div className="text-center">
                    <button
                        onClick={() => handlerAddToCart(item)}
                        className="chef_btn bg-slate-100">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;