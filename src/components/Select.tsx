export type SelectProps = {
  id: string;
  name: string;
  options: { key: number | string; label: string; value: number | string }[];
};

const Select = ({ id, name, options }: SelectProps) => {
  return (
    <select id={id} name={name} className="input-field">
      {options.map(({ key, label, value }) => (
        <option key={key} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
