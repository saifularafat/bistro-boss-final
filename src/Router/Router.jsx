import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import PrivateRouter from "./PrivateRouter";


import DashboardLayout from "../layout/DashboardLayout";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Review from "../Pages/Dashboard/Review/Review";
import Booking from "../Pages/Dashboard/Booking/Booking";


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
        path: '/dashboard/userHome',
        element: <UserHome />
      },
      {
        path: '/dashboard/reservation',
        element: <Reservation />
      },
      {
        path: '/dashboard/payment',
        element: <Payment />
      },
      {
        path: '/dashboard/myCart',
        element: <MyCart />
      },
      {
        path: '/dashboard/review',
        element: <Review />
      },
      {
        path: '/dashboard/booking',
        element: <Booking />
      },
    ]
  }
]);

export default router;