import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('Renders page', async ({ page }) => {
    // Check if the <h1> contains the text "About me"
    const header = page.locator('h1');
    await expect(header).toHaveText('About me');

    // Check if the link with href containing '/about' has the class 'active'
    const navLink = page.locator('.main-nav a[href*="/about"]');
    await expect(navLink).toHaveClass(/active/);
  });
});
