'use client';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: ButtonVariant;
  disabled?: boolean;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    'bg-red-900 border-red-900 bg-red-100 text-white dark:bg-red-100 dark:border-red-100 dark:text-red-900',
  secondary:
    'border-red-900 text-red-900 bg-transparent dark:border-red-100 dark:text-red-100',
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
