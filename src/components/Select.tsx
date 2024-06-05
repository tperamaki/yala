export type SelectProps = {
  id: string;
  name: string;
  options: { key: number | string; label: string; value: number | string }[];
};

const Select = ({ id, name, options }: SelectProps) => {
  return (
    <select
      id={id}
      name={name}
      className="appearance-none rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-gray-200 dark:border-slate-700 dark:text-slate-800 dark:focus:ring-slate-950"
    >
      {options.map(({ key, label, value }) => (
        <option key={key} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
