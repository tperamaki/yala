import StyledLink from './StyledLink';

const Header = () => {
  return (
    <header className="mb-4">
      <nav className="flex flex-row justify-between bg-red-100 p-4 dark:bg-red-900">
        <StyledLink href="/" variant="primary">
          Home
        </StyledLink>
        <h1 className="text-center text-xl">
          <StyledLink href="/" variant="primary">
            Yet Another Lunch App
          </StyledLink>
        </h1>
        <StyledLink href="/review" variant="primary">
          Add review
        </StyledLink>
      </nav>
    </header>
  );
};

export default Header;
