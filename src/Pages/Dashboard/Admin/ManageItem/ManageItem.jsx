import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../../Component/useMenu/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Component/hook/useAxiosSecure";

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handlerItemDelete = item => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('items deleted Confirm', res.data);
                        if (res.data.deletedCount > 0) {
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
        <div className="w-full pl-5">
            <Helmet>
                <title> Bistro Boss || Manage Items</title>
            </Helmet>

            <SectionTitle
                heading='Manage All Items'
                subHeading='Hurry Up'
            />
            <h2 className="text-4xl font-medium font-Inter h-16"> Total Items : <span className="font-bold text-5xl">{menu.length}</span></h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image </th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr
                                key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Food image" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xl font-Inter font-medium">
                                    {item.name}
                                </td>
                                <td className="text-xl font-Inter font-medium">
                                    {item.category}
                                </td>
                                <td className="text-right text-xl font-Inter font-medium">${item.price}</td>
                                <td>
                                    <button className="bg-dashboard_bg text-white text-xl p-4 rounded-xl"><FaEdit /></button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handlerItemDelete(item)}
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

export default ManageItem;