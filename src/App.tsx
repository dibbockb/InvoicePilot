import { Navigate, Outlet } from 'react-router-dom';
import Loading from "@/components/ui/Global/Loading";
import { useAuthStore } from './lib/Auth/authStore';

export const PrivateRoute = () => {
    const { user, loading } = useAuthStore();

    if (loading) {
        return (
            <div className="flex h-screen mx-auto items-center justify-center bg-primary">
                <Loading />
            </div>
        );
    }

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};