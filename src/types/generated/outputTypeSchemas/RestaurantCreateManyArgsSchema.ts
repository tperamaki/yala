import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantCreateManyInputSchema } from '../inputTypeSchemas/RestaurantCreateManyInputSchema';

export const RestaurantCreateManyArgsSchema: z.ZodType<Prisma.RestaurantCreateManyArgs> =
  z
    .object({
      data: z.union([
        RestaurantCreateManyInputSchema,
        RestaurantCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RestaurantCreateManyArgsSchema;
