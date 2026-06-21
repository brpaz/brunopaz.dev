import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test.describe('Blog listing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/blog/page/1');
    });

    test('Renders page', async ({ page }) => {
      const header = page.locator('h1');
      await expect(header).toHaveText('Blog');

      const navLink = page.locator('a.nav-link[href*="/blog"]');
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

    test.describe('Microformats', () => {
      test('has h-feed wrapper', async ({ page }) => {
        await expect(page.locator('.h-feed')).toBeVisible();
      });

      test('h-feed has p-name heading', async ({ page }) => {
        await expect(page.locator('.h-feed h1.p-name')).toBeVisible();
      });

      test('post cards have h-entry with p-name u-url link', async ({ page }) => {
        const link = page.locator('.h-entry a.p-name.u-url').first();
        await expect(link).toBeVisible();
        const href = await link.getAttribute('href');
        expect(href).toMatch(/^\/blog\//);
      });
    });
  });

  test.describe('Blog post', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/blog/page/1');
      await page.locator('.h-entry a.p-name.u-url').first().click();
      await page.waitForLoadState('networkidle');
    });

    test.describe('Microformats', () => {
      test('article has h-entry class', async ({ page }) => {
        await expect(page.locator('article.h-entry')).toBeVisible();
      });

      test('title has p-name class', async ({ page }) => {
        await expect(page.locator('article.h-entry h1.p-name')).toBeVisible();
      });

      test('content has e-content class', async ({ page }) => {
        await expect(page.locator('.h-entry .e-content')).toBeVisible();
      });

      test('time has dt-published with valid datetime', async ({ page }) => {
        const time = page.locator('.h-entry .dt-published');
        await expect(time).toBeVisible();
        const datetime = await time.getAttribute('datetime');
        expect(datetime).toMatch(/^\d{4}-\d{2}-\d{2}T/);
      });

      test('has hidden u-url pointing to post', async ({ page }) => {
        const urlEl = page.locator('.h-entry .u-url');
        await expect(urlEl).toBeAttached();
        const href = await urlEl.getAttribute('href');
        expect(href).toMatch(/\/blog\//);
      });

      test('has p-author h-card', async ({ page }) => {
        const author = page.locator('.h-entry .p-author.h-card');
        await expect(author).toBeAttached();
        await expect(author).toHaveAttribute('href', 'https://brunopaz.dev');
      });
    });

    test.describe('JSON-LD', () => {
      test('has BlogPosting schema', async ({ page }) => {
        const schema = await page.$eval('script[type="application/ld+json"]', (el) =>
          JSON.parse(el.textContent ?? '{}'),
        );
        expect(schema['@context']).toBe('https://schema.org');
        expect(schema['@type']).toBe('BlogPosting');
        expect(schema.headline).toBeTruthy();
        expect(schema.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}T/);
        expect(schema.author?.name).toBe('Bruno Paz');
        expect(schema.author?.url).toBe('https://brunopaz.dev');
      });

      test('BlogPosting url matches current page', async ({ page }) => {
        const [schema, currentUrl] = await Promise.all([
          page.$eval('script[type="application/ld+json"]', (el) => JSON.parse(el.textContent ?? '{}')),
          page.url(),
        ]);
        expect(schema.url).toBe(currentUrl);
      });
    });
  });
});
