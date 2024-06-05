import { AddReviewForm } from '@/components/Form';
import { getRestaurants } from '@/services/restaurants';

const ReviewPage = async () => {
  const restaurants = await getRestaurants();
  const restaurantOptions = [
    { key: 'default', label: 'Please choose an option', value: '' },
    ...restaurants.map((restaurant) => ({
      key: restaurant.id,
      label: restaurant.name,
      value: restaurant.id,
    })),
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <AddReviewForm restaurantOptions={restaurantOptions} />
    </main>
  );
};

export default ReviewPage;
