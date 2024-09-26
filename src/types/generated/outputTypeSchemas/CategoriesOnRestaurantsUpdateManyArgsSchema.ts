import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsUpdateManyMutationInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsUpdateManyMutationInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsUncheckedUpdateManyInputSchema';
import { CategoriesOnRestaurantsWhereInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereInputSchema';

export const CategoriesOnRestaurantsUpdateManyArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateManyArgs> =
  z
    .object({
      data: z.union([
        CategoriesOnRestaurantsUpdateManyMutationInputSchema,
        CategoriesOnRestaurantsUncheckedUpdateManyInputSchema,
      ]),
      where: CategoriesOnRestaurantsWhereInputSchema.optional(),
    })
    .strict();

export default CategoriesOnRestaurantsUpdateManyArgsSchema;
