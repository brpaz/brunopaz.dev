import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog/page/1');
  });

  test('Renders page', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('My Blog');

    const navLink = page.locator('.main-nav a[href*="/blog/page/1"]');
    await expect(navLink).toHaveClass(/active/);

    const currentPage = page.locator('.current-page');
    await expect(currentPage).toHaveText('1');
  });

  test('Paginates Blog posts', async ({ page }) => {
    const nextPageLink = page.locator('a[href="/blog/page/2"]');
    await nextPageLink.click();

    await page.waitForLoadState('networkidle');

    const currentPage = page.locator('.current-page');
    await expect(currentPage).toHaveText('2');

    await expect(page).toHaveURL(/\/blog\/page\/2$/);
  });
});
