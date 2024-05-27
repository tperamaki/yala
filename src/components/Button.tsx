import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

const Button = ({ children, className = '', type }: ButtonProps) => {
  return (
    <button className={`${className} p-2 rounded-md max-w-max`} type={type}>
      {children}
    </button>
  );
};

export default Button;
