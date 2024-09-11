# brunopaz.dev

> Source code for my personal website, [brunopaz.dev](https://brunopaz.dev). Powered by [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).


[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/brpaz/brunopaz.dev/ci?style=for-the-badge)](https://github.com/brpaz/brunopaz.dev/actions)

## 🧞 Development

#### Clone the repo

```sh
git clone git@github.com:brpaz/brunopaz.dev.git
```

#### Install dependencies

```sh
yarn install
```

#### Starting the dev server

```sh
yarn dev
```

By default, this will start the application at `localhost:3000`.

## Build to production

Run:

```sh
yarn build
```

It will generate a fully static website into `dist` folder, which can then be deployed on any static sites hosting like Netlify or Vercel.

## Envrionment variables

This website requires the following environment variables to be defined:

| Name                       	| Description                                                                                       	|
|----------------------------	|---------------------------------------------------------------------------------------------------	|
| BASE_URL                   	| The website base url                                                                              	|
| PUBLIC_WEB_MONETIZATION_ID 	| The ID of web monetization platform                                                               	|
| PUBLIC_SENTRY_ENABLED      	| When to enable Sentry Error reporting                                                             	|
| PUBLIC_SENTRY_KEY          	| The sentry DSN configuration, to allow sending error logs to Sentry.                              	|
| PUBLIC_CHAT_ENABLED        	| Wether to enable the Chat box or not                                                              	|
| PUBLIC_FORMSPREE_FORM_ID   	| The id of the form defined in formspree. Used by the Contact form and chat box.                   	|

---

## Author

👤 **Bruno Paz**

* Website: [brunopaz.dev](https://brunopaz.dev)
* Github: [@brpaz](https://github.com/brpaz)
