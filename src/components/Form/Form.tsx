import { ClearButton, SubmitButton } from './Buttons';

type FormProps = {
  action: (formData: FormData) => void;
  children: React.ReactNode;
  label: string;
};

const Form = ({ action, children, label }: FormProps) => {
  return (
    <form
      action={action}
      aria-label={label}
      className="max-w-screen-md flex flex-col p-8 gap-4 justify-center w-full"
    >
      <h2 className="text-xl text-center">{label}</h2>
      {children}
      <div className="flex flex-row gap-4 justify-end">
        <ClearButton />
        <SubmitButton />
      </div>
    </form>
  );
};

export default Form;
