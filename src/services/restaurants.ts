'use server';
import 'server-only';

import mockRestaurants from '@/mocks/restaurants';
import { Restaurants } from '@/types/Restaurant';

export const getRestaurants = async () => {
  return Restaurants.parseAsync(mockRestaurants);
};

export const addRestaurant = (formData: FormData) => {
  const payload = {
    name: formData.get('name'),
    description: formData.get('description'),
    address: formData.get('address'),
    rating: formData.get('rating'),
  };

  console.log('add restaurant', payload);
};
