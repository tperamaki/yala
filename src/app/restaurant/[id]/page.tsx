'use client';

import BackArrow from '@/components/BackArrow';
import RestaurantCard from '@/components/RestaurantCard';
import { useGetRestaurant } from '@/hooks/RestaurantHook';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const RestaurantsPage = (props: { params: { id: string } }) => {
  const restaurantId = parseInt(props.params.id, 10);
  const {
    data,
    isLoading: isLoadingRestaurant,
    isError: isErrorRestaurant,
  } = useGetRestaurant(restaurantId);
  const { user, error: userError, isLoading: isLoadingUser } = useUser();

  const isLoading = isLoadingRestaurant || isLoadingUser;
  const isError = isErrorRestaurant || userError;

  return (
    <main className="flex min-h-screen flex-col p-2">
      <BackArrow href="/restaurant" />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {!data && <p>Restaurant was not found.</p>}
      {!user && <p>User was not found.</p>}
      {!isLoading && !isError && data && user && (
        <>
          <RestaurantCard {...data} />
          <Link
            href={`/restaurant/${restaurantId}/review`}
            className="my-4 rounded bg-red-100 px-4 py-2 font-bold hover:bg-red-300 dark:bg-red-900 hover:dark:bg-red-700"
          >
            {data.reviews.some((review) => review.createdBy === user.sub)
              ? 'Update your review'
              : 'Add a review'}
          </Link>
          {data.reviews.map((review) => (
            <div
              key={review.createdBy}
              className="flex flex-row justify-between p-2 even:bg-stone-400 dark:even:bg-stone-600"
            >
              <p>Rating: {review.rating}</p>
              <p className="flex flex-col text-xs text-stone-700 dark:text-stone-300">
                {new Date(review.createdAt).toLocaleDateString()}
                {user.sub === review.createdBy ? (
                  <span className="text-red-700 dark:text-red-300">
                    Your review
                  </span>
                ) : null}
              </p>
            </div>
          ))}
        </>
      )}
    </main>
  );
};

export default RestaurantsPage;
