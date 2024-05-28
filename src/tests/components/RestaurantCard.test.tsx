import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import RestaurantCard from '@/components/RestaurantCard';

test('<RestaurantCard />', () => {
  render(
    <RestaurantCard
      averageRating={3}
      amountOfReviews={1}
      name="test-restaurant"
    />,
  );

  expect(
    screen.getByRole('heading', { level: 2, name: 'test-restaurant' }),
  ).toBeDefined();
  expect(screen.getByText('Rating: 3')).toBeTruthy();
  expect(screen.getByText('Reviews: 1')).toBeTruthy();
});
