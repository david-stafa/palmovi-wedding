import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "Zadejte jméno" }),
  lastName: z.string().min(1, { message: "Zadejte příjmení" }),
  email: z.string().email({ message: "Neplatný e-mail" }),
  note: z.string().optional().nullable(),
  withTour: z.boolean(),
});

export type FormSchema = z.infer<typeof formSchema>;

export type ValidFieldNames =
  | "firstName"
  | "lastName"
  | "email"
  | "note"
  | "withTour";
