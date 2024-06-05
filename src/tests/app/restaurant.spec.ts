import { expect, test } from '@playwright/test';

test('page renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/restaurant/add');

  await expect(
    page.getByRole('heading', { name: 'Add restaurant', level: 2 }),
  ).toBeVisible();

  await expect(page.getByLabel('Name')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Clear' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});

test('add review', async ({ page }) => {
  await page.goto('http://localhost:3000/restaurant/add');

  await expect(
    page.getByRole('heading', { name: 'Add restaurant', level: 2 }),
  ).toBeVisible();

  await expect(page.getByLabel('Name')).toBeVisible();

  await page.getByLabel('Name').fill('test-restaurant');

  await page.getByText('Submit').press('Enter');
  await expect(page.getByText('Restaurant added!')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Restaurants', level: 2 }),
  ).toBeVisible();
  await expect(page.getByText('test-restaurant')).toBeVisible();
});

test('form error', async ({ page }) => {
  await page.goto('http://localhost:3000/restaurant/add');
  await page.getByText('Submit').press('Enter');
  await expect(page.getByTestId('name-error')).toBeVisible();
});
