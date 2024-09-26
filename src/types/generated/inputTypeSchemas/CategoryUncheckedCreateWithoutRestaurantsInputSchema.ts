import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryUncheckedCreateWithoutRestaurantsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutRestaurantsInput> =
  z
    .object({
      id: z.number().int().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string().optional().nullable(),
    })
    .strict();

export default CategoryUncheckedCreateWithoutRestaurantsInputSchema;
