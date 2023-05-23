import { Outlet } from "react-router-dom";
import NavBer from "../Pages/Share/NavBer/NavBer";
import Footer from "../Pages/Share/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBer />
            <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-272px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;