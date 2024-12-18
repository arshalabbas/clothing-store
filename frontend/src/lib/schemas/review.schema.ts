import z from "zod";

export const reviewSchema = z.object({
  rating: z
    .number()
    .refine(
      (value) => /^[1-5]\d*$/.test(value.toString()),
      "This action is required.",
    ),
  shortTitle: z
    .string()
    .min(3, "Atleast 3 characters required.")
    .max(15, "Title can not be more than 15 characters."),
  review: z
    .string()
    .min(3, "Atleast 3 characters required.")
    .max(200, "Title can not be more than 200 characters."),
});

export type ReviewSchema = z.infer<typeof reviewSchema>;
