import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/ui/Home";

export const router = createBrowserRouter([
    { path: "/", element: <Layout/>, children: [{ index: true, element: <Home /> }] },
    { path: '*', element: <div>404 - Page Not Found</div>, },
])
