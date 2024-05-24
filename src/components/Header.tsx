import StyledLink from './StyledLink';

const Header = () => {
  return (
    <div className="p-4 bg-red-100 dark:bg-red-900 flex flex-row justify-between">
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
    </div>
  );
};

export default Header;
