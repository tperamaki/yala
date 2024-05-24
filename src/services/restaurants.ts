import 'server-only';

import mockRestaurants from '@/mocks/restaurants';
import { Restaurants } from '@/types/Restaurant';

export const getRestaurants = async () => {
  return Restaurants.parseAsync(mockRestaurants);
};
