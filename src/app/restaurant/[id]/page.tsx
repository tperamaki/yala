'use client';

import BackArrow from '@/components/BackArrow';
import RestaurantCard from '@/components/RestaurantCard';
import { useGetRestaurant } from '@/hooks/RestaurantHook';
import Link from 'next/link';

const RestaurantsPage = (props: { params: { id: string } }) => {
  const restaurantId = parseInt(props.params.id, 10);
  const { data, isLoading, isError } = useGetRestaurant(restaurantId);
  return (
    <main className="flex min-h-screen flex-col p-2">
      <BackArrow href="/restaurant" />
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
