import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";

const NavBer = () => {

    const { user, logOut } = useContext(AuthContext);

    const handlerLogOut = () => {
        logOut()
            .then(
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Account Log Out',
                    showConfirmButton: false,
                    timer: 2000
                })
            )
    }

    return (
        <div className="fixed z-10 w-full bg-titleColor bg-opacity-50">
            <div className="flex max-w-6xl mx-auto items-center justify-between text-white py-3">
                <div>
                    <Link to='/'>
                        <h2 className="font-Cinzel font-extrabold text-3xl text-white tracking-wider">BISTRO BOSS</h2>
                    </Link>
                    <p className="font-Cinzel font-bold text-2xl uppercase tracking-widest">Restaurant</p>
                </div>
                <div>
                    <ul className="flex items-center space-x-5">
                        <li>
                            <NavLink>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                DASHBOARD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'>
                                Our Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='orderFood/salad'>
                                Order Food
                            </NavLink>
                        </li>
                        <li>
                            <Link to='/'>
                                <button className="flex items-center gap-2">
                                    <FaShoppingCart className="w-6 h-6"/>
                                    <div className="badge badge-secondary -mt-4">+0</div>
                                </button>
                            </Link>
                        </li>
                        <li className="pl-8">
                            {
                                user ?
                                    <div className="flex items-center">
                                        {/* <span>{user?.displayName}</span> */}
                                        <img
                                            src={user?.photoURL}
                                            alt=""
                                            title={user?.displayName}
                                            className="w-12 h-12 rounded-full border-e-2 border-btn_color mx-3"
                                        />
                                        <button
                                            onClick={handlerLogOut}
                                            className="">
                                            Log Out
                                        </button>
                                    </div>
                                    :
                                    <NavLink
                                        to='login'>
                                        Login
                                    </NavLink>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default NavBer;