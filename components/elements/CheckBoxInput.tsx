type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ id, checked, label, onChange }: CheckboxProps) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        id={id}
        onChange={onChange}
        readOnly={onChange === undefined}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export { Checkbox };
