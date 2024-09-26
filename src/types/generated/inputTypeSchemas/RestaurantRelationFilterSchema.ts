import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantRelationFilterSchema: z.ZodType<Prisma.RestaurantRelationFilter> =
  z
    .object({
      is: z.lazy(() => RestaurantWhereInputSchema).optional(),
      isNot: z.lazy(() => RestaurantWhereInputSchema).optional(),
    })
    .strict();

export default RestaurantRelationFilterSchema;
