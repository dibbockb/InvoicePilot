import { LoginForm } from "@/components/ui/login-form"
import { Fade } from "react-awesome-reveal"
import { useSupabase } from "@/components/context/supabaseContext"
import { useState } from "react"
import Loading from "@/components/ui/Global/Loading"

const Login = () => {
    const { supabase, user, loading } = useSupabase()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<string | null>(null)

    if (isLoading) {
        return <Loading></Loading>
    }

    if (user) {
        return (
            <div>
                <p>Your are already logged in as {user.email}</p>
                <button onClick={() => supabase.auth.signOut()}>
                    Sign out
                </button>
            </div>
        )
    }


    setIsLoading(false);

    return (
        <Fade>
            <LoginForm></LoginForm>
        </Fade>
    )
}

export default Login
