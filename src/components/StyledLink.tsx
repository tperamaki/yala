import Link from 'next/link';
import { ReactNode } from 'react';
import { Url } from 'url';

interface StyledLinkProps {
  href: string | Url;
  variant: 'primary' | 'secondary';
  children: ReactNode;
}

const StyledLink = ({ href, variant, children }: StyledLinkProps) => {
  return (
    <Link
      href={href}
      className={
        variant === 'primary'
          ? 'text-red-900 dark:text-white hover:text-red-700 hover:dark:text-red-300'
          : 'text-red-700 dark:text-red-300 hover:text-red-500'
      }
    >
      {children}
    </Link>
  );
};

export default StyledLink;
