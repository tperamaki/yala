import { addRestaurant, getRestaurants } from '@/services/restaurants';
import { NextResponse } from 'next/server';

export const GET = async () => {
  return getRestaurants()
    .then(NextResponse.json)
    .catch((error) => {
      console.error(error);
      return NextResponse.error();
    });
};
