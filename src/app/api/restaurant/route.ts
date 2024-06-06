import { getRestaurants } from '@/services/restaurants';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    return NextResponse.json(await getRestaurants());
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
