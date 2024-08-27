import { Suspense, use } from 'react';

export type Option = { key: number | string; label: string; value: number | string };

export type SelectProps = {
  disabled?: boolean;
  id: string;
  name: string;
  options: Option[] | Promise<Option[]>;
};

const SelectComponent = ({
  disabled = false,
  id,
  name,
  options,
}: SelectProps) => {
  const useOptions = Array.isArray(options) ? options : use(options);
  return (
    <select
      aria-disabled={disabled}
      disabled={disabled}
      id={id}
      name={name}
      className="appearance-none rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-gray-200 dark:border-slate-700 dark:text-slate-700 dark:focus:ring-slate-950"
    >
      {useOptions.map(({ key, label, value }) => (
        <option key={key} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export const Select = (props: SelectProps) => {
  return (
    <Suspense
      fallback={
        <SelectComponent
          disabled
          id={props.id}
          name={props.name}
          options={[{ key: 'fallback', label: 'Loading', value: '' }]}
        />
      }
    >
      <SelectComponent {...props} />
    </Suspense>
  );
};

export default Select;
