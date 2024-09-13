/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMeta {
  env: {
    BASE_URL: string;
    PUBLIC_WEB_MONETIZATION_ID?: string;
    PUBLIC_SENTRY_ENABLED: boolean;
    PUBLIC_SENTRY_KEY?: string;
    PUBLIC_FORMSPREE_FORM_ID: string;
  };
}
