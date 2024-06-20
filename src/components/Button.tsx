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
    'bg-red-900 border-red-900 bg-red-100 text-white dark:bg-red-100 dark:border-red-100 dark:text-red-900 hover:bg-red-700 hover:dark:bg-red-300 hover:border-red-700 hover:dark:border-red-300',
  secondary:
    'border-red-900 text-red-900 bg-transparent dark:border-red-100 dark:text-red-100 hover:text-red-700 hover:dark:text-red-300 hover:border-red-700 hover:dark:border-red-300',
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
