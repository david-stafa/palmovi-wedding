import { FormSchema } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Label } from "./label";

type InputWithLabelProps = {
  name: keyof FormSchema;
  label: string;
  register: UseFormRegister<FormSchema>;
  error: FieldError | undefined;
  type?: React.HTMLInputTypeAttribute;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputWithLabel = ({
  name,
  label,
  register,
  error,
  type = "text",
  ...props
}: InputWithLabelProps) => {
  return (
    <>
      <Label className="mb-2 mt-4" htmlFor={name}>
        {label}
      </Label>
      <Input
        {...register(name)}
        aria-invalid={!!error}
        type={type}
        id={name}
        className="border-1 border-[#664e27]/30 rounded-md"
        {...props}
      />
      {error && <p className="text-red-500 italic text-sm">{error.message}</p>}
    </>
  );
};
