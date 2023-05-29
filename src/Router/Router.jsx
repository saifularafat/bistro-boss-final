import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
// import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      /* TODO: Private Router add */
      {
        path: 'orderFood/:category',
        element: <OrderFood />
        // element: <PrivateRouter><OrderFood /></PrivateRouter>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path:'/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        
      }
    ]
  }
]);

export default router;