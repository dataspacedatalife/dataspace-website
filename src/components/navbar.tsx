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
  'relative flex items-center px-3 py-2 text-base font-medium text-gray-950 transition-colors duration-300 hover:text-[#005467] after:absolute after:left-3 after:bottom-1 after:h-[2px] after:w-0 after:bg-[#005467] after:transition-all after:duration-300 hover:after:w-[calc(100%-1.5rem)]';

const dropdownClass =
  'absolute left-0 top-full hidden w-52 flex-col rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-lg shadow-lg overflow-hidden group-hover:flex z-50';

const dropdownItemClass =
  'px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-[#005467]/10 hover:text-[#005467]';


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
      <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-950 cursor-pointer transition-colors duration-300 hover:text-[#005467]">
        🌐 {t(currentKey)}
      </span>

      <div className={dropdownClass}>
        {languageOptions.map(({ code, key }) => (
          <Link
            key={code}
            href="#"
            className={`${dropdownItemClass} ${
              currentLocale === code ? 'font-semibold bg-[#005467]/10' : ''
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
    <div className="flex flex-col gap-2 pt-4 border-t">
      <p className="text-base font-medium text-gray-950">🌐 {t('idioma')}</p>

      <div className="ml-4 flex flex-col gap-2">
        {languageOptions.map(({ code, key }) => (
          <Link
            key={code}
            href="#"
            className={`text-sm text-gray-800 transition-colors duration-200 hover:text-[#005467] hover:underline ${
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
    { href: 'https://www.youtube.com/playlist?list=PLvAJrckik_UPT2zDxHGaO5jOd27q1hBIz', label: t('training') },
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
    { href: '/team', label: t('el_equipo') },
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
            <div className="whitespace-nowrap">{t('centro_demostrador')}</div>
            <ChevronUp className="ml-0.5 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:rotate-0" />
          </Link>

          <div className={dropdownClass}>
            {aboutLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-3 text-base text-gray-700 transition-colors duration-200 hover:bg-[#005467]/10 hover:text-[#005467]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/catalog" className={navItemClass}>
          {t('catalogo')}
        </Link>

        <div className="relative group flex">
          <Link href="/dataspace" className={navItemClass}>
            <div className="whitespace-nowrap">{t('tecnologias')}</div>
            <ChevronUp className="ml-0.5 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:rotate-0" />
          </Link>

          <div className={dropdownClass}>
            {techLinks.map(({ href, label, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                className="px-4 py-3 text-base text-gray-700 transition-colors duration-200 hover:bg-[#005467]/10 hover:text-[#005467]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative group flex">
          <Link href="/how" className={navItemClass}>
            <div className="whitespace-nowrap">{t('participa')}</div>
            <ChevronUp className="ml-0.5 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:rotate-0" />
          </Link>

          <div className={dropdownClass}>
            {joinLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-3 text-base text-gray-700 transition-colors duration-200 hover:bg-[#005467]/10 hover:text-[#005467]">
                {label}
              </Link>
            ))}
          </div>
         
        </div>
         <div className="relative group flex">
          <Link href="/how" className={navItemClass}>
            <div className="whitespace-nowrap">{t('latest')}</div>
            <ChevronUp className="ml-0.5 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:rotate-0" />
          </Link>

          <div className={dropdownClass}>
            {latestLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-3 text-base text-gray-700 transition-colors duration-200 hover:bg-[#005467]/10 hover:text-[#005467]">
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

        <LanguageSelector />
      </nav>
    );
  }


  function MobileNavButton() {
    return (
      <Disclosure.Button
        className="lg:hidden flex items-center justify-center rounded-xl p-3 
                   bg-white/90 backdrop-blur-md 
                   border border-gray-200/70 shadow-sm
                   transition-all duration-200 
                   hover:bg-[#005467]/10 active:scale-95"
        aria-label="Toggle menu"
      >
        {({ open }) =>
          open ? (
            <span className="h-7 w-7 flex items-center justify-center text-gray-800">
              ✕
            </span>
          ) : (
            <Bars2Icon className="h-7 w-7 text-gray-800" />
          )
        }
      </Disclosure.Button>
    );
  }
function MobileNav() {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="mx-4 mt-4 rounded-2xl bg-white/90 backdrop-blur-xl shadow-lg border border-gray-200/60 p-5 max-h-[80vh] overflow-y-auto">

        {/*ANIMACIÓN GLOBAL */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >

          <div>
            <Link href="/about" className="flex items-center gap-2 text-base font-medium text-gray-950 hover:text-[#005467]">
              {t('centro_demostrador')}
              <ChevronUp className="h-4 w-4 rotate-180" />
            </Link>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              {aboutLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-gray-800 hover:text-[#005467]">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/catalog" className="text-base font-medium">
            {t('catalogo')}
          </Link>

          <div>
            <Link href="/dataspace" className="flex items-center gap-2 text-base font-medium">
              {t('tecnologias')}
            </Link>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              {techLinks.map(({ href, label, external }) => (
                <Link key={href} href={href} target={external ? '_blank' : undefined} className="text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link href="/how" className="flex items-center gap-2 text-base font-medium">
              {t('participa')}
            </Link>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              {joinLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link href="/how" className="flex items-center gap-2 text-base font-medium">
              {t('latest')}
            </Link>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              {latestLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-base font-medium">
              {label}
            </Link>
          ))}

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
          <Link href="/" title={t('home')}>
            <Logo className="h-9 w-auto sm:h-12 lg:h-16" />
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