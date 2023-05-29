import { Helmet } from "react-helmet-async";
import useCart from "../../../Component/useCart/useCart";
// import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const MyCart = () => {
const [cart] = useCart();
console.log(cart);
// const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="w-full bg-slate-300 mt-0">
            <Helmet>
                <title>
                    Bistro Boss || My Cart
                </title>
            </Helmet>
            {/* <div className="">
                <SectionTitle
                    heading='MANAGE ALL ITEMS'
                    subHeading='Hurry up' />
            </div> */}
            <div className=" uppercase flex items-center justify-between">
                <h2 className="text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Total: </h2>
                <button className="btn btn-warning">Pay</button>
            </div>
        </div>
    );
};

export default MyCart;