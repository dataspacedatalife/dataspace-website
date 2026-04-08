'use client';

import { Disclosure } from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Link } from './link';
import { Logo } from './logo';

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
    { href: '/events', label: t('eventos') },
    { href: '/blog', label: t('blog') },
    { href: '/team', label: t('el_equipo') },
  ];

  const techLinks = [
    { href: '/dataspace', label: t('xdatashare') },
    { href: 'https://dspacer-cesga.es/portal', label: t('dspacer'), external: true },
    { href: '/faq', label: t('preguntas_frecuentes') },
  ];

  const aboutLinks = [
    { href: '/about', label: t('saber_mas') },
    { href: '/what', label: t('que_es_un_espacio') },
    { href: '/use-cases', label: t('casos_de_uso') },
  ];

  const joinLinks = [
    { href: '/how', label: t('adhesion') },
    { href: '/kitEdD', label: t('kit') },
  ];

  function DesktopNav() {
    return (
      <nav className="hidden lg:flex relative">
        {/* Centro demostrador */}
        <div className="relative group flex">
          <Link
            href="/about"
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 cursor-pointer"
          >
            <div className="grow whitespace-nowrap">{t('centro_demostrador')}</div>
            <ChevronUp className="rotate-180 w-3.5" />
          </Link>
          <div className="absolute left-0 top-full hidden w-48 flex-col rounded-lg border border-gray-200 bg-white shadow-md group-hover:flex">
            {aboutLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Catalogo */}
        <Link
          href="/catalog"
          className="flex items-center px-4 py-3 text-base font-medium text-gray-950"
        >
          {t('catalogo')}
        </Link>

        {/* Tecnologías */}
        <div className="relative group flex">
          <Link
            href="/dataspace"
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 cursor-pointer"
          >
            <div className="grow whitespace-nowrap">{t('tecnologias')}</div>
            <ChevronUp className="rotate-180 w-3.5" />
          </Link>
          <div className="absolute left-0 top-full hidden w-48 flex-col rounded-lg border border-gray-200 bg-white shadow-md group-hover:flex">
            {techLinks.map(({ href, label, external }) => (
              <Link key={href} href={href} target={external ? '_blank' : undefined} className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Unete */}
        <div className="relative group flex">
          <Link
            href="/how"
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 cursor-pointer"
          >
            <div className="grow whitespace-nowrap">{t('participa')}</div>
            <ChevronUp className="rotate-180 w-3.5" />
          </Link>
          <div className="absolute left-0 top-full hidden w-48 flex-col rounded-lg border border-gray-200 bg-white shadow-md group-hover:flex">
            {joinLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Otros links */}
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="flex items-center px-4 py-3 text-base font-medium text-gray-950">
            {label}
          </Link>
        ))}

        {/* Language Selector */}
        <LanguageSelector />
      </nav>
    );
  }

  function MobileNavButton() {
    return (
      <Disclosure.Button
        className="flex size-12 items-center justify-center self-center rounded-lg hover:bg-black/5 lg:hidden"
        aria-label="Open main menu"
      >
        <Bars2Icon className="size-6" />
      </Disclosure.Button>
    );
  }

  function MobileNav() {
    return (
      <Disclosure.Panel className="lg:hidden">
        <div className="flex flex-col gap-6 py-4">
          {/* Mimic Centro demostrador */}
          <motion.div initial={{ opacity: 0, rotateX: -90 }} animate={{ opacity: 1, rotateX: 0 }} transition={{ duration: 0.3 }}>
            <Link href="/about" className="flex items-center gap-2 text-base font-medium text-gray-950">
              {t('centro_demostrador')}
              <ChevronUp className="rotate-180 w-3.5" />
            </Link>
            <div className="ml-4 mt-2 flex flex-col gap-2">
              {aboutLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-gray-800">
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Otros links móviles */}
          {links.map(({ href, label }, idx) => (
            <motion.div key={href} initial={{ opacity: 0, rotateX: -90 }} animate={{ opacity: 1, rotateX: 0 }} transition={{ duration: 0.15, ease: 'easeInOut', rotateX: { duration: 0.3, delay: idx * 0.1 } }}>
              <Link href={href} className="text-base font-medium text-gray-950">{label}</Link>
            </motion.div>
          ))}

          <MobileLanguageSelector />
        </div>
      </Disclosure.Panel>
    );
  }

  return (
    <Disclosure as="header" className="pt-8 sm:pt-12">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 items-center">
          <Link href="/" title={t('home')}>
            <Logo className="h-9 sm:h-12 lg:h-16 w-auto" />
          </Link>
          {banner && <div className="hidden lg:flex">{banner}</div>}
        </div>
        <DesktopNav />
        <MobileNavButton />
      </div>
      <MobileNav />
    </Disclosure>
  );
}