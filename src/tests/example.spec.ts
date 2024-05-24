import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	   await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/Yet Another Lunch App/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});
