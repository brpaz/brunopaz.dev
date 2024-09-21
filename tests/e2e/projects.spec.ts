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
    // Check if there is at least one .project-card element
    const projectCards = page.locator('.project-card');
    const cardCount = await projectCards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test('Opens Project details', async ({ page }) => {
    // Find the first .project-card and get the text of the <h3> inside it
    const firstProjectCard = page.locator('.project-card').first();
    const projectName = await firstProjectCard.locator('a h3').textContent();

    expect(projectName).toBeDefined();

    // Click on the first project card and wait for the page to navigate
    await firstProjectCard.locator('a').first().click();

    await page.waitForTimeout(200); // Adjust or remove this if your navigation is handled differently

    // Check if the <h1> on the new page matches the project name
    const header = page.locator('h1');

    // TODO what is the best way to handle this??
    if (!projectName) {
      throw new Error('Project name not found');
    }
    await expect(header).toHaveText(projectName);
  });
});
