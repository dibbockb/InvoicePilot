import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { useSupabase } from "../context/supabaseContext"
import { useState } from "react"
import { toast } from "sonner"
import Loading from "./Global/Loading"

export function SignupForm({ ...props }: React.FormEvent<HTMLFormElement>) {

  const { supabase } = useSupabase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!name.trim()) {
      setError("Please enter a username");
      toast(`Please enter a Name`)
      setLoading(false);

      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      toast(`Password do not match!`)

      return;
    }

    if (password.length < 6) {
      toast.info("Password must be atleast 6 characters!", { position: "top-center" })
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: {
          username: name.trim().toLowerCase()
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      console.error("Signup error:", error)
      return
    }

    if (data.user && !data.session) {
      toast.success("Signup successful! Check your email to confirm your account.")
    } else if (data.session) {
      toast.success("Account created! Welcome to InvoicePilot.")
      navigate("/dashboard")
    }
  };



  const handleGoogleLogin = async () => {
    setError(null)
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })

    if (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <Card className="bg-secondary text-white px-8" {...props}>
      <CardHeader className="">
        <button onClick={() => { toast(`hey`) }}>Hey</button>

        <CardTitle className="mx-auto text-2xl ">Create an account</CardTitle>
        <CardDescription className="text-white text-center">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCreateAccount}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>

              <Input className="placeholder:pl-1 placeholder:text-white/70 font-light " id="name" type="text" placeholder="John Doe" value={name}
                onChange={(e) => setName(e.target.value)} />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                className="placeholder:pl-1 placeholder:text-white/70 font-light"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />

              <FieldDescription className="text-white/60 font-light">
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <Input id="password" type="password" required disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} />

              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>

                <Input value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading} id="confirm-password" type="password" required />

              </Field>
              <FieldDescription className="text-white/60 font-light">
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button className="h-10 bg-accent hover:bg-accent/70 shadow-md hover:shadow-lg hover:outline-1 outline-white" type="submit">
                  {loading ? <Loading></Loading> : "Create Account"}
                </Button>
                <Button className="h-10 shadow-md hover:shadow-lg text-black" variant="outline" type="button" onClick={handleGoogleLogin}>
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center text-white">
                  Already have an account? <Link className="text-white/80 hover:text-blue-400" to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
