'use client';
import {
  useTransition,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'disabled';

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
  disabled:
    'bg-gray-300 border-gray-300 text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500',
};

const Button = ({ children, type, variant = 'primary' }: ButtonProps) => {
  return (
    <button
      className={`${variantClassNames[variant]} max-w-max rounded-md border-2 p-2 font-bold`}
      type={type}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  );
};

export default Button;
