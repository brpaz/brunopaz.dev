import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('Renders page', async ({ page }) => {
    // Check if the <h1> contains the text "Contact"
    const header = page.locator('h1');
    await expect(header).toHaveText('Contact');

    // Check if the link with href containing '/contact' has the class 'active'
    const navLink = page.locator('.main-nav a[href*="/contact"]');
    await expect(navLink).toHaveClass(/active/);
  });
});
