import { Fade } from "react-awesome-reveal"
import { SignupForm } from "@/components/ui/signup-form"

const Register = () => {
  return (

    <Fade>
      <div className="flex min-h-svh w-full items-center justify-center">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </Fade>
  )
}

export default Register