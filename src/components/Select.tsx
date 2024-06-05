import { Suspense, use } from 'react';

export type SelectProps = {
  disabled?: boolean;
  id: string;
  name: string;
  options: { key: number | string; label: string; value: number | string }[];
};

export type SelectAsyncProps = {
  options: Promise<SelectProps['options']>;
} & Omit<SelectProps, 'options'>;

const Select = ({ disabled = false, id, name, options }: SelectProps) => {
  return (
    <select
      aria-disabled={disabled}
      disabled={disabled}
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

export const SelectAsync = (props: SelectAsyncProps) => {
  const useOptions = use(props.options);
  return <Select {...props} options={useOptions} />;
};

export const SelectAsyncWithSuspense = (props: SelectAsyncProps) => {
  return (
    <Suspense
      fallback={
        <Select
          disabled
          id={props.id}
          name={props.name}
          options={[{ key: 'fallback', label: 'Loading', value: '' }]}
        />
      }
    >
      <SelectAsync {...props} />
    </Suspense>
  );
};

export default Select;
