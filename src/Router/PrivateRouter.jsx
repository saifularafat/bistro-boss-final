import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadImg from './../assets/others/loader3.gif'

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center">
            <img src={loadImg} alt="" className="md:mt-16 mt-7"/>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate
        to='/login'
        state={{ from: location }}
        replace>
    </Navigate>
};

export default PrivateRouter;