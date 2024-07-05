'use server';
import 'server-only';

import { PrismaClient } from '@prisma/client';
import {
  CategoriesOnRestaurantsSchema,
  Category,
  CategoryCreateInputSchema,
  CategorySchema,
  Restaurant,
  RestaurantCreateWithoutReviewsInputSchema,
  RestaurantSchema,
  Review,
  ReviewSchema,
} from '@/types/generated';
import { z } from 'zod';
import { getSession } from '@auth0/nextjs-auth0';
import { getUserIdFromIdToken } from './utils';
import { create } from 'domain';

const prisma = new PrismaClient();

const enhanceRestaurant = (
  restaurant: Restaurant & {
    reviews: Review[];
  },
) => {
  const { reviews, ...rest } = restaurant;
  const averageReview =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  return {
    ...rest,
    reviews,
    averageReview: isNaN(averageReview) ? undefined : averageReview,
    reviewCount: reviews.length,
  };
};

export const getRestaurants = async () => {
  const data = await prisma.restaurant.findMany({
    include: {
      categories: { include: { category: true } },
      reviews: true,
    },
  });

  console.log(JSON.stringify(data));

  return z
    .array(
      RestaurantSchema.extend({
        categories: z.array(
          CategoriesOnRestaurantsSchema.extend({ category: CategorySchema }),
        ),
        reviews: z.array(ReviewSchema),
        averageReview: z.number().optional(),
        reviewCount: z.number(),
      }),
    )
    .parseAsync(data.map(enhanceRestaurant));
};

export const getRestaurant = async (id: number) => {
  const data = await prisma.restaurant.findFirst({
    where: {
      id,
    },
    include: {
      categories: { include: { category: true } },
      reviews: true,
    },
  });

  if (!data) {
    return null;
  }

  return RestaurantSchema.extend({
    categories: z.array(
      CategoriesOnRestaurantsSchema.extend({ category: CategorySchema }),
    ),
    reviews: z.array(ReviewSchema),
    averageReview: z.number().optional(),
    reviewCount: z.number(),
  }).parseAsync(enhanceRestaurant(data));
};

const addCategories = async (
  categories: string[],
  userId: string,
): Promise<
  { success: false; data: null } | { success: true; data: Category[] }
> => {
  const validatedCategories = await z
    .array(CategoryCreateInputSchema)
    .safeParseAsync(categories.map((name) => ({ name, createdBy: userId })));

  if (!validatedCategories.success) {
    return {
      success: false,
      data: null,
    };
  }

  const createdCategories = await Promise.all(
    validatedCategories.data.map((category) =>
      prisma.category.upsert({
        where: { name: category.name },
        update: {},
        create: category,
      }),
    ),
  );

  return {
    success: true,
    data: createdCategories,
  };
};

export const addRestaurant = async <State>(
  prevState: State,
  formData: FormData,
) => {
  const session = await getSession();

  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const payload = {
    name: formData.get('name'),
    createdBy: getUserIdFromIdToken(session.idToken),
  };

  const addedCategories = await addCategories(
    (formData.get('categories') as string).split(','),
    getUserIdFromIdToken(session.idToken),
  );

  const validatedFields =
    await RestaurantCreateWithoutReviewsInputSchema.refine(
      (data) => data.name !== '',
      { message: 'Name must not be empty', path: ['name'] },
    ).safeParseAsync(payload);

  if (!validatedFields.success || !addedCategories.success) {
    return {
      ...prevState,
      errors: validatedFields.error?.flatten().fieldErrors ?? {
        categories: ['Invalid categories'],
      },
    };
  }

  try {
    const createdRestaurant = await prisma.restaurant.create({
      data: {
        name: validatedFields.data.name,
        createdBy: validatedFields.data.createdBy,
      },
    });
    await prisma.categoriesOnRestaurants.createMany({
      data: addedCategories.data.map((category) => ({
        categoryId: category.id,
        restaurantId: createdRestaurant.id,
      })),
    });
    return { ...validatedFields.data, errors: undefined };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      errors: { send: ['Failed to submit a restaurant'] },
    };
  }
};
