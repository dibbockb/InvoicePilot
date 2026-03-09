import { cn } from "@/lib/utils"
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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 w-100 py-25 mx-auto animate-accordion-down",)} {...props}>
      <Card className="bg-secondary text-white px-8">
        <CardHeader className="pb-5 pt-5">
          <CardTitle className="mx-auto text-2xl ">Login to InvoicePilot</CardTitle>
          <CardDescription className="text-white mx-auto">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="jhon@gmail.com"
                  required
                  className="placeholder:pl-1 placeholder:text-white/70 font-light h-8 transition-all durtation-300 ease-in-out"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline animate-accordion-down"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field className="text-black">
                <Button className="h-10 bg-accent hover:bg-accent/70 shadow-md hover:shadow-lg hover:outline-1 outline-white" type="submit">Login</Button>
                <Button className="h-10 shadow-md hover:shadow-lg" variant="outline" type="button" >
                  Login with Google
                </Button>
                <FieldDescription className="text-center text-white ">
                  Don&apos;t have an account? <Link to={"/register"} className="text-white/80 hover:text-blue-400" >Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
