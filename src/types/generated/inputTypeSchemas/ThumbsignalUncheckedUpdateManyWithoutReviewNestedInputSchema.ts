import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalCreateWithoutReviewInputSchema } from './ThumbsignalCreateWithoutReviewInputSchema';
import { ThumbsignalUncheckedCreateWithoutReviewInputSchema } from './ThumbsignalUncheckedCreateWithoutReviewInputSchema';
import { ThumbsignalCreateOrConnectWithoutReviewInputSchema } from './ThumbsignalCreateOrConnectWithoutReviewInputSchema';
import { ThumbsignalUpsertWithWhereUniqueWithoutReviewInputSchema } from './ThumbsignalUpsertWithWhereUniqueWithoutReviewInputSchema';
import { ThumbsignalCreateManyReviewInputEnvelopeSchema } from './ThumbsignalCreateManyReviewInputEnvelopeSchema';
import { ThumbsignalWhereUniqueInputSchema } from './ThumbsignalWhereUniqueInputSchema';
import { ThumbsignalUpdateWithWhereUniqueWithoutReviewInputSchema } from './ThumbsignalUpdateWithWhereUniqueWithoutReviewInputSchema';
import { ThumbsignalUpdateManyWithWhereWithoutReviewInputSchema } from './ThumbsignalUpdateManyWithWhereWithoutReviewInputSchema';
import { ThumbsignalScalarWhereInputSchema } from './ThumbsignalScalarWhereInputSchema';

export const ThumbsignalUncheckedUpdateManyWithoutReviewNestedInputSchema: z.ZodType<Prisma.ThumbsignalUncheckedUpdateManyWithoutReviewNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThumbsignalCreateWithoutReviewInputSchema),z.lazy(() => ThumbsignalCreateWithoutReviewInputSchema).array(),z.lazy(() => ThumbsignalUncheckedCreateWithoutReviewInputSchema),z.lazy(() => ThumbsignalUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThumbsignalCreateOrConnectWithoutReviewInputSchema),z.lazy(() => ThumbsignalCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ThumbsignalUpsertWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => ThumbsignalUpsertWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThumbsignalCreateManyReviewInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ThumbsignalWhereUniqueInputSchema),z.lazy(() => ThumbsignalWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ThumbsignalWhereUniqueInputSchema),z.lazy(() => ThumbsignalWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ThumbsignalWhereUniqueInputSchema),z.lazy(() => ThumbsignalWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ThumbsignalWhereUniqueInputSchema),z.lazy(() => ThumbsignalWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ThumbsignalUpdateWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => ThumbsignalUpdateWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ThumbsignalUpdateManyWithWhereWithoutReviewInputSchema),z.lazy(() => ThumbsignalUpdateManyWithWhereWithoutReviewInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ThumbsignalScalarWhereInputSchema),z.lazy(() => ThumbsignalScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ThumbsignalUncheckedUpdateManyWithoutReviewNestedInputSchema;
