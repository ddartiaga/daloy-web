import { FieldValues, Path } from "react-hook-form";
import { BaseInputRHFProps } from "./Input";

type DropdownWithValidationProps<T extends FieldValues> = {
  id: string;
  className?: string;
  label: string;
  options: DropdownOption[];
  default?: string;
} & BaseInputRHFProps<T>;

type DropdownOption = {
  value: string;
  label: string;
};

const DropdownWithValidation = <T extends FieldValues>({
  id,
  schemaName,
  label,
  options,
  register,
  error,
}: DropdownWithValidationProps<T>) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="form-label fs-10 text-primary"
        style={{ marginBottom: "0.1rem" }}
      >
        {label}
      </label>
      <select
        id={id}
        className="form-select"
        aria-label={label}
        aria-describedby={`${id}-desc`}
        {...register(schemaName as Path<T>)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <div id={`${id}-desc`} className="form-text text-danger">
          {error.message}
        </div>
      )}
    </div>
  );
};

export { DropdownWithValidation };
export type { DropdownWithValidationProps };
