import StyledLink from './StyledLink';

const Header = () => {
  return (
    <header className="mb-4">
      <nav className="flex flex-row justify-between bg-red-100 p-4 dark:bg-red-900">
        <h1 className="text-center text-xl">
          <StyledLink href="/" variant="primary">
            Yet Another Lunch App
          </StyledLink>
        </h1>
        <div className="flex gap-4">
          <StyledLink href="/restaurant/add" variant="primary">
            Add restaurant
          </StyledLink>
        </div>
        <a
          href="/api/auth/logout"
          className="text-red-900 hover:text-red-700 dark:text-white hover:dark:text-red-300"
        >
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Header;
