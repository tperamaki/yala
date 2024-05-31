import { Form, NumberField, Select, TextField } from '@/components/Form';
import { getRestaurants } from '@/services/restaurants';
import { addReview } from '@/services/review';
import { Restaurant } from '@/types/generated';
import { use } from 'react';

const ReviewSelect = (props: { restaurants: Promise<Restaurant[]> }) => {
  'use client';
  const restaurants = use(props.restaurants);
  return (
    <Select id="restaurant" label="Restaurant" name="restaurant">
      {restaurants.map((restaurant) => (
        <option key={restaurant.id} value={restaurant.id}>
          {restaurant.name}
        </option>
      ))}
    </Select>
  );
};

const ReviewPage = () => {
  const restaurants = getRestaurants();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Form
        action={addReview}
        label="Add review"
        successMessage="Review added!"
      >
        <ReviewSelect restaurants={restaurants} />
        <NumberField id="rating" label="Rating" name="rating" required />
      </Form>
    </main>
  );
};

export default ReviewPage;
