# brunopaz.dev

> Source code for my personal website, [brunopaz.dev](https://brunopaz.dev). Powered by [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fbrunopaz.dev&style=for-the-badge)](https://brunopaz.dev)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/brpaz/brunopaz.dev/ci.yml?style=for-the-badge)](https://github.com/brpaz/brunopaz.dev/actions/workflows/ci.yml)
[![Deployment Status](https://img.shields.io/github/deployments/brpaz/brunopaz.dev/production?style=for-the-badge)](https://github.com/brpaz/brunopaz.dev/deployments)

## Features

- Homepage with Featured Projects and Publications
- Portfolio / Projects
- Blog
- Contact form

## 🚀 Getting started

### Pre Requsitites

- [Devenv](https://devenv.sh)
- [Direnv](https://direnv.net)

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

## License

This project is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License](LICENSE).

[![CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/88x31.png)](http://creativecommons.org/licenses/by-nd/4.0/)

**You are free to:**

- View and share this code with proper attribution

**You are NOT allowed to:**

- Modify, remix, or build upon this code
- Create derivative works based on this project

For any other use cases or permissions, please contact me.

---

## Author

👤 **Bruno Paz**

- Website: [brunopaz.dev](https://brunopaz.dev)
- Github: [@brpaz](https://github.com/brpaz)

---

Copyright © 2026 Bruno Paz. All rights reserved.
