import { z } from 'zod';

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.coerce.date(),
  createdBy: z.string().nullable(),
});

export type Category = z.infer<typeof CategorySchema>;

export default CategorySchema;
