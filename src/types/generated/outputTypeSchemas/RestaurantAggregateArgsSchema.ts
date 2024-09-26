import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantWhereInputSchema } from '../inputTypeSchemas/RestaurantWhereInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from '../inputTypeSchemas/RestaurantOrderByWithRelationInputSchema';
import { RestaurantWhereUniqueInputSchema } from '../inputTypeSchemas/RestaurantWhereUniqueInputSchema';

export const RestaurantAggregateArgsSchema: z.ZodType<Prisma.RestaurantAggregateArgs> =
  z
    .object({
      where: RestaurantWhereInputSchema.optional(),
      orderBy: z
        .union([
          RestaurantOrderByWithRelationInputSchema.array(),
          RestaurantOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RestaurantWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RestaurantAggregateArgsSchema;
