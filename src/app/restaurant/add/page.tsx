import BackArrow from '@/components/BackArrow';
import { AddRestaurantForm } from '@/components/Form';
import { getCategories } from '@/services/category';

const AddRestaurantPage = () => {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <BackArrow href="/restaurant" />
      <AddRestaurantForm getCategories={getCategories()} />
    </main>
  );
};

export default AddRestaurantPage;
