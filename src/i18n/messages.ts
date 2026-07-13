// Composed type for the split message files. The `en` locale is the source of
// truth for the key structure (see namespaces.ts). Keep these imports in sync
// with the `namespaces` list.
import type about from '../../messages/en/about.json';
import type blog from '../../messages/en/blog.json';
import type catalog from '../../messages/en/catalog.json';
import type events from '../../messages/en/events.json';
import type Footer from '../../messages/en/Footer.json';
import type faq from '../../messages/en/faq.json';
import type home from '../../messages/en/home.json';
import type how from '../../messages/en/how.json';
import type kit from '../../messages/en/kit.json';
import type Navbar from '../../messages/en/Navbar.json';
import type team from '../../messages/en/team.json';
import type technologies from '../../messages/en/technologies.json';
import type training from '../../messages/en/training.json';
import type what from '../../messages/en/what.json';

export type Messages = {
  home: typeof home;
  Navbar: typeof Navbar;
  about: typeof about;
  training: typeof training;
  technologies: typeof technologies;
  how: typeof how;
  team: typeof team;
  what: typeof what;
  events: typeof events;
  catalog: typeof catalog;
  blog: typeof blog;
  kit: typeof kit;
  Footer: typeof Footer;
  faq: typeof faq;
};
