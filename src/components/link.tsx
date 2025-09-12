import * as Headless from '@headlessui/react';
import { forwardRef } from 'react';
// biome-ignore lint/style/noRestrictedImports: this is the wrapper for the original Link
import { Link as IntlLink } from '@/i18n/navigation';

export const Link = forwardRef(function Link(
  props: React.ComponentProps<typeof IntlLink> &
    React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return <IntlLink ref={ref} {...props} />;
});
