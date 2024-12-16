import z from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .nonempty("First name is required.")
      .min(3, "Minimum three characters required.")
      .max(15, "First name can not exceed 15 characters."),
    lastName: z
      .string()
      .nonempty("Last name is required.")
      .min(3, "Minimum three characters required.")
      .max(15, "Last name can not exceed 15 characters."),
    email: z
      .string()
      .nonempty("Email address is required.")
      .email("Invaild email address.")
      .max(30, "Email address can not exceed 30 characters."),
    password: z
      .string()
      .nonempty("Password is required.")
      .min(8, "Minimum eight characters required.")
      .max(20, "Password can not exceed 20 characters."),
    confirmPassword: z.string().nonempty("Confirm password is required."),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty("Email address is required.")
    .email("Invalid email address.")
    .min(1, "Email address is required.")
    .max(30, "Email address can not exceed 30 characters."),
  password: z
    .string()
    .nonempty("Password is required.")
    .max(20, "Password can not exceed 20 characters."),
});

export type SignInSchema = z.infer<typeof signInSchema>;
