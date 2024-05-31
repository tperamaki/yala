import { Form, TextField } from '@/components/Form';
import { addRestaurant } from '@/services/restaurants';

const AddRestaurantPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Form
        action={addRestaurant}
        label="Add restaurant"
        successMessage="Restaurant added!"
      >
        <TextField label="Name" id="name" name="name" required />
      </Form>
    </main>
  );
};

export default AddRestaurantPage;
