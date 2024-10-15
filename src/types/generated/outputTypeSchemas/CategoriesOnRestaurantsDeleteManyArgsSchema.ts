import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsWhereInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereInputSchema'

export const CategoriesOnRestaurantsDeleteManyArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsDeleteManyArgs> = z.object({
  where: CategoriesOnRestaurantsWhereInputSchema.optional(),
}).strict() ;

export default CategoriesOnRestaurantsDeleteManyArgsSchema;
