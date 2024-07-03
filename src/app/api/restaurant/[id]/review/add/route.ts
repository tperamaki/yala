import { addReview, getReviews } from '@/services/review';
import { NextResponse } from 'next/server';

type Params = {
  id: string;
};

/**
 * @swagger
 * /api/restaurant/{id}/review/add:
 *   post:
 *     description: Adds or updates a review for a restaurant by ID by the user
 *     responses:
 *       200:
 *         description: Returns somethings
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: integer
 *                 description: Rating of the review
 *                 required: true
 */
export const POST = async (request: Request, context: { params: Params }) => {
  try {
    const formData = new FormData();
    formData.append('restaurantId', context.params.id);
    formData.append('rating', (await request.json()).rating);
    return NextResponse.json(await addReview(null, formData));
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
