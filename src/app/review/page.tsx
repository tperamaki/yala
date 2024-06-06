import { AddReviewForm } from '@/components/Form';
import { getRestaurants } from '@/services/restaurants';

const ReviewPage = async () => {
  const restaurantOptions = (async () => {
    const restaurants = await getRestaurants();
    return [
      { key: 'default', label: 'Please choose an option', value: '' },
      ...restaurants.map(({ id, name }) => ({
        key: id,
        label: name,
        value: id,
      })),
    ];
  })();

  return (
    <main className="flex min-h-screen flex-col">
      <AddReviewForm restaurantOptions={restaurantOptions} />
    </main>
  );
};

export default ReviewPage;
