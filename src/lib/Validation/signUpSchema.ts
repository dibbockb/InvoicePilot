import * as z from "zod";

const signUpSchema = z.object({
    fullName: z.string(),
    email: z.email(),
    password: z.string()
        .min(6, "Must be at least 6 characters long.")
        .max(24, "Please choose a password below 24 characters!"),
    confirmPassword: z.string()
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match!",
            path: ['confirmPassword'],
        }
})

export type signUpValues = z.infer<typeof signUpSchema>;