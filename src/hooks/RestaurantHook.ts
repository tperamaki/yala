import { getRestaurant, getRestaurants } from '@/services/restaurants';
import { HookReturnType } from '@/types/general';
import { Category, Restaurant, Review } from '@/types/generated';
import { useEffect, useState } from 'react';

export type EnrichedRestaurant = Restaurant & {
  categories: Category[];
  reviews: Review[];
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

export const useGetRestaurant = (
  id: number,
): HookReturnType<EnrichedRestaurant | null> => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<EnrichedRestaurant | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRestaurant(id);
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    data,
    isLoading,
    isError,
  };
};
