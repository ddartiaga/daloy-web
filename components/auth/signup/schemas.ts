import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  mobileNumber: z.string().min(1, "Mobile Number is required"),
  password: z
    .string()
    .min(8, "Password is required and must be at least 8 characters long."),
  confirmPassword: z
    .string()
    .min(8, "Password is required and must be at least 8 characters long."),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password is required and must be at least 8 characters long."),
});

export type signUpSchemaType = z.infer<typeof signUpSchema>;
export type signInSchemaType = z.infer<typeof signInSchema>;
