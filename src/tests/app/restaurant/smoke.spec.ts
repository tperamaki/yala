import { expect, test } from '@playwright/test';

test('page renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/restaurant/add');

  await expect(
    page.getByRole('heading', { name: 'Add restaurant', level: 2 }),
  ).toBeVisible();

  await expect(page.getByLabel('Name')).toBeVisible();
  await expect(page.getByLabel('Description')).toBeVisible();
  await expect(page.getByLabel('Restaurant')).toBeVisible();
  await expect(page.getByLabel('Rating')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Clear' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});
