import { test, expect } from '@playwright/test';
import site from '../../src/content/site';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Meta tags', async ({ page }) => {
    await expect(page).toHaveTitle(site.title);

    const metaDescription = await page.$eval('meta[name="description"]', (el) =>
      el.getAttribute('content'),
    );
    expect(metaDescription).toBe(site.description);
  });

  test('Renders header text', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('Bruno Paz');
  });
});
