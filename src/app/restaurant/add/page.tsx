import { AddRestaurantForm, Form, TextField } from '@/components/Form';
import { addRestaurant } from '@/services/restaurants';

const AddRestaurantPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AddRestaurantForm />
    </main>
  );
};

export default AddRestaurantPage;
