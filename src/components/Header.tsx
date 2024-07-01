import StyledLink from './StyledLink';

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row bg-red-100 p-4 dark:bg-red-900">
        <h1 className="basis-1/3 text-left text-xl">
          <StyledLink href="/restaurant" variant="primary">
            Yet Another Lunch App
          </StyledLink>
        </h1>
        <div className="basis-1/3 text-center">
          <StyledLink href="/restaurant/add" variant="primary">
            Add restaurant
          </StyledLink>
        </div>
        <a
          href="/api/auth/logout"
          className="basis-1/3 text-right hover:text-red-700 hover:dark:text-red-300"
        >
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Header;
