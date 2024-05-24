import { z } from 'zod';

export const Restaurant = z.object({
  id: z.string().uuid(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  address: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string().date().or(z.null()),
  createdBy: z.string(),
  modifiedBy: z.string().date().or(z.null()),
  averageRating: z.number(),
  ratings: z.number(),
});

export const Restaurants = z.array(Restaurant);

export type RestaurantT = z.infer<typeof Restaurant>;
