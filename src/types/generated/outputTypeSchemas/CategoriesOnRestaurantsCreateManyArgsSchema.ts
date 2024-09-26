import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsCreateManyInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsCreateManyInputSchema'

export const CategoriesOnRestaurantsCreateManyArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateManyArgs> = z.object({
  data: z.union([ CategoriesOnRestaurantsCreateManyInputSchema,CategoriesOnRestaurantsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CategoriesOnRestaurantsCreateManyArgsSchema;
