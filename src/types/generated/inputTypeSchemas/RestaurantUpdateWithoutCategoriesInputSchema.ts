import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ReviewUpdateManyWithoutRestaurantNestedInputSchema } from './ReviewUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantUpdateWithoutCategoriesInput> =
  z
    .object({
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      reviews: z
        .lazy(() => ReviewUpdateManyWithoutRestaurantNestedInputSchema)
        .optional(),
    })
    .strict();

export default RestaurantUpdateWithoutCategoriesInputSchema;
