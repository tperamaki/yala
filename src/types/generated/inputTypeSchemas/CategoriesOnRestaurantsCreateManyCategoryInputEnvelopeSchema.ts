import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateManyCategoryInputSchema } from './CategoriesOnRestaurantsCreateManyCategoryInputSchema';

export const CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateManyCategoryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => CategoriesOnRestaurantsCreateManyCategoryInputSchema),
        z
          .lazy(() => CategoriesOnRestaurantsCreateManyCategoryInputSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema;
