import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './CategoriesOnRestaurantsUncheckedUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.RestaurantUncheckedUpdateWithoutReviewsInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
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
      categories: z
        .lazy(
          () =>
            CategoriesOnRestaurantsUncheckedUpdateManyWithoutRestaurantNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default RestaurantUncheckedUpdateWithoutReviewsInputSchema;
