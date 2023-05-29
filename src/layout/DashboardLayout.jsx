import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiFillShopping, AiOutlineMenu } from "react-icons/ai";
import { FaCalendarAlt, FaMoneyCheckAlt, FaShoppingCart } from "react-icons/fa";
import { MdEmail, MdReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";


const DashboardLayout = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    {/*  Page content here  */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-dashboard_bg">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">
                        {/*  Sidebar content here */}
                        <div className="py-12 pl-6 font-Cinzel  text-titleColor uppercase">
                            <h2 className=" font-extrabold text-2xl">Bistro Boss</h2>
                           <p className="font-bold text-xl tracking-widest">Restaurant</p>
                        </div>

                        <li>
                            <NavLink to='/dashboard/userHome'>
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
                                <FaShoppingCart /> <span>MY CART</span>
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
                            <NavLink to='/'>
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