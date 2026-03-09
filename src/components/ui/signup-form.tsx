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
import { Link } from "react-router-dom"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card className="bg-secondary text-white px-8 " {...props}>
      <CardHeader className="">
        <CardTitle className="mx-auto text-2xl ">Create an account</CardTitle>
        <CardDescription className="text-white text-center">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input className="placeholder:pl-1 placeholder:text-white/70 font-light " id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                className="placeholder:pl-1 placeholder:text-white/70 font-light"
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
              <Input id="password" type="password" required />
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input id="confirm-password" type="password" required />
              </Field>
              <FieldDescription className="text-white/60 font-light">
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button className="h-10 bg-accent hover:bg-accent/70 shadow-md hover:shadow-lg hover:outline-1 outline-white" type="submit">Create Account</Button>
                <Button className="h-10 shadow-md hover:shadow-lg text-black" variant="outline" type="button">
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
