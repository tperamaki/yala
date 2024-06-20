'use client';

import RestaurantCard from '@/components/RestaurantCard';
import { useGetRestaurant } from '@/hooks/RestaurantHook';
import Link from 'next/link';

const RestaurantsPage = (props: { params: { id: string } }) => {
  const restaurantId = parseInt(props.params.id, 10);
  const { data, isLoading, isError } = useGetRestaurant(restaurantId);
  return (
    <main className="flex min-h-screen flex-col p-2">
      <Link
        href="/restaurant"
        className="mb-4 text-black hover:text-red-500 dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block h-6 w-6"
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
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {!data && <p>Restaurant was not found.</p>}
      {!isLoading && !isError && data && (
        <>
          <RestaurantCard {...data} />
          <Link
            href={`/restaurant/${restaurantId}/review`}
            className="mt-4 rounded bg-red-100 px-4 py-2 font-bold text-black hover:bg-red-300 dark:bg-red-900 dark:text-white hover:dark:bg-red-700"
          >
            Add a review
          </Link>
        </>
      )}
    </main>
  );
};

export default RestaurantsPage;
