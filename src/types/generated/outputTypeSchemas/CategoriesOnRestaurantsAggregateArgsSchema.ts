import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsWhereInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereInputSchema';
import { CategoriesOnRestaurantsOrderByWithRelationInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsOrderByWithRelationInputSchema';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereUniqueInputSchema';

export const CategoriesOnRestaurantsAggregateArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsAggregateArgs> =
  z
    .object({
      where: CategoriesOnRestaurantsWhereInputSchema.optional(),
      orderBy: z
        .union([
          CategoriesOnRestaurantsOrderByWithRelationInputSchema.array(),
          CategoriesOnRestaurantsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CategoriesOnRestaurantsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default CategoriesOnRestaurantsAggregateArgsSchema;
