import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateManyRestaurantInputSchema } from './CategoriesOnRestaurantsCreateManyRestaurantInputSchema';

export const CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoriesOnRestaurantsCreateManyRestaurantInputSchema),z.lazy(() => CategoriesOnRestaurantsCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema;
