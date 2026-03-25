import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "./authStore";
import { supabase } from "./supabase";
import Loading from "@/components/ui/Global/Loading";

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {

    const loading = useAuthStore((state) => state.loading);
    if (loading) {
        return <div className="flex justify-center min-h-screen ">
            <Loading></Loading>
        </div>
    }

    const setAuth = useAuthStore((state) => state.setAuth);
    //###reverse engineer this
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => { setAuth(session) });
        //listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => { setAuth(session) });

        //cleaner
        return () => { subscription.unsubscribe() };
    }, [setAuth]);

    return <>{children}</>;
}