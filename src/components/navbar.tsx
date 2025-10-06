'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { motion } from 'motion/react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Link } from './link';
import { Logo } from './logo';
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';

const languageOptions = [
  { code: 'es', key: 'espanol' },
  { code: 'en', key: 'english' },
] as const satisfies { code: Locale; key: string }[];

function LanguageSelector() {
  const t = useTranslations('Navbar');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentKey =
    languageOptions.find(({ code }) => code === currentLocale)?.key ?? 'idioma';

  function switchLanguage(lang: Locale) {
    router.replace(pathname, { locale: lang });
  }

  return (
    <div className="relative group flex">
      <span className="flex items-center px-4 py-3 text-base font-medium text-gray-950 cursor-pointer">
        🌐 {t(currentKey)}
      </span>
      <div className="absolute left-0 top-full hidden w-40 flex-col rounded-lg border border-gray-200 bg-white shadow-md group-hover:flex">
        {languageOptions.map(({ code, key }) => (
          <Link
            key={code}
            href="#"
            className={`px-4 py-2 text-sm text-gray-800 text-left hover:bg-gray-100 ${
              currentLocale === code ? 'font-semibold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              switchLanguage(code);
            }}
          >
            {t(key)}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileLanguageSelector() {
  const t = useTranslations('Navbar');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLanguage(lang: Locale) {
    router.replace(pathname, { locale: lang });
  }

  return (
    <div className="ml-0 flex flex-col gap-2">
      <p className="text-base font-medium text-gray-950">🌐 {t('idioma')}</p>
      <div className="ml-4 flex flex-col gap-2">
        {languageOptions.map(({ code, key }) => (
          <Link
            key={code}
            href="#"
            className={`text-sm text-gray-800 text-left hover:text-gray-950 hover:underline ${
              currentLocale === code ? 'font-semibold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              switchLanguage(code);
            }}
          >
            {t(key)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const t = useTranslations('Navbar');

  const links = [
    { href: '/how', label: t('participa') },
    { href: '/use-cases', label: t('casos_de_uso') },
    { href: '/team', label: t('el_equipo') },
    { href: '/events', label: t('eventos') },
  ];

  function DesktopNav() {
    return (
      <nav className="relative hidden lg:flex">
        {/* Dropdown: Centro demostrador */}
        <PlusGridItem className="relative group flex">
          <Link
            href="/about"
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 cursor-pointer"
          >
            {t('centro_demostrador')}
          </Link>
          <div className="absolute left-0 top-full hidden w-48 flex-col rounded-lg border border-gray-200 bg-white shadow-md group-hover:flex">
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              {t('saber_mas')}
            </Link>
            <Link
              href="/what"
              className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              {t('que_es_un_espacio')}
            </Link>
          </div>
        </PlusGridItem>

        {/* Other links */}
        {links.map(({ href, label }) => (
          <PlusGridItem key={href} className="relative flex">
            <Link
              href={href}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
            >
              {label}
            </Link>
          </PlusGridItem>
        ))}

        {/* Language Selector */}
        <PlusGridItem className="relative flex">
          <LanguageSelector />
        </PlusGridItem>
      </nav>
    );
  }

  function MobileNavButton() {
    return (
      <DisclosureButton
        className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
        aria-label="Open main menu"
      >
        <Bars2Icon className="size-6" />
      </DisclosureButton>
    );
  }

  function MobileNav() {
    return (
      <DisclosurePanel className="lg:hidden">
        <div className="flex flex-col gap-6 py-4">
          {/* Centro demostrador mimic */}
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Link href="/about" className="text-base font-medium text-gray-950">
              {t('centro_demostrador')}
            </Link>
            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/about" className="text-sm text-gray-800">
                {t('saber_mas')}
              </Link>
              <Link href="/what" className="text-sm text-gray-800">
                {t('que_es_un_espacio')}
              </Link>
            </div>
          </motion.div>

          {/* Other links */}
          {links.map(({ href, label }, idx) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
                rotateX: { duration: 0.3, delay: idx * 0.1 },
              }}
            >
              <Link href={href} className="text-base font-medium text-gray-950">
                {label}
              </Link>
            </motion.div>
          ))}

          {/* Mobile language selector */}
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <MobileLanguageSelector />
          </motion.div>
        </div>

        <div className="absolute left-1/2 w-screen -translate-x-1/2">
          <div className="absolute inset-x-0 top-0 border-t border-black/5" />
          <div className="absolute inset-x-0 top-2 border-t border-black/5" />
        </div>
      </DisclosurePanel>
    );
  }

  return (
    <Disclosure as="header" className="pt-8 sm:pt-12">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title={t('home')}>
                <div className="flex flex-row items-center gap-2 text-gray-950">
                  <Logo className="h-9" />
                  <div className="text-3xl">DATAlife | CESGA</div>
                </div>
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  );
}
