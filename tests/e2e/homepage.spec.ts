import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Renders header text', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('Bruno Paz');
  });
});
