import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantIncludeSchema } from '../inputTypeSchemas/RestaurantIncludeSchema'
import { RestaurantWhereUniqueInputSchema } from '../inputTypeSchemas/RestaurantWhereUniqueInputSchema'
import { CategoriesOnRestaurantsFindManyArgsSchema } from "../outputTypeSchemas/CategoriesOnRestaurantsFindManyArgsSchema"
import { ReviewFindManyArgsSchema } from "../outputTypeSchemas/ReviewFindManyArgsSchema"
import { RestaurantCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestaurantCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestaurantSelectSchema: z.ZodType<Prisma.RestaurantSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoriesOnRestaurantsFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestaurantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RestaurantFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RestaurantFindUniqueOrThrowArgs> = z.object({
  select: RestaurantSelectSchema.optional(),
  include: RestaurantIncludeSchema.optional(),
  where: RestaurantWhereUniqueInputSchema,
}).strict() ;

export default RestaurantFindUniqueOrThrowArgsSchema;
