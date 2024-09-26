import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantSelectSchema } from '../inputTypeSchemas/RestaurantSelectSchema';
import { RestaurantIncludeSchema } from '../inputTypeSchemas/RestaurantIncludeSchema';

export const RestaurantArgsSchema: z.ZodType<Prisma.RestaurantDefaultArgs> = z
  .object({
    select: z.lazy(() => RestaurantSelectSchema).optional(),
    include: z.lazy(() => RestaurantIncludeSchema).optional(),
  })
  .strict();

export default RestaurantArgsSchema;
