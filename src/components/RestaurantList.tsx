import RestaurantCard from './RestaurantCard';
import { getRestaurants } from '@/services/restaurants';

const RestaurantList = async () => {
  const data = await getRestaurants();

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Restaurants</h2>
      {data.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

export default RestaurantList;
