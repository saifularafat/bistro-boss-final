import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Bars } from 'react-loader-spinner'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
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