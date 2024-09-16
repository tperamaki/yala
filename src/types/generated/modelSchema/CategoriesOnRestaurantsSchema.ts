import { z } from 'zod';

/////////////////////////////////////////
// CATEGORIES ON RESTAURANTS SCHEMA
/////////////////////////////////////////

export const CategoriesOnRestaurantsSchema = z.object({
  categoryId: z.number().int(),
  restaurantId: z.number().int(),
  assignedAt: z.coerce.date(),
  assignedBy: z.string().nullable(),
})

export type CategoriesOnRestaurants = z.infer<typeof CategoriesOnRestaurantsSchema>

export default CategoriesOnRestaurantsSchema;
