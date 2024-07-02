'use client';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    'bg-red-100 border-red-100 dark:bg-red-900 dark:border-red-900 hover:bg-red-300 hover:dark:bg-red-700 hover:border-red-300 hover:dark:border-red-700',
  secondary:
    'border-red-100 bg-transparent dark:border-red-900 hover:bg-red-300 hover:border-red-300 hover:dark:bg-red-700 hover:dark:border-red-700',
};

const Button = ({
  children,
  type,
  disabled,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button
      className={`${variantClassNames[variant]} max-w-max rounded-md border-2 p-2 font-bold disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
