import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../Auth/authStore"
import Loading from "@/components/ui/Global/Loading";

export default function PrivateRoute() {
    const { user, loading } = useAuthStore();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loading />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />
}

