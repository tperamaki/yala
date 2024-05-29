import Button from '../Button';
import type { ButtonProps } from '../Button';

export const ClearButton = (props: Omit<ButtonProps, 'children' | 'type'>) => {
  return (
    <Button {...props} variant="secondary" type="reset">
      Clear
    </Button>
  );
};

export const SubmitButton = (props: Omit<ButtonProps, 'children' | 'type'>) => {
  return (
    <Button {...props} type="submit">
      Submit
    </Button>
  );
};
