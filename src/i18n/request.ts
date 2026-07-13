import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { namespaces } from './namespaces';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Messages are split one file per namespace to keep merge conflicts local.
  // Load them in parallel and reassemble the single object next-intl expects.
  const loaded = await Promise.all(
    namespaces.map(async (ns) => [
      ns,
      (await import(`../../messages/${locale}/${ns}.json`)).default,
    ]),
  );

  return {
    locale,
    messages: Object.fromEntries(loaded),
  };
});
