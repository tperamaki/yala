import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantUpdateManyMutationInputSchema } from '../inputTypeSchemas/RestaurantUpdateManyMutationInputSchema';
import { RestaurantUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RestaurantUncheckedUpdateManyInputSchema';
import { RestaurantWhereInputSchema } from '../inputTypeSchemas/RestaurantWhereInputSchema';

export const RestaurantUpdateManyArgsSchema: z.ZodType<Prisma.RestaurantUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RestaurantUpdateManyMutationInputSchema,
        RestaurantUncheckedUpdateManyInputSchema,
      ]),
      where: RestaurantWhereInputSchema.optional(),
    })
    .strict();

export default RestaurantUpdateManyArgsSchema;
