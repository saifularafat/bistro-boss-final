import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
            path:'/',
            element: <Home />
        },
        {
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'orderFood',
          element: <OrderFood />
        }
      ]
    },
  ]);

export default router;