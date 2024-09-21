# brunopaz.dev

> Source code for my personal website, [brunopaz.dev](https://brunopaz.dev). Powered by [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/brpaz/brunopaz.dev/ci?style=for-the-badge)](https://github.com/brpaz/brunopaz.dev/actions)

## 🧞 Development

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

By default, this will start the application at `localhost:3000`.

## Build form production

Run:

```sh
pnpm build
```

It will generate a fully static website into `dist` folder, which can then be deployed on any static sites hosting like Netlify or Vercel.

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

* Website: [brunopaz.dev](https://brunopaz.dev)
* Github: [@brpaz](https://github.com/brpaz)
