import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row bg-red-100 p-4 dark:bg-red-900">
        <h1 className="basis-1/3 text-left text-xl">
          <Link href="/restaurant" className="hover:font-bold">
            Yet Another Lunch App
          </Link>
        </h1>
        <div className="basis-1/3 text-center">
          <Link href="/restaurant/add" className="hover:font-bold">
            Add restaurant
          </Link>
        </div>
        <a
          href="/api/auth/logout"
          className="basis-1/3 text-right hover:font-bold"
        >
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Header;
