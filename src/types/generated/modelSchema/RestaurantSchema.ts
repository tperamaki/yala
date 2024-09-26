import { z } from 'zod';

/////////////////////////////////////////
// RESTAURANT SCHEMA
/////////////////////////////////////////

export const RestaurantSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
})

export type Restaurant = z.infer<typeof RestaurantSchema>

export default RestaurantSchema;
