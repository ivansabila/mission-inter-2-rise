import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Custom from "../pages/Custom";

const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "custom",
                Component: Custom,
            },
        ],
    },
    {
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            },
        ],
    },
]);

export default router;
