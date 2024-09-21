# brunopaz.dev

> Source code for my personal website, [brunopaz.dev](https://brunopaz.dev). Powered by [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/brpaz/brunopaz.dev/ci?style=for-the-badge)](https://github.com/brpaz/brunopaz.dev/actions)

## 🚀 Getting started

There are multiple ways to run this project on local environment:

- Directly on host machine (requires [Node](https://nodejs.org/en) >=20 and [PNPM](https://pnpm.io/))
- Using [Nix Flakes](https://nixos.wiki/wiki/Flakes)
- Using [Devcontainers](https://containers.dev/)

### Clone the repo

```sh
git clone git@github.com:brpaz/brunopaz.dev.git
```

### Install dependencies

```sh
pnpm install
```

### Starting the dev server

```sh
pnpm run dev
```

By default, this will start the application at `http://localhost:4321`.

> [!TIP]
> You can override the default port the server listens to by specifiying `PORT` envrionment variable.

### Running Tests

[Playwright](https://playwright.dev) is used for E2E tests.

You can run the provided test suite using `pnpm run test:e2e` command.

For performance tests, [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) is used. Run `pnpm run test:lh` to execute the tests.

## Build for production

```sh
pnpm build
```

> [!TIP]
> This will generate a fully static website into `dist` folder, which can then be deployed on any static sites hosting like Netlify or Vercel.

---

## Envrionment variables

This website requires the following environment variables to be defined:

| Name                       | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| PUBLIC_WEB_MONETIZATION_ID | The ID of the web monetization platform                                |
| PUBLIC_SENTRY_ENABLED      | Flag to enable Sentry error reporting                                  |
| PUBLIC_SENTRY_KEY          | The Sentry DSN configuration, allowing error logs to be sent to Sentry |

---

## Author

👤 **Bruno Paz**

- Website: [brunopaz.dev](https://brunopaz.dev)
- Github: [@brpaz](https://github.com/brpaz)
