import { z } from 'zod';

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  restaurantId: z.number().int(),
  rating: z.number().int(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
  comment: z.string(),
  imageId: z.string(),
});

export type Review = z.infer<typeof ReviewSchema>;

export default ReviewSchema;
