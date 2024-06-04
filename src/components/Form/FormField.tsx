import type { HTMLInputTypeAttribute } from 'react';

import Select from '../Select';
import type { SelectProps } from '../Select';

type FormRowProps = {
  label: string;
  name: string;
  children: React.ReactNode;
};

type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
};

type SelectFieldProps = {
  error: FormFieldProps['error'];
  label: FormFieldProps['label'];
} & SelectProps;

const inputClassNames =
  'appearance-none dark:focus:ring-slate rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-gray-200 dark:border-slate-700 dark:text-slate-800';

const FormRow = ({ label, name, children }: FormRowProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
};

const FormField = ({ id, label, name, type, required }: FormFieldProps) => {
  return (
    <FormRow label={label} name={name}>
      <input
        type={type}
        id={id}
        name={name}
        className={inputClassNames}
        required={required}
      />
    </FormRow>
  );
};

export const NumberField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type="number" />
);

export const TextField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type="text" />
);

export const SelectField = ({
  error,
  id,
  label,
  name,
  options,
}: SelectFieldProps) => (
  <FormRow error={error} label={label} name={name}>
    <Select id={id} name={name} className={inputClassNames} options={options} />
  </FormRow>
);
