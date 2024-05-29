import { Form, NumberField, TextField } from '@/components/Form';
import { addRestaurant } from '@/services/restaurants';

const AddRestaurantPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Form action={addRestaurant} label="Add restaurant">
        <TextField label="Name" id="name" name="name" />
        <TextField label="Description" id="description" name="description" />
        <TextField label="Address" id="address" name="address" />
        <NumberField label="Rating" id="rating" name="rating" />
      </Form>
    </main>
  );
};

export default AddRestaurantPage;
