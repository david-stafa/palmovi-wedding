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

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormSchema>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormSchema) => {
    await createConfirmation(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto my-20 text-[#664e27] ">
      <h2 className="text-2xl font-medium mb-4"> Vyplňte formulář a potvrďte svoji účast</h2>
      <InputWithLabel
        name="firstName"
        label="Jméno"
        register={register}
        error={errors.firstName}
        type="text"
      />
      <InputWithLabel
        name="lastName"
        label="Příjmení"
        register={register}
        error={errors.lastName}
        type="text"
      />
      <InputWithLabel
        name="email"
        label="E-mail"
        register={register}
        error={errors.email}
        type="email"
      />
      <Controller
        name="note"
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="flex flex-col gap-3 my-4">
            <Label htmlFor="note">Poznámka</Label>
            <Textarea
              className="w-full border-[#664e27]/30"
              name="note"
              onChange={onChange}
              value={value}
            />
          </div>
        )}
      />

      <Controller
        name="withTour"
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="flex items-center gap-3 my-4">
            <Checkbox
              className="w-5 h-5 border-[#664e27]/30 data-[state=checked]:bg-[#BF4A47] data-[state=checked]:border-[#BF4A47]"
              id="withTour"
              checked={value}
              onCheckedChange={onChange}
              
            />
            <Label htmlFor="withTour">S prohlídkou</Label>
          </div>
        )}
      />
      <Button type="submit" className="bg-[#BF4A47] text-white">
        Odeslat
      </Button>
    </form>
  );
};

export default Form;
