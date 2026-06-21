import { test, expect } from '@playwright/test';
import site from '../../src/content/site';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Meta tags', async ({ page }) => {
    await expect(page).toHaveTitle(site.title);

    const metaDescription = await page.$eval('meta[name="description"]', (el) => el.getAttribute('content'));
    expect(metaDescription).toBe(site.description);
  });

  test('Renders header text', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('Bruno Paz');
  });

  test.describe('h-card', () => {
    test('section has h-card class', async ({ page }) => {
      await expect(page.locator('section.h-card')).toBeVisible();
    });

    test('name marked with p-name', async ({ page }) => {
      await expect(page.locator('.h-card .p-name')).toHaveText('Bruno Paz');
    });

    test('photo marked with u-photo', async ({ page }) => {
      await expect(page.locator('.h-card .u-photo')).toBeVisible();
    });

    test('u-url points to homepage', async ({ page }) => {
      const urlEl = page.locator('.h-card .u-url');
      await expect(urlEl).toBeAttached();
      await expect(urlEl).toHaveAttribute('href', 'https://brunopaz.dev');
    });

    test('p-note present', async ({ page }) => {
      await expect(page.locator('.h-card .p-note')).toBeVisible();
    });
  });

  test.describe('JSON-LD', () => {
    test('has Person schema', async ({ page }) => {
      const schema = await page.$eval('script[type="application/ld+json"]', (el) => JSON.parse(el.textContent ?? '{}'));
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Person');
      expect(schema.name).toBe('Bruno Paz');
      expect(schema.url).toBe('https://brunopaz.dev');
      expect(schema.jobTitle).toBe('Tech Lead / Software Engineer');
    });

    test('Person schema sameAs includes social profiles', async ({ page }) => {
      const schema = await page.$eval('script[type="application/ld+json"]', (el) => JSON.parse(el.textContent ?? '{}'));
      expect(Array.isArray(schema.sameAs)).toBe(true);
      expect(schema.sameAs).toContain(site.social.github);
      expect(schema.sameAs).toContain(site.social.linkedin);
      expect(schema.sameAs).toContain(site.social.mastodon);
    });
  });
});
