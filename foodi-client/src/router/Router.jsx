import { createBrowserRouter } from "react-router-dom";
import Menu from "../components/shop/Menu";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
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
    ],
  },
]);

export default router;
