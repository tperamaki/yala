'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import StyledLink from '@/components/StyledLink';

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <div></div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <p>Welcome {user.name}!</p>
          <br />
          <StyledLink href="/restaurants" variant="secondary">
            Restaurants
          </StyledLink>
        </div>
      </div>
    </main>
  );

  return;
};

export default Home;
