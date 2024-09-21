import { test, expect } from '@playwright/test';
import site from '../../src/content/site';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('Meta tags', async ({ page }) => {
    await expect(page).toHaveTitle('Bruno Paz | Contact');

    const metaDescription = await page.$eval('meta[name="description"]', (el) =>
      el.getAttribute('content'),
    );
    expect(metaDescription).toBe(site.description);
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
