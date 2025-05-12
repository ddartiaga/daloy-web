import { FieldValues, Path } from "react-hook-form";
import { BaseInputRHFProps } from "./Input";
import clsx from "clsx";

type TextBoxWithValidationProps<T extends FieldValues> = {
  id: string;
  className?: string;
  label: string;
  type?: string;
  placeholder: string;
} & BaseInputRHFProps<T>;

const TextBoxWithValidation = <T extends FieldValues>({
  id,
  type = "text",
  schemaName,
  className,
  label,
  placeholder,
  register,
  error,
}: TextBoxWithValidationProps<T>) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={id}
        className="form-label text-primary fs-10"
        style={{ marginBottom: "0.2rem" }}
      >
        {label}
      </label>
      <input
        type={type}
        className={clsx("form-control", className)}
        id={id}
        placeholder={placeholder}
        aria-describedby={`${id}-desc`}
        {...register(schemaName as Path<T>)}
      />
      {error && (
        <div id={`${id}-desc`} className="form-text text-danger">
          {error.message}
        </div>
      )}
    </div>
  );
};

export { TextBoxWithValidation };
export type { TextBoxWithValidationProps };
