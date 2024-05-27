import Button from '../Button';
import type { ButtonProps } from '../Button';

export const ClearButton = (props: Omit<ButtonProps, 'children' | 'type'>) => {
  return (
    <Button
      {...props}
      className="bg-neutral-200 dark:bg-neutral-800"
      type="reset"
    >
      Clear
    </Button>
  );
};

export const SubmitButton = (props: Omit<ButtonProps, 'children' | 'type'>) => {
  return (
    <Button
      {...props}
      className="bg-red-100 dark:bg-red-900 dark:text-white"
      type="submit"
    >
      Submit
    </Button>
  );
};
