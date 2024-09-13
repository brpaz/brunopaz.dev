import { test, expect } from '@playwright/test';
import site from '../../src/content/site';

test.describe('Support Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/support');
  });

  test('Meta tags', async ({ page }) => {
    await expect(page).toHaveTitle('Bruno Paz | Support');

    const metaDescription = await page.$eval('meta[name="description"]', (el) =>
      el.getAttribute('content'),
    );
    expect(metaDescription).toBe(site.description);
  });

  test('Open support page', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('Support My Work ');
  });
});
