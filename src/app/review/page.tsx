import { Form, NumberField, Select, TextField } from '@/components/Form';
import { getRestaurants } from '@/services/restaurants';
import { addReview } from '@/services/review';

const ReviewPage = async () => {
  const restaurants = await getRestaurants();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Form action={addReview} label="Add review">
        <Select id="restaurant" label="Restaurant" name="restaurant">
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </Select>
        <NumberField id="rating" label="Rating" name="rating" required />
      </Form>
    </main>
  );
};

export default ReviewPage;
