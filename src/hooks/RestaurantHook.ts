import { getRestaurants } from '@/services/restaurants';
import { HookReturnType } from '@/types/general';
import { Category, Restaurant } from '@prisma/client';
import { useEffect, useState } from 'react';

export type EnrichedRestaurant = Restaurant & {
  categories: Category[];
  averageReview?: number;
  reviewCount: number;
};

export const useGetRestaurants = (): HookReturnType<EnrichedRestaurant[]> => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<EnrichedRestaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRestaurants();
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
