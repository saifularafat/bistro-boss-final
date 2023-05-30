import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/user')
        return res.json();
    })

    const handlerMakeAdmin = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your web site New Admin selected",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Admin!',
                                `${user.name} is an Admin Now!!`,
                                'success'
                            )
                        }
                    })
            }
        })

    }

    const handlerDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your site a Admin delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Admin has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <div>
                <Helmet>
                    <title>
                        Bistro Boss || All Users
                    </title>
                </Helmet>
            </div>
            <h2 className="text-3xl font-semibold text-center h-20"> Total Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button
                                                onClick={() => handlerMakeAdmin(user)}
                                                className="bg-dashboard_bg text-white text-xl p-4 rounded-xl">
                                                <FiUsers className="w-6 h-6" />
                                            </button>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handlerDelete(user)}
                                        className="bg-red-600 text-white text-xl p-4 rounded-xl"><FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;