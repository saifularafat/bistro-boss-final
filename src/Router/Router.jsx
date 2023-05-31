import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";


import DashboardLayout from "../layout/DashboardLayout";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Review from "../Pages/Dashboard/Review/Review";
import Booking from "../Pages/Dashboard/Booking/Booking";
import Contact from "../Pages/Contact/Contact";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/Admin/AddItem/AddItem";
import AdminRouter from "./AdminRouter";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageItem from "../Pages/Dashboard/Admin/ManageItem/ManageItem";
import AllBooking from "../Pages/Dashboard/Admin/AllBooking/AllBooking";


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
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: 'orderFood/:category',
        element: <OrderFood />

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
    path: '/dashboard',
    element: <PrivateRouter> <DashboardLayout /></PrivateRouter>,
    children: [
      {
        path: '/dashboard/home',
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


      /* Admin Router setUP */
      {
        path: '/dashboard/adminHome',
        element: <AdminRouter><AdminHome /></AdminRouter>
      },
      {
        path: '/dashboard/addItem',
        element: <AdminRouter><AddItem /></AdminRouter>
      },
      {
        path: '/dashboard/manegeItem',
        element: <AdminRouter><ManageItem /></AdminRouter>
      },
      {
        path: '/dashboard/booking',
        element: <AdminRouter><AllBooking /></AdminRouter>
      },
      {
        path: '/dashboard/allUsers',
        element: <AdminRouter><AllUsers /></AdminRouter>
      },
    ]
  }
]);

export default router;