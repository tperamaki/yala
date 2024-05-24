import { Restaurants } from '@/types/Restaurant';

export const getRestaurants = async () => {
  const res = await fetch('http://localhost:3000/api/restaurants');

  if (!res.ok) {
    throw new Error('Failed to fetch restaurants');
  }

  const data = await res.json();
  return Restaurants.parseAsync(data);
};
