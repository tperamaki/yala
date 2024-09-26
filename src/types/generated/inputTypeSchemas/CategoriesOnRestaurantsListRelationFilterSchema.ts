import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsWhereInputSchema } from './CategoriesOnRestaurantsWhereInputSchema';

export const CategoriesOnRestaurantsListRelationFilterSchema: z.ZodType<Prisma.CategoriesOnRestaurantsListRelationFilter> =
  z
    .object({
      every: z.lazy(() => CategoriesOnRestaurantsWhereInputSchema).optional(),
      some: z.lazy(() => CategoriesOnRestaurantsWhereInputSchema).optional(),
      none: z.lazy(() => CategoriesOnRestaurantsWhereInputSchema).optional(),
    })
    .strict();

export default CategoriesOnRestaurantsListRelationFilterSchema;
