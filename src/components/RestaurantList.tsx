import RestaurantCard from './RestaurantCard';
import { getRestaurants } from '@/services/restaurants';

const RestaurantList = async () => {
  const data = await getRestaurants();

  return (
    <div className="py-4 max-w-screen-xl md:m-auto">
      <h2 className="text-xl mb-4">Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
