import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import RestaurantCard from '../../components/RestaurantCard';

test('<RestaurantCard />', () => {
  render(<RestaurantCard averageRating={3} name="test-restaurant" />);

  expect(
    screen.getByRole('heading', { level: 2, name: 'test-restaurant' }),
  ).toBeDefined();
  expect(screen.getByText('3')).toBeTruthy();
});
