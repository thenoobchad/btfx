import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().nonempty("Please enter your email"),
  password: z.string().nonempty("Please enter your password"),
});

export const CreatePackageSchema = z.object({
  packageName: z.string(),
  min: z.coerce.number(),
  max: z.coerce.number(),
  duration: z.coerce.number(),
  profitPercentage: z.coerce.number(),
});
