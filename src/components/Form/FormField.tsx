import type { HTMLInputTypeAttribute } from 'react';

type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
};

const FormField = ({ id, label, name, type }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        className="dark:text-slate-800 p-2 rounded-md border border-gray-300 dark:border-slate-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-slate"
      />
    </div>
  );
};

export const NumberField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type="number" />
);

export const TextField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type="text" />
);
