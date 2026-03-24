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
import { useState } from "react"
import { toast } from "sonner"
import Loading from "./Global/Loading"
import { supabase } from "@/lib/Auth/supabase"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@/lib/Validation/signUpSchema"
import type { signUpValues } from "@/lib/Validation/signUpSchema"

export function SignupForm() {

  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<signUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  })

  const handleCreateAccount = async (values: signUpValues) => {
    setError(null);
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: {
          username: values.fullName.trim()
        },
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data.user) {
      toast.success("Welcome to InvoicePilot!")
      navigate('/dashboard')
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
      toast.warning('Something didn\'t go well.')
    }
    setLoading(false);
  }

  return (
    <Card className="bg-secondary text-white px-8 py-10 w-90 md:w-100 mx-auto">
      <CardHeader className="">
        <CardTitle className="mx-auto text-2xl ">Create an account</CardTitle>
        <CardDescription className="text-white text-center">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form {...form} onSubmit={form.handleSubmit(handleCreateAccount, (errors) => {
          const firstError = Object.values(errors)[0];
          if (firstError?.message) {
            toast.error(firstError.message as string);
          }
        })}>
          <FieldGroup>

            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input {...form.register("fullName")} className="placeholder:pl-1 placeholder:text-white/70 font-light " id="name" type="text"
                placeholder="John Doe"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                {...form.register("email")}
                className="placeholder:pl-1 placeholder:text-white/70 font-light"
                id="email"
                type="email"
                placeholder="m@example.com"

              />

              <FieldDescription className="text-white/60 font-light">
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <Input
                {...form.register("password")}
                id="password" type="password" disabled={loading} />

              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>

                <Input
                  {...form.register("confirmPassword")}
                  disabled={loading} id="confirm-password" type="password" />
              </Field>
              <FieldDescription className="text-white/60 font-light">
                Must be at least 6 characters long.
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
                  Already have an account? <Link className="text-white/80 hover:text-accent transition-all duration-200 ease-in-out" to="/login">Log in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>

  )
}
