import RestaurantList from '@/components/RestaurantList';

export default async function RestaurantsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <RestaurantList />
    </main>
  );
}
