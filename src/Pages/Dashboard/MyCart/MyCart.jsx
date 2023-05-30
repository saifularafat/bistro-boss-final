import { Helmet } from "react-helmet-async";
import useCart from "../../../Component/useCart/useCart";
// import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [ cart, refetch ] = useCart();
    // console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)


    const handlerDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Item delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount > 0){
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })
    }
    return (
        <div className="w-full">
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
            <div className=" uppercase h-20 font-semibold  flex items-center justify-evenly">
                <h2 className="text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Total: ${total}</h2>
                <button className="btn btn-warning">Pay</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-dashboard_bg rounded-l-xl rounded-r-xl">
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.image} alt="food image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td className="text-end">${item?.price}</td>
                                <td>
                                    <button className="bg-dashboard_bg text-white text-xl p-4 rounded-xl"><FaEdit /></button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handlerDelete(item)}
                                        className="bg-red-600 text-white text-xl p-4 rounded-xl"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;