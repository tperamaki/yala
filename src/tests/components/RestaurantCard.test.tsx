import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import RestaurantCard from '@/components/RestaurantCard';

test('<RestaurantCard />', () => {
  render(
    <RestaurantCard
      id={1}
      name="test-restaurant"
      createdAt={new Date()}
      createdBy={'test-user'}
      categories={[]}
      reviews={[
        {
          id: 1,
          rating: 3,
          createdAt: new Date(),
          restaurantId: 1,
          createdBy: 'test-user',
        },
      ]}
    />,
  );

  expect(
    screen.getByRole('heading', { level: 2, name: 'test-restaurant' }),
  ).toBeDefined();
  expect(screen.getByText('Rating: 3')).toBeTruthy();
  expect(screen.getByText('Reviews: 1')).toBeTruthy();
});
