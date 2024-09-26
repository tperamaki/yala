import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RestaurantCreateManyInputSchema: z.ZodType<Prisma.RestaurantCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string()
}).strict();

export default RestaurantCreateManyInputSchema;
