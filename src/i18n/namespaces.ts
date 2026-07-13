// Top-level message namespaces. Each maps to one file per locale:
//   messages/<locale>/<namespace>.json
//
// Adding a section? Create messages/{es,en,gl}/<name>.json and add <name> here.
// Keep the three locales in sync — missing keys render the raw key, they do NOT
// fall back to the default locale.
export const namespaces = [
  'home',
  'Navbar',
  'about',
  'training',
  'technologies',
  'how',
  'team',
  'what',
  'events',
  'catalog',
  'blog',
  'kit',
  'Footer',
  'faq',
] as const;

export type Namespace = (typeof namespaces)[number];
