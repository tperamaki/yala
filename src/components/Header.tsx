import StyledLink from './StyledLink';

const Header = () => {
  return (
    <header className="p-4 bg-red-100 dark:bg-red-900 flex flex-row justify-between">
      <nav>
        <StyledLink href="/" variant="primary">
          Home
        </StyledLink>
        <h1 className="text-xl text-center">
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
