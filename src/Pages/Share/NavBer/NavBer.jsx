import { Link, NavLink } from "react-router-dom";

const NavBer = () => {
    return (
        <div className="fixed z-10 w-full bg-titleColor bg-opacity-50">
            <div className="flex max-w-6xl mx-auto items-center justify-between text-white py-3">
                <div>
                    <Link to='/'>
                        <h2>BISTRO BOSS</h2>
                    </Link>
                    <p>Restaurant</p>
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
                                CONTACT us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                DASHBOARD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                Our Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                Our Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                SIGN OUT
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default NavBer;