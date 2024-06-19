import { AddReviewForm } from '@/components/Form';

const ReviewRestaurantPage = async ({ params }: { params: { id: string } }) => {
  const restaurantId = parseInt(params.id, 10);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AddReviewForm restaurantId={restaurantId} />
    </main>
  );
};

export default ReviewRestaurantPage;
