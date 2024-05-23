import { Restaurants } from '@/types/Restaurant';

export async function getRestaurants() {
  const res = await fetch('http://localhost:3000/restaurants/api');

  if (!res.ok) {
    throw new Error('Failed to fetch restaurants');
  }

  const data = await res.json();
  return Restaurants.parseAsync(data);
}
