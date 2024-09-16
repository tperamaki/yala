import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsWhereInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereInputSchema'
import { CategoriesOnRestaurantsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsOrderByWithAggregationInputSchema'
import { CategoriesOnRestaurantsScalarFieldEnumSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsScalarFieldEnumSchema'
import { CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema'

export const CategoriesOnRestaurantsGroupByArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsGroupByArgs> = z.object({
  where: CategoriesOnRestaurantsWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOnRestaurantsOrderByWithAggregationInputSchema.array(),CategoriesOnRestaurantsOrderByWithAggregationInputSchema ]).optional(),
  by: CategoriesOnRestaurantsScalarFieldEnumSchema.array(),
  having: CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CategoriesOnRestaurantsGroupByArgsSchema;
