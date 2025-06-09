"use server";

import { prisma } from "@/lib/prisma";
import { FormSchema, formSchema } from "@/lib/types";
import { revalidatePath } from 'next/cache'

export const createConfirmation = async (formData: FormSchema) => {
  const result = formSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      error: result.error.formErrors.fieldErrors,
    };
  }

  try {
    await prisma.confirmation.create({
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        note: formData.note,
        withTour: formData.withTour,
      },
    });

    revalidatePath("/reservations");
    
    return {
      success: true,
    };
  } catch (error) {
    console.log("ERROR", error);
    return {
      success: false,
      error: "Nastala chyba při zpracování formuláře.",
    };
  }
};
