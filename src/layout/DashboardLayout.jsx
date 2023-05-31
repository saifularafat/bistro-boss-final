import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiFillShopping, AiOutlineMenu } from "react-icons/ai";
import { FaBook, FaCalendarAlt, FaMoneyCheckAlt, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdEmail, MdReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import useCart from "../Component/useCart/useCart";
import useAdmin from "../Component/hook/useAdmin";


const DashboardLayout = () => {

    const [cart] = useCart();

    //TODO : admin user data server insert dynamic data from database
    // const isAdmin = true;
    const [ isAdmin ] = useAdmin();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">

                    {/*  Page content here  */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-dashboard_bg">
                    <label htmlFor="my-drawer-2" className=""></label>
                    <ul className="menu p-4 w-80">
                        {/*  Sidebar content here */}
                        <div className="py-12 pl-6 font-Cinzel  text-titleColor uppercase">
                            <h2 className=" font-extrabold text-2xl">Bistro Boss</h2>
                            <p className="font-bold text-xl tracking-widest">Restaurant</p>
                        </div>

                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/home'>
                                            <AiFillHome /> <span>Admin Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addItem'>
                                            <FaUtensils /> <span>ADD ITEM</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manegeItem'>
                                            <TfiMenuAlt /> <span>MANAGE ITEM</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/booking'>
                                            <FaBook /> <span>MANAGE BOOKING</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allUsers'>
                                            <FaUsers /> <span>ALL USERS</span>
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/dashboard/home'>
                                            <AiFillHome /> <span>User Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/reservation'>
                                            <FaCalendarAlt /> <span>RESERVATION</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/payment'>
                                            <FaMoneyCheckAlt /> <span>PAYMENT HISTORY</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myCart'>
                                            <FaShoppingCart /> <span>MY CART
                                                <span className="badge badge-secondary ml-2">+{cart?.length || 0}</span>
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/review'>
                                            <MdReviews /> <span> ADD REVIEW</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/booking'>
                                            <SlCalender /> <span>MY BOOKING</span>
                                        </NavLink>
                                    </li>
                                </>
                        }

                        <div className="divider border-white"></div>

                        {/* website section */}
                        <li>
                            <NavLink to='/'>
                                <AiFillHome /> <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'>
                                <AiOutlineMenu /> <span> MENU</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/orderFood/:category'>
                                <AiFillShopping /> <span>SHOP</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                <MdEmail /> <span>CONTACT</span>
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;