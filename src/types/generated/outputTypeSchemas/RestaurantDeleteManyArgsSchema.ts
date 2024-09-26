import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantWhereInputSchema } from '../inputTypeSchemas/RestaurantWhereInputSchema'

export const RestaurantDeleteManyArgsSchema: z.ZodType<Prisma.RestaurantDeleteManyArgs> = z.object({
  where: RestaurantWhereInputSchema.optional(),
}).strict() ;

export default RestaurantDeleteManyArgsSchema;
