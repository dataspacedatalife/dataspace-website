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
  { code: 'gl', key: 'galego' },
] as const satisfies { code: Locale; key: string }[];

const navItemClass =
  'relative flex items-center px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-300 hover:text-[#005467] after:absolute after:left-3 after:bottom-1 after:h-[2px] after:w-0 after:bg-[#005467] after:transition-all after:duration-300 hover:after:w-[calc(100%-1.5rem)]';

const dropdownClass =
  'absolute left-0 top-full hidden w-52 flex-col rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-lg shadow-lg overflow-hidden group-hover:flex z-50';

const dropdownItemClass =
  'px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-[#005467]/10 hover:text-[#005467]';

const languageDropdownClass =
  'absolute right-0 top-full mt-2 w-44 flex flex-col rounded-2xl border border-gray-200/60 bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden z-50 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0';

const languageItemClass =
  'flex items-center justify-between px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-[#005467]/10 hover:text-[#005467] active:scale-[0.98]';

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
    <div className="relative group flex hover:z-50">
      <span
        className="
          flex items-center gap-2
          px-5 py-1 mx-2
          text-m font-medium
          text-gray-600
          rounded-xl
          border border-gray-200/60
          bg-white/70 backdrop-blur-md
          shadow-sm
          cursor-pointer
          transition-all duration-300
          hover:text-[#005467]
          hover:bg-[#005467]/10
          hover:border-[#005467]/20
        "
      >
        <span className="whitespace-nowrap">{t(currentKey)}</span>
      </span>

      <div className={languageDropdownClass}>
        <div className="px-3 py-2 text-xs text-gray-400 border-b border-gray-100">
          {t('idioma')}
        </div>

        {languageOptions.map(({ code, key }) => (
          <Link
            key={code}
            href="#"
            className={`${languageItemClass} ${currentLocale === code
              ? 'font-semibold bg-[#005467]/10 text-[#005467]'
              : ''
              }`}
            onClick={(e) => {
              e.preventDefault();
              switchLanguage(code);
            }}
          >
            <span>{t(key)}</span>
            {currentLocale === code && (
              <span className="text-[#005467] text-xs">✓</span>
            )}
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
    <div className="flex flex-col gap-2 pt-4 border-t">
      <p className="text-base font-medium text-gray-950">🌐 {t('idioma')}</p>

      <div className="ml-4 flex flex-col gap-2">
        {languageOptions.map(({ code, key }) => (
          <Link
            key={code}
            href="#"
            className={`text-sm text-gray-800 transition-colors duration-200 hover:text-[#005467] hover:underline ${currentLocale === code ? 'font-semibold' : ''
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
    {
      href: '/training',
      label: t('training'),
    },
  ];

  const techLinks = [
    { href: 'https://dl-cesga.srv.cesga.es/', label: t('share'), external: true },
    { href: 'https://hpc.dataspace.cesga.es/', label: t('compute'), external: true },
    { href: 'https://bigdata.dataspace.cesga.es/', label: t('analyze'), external: true },
    { href: 'https://storage.dataspace.cesga.es/', label: t('store'), external: true },
    { href: 'http://cloud.srv.cesga.es/', label: t('deliver'), external: true },
    
  ];

  const aboutLinks = [
    { href: '/about', label: t('saber_mas') },
    { href: '/what', label: t('que_es_un_espacio') },
     { href: 'https://dspacer-cesga.es/portal', label: t('dspacer'), external: true },
    { href: '/team', label: t('el_equipo') },
    { href: '/faq', label: t('preguntas_frecuentes') },
  ];

  const joinLinks = [
    { href: '/how', label: t('adhesion') },
    { href: '/kitEdD', label: t('kit') },
  ];

  const latestLinks = [
    { href: '/events', label: t('eventos') },
    { href: '/blog', label: t('blog') },
  ];

  function DesktopNav() {
    return (
      <nav className="hidden lg:flex items-center justify-end gap-1 flex-1">
        <div className="relative group flex">
          <Link href="/about" className={navItemClass}>
            {t('centro_demostrador')}
            <ChevronUp className="ml-0.5 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:rotate-0" />
          </Link>

          <div className={dropdownClass}>
            {aboutLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={dropdownItemClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative group flex">
          <Link href="/how" className={navItemClass}>
            {t('participa')}

          </Link>


        </div>


        <Link href="/catalog" className={navItemClass}>
          {t('catalogo')}
        </Link>


        <div className="relative group flex">
          <Link href="https://dashboard.dataspace.cesga.es/" className={navItemClass} target="_blank">
            {t('tecnologias')}
            <ChevronUp className="ml-0.5 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:rotate-0" />
          </Link>

          <div className={dropdownClass}>
            {techLinks.map(({ href, label, external }) => (
              <Link key={href} href={href} target={external ? '_blank' : undefined} className={dropdownItemClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={navItemClass}>
            {label}
          </Link>
        ))}

        <div className="relative group flex">
          <Link href="/events" className={navItemClass}>
            {t('latest')}
            <ChevronUp className="ml-0.5 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:rotate-0" />
          </Link>

          <div className={dropdownClass}>
            {latestLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={dropdownItemClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>



        <LanguageSelector />
      </nav>
    );
  }

  function MobileNavButton() {
    return (
      <Disclosure.Button className="lg:hidden flex items-center justify-center rounded-xl p-3 bg-white/90 backdrop-blur-md border border-gray-200/70 shadow-sm hover:bg-[#005467]/10">
        {({ open }) =>
          open ? (
            <span className="h-7 w-7 flex items-center justify-center">✕</span>
          ) : (
            <Bars2Icon className="h-7 w-7" />
          )
        }
      </Disclosure.Button>
    );
  }

function MobileNav() {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="mx-4 mt-4 rounded-2xl bg-white/90 backdrop-blur-xl shadow-lg border border-gray-200/60 p-5">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-2"
        >

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-gray-900 hover:bg-[#005467]/10">
                  {t('centro_demostrador')}
                  <ChevronUp
                    className={`h-5 w-5 transition-transform ${
                      open ? '' : 'rotate-180'
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="ml-4 flex flex-col pb-2">
                  {aboutLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-lg px-3 py-2 text-gray-700 hover:bg-[#005467]/10 hover:text-[#005467]"
                    >
                      {label}
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Link
            href="/how"
            className="rounded-xl px-3 py-3 font-medium text-gray-900 hover:bg-[#005467]/10"
          >
            {t('participa')}
          </Link>

    
          <Link
            href="/catalog"
            className="rounded-xl px-3 py-3 font-medium text-gray-900 hover:bg-[#005467]/10"
          >
            {t('catalogo')}
          </Link>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-gray-900 hover:bg-[#005467]/10">
                  {t('tecnologias')}
                  <ChevronUp
                    className={`h-5 w-5 transition-transform ${
                      open ? '' : 'rotate-180'
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="ml-4 flex flex-col pb-2">
                  {techLinks.map(({ href, label, external }) => (
                    <Link
                      key={href}
                      href={href}
                      target={external ? '_blank' : undefined}
                      className="rounded-lg px-3 py-2 text-gray-700 hover:bg-[#005467]/10 hover:text-[#005467]"
                    >
                      {label}
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl px-3 py-3 font-medium text-gray-900 hover:bg-[#005467]/10"
            >
              {label}
            </Link>
          ))}

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-gray-900 hover:bg-[#005467]/10">
                  {t('latest')}
                  <ChevronUp
                    className={`h-5 w-5 transition-transform ${
                      open ? '' : 'rotate-180'
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="ml-4 flex flex-col pb-2">
                  {latestLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-lg px-3 py-2 text-gray-700 hover:bg-[#005467]/10 hover:text-[#005467]"
                    >
                      {label}
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <MobileLanguageSelector />
        </motion.div>
      </div>
    </Disclosure.Panel>
  );
}

  return (
    <Disclosure as="header" className="sticky top-0 z-50 pt-4 sm:pt-6">
      <div className="flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/" title={t('home')} className="flex items-center">
            <Logo className="h-9 sm:h-12 lg:h-16 w-auto object-contain shrink-0" />
          </Link>

          {banner && <div className="hidden lg:flex">{banner}</div>}
        </div>

        <div className="flex-1 flex items-center justify-end gap-2">
          <DesktopNav />

          <div className="ml-4">
            <MobileNavButton />
          </div>
        </div>
      </div>

      <MobileNav />
    </Disclosure>
  );
}