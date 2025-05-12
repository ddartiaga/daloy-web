import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

type BaseInputRHFProps<T extends FieldValues> = {
  schemaName: keyof T;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
};

export type { BaseInputRHFProps };
