import { Fade } from "react-awesome-reveal"
import { SignupForm } from "@/components/ui/signup-form"
import { motion } from "motion/react";

const Register = () => {
  return (

    <motion.section
      initial={{ opacity: 0, filter: "blur(15px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Fade>
        <div className="flex min-h-svh w-full items-center justify-center">
          <div className="w-full max-w-sm">
            <SignupForm />
          </div>
        </div>
      </Fade>
    </motion.section>

  )
}

export default Register