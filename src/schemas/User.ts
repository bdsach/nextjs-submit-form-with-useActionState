import { z } from "zod";

export const UserSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  emailAddress: z.string().email({
    message: "Please enter a valid email address",
  }),
});
