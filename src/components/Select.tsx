import { Suspense, use } from 'react';

export type Option = {
  key: number | string;
  label: string;
  value: number | string;
};

export type SelectProps = {
  disabled?: boolean;
  id: string;
  name: string;
  options: Option[] | Promise<Option[]>;
  defaultValue: number | string;
};

const SelectComponent = ({
  disabled = false,
  id,
  name,
  options,
  defaultValue,
}: SelectProps) => {
  const useOptions = Array.isArray(options) ? options : use(options);
  return (
    <select
      aria-disabled={disabled}
      disabled={disabled}
      id={id}
      name={name}
      defaultValue={defaultValue}
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
          defaultValue={''}
        />
      }
    >
      <SelectComponent {...props} />
    </Suspense>
  );
};

export default Select;
