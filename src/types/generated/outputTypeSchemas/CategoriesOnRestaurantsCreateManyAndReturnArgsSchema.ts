import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsCreateManyInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsCreateManyInputSchema';

export const CategoriesOnRestaurantsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        CategoriesOnRestaurantsCreateManyInputSchema,
        CategoriesOnRestaurantsCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default CategoriesOnRestaurantsCreateManyAndReturnArgsSchema;
