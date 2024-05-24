import { z } from 'zod';

export const Restaurant = z.object({
  id: z.string().uuid(),
  name: z.string(),
  categories: z.array(z.string()),
  description: z.string().optional(),
  address: z.string().optional(),
  createdAt: z.string(),
  modifiedAt: z.string().date().optional(),
  createdBy: z.string(),
  modifiedBy: z.string().date().optional(),
  averageRating: z.number().min(1).max(5),
  amountOfReviews: z.number(),
});

export const Restaurants = z.array(Restaurant);

export type RestaurantT = z.infer<typeof Restaurant>;
