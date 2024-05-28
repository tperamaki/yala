import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: ButtonVariant;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    'bg-red-900 border-red-900 bg-red-100 text-white dark:bg-red-100 dark:border-red-100 dark:text-red-900',
  secondary:
    'border-red-900 text-red-900 bg-transparent dark:border-red-100 dark:text-red-100',
};

const Button = ({
  children,
  className = '',
  type,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${variantClassNames[variant]} border-2 font-bold p-2 rounded-md max-w-max`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
