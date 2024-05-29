import RestaurantCard from './RestaurantCard';
import { getRestaurants } from '@/services/restaurants';

const RestaurantList = async () => {
  const data = await getRestaurants();

  return (
    <div className="max-w-screen-xl py-4 md:m-auto">
      <h2 className="mb-4 text-xl">Restaurants</h2>
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard {...restaurant} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RestaurantList;
