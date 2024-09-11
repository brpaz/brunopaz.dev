import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog/page/1');
  });

  test('Renders page', async ({ page }) => {
    // Check if the <h1> contains the text "My Blog"
    const header = page.locator('h1');
    await expect(header).toHaveText('My Blog');

    // Check if the link with href containing '/blog' has the class 'active'
    const navLink = page.locator('.main-nav a[href*="/blog/page/1"]');
    await expect(navLink).toHaveClass(/active/);

    // Check if the current page indicator in the pagination is "1"
    const currentPage = page.locator('.pagination a[class*="current-page"]');
    await expect(currentPage).toHaveText('1');
  });

  test('Paginates Blog posts', async ({ page }) => {
    // Click on the second pagination link
    const paginationLinks = page.locator('.pagination a');
    await paginationLinks.nth(1).click();

    // Wait for the pagination to update
    await page.waitForTimeout(1000);

    // Check if the current page indicator in the pagination is "2"
    const currentPage = page.locator('.pagination a[class*="current-page"]');
    await expect(currentPage).toHaveText('2');

    // Check if the URL includes "/blog/page/2"
    await expect(page).toHaveURL(/\/blog\/page\/2$/);
  });
});
