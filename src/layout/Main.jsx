import { Outlet, useLocation } from "react-router-dom";
import NavBer from "../Pages/Share/NavBer/NavBer";
import Footer from "../Pages/Share/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noNavBerAndFooter = location.pathname.includes("login") || location.pathname.includes("register");
    // console.log(location);
    
    return (
        <div>
          { noNavBerAndFooter ||   <NavBer /> }
            <div className="min-h-[calc(100vh-272px)]">
                <Outlet />
            </div>
            { noNavBerAndFooter || <Footer /> }
        </div>
    );
};

export default Main;