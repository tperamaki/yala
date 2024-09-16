import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewIncludeSchema } from '../inputTypeSchemas/ReviewIncludeSchema'
import { ReviewWhereInputSchema } from '../inputTypeSchemas/ReviewWhereInputSchema'
import { ReviewOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReviewOrderByWithRelationInputSchema'
import { ReviewWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewWhereUniqueInputSchema'
import { ReviewScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewScalarFieldEnumSchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
  restaurantId: z.boolean().optional(),
  rating: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  comment: z.boolean().optional(),
  imageId: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export const ReviewFindManyArgsSchema: z.ZodType<Prisma.ReviewFindManyArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewScalarFieldEnumSchema,ReviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ReviewFindManyArgsSchema;
