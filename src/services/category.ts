'use server';
import 'server-only';

import { PrismaClient } from '@prisma/client';
import { CategorySchema } from '@/types/generated';
import { z } from 'zod';

const prisma = new PrismaClient();

export const getCategories = async () => {
  return z.array(CategorySchema).parseAsync(await prisma.category.findMany());
};
