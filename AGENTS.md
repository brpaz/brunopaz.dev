# Agent Development Guide

This document provides essential information for AI coding agents working on this Astro-based personal website.

## Project Overview

- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Content**: MDX-based content collections
- **Package Manager**: pnpm 10.x
- **Node Version**: >= 24.0.0
- **Testing**: Playwright (E2E), Lighthouse CI (performance)

## Build & Development Commands

### Development

```bash
pnpm install              # Install dependencies
pnpm run dev              # Start dev server (default: http://localhost:4321)
pnpm run start            # Alias for dev
pnpm run preview          # Preview production build
```

### Build

```bash
pnpm run build            # Build for production (outputs to dist/)
```

### Linting & Formatting

```bash
pnpm run lint             # Run all linters (JS, Astro, Markdown)
pnpm run lint:js          # ESLint for JS/TS/Astro files
pnpm run lint:js:fix      # ESLint with auto-fix
pnpm run lint:astro       # Astro type checking
pnpm run lint:md          # Markdownlint for MDX files
pnpm run format           # Format with Prettier
pnpm run format:check     # Check formatting without writing
```

### Testing

```bash
# E2E Tests (Playwright)
pnpm run test:e2e                          # Run all E2E tests
pnpm run test:e2e:report                   # Show test report
npx playwright test tests/e2e/homepage.spec.ts  # Run single test file

# Performance Tests (Lighthouse CI)
pnpm run test:lh          # Run Lighthouse performance tests
pnpm run test:lh:report   # View Lighthouse report
```

### Other

```bash
pnpm run icons:optimize   # Optimize SVG icons with SVGO
```

## Code Style Guidelines

### TypeScript/JavaScript

#### Imports

- Use ES6 `import`/`export` syntax
- Use path aliases defined in `tsconfig.json`:
  - `~/` → `./src/`
  - `@components/` → `src/components/`
  - `@assets/` → `src/assets/`
- Use `import type` for type-only imports (better tree-shaking)
- Order: Astro/framework imports → third-party → local

**Example:**

```typescript
import { Image } from 'astro:assets';
import type { CollectionEntry } from 'astro:content';
import slugify from 'slugify';
import type { Project } from '~/content/types';
import LanguageIcon from '@components/shared/LanguageIcon.astro';
```

#### Formatting

- **Single quotes** for strings
- **Semicolons** required
- Configured via Prettier (see `prettier.config.js`)
- Auto-formatted on commit via Lefthook

#### Types

- Strict TypeScript mode enabled (`astro/tsconfigs/strict`)
- Define interfaces for component props in frontmatter
- Use Zod schemas for content collection validation
- Never use `any` - use proper types or `unknown`
- Use type imports: `import type { ... }`

#### Naming Conventions

- **PascalCase**: Components, layouts, types (`Navbar.astro`, `ProjectCard.astro`)
- **camelCase**: Variables, functions, file names (non-components)
- **kebab-case**: Page routes, content slugs
- **Descriptive names**: Feature prefixes for clarity (`ProjectCard`, `BlogPostCard`)

### Astro Components

#### Structure

```astro
---
// Frontmatter: TypeScript logic and imports
import { Image } from 'astro:assets';
import type { CollectionEntry } from 'astro:content';

interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!-- HTML template with JSX-like syntax -->
<div class="container">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>

<script>
  // Client-side JavaScript (optional)
</script>

<style>
  /* Component-scoped styles (optional) */
</style>
```

#### Component Guidelines

- Use Astro components for static content
- Props defined via TypeScript interfaces
- Frontmatter for server-side logic only
- Client-side scripts for interactivity (vanilla JS)
- Tailwind CSS for styling (inline classes or `<style>` blocks)

### Content Collections

Located in `src/content/`:

- `blogPosts/` - Blog posts (MDX)
- `projects/` - Portfolio projects (MDX)
- `config.ts` - Collection schemas (Zod validation)
- `types.ts` - TypeScript types derived from schemas

#### Adding Content

1. Create MDX file in appropriate collection directory
2. Include required frontmatter fields (defined in schema)
3. Use TypeScript types from `~/content/types`

### Error Handling

- Minimal runtime error handling (static site generation)
- Rely on TypeScript and Zod validation for type safety
- E2E tests use `expect()` assertions (Playwright)
- No try/catch blocks in application code unless necessary

### File Organization

```plaintext
src/
├── assets/          # Static assets (images, icons, styles)
├── components/      # Reusable components
│   ├── blog/       # Blog-specific components
│   ├── home/       # Homepage components
│   ├── shared/     # Shared/common components
│   └── work/       # Portfolio/work components
├── content/         # Content collections (MDX + schemas)
├── layouts/         # Page layouts
└── pages/           # File-based routing
```

## Configuration Files

- `astro.config.mjs` - Astro configuration (site URL, integrations, redirects)
- `tsconfig.json` - TypeScript config (strict mode, path aliases)
- `eslint.config.js` - ESLint rules (Astro + Playwright plugins)
- `prettier.config.js` - Prettier formatting rules
- `playwright.config.ts` - E2E test configuration
- `.markdownlint.yaml` - Markdown linting rules
- `lefthook.yml` - Git hooks (pre-commit linting/formatting)
- `commitlint.config.js` - Conventional commit validation

## Git Workflow

### Pre-commit Hooks (Lefthook)

Automatically runs on `git commit`:

1. ESLint with auto-fix on staged `.{js,ts,astro}` files
2. Prettier formatting on staged `.{js,ts,astro}` files
3. Markdownlint on staged `.{md,mdx}` files
4. Astro type checking on staged `.{astro,ts}` files

### Commit Messages

- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Format: `<type>(<scope>): <subject>`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Validated by Commitlint on commit

## Environment Variables

Required for production:

- `PUBLIC_WEB_MONETIZATION_ID` - Web monetization platform ID
- `PUBLIC_SENTRY_ENABLED` - Enable Sentry error reporting (true/false)
- `PUBLIC_SENTRY_KEY` - Sentry DSN configuration

Optional:

- `SITE_URL` - Override site URL (default: [https://brunopaz.dev](https://brunopaz.dev))
- `PORT` - Override dev server port (default: 4321)

## Important Notes for Agents

1. **Never suppress TypeScript errors** - No `any`, `@ts-ignore`, or `@ts-expect-error`
2. **Run type checking after changes** - Use `pnpm run lint:astro` to verify
3. **Follow existing patterns** - Match component structure and naming conventions
4. **Test locally before committing** - Run `pnpm run build` to catch build errors
5. **Use path aliases** - Prefer `~/` and `@components/` over relative paths
6. **Static site generation** - No client-side state management (React hooks, etc.)
7. **Astro-first** - Use Astro components unless client interactivity is required
8. **Tailwind CSS** - Use utility classes, avoid custom CSS unless necessary
9. **Content collections** - Add content via MDX files, not hardcoded data
10. **Pre-commit hooks** - Code is auto-formatted/linted on commit via Lefthook

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`):

- Triggers on push/PR to `main` branch
- Runs on Ubuntu 24.04 with Node.js and pnpm
- Steps:
  1. Install dependencies
  2. Run all linters (`pnpm run lint`)
  3. Build project (`pnpm run build`)
  4. Run E2E tests (`pnpm run test:e2e`)
  5. Run Lighthouse performance tests (`pnpm run test:lh`)
  6. Deploy PR previews to Cloudflare Pages

## Deployment

- **Platform**: Cloudflare Pages (production), Netlify/Vercel compatible
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist/`
- **Static Site**: Fully static HTML/CSS/JS (no server runtime)
