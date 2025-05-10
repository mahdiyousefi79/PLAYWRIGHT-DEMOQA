// tests/home.spec.js
import { test, expect } from '@playwright/test';

test('Home page should load and display Elements card', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // ✅ Assert correct page title
  await expect(page).toHaveTitle(/DEMOQA/);

  // ✅ Locate the "Elements" card and assert it's visible
  const elementsCard = page.locator('.card-body h5', { hasText: 'Elements' });
  await expect(elementsCard).toBeVisible();
});
