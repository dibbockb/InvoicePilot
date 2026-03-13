import { useEffect , type ReactNode} from "react";
import { useAuthStore } from "./authStore";
import { supabase } from "./supabase";

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {

    const setAuth = useAuthStore((state) => state.setAuth);


    //reverse enginner this
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => { setAuth(session) });

        //listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => { setAuth(session) });

        //cleaner
        return () => { subscription.unsubscribe() };
    }, [setAuth]);

    return <>{children}</>;
}