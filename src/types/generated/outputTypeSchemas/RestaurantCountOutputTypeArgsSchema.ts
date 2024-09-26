import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantCountOutputTypeSelectSchema } from './RestaurantCountOutputTypeSelectSchema';

export const RestaurantCountOutputTypeArgsSchema: z.ZodType<Prisma.RestaurantCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RestaurantCountOutputTypeSelectSchema).nullish(),
}).strict();

export default RestaurantCountOutputTypeSelectSchema;
