import { test, expect } from '@playwright/test';

test.describe('CV Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cv');
  });

  test('Renders page', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('CV');

    const navLink = page.locator('a.nav-link[href*="/cv"]');
    await expect(navLink).toHaveClass(/active/);
  });

  test('Renders experience timeline', async ({ page }) => {
    const sectionTitle = page.locator('h2').filter({ hasText: 'Work Experience' });
    await expect(sectionTitle).toBeVisible();

    const jobEntries = page.locator('h3');
    const count = await jobEntries.count();
    expect(count).toBeGreaterThan(0);
  });
});
