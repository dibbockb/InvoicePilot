import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/ui/Home";
import Features from "../components/ui/Product/Features";
import Solutions from "../components/ui/Product/Solutions";
import Pricing from "../components/ui/Product/Pricing";
import About from "../components/ui/Product/About";
import Trial from "../components/ui/Product/Trial";
import Demo from "../components/ui/Product/Demo";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import Dashboard from "@/components/ui/Dashboard/Dashboard";
import Profile from "@/components/ui/Profile/Profile";
import Invoices from "@/components/ui/Dashboard/Invoices/Invoices";
import Clients from "@/components/ui/Dashboard/Clients/Clients";
import Settings from "@/components/ui/Dashboard/User/Settings";
import { PrivateRoute } from "@/lib/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [{ index: true, element: <Home /> },
        { path: "/features", element: <Features></Features> },
        { path: "/solutions", element: <Solutions></Solutions> },
        { path: "/pricing", element: <Pricing></Pricing> },
        { path: "/about", element: <About></About> },
        { path: "/onboarding", element: <Trial></Trial> },
        { path: "/demo", element: <Demo ></Demo> },
        { path: "/login", element: <Login ></Login> },
        { path: "/register", element: <Register ></Register> },
        ]
    },
    {
        Component: PrivateRoute, children: [
            { path: '/profile', element: <Profile></Profile>, },
            {
                path: '/dashboard', element: <Dashboard></Dashboard>, children: [
                    { path: "/dashboard/invoices", element: <Invoices></Invoices> },
                    { path: "/dashboard/clients", element: <Clients></Clients> },
                    { path: "/dashboard/settings", element: <Settings></Settings> },
                ]
            },
        ]
    },

    { path: '*', element: <p>404 - Page Not Found</p>, },
])
