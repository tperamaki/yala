import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ToastProvider from '@/components/ToastProvider';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yet Another Lunch App',
  description: 'Rate your favorite lunch spots and find new ones.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Header />
          <ToastProvider>{children}</ToastProvider>
        </body>
      </UserProvider>
    </html>
  );
};

export default RootLayout;
