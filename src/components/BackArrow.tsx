import Link from 'next/link';

const BackArrow = ({ href }: { href: string }) => (
  <Link href={href} className="mb-4 hover:text-red-300 hover:dark:text-red-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block h-6 w-6 rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </Link>
);

export default BackArrow;
