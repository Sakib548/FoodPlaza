import { createBrowserRouter } from "react-router-dom";
import CartPage from "../components/shop/CartPage";
import Signup from "../components/Signup";
import Main from "../layout/Main";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
