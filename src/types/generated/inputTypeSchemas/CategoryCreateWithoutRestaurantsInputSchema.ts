import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryCreateWithoutRestaurantsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutRestaurantsInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable()
}).strict();

export default CategoryCreateWithoutRestaurantsInputSchema;
