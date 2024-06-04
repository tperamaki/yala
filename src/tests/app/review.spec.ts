import { expect, test } from '@playwright/test';

test('add review', async ({ page }) => {
  await page.goto('http://localhost:3000/review');

  await expect(
    page.getByRole('heading', { name: 'Add review', level: 2 }),
  ).toBeVisible();

  await expect(page.getByLabel('Restaurant')).toBeVisible();
  await expect(page.getByLabel('Rating')).toBeVisible();

  await page.getByLabel('Restaurant').selectOption('Bruuveri');
  await page.getByLabel('Rating').fill('5');

  await page.getByText('Submit').press('Enter');
  await expect(page.getByText('Review added!')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Restaurants', level: 2 }),
  ).toBeVisible();
});

test('form error', async ({ page }) => {
  await page.goto('http://localhost:3000/review');
  await page.getByText('Submit').press('Enter');
  await expect(page.getByTestId('restaurant-error')).toBeVisible();
  await expect(page.getByTestId('rating-error')).toBeVisible();
});
