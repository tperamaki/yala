'use client';
import { toast } from 'react-toastify';
import { ClearButton, SubmitButton } from './Buttons';

type FormProps = {
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
  label: string;
  successMessage: string;
};

const Form = ({ action, children, label, successMessage }: FormProps) => {
  return (
    <form
      action={async (formData: FormData) => {
        await action(formData);
        toast.success(successMessage);
      }}
      aria-label={label}
      className="flex w-full max-w-screen-md flex-col justify-center gap-4 p-8"
    >
      <h2 className="text-center text-xl">{label}</h2>
      {children}
      <div className="flex flex-row justify-end gap-4">
        <ClearButton />
        <SubmitButton />
      </div>
    </form>
  );
};

export default Form;
