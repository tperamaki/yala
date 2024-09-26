import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantWhereInputSchema } from '../inputTypeSchemas/RestaurantWhereInputSchema'
import { RestaurantOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RestaurantOrderByWithAggregationInputSchema'
import { RestaurantScalarFieldEnumSchema } from '../inputTypeSchemas/RestaurantScalarFieldEnumSchema'
import { RestaurantScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RestaurantScalarWhereWithAggregatesInputSchema'

export const RestaurantGroupByArgsSchema: z.ZodType<Prisma.RestaurantGroupByArgs> = z.object({
  where: RestaurantWhereInputSchema.optional(),
  orderBy: z.union([ RestaurantOrderByWithAggregationInputSchema.array(),RestaurantOrderByWithAggregationInputSchema ]).optional(),
  by: RestaurantScalarFieldEnumSchema.array(),
  having: RestaurantScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RestaurantGroupByArgsSchema;
