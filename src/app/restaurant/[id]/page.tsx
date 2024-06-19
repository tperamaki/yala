'use client';

import RestaurantCard from '@/components/RestaurantCard';
import { useGetRestaurant } from '@/hooks/RestaurantHook';
import Link from 'next/link';

const RestaurantsPage = (props: { params: { id: string } }) => {
  const restaurantId = parseInt(props.params.id, 10);
  const { data, isLoading, isError } = useGetRestaurant(restaurantId);
  return (
    <main className="m-24 flex min-h-screen flex-col">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {!data && <p>Restaurant was not found.</p>}
      {!isLoading && !isError && data && (
        <>
          <RestaurantCard {...data} />
          <Link
            href={`/restaurant/${restaurantId}/review`}
            className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Add a review
          </Link>
        </>
      )}
    </main>
  );
};

export default RestaurantsPage;
