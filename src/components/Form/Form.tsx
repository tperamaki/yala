import { ClearButton, SubmitButton } from './Buttons';

type FormProps = {
  action: (formData: FormData) => void;
  children: React.ReactNode;
};

const Form = ({ action, children }: FormProps) => {
  return (
    <form
      action={action}
      className="max-w-screen-md flex flex-col p-8 gap-4 justify-center w-full"
    >
      {children}
      <div className="flex flex-row gap-4 justify-end">
        <ClearButton />
        <SubmitButton />
      </div>
    </form>
  );
};

export default Form;
