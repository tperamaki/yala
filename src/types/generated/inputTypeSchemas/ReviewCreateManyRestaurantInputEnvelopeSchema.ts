import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCreateManyRestaurantInputSchema } from './ReviewCreateManyRestaurantInputSchema';

export const ReviewCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyRestaurantInputSchema),z.lazy(() => ReviewCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReviewCreateManyRestaurantInputEnvelopeSchema;
