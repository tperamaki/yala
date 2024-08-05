import { getReviews } from '@/services/review';
import { NextResponse } from 'next/server';

type Params = {
  id: string;
};

/**
 * @swagger
 * /api/restaurant/{id}/review:
 *   get:
 *     description: Returns an array of reviews for a restaurant by ID
 *     responses:
 *       200:
 *         description: Returns an array of reviews for a restaurant by ID or empty array if no reviews or restaurant is missing
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 */
export const GET = async (_request: Request, context: { params: Params }) => {
  try {
    return NextResponse.json(await getReviews(parseInt(context.params.id, 10)));
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
