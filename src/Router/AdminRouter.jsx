import { Navigate, useLocation } from "react-router-dom";
import loadImg from './../assets/others/loader3.gif'
import useAuth from "../Component/hook/useAuth";
import useAdmin from "../Component/hook/useAdmin";

const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const [ isAdmin, isAdminLoading ] = useAdmin();
    const location = useLocation()

    if ( loading || isAdminLoading ) {
        return <div className="flex justify-center">
            <img src={loadImg} alt="" className="md:mt-16 mt-7"/>
        </div>
    }
    if ( user && isAdmin ) {
        return children;
    }
    return <Navigate
        to='/'
        state={{ from: location }}
        replace>
    </Navigate>
};

export default AdminRouter;