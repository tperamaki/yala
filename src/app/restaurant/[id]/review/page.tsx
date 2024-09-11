'use client';

import BackArrow from '@/components/BackArrow';
import { AddReviewForm } from '@/components/Form';
import { useGetRestaurant } from '@/hooks/RestaurantHook';
import { useUser } from '@auth0/nextjs-auth0/client';

const ReviewRestaurantPage = ({ params }: { params: { id: string } }) => {
  const restaurantId = parseInt(params.id, 10);
  const {
    data,
    isLoading: isLoadingRestaurant,
    isError: isErrorRestaurant,
  } = useGetRestaurant(restaurantId);
  const { user, error: userError, isLoading: isLoadingUser } = useUser();

  const isLoading = isLoadingRestaurant || isLoadingUser;
  const isError = isErrorRestaurant || userError;

  const review =
    data &&
    data.reviews.find((review) => user && user.sub === review.createdBy);

  return (
    <main className="flex min-h-screen flex-col p-2">
      <BackArrow href={`/restaurant/${restaurantId}`} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {!data && <p>Restaurant was not found.</p>}
      {!user && <p>User was not found.</p>}
      {!isLoading && !isError && data && user && (
        <AddReviewForm restaurantId={restaurantId} review={review} />
      )}
    </main>
  );
};

export default ReviewRestaurantPage;
