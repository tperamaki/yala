import RestaurantCard from './RestaurantCard';
import { getRestaurants } from '@/api/restaurants';

async function RestaurantList() {
  const { restaurants } = await getRestaurants();
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Restaurants</h2>
      {restaurants.map(
        (d: {
          averageRating: number;
          id: number;
          name: string;
          ratings: number;
        }) => {
          return <RestaurantCard {...d} key={d.id} />;
        },
      )}
    </div>
  );
}

export default RestaurantList;
