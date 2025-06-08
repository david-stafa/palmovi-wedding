"use client";

import { createConfirmation } from "@/app/actions/formSubmission";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { formSchema, FormSchema, ValidFieldNames } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  FieldError,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { TourModal } from "@/app/components/TourModal";
import * as motion from "motion/react-client";
import { useState } from "react";
import { SuccessModal } from "@/app/components/SuccessModal";

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormSchema>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

const Form = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}) => {

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      withTour: false
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: FormSchema) => {
    const response = await createConfirmation(data);
    if (response.success) {
      setIsSuccessModalOpen(true);
      reset();
    }

    // Show error messages if response is not successful
    if (!response.success) {
      for (const [field, messages] of Object.entries(response.error || {})) {
        setError("root", {
          type: "server",
          message: "Nastala chyba při zpracování formuláře. Zkuste to prosím znovu.",
        });
        setError(field as keyof FormSchema | "root", {
          type: "server",
          message: messages[0],
        });
      }
      throw new Error("Could not create reservation");
    }
  };

  if (!isVisible) return null;

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto mb-10 md:mb-20 mt-15 text-[#664e27] scroll-mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="form"
    >
      <motion.h2
        className="text-xl md:text-2xl font-medium mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Vyplňte formulář a potvrďte svoji účast
      </motion.h2>
      {errors.root && <p className="text-red-500 italic text-sm">{errors.root.message}</p>}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <InputWithLabel
          name="firstName"
          label="Jméno"
          register={register}
          error={errors.firstName}
          type="text"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <InputWithLabel
          name="lastName"
          label="Příjmení"
          register={register}
          error={errors.lastName}
          type="text"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <InputWithLabel
          name="email"
          label="E-mail"
          register={register}
          error={errors.email}
          type="email"
        />
      </motion.div>
      <Controller
        name="note"
        control={control}
        render={({ field: { onChange, value } }) => (
          <motion.div
            className="flex flex-col gap-3 my-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Label htmlFor="note">Zanechte nám vzkaz</Label>
            <Textarea
              className="w-full border-[#664e27]/30"
              name="note"
              onChange={onChange}
              value={value}
            />
          </motion.div>
        )}
      />

      <Controller
        name="withTour"
        control={control}
        render={({ field: { onChange, value } }) => (
          <motion.div
            className="flex items-center my-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Checkbox
              className="w-5 h-5 mr-2 border-[#664e27]/30 data-[state=checked]:bg-[#BF4A47] data-[state=checked]:border-[#BF4A47]"
              id="withTour"
              checked={value}
              onCheckedChange={onChange}
              defaultChecked={false}
            />
            <Label htmlFor="withTour">
              S komentovanou prohlídkou krásných prostorů čistírny
            </Label>
          </motion.div>
        )}
      />

      <TourModal />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          className="bg-[#BF4A47] text-white rounded-2xl px-5 block mt-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Odesílám..." : "Odeslat"}
        </Button>
      </motion.div>
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => {
        setIsSuccessModalOpen(false)
        setIsVisible(false)
      }} />
    </motion.form>
  );
};

export default Form;
