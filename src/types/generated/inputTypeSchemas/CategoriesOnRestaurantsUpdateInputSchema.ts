import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema } from './CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema';
import { RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema';

export const CategoriesOnRestaurantsUpdateInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateInput> =
  z
    .object({
      assignedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      assignedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      category: z
        .lazy(
          () => CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema,
        )
        .optional(),
      restaurant: z
        .lazy(
          () => RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default CategoriesOnRestaurantsUpdateInputSchema;
