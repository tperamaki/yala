import { SubmitButton } from './Buttons';

type FormProps = {
  action: (payload: FormData) => void;
  children: React.ReactNode;
  label: string;
};

const Form = ({ action, children, label }: FormProps) => {
  return (
    <form
      action={action}
      aria-label={label}
      className="flex w-full max-w-screen-md flex-col justify-center gap-4 p-8"
    >
      <h2 className="text-center text-xl">{label}</h2>
      {children}
      <div className="flex flex-row justify-end gap-4">
        <SubmitButton />
      </div>
    </form>
  );
};

export default Form;
