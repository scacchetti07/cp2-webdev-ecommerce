import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import ShoppingCart from "../pages/ShoppingCart";
import Product from "../pages/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "profile", element: <Profile />},
            {path: "product/:id", element: <Product />},
            {path: "carts", element: <ShoppingCart />}
        ]
    }
])

export default router;