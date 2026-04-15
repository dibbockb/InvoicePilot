import { LoginForm } from "@/components/ui/login-form"
import { Fade } from "react-awesome-reveal"
import { motion } from "motion/react"

const Login = () => {
    return (
        <motion.section
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <Fade>
                <LoginForm ></LoginForm>
            </Fade>
        </motion.section>
    )
}

export default Login
