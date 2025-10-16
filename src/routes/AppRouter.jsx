import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import ShoppingCart from "../pages/ShoppingCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "profile/:id", element: <Profile />},
            {path: "carts", element: <ShoppingCart />}
        ]
    }
])

export default router;