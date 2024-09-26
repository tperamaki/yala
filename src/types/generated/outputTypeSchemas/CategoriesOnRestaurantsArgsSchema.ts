import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsSelectSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsSelectSchema';
import { CategoriesOnRestaurantsIncludeSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsIncludeSchema';

export const CategoriesOnRestaurantsArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsDefaultArgs> =
  z
    .object({
      select: z.lazy(() => CategoriesOnRestaurantsSelectSchema).optional(),
      include: z.lazy(() => CategoriesOnRestaurantsIncludeSchema).optional(),
    })
    .strict();

export default CategoriesOnRestaurantsArgsSchema;
