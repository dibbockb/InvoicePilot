import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/ui/Home";
import Features from "../components/ui/Product/Features";
import Solutions from "../components/ui/Product/Solutions";
import Pricing from "../components/ui/Product/Pricing";
import About from "../components/ui/Product/About";
import Trial from "../components/ui/Product/Trial";
import Demo from "../components/ui/Product/Demo";
import Login from "../components/ui/User/Login";
import Register from "../components/ui/User/Register";

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
    { path: '*', element: <div>404 - Page Not Found</div>, },
])
