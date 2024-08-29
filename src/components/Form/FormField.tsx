import type { HTMLInputTypeAttribute } from 'react';
import Select from '../Select';
import type { SelectProps } from '../Select';
import ImagePicker from '../ImagePicker';
import type { ImagePickerProps } from '../ImagePicker';

type FormRowProps = {
  error?: string;
  label: string;
  name: string;
  children: React.ReactNode;
};

type FormFieldProps = {
  error?: string;
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

type ImageFieldProps = {
  error: FormFieldProps['error'];
  label: FormFieldProps['label'];
} & ImagePickerProps;

export const FormRow = ({ error, label, name, children }: FormRowProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      {children}
      {error && (
        <p
          aria-live="polite"
          className="text-red-500"
          data-testid={`${name}-error`}
          id={`${name}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

const FormField = ({
  error,
  id,
  label,
  name,
  type,
  required,
}: FormFieldProps) => {
  return (
    <FormRow error={error} label={label} name={name}>
      <input
        aria-invalid={!!error}
        aria-errormessage={`${name}-error`}
        type={type}
        id={id}
        name={name}
        className="appearance-none rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-gray-200 dark:border-slate-700 dark:text-slate-700 dark:focus:ring-slate-950"
        required={required}
      />
    </FormRow>
  );
};

export const NumberField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type="number" />
);

export const SelectField = ({
  error,
  id,
  label,
  name,
  options,
}: SelectFieldProps) => (
  <FormRow error={error} label={label} name={name}>
    <Select id={id} name={name} options={options} />
  </FormRow>
);

export const ImageField = ({ error, id, label, name }: ImageFieldProps) => (
  <FormRow error={error} label={label} name={name}>
    <ImagePicker id={id} name={name} />
  </FormRow>
);

export const TextField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type="text" />
);
