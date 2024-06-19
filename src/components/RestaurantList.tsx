import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { useGetRestaurants } from '@/hooks/RestaurantHook';
import Fuse from 'fuse.js';

const RestaurantList = () => {
  const { data, isLoading, isError } = useGetRestaurants();
  const [search, setSearch] = useState('');
  const fuse = new Fuse(data, {
    keys: ['name'],
    threshold: 0.4,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const restaurants = search
    ? fuse.search(search).map((result) => result.item)
    : data;

  return (
    <div className="max-w-screen-xl py-4">
      <h2 className="mb-4 text-xl">Restaurants</h2>
      <div className="mb-4">
        <input
          id="search"
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          placeholder="Search for a restaurant..."
          onChange={handleSearch}
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {!isLoading && !isError && (
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard {...restaurant} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default RestaurantList;
