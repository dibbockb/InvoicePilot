import Loading from "@/components/ui/Global/Loading";
import { useAuthStore } from "../Auth/authStore";
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const { user, loading } = useAuthStore();

    if (loading) { return <Loading /> }
    return user ? <Outlet /> : <Navigate to={"/login"} replace />
}