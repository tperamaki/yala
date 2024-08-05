import { getRestaurants } from '@/services/restaurant';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/restaurant:
 *   get:
 *     description: Returns a list of restaurants
 *     responses:
 *       200:
 *         description: A list of restaurants
 */
export const GET = async () => {
  try {
    return NextResponse.json(await getRestaurants());
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
