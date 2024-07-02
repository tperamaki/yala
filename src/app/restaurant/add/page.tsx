import BackArrow from '@/components/BackArrow';
import { AddRestaurantForm } from '@/components/Form';

const AddRestaurantPage = () => {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <BackArrow href="/restaurant" />
      <AddRestaurantForm />
    </main>
  );
};

export default AddRestaurantPage;
