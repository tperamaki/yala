import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RestaurantCountOutputTypeSelectSchema: z.ZodType<Prisma.RestaurantCountOutputTypeSelect> =
  z
    .object({
      categories: z.boolean().optional(),
      reviews: z.boolean().optional(),
    })
    .strict();

export default RestaurantCountOutputTypeSelectSchema;
