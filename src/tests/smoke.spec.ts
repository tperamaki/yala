import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/Yet Another Lunch App/);
});

test('add review link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Add review' }).click();

  await expect(
    page.getByRole('heading', { name: 'Add review', level: 2 }),
  ).toBeVisible();
  await expect(page.getByLabel('Restaurant')).toBeVisible();
  await expect(page.getByLabel('Rating')).toBeVisible();
});
