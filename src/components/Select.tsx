export type SelectProps = {
  className?: string;
  id: string;
  name: string;
  options: { key: number | string; label: string; value: number | string }[];
};

const Select = ({ className = '', id, name, options }: SelectProps) => {
  return (
    <select id={id} name={name} className={className}>
      {options.map(({ key, label, value }) => (
        <option key={key} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
