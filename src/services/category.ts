'use server';
import 'server-only';

import { CategorySchema } from '@/types/generated';
import prisma from './client';
import { z } from 'zod';

export const getCategories = async () => {
  try {
    return z.array(CategorySchema).parseAsync(await prisma.category.findMany());
  } catch (error) {
    console.error(error);
    return [];
  }
};
