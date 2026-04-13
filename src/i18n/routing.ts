import { defineRouting } from 'next-intl/routing';
import type messages from '../../messages/en.json';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en', 'gl'],

  // Used when no locale matches
  defaultLocale: 'es',
});

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
