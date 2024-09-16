import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable()
}).strict();

export default CategoryCreateManyInputSchema;
