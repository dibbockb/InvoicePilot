import * as z from "zod";

export const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Must be atleast 6 characters long.")
        .max(24, "Please choose a password below 24 characters!")
})

export type loginValues = z.infer<typeof loginSchema>;