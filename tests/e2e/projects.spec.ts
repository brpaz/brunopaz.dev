import { test, expect } from '@playwright/test';

test.describe('Work Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/work');
  });

  test('Opens projects page', async ({ page }) => {
    // Check if the <h1> contains the text "Work"
    const header = page.locator('h1');
    await expect(header).toHaveText('Work');

    // Check if the link with href containing '/work' has the class 'active'
    const navLink = page.locator('.main-nav a[href*="/work"]');
    await expect(navLink).toHaveClass(/active/);
  });

  test('Renders projects cards', async ({ page }) => {
    // Check if there is at least one project card (rendered as an anchor with h3 inside)
    const projectCards = page.locator('a[href^="/work/"] h3');
    const cardCount = await projectCards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test('Opens Project details', async ({ page }) => {
    const firstProjectCard = page.locator('a[href^="/work/"]').first();
    const projectName = await firstProjectCard.locator('h3').textContent();

    expect(projectName).toBeDefined();

    await firstProjectCard.click();

    await page.waitForLoadState('networkidle');

    const header = page.locator('main h1').first();

    if (!projectName) {
      throw new Error('Project name not found');
    }
    await expect(header).toHaveText(projectName);
  });
});
