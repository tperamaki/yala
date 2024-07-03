import { getRestaurant } from '@/services/restaurants';
import { NextResponse } from 'next/server';

type Params = {
  id: string;
};

/**
 * @swagger
 * /api/restaurant/{id}:
 *   get:
 *     description: Returns a restaurant by ID
 *     responses:
 *       200:
 *         description: Returns a restaurant or null
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 */
export const GET = async (_request: Request, context: { params: Params }) => {
  try {
    return NextResponse.json(
      await getRestaurant(parseInt(context.params.id, 10)),
    );
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
