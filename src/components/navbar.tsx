'use client';

import { Disclosure } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { useEffect, useId, useRef, useState } from 'react';
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
  'absolute left-0 top-full w-52 flex-col rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-lg shadow-lg overflow-hidden z-50';

const dropdownItemClass =
  'px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-[#005467]/10 hover:text-[#005467] focus-visible:bg-[#005467]/10 focus-visible:text-[#005467] focus-visible:outline-none';

const languageDropdownClass =
  'absolute right-0 top-full mt-2 w-44 flex flex-col rounded-2xl border border-gray-200/60 bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden z-50 transition-all duration-200';

const languageItemClass =
  'w-full text-left flex items-center justify-between px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-[#005467]/10 hover:text-[#005467] focus-visible:bg-[#005467]/10 focus-visible:text-[#005467] focus-visible:outline-none active:scale-[0.98]';

  
function useNavDisclosure<TTrigger extends HTMLElement>() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<TTrigger>(null);

  const groupProps = {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
      if (!containerRef.current?.contains(event.relatedTarget as Node)) {
        setOpen(false);
      }
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    },
  };

  return { open, setOpen, containerRef, triggerRef, groupProps };
}

function NavDropdown({
  href,
  external,
  label,
  items,
}: {
  href: string;
  external?: boolean;
  label: string;
  items: { href: string; label: string; external?: boolean }[];
}) {
  const { open, containerRef, triggerRef, groupProps } =
    useNavDisclosure<HTMLAnchorElement>();
  const panelId = useId();
  const pathname = usePathname();

  return (
    <div ref={containerRef} className="relative flex" {...groupProps}>
      <Link
        ref={triggerRef}
        href={href}
        target={external ? '_blank' : undefined}
        className={navItemClass}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
      >
        {label}
        <ChevronUp
          aria-hidden="true"
          className={`ml-0.5 h-4 w-4 transition-transform duration-300 ${
            open ? '' : 'rotate-180'
          }`}
        />
      </Link>

      <div
        id={panelId}
        role="group"
        aria-label={label}
        className={`${dropdownClass} ${open ? 'flex' : 'hidden'}`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            aria-current={pathname === item.href ? 'page' : undefined}
            className={dropdownItemClass}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LanguageSelector() {
  const t = useTranslations('Navbar');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { open, setOpen, containerRef, triggerRef, groupProps } =
    useNavDisclosure<HTMLButtonElement>();
  const panelId = useId();

  const currentKey =
    languageOptions.find(({ code }) => code === currentLocale)?.key ?? 'idioma';

  function switchLanguage(lang: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: lang });
  }

  return (
    <div
      ref={containerRef}
      className="relative flex hover:z-50 focus-within:z-50"
      {...groupProps}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t('cambiar_idioma')}
        onClick={() => setOpen((value) => !value)}
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
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#005467]/50
        "
      >
        <span className="whitespace-nowrap">{t(currentKey)}</span>
      </button>

      <div
        id={panelId}
        role="group"
        aria-label={t('idioma')}
        className={`${languageDropdownClass} ${
          open
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2'
        }`}
      >
        <div className="px-3 py-2 text-xs text-gray-400 border-b border-gray-100">
          {t('idioma')}
        </div>

        {languageOptions.map(({ code, key }) => (
          <button
            key={code}
            type="button"
            aria-current={currentLocale === code ? 'true' : undefined}
            className={`${languageItemClass} ${
              currentLocale === code
                ? 'font-semibold bg-[#005467]/10 text-[#005467]'
                : ''
            }`}
            onClick={() => switchLanguage(code)}
          >
            <span>{t(key)}</span>
            {currentLocale === code && (
              <span aria-hidden="true" className="text-[#005467] text-xs">
                ✓
              </span>
            )}
          </button>
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
      <p className="text-base font-medium text-gray-950">
        <span aria-hidden="true">🌐</span> {t('idioma')}
      </p>

      <div
        className="ml-4 flex flex-col gap-2"
        role="group"
        aria-label={t('idioma')}
      >
        {languageOptions.map(({ code, key }) => (
          <button
            key={code}
            type="button"
            aria-current={currentLocale === code ? 'true' : undefined}
            className={`text-left text-sm text-gray-800 transition-colors duration-200 hover:text-[#005467] hover:underline focus-visible:text-[#005467] focus-visible:underline focus-visible:outline-none ${
              currentLocale === code ? 'font-semibold' : ''
            }`}
            onClick={() => switchLanguage(code)}
          >
            {t(key)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const links = [
    {
      href: '/training',
      label: t('training'),
    },
  ];

  const techLinks = [
    {
      href: 'https://dl-cesga.srv.cesga.es/',
      label: t('share'),
      external: true,
    },
    {
      href: 'https://hpc.dataspace.cesga.es/',
      label: t('compute'),
      external: true,
    },
    {
      href: 'https://bigdata.dataspace.cesga.es/',
      label: t('analyze'),
      external: true,
    },
    {
      href: 'https://storage.dataspace.cesga.es/',
      label: t('store'),
      external: true,
    },
    { href: 'http://cloud.srv.cesga.es/', label: t('deliver'), external: true },
  ];

  const aboutLinks = [
    { href: '/about', label: t('saber_mas') },
    { href: '/what', label: t('que_es_un_espacio') },
    {
      href: 'https://dspacer-cesga.es/portal',
      label: t('dspacer'),
      external: true,
    },
    { href: '/team', label: t('el_equipo') },
    { href: '/faq', label: t('preguntas_frecuentes') },
  ];

  const latestLinks = [
    { href: '/events', label: t('eventos') },
    { href: '/blog', label: t('blog') },
  ];

  function DesktopNav() {
    return (
      <nav
        aria-label={t('menu_principal')}
        className="hidden lg:flex items-center justify-end gap-1 flex-1"
      >
        <NavDropdown
          href="/about"
          label={t('centro_demostrador')}
          items={aboutLinks}
        />

        <Link
          href="/how"
          className={navItemClass}
          aria-current={pathname === '/how' ? 'page' : undefined}
        >
          {t('participa')}
        </Link>

        <Link
          href="/catalog"
          className={navItemClass}
          aria-current={pathname === '/catalog' ? 'page' : undefined}
        >
          {t('catalogo')}
        </Link>

        <NavDropdown
          href="https://dashboard.dataspace.cesga.es/"
          external
          label={t('tecnologias')}
          items={techLinks}
        />

        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={navItemClass}
            aria-current={pathname === href ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}

        <NavDropdown href="/events" label={t('latest')} items={latestLinks} />

        <LanguageSelector />
      </nav>
    );
  }

  function MobileNavButton() {
    return (
      <Disclosure.Button
        ref={hamburgerRef}
        className="lg:hidden flex items-center justify-center rounded-xl p-3 bg-white/90 backdrop-blur-md border border-gray-200/70 shadow-sm hover:bg-[#005467]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005467]/50"
      >
        {({ open }) => (
          <>
            <span className="sr-only">
              {open ? t('cerrar_menu') : t('abrir_menu')}
            </span>
            {open ? (
              <XMarkIcon aria-hidden="true" className="h-7 w-7" />
            ) : (
              <Bars2Icon aria-hidden="true" className="h-7 w-7" />
            )}
          </>
        )}
      </Disclosure.Button>
    );
  }

  function MobileNav({ open, close }: { open: boolean; close: () => void }) {
    useEffect(() => {
      if (!open) return;

      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
          close();
          hamburgerRef.current?.focus();
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, close]);

    return (
      <Disclosure.Panel className="lg:hidden">
        <div className="mx-4 mt-4 rounded-2xl bg-white/90 backdrop-blur-xl shadow-lg border border-gray-200/60 p-5">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label={t('menu_movil')} className="flex flex-col gap-2">
              <Disclosure>
                {({ open: sectionOpen }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-gray-900 hover:bg-[#005467]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005467]/50">
                      {t('centro_demostrador')}
                      <ChevronUp
                        aria-hidden="true"
                        className={`h-5 w-5 transition-transform ${
                          sectionOpen ? '' : 'rotate-180'
                        }`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="ml-4 flex flex-col pb-2">
                      {aboutLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          aria-current={pathname === href ? 'page' : undefined}
                          className="rounded-lg px-3 py-2 text-gray-700 hover:bg-[#005467]/10 hover:text-[#005467] focus-visible:bg-[#005467]/10 focus-visible:text-[#005467] focus-visible:outline-none"
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
                aria-current={pathname === '/how' ? 'page' : undefined}
                className="rounded-xl px-3 py-3 font-medium text-gray-900 hover:bg-[#005467]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005467]/50"
              >
                {t('participa')}
              </Link>

              <Link
                href="/catalog"
                aria-current={pathname === '/catalog' ? 'page' : undefined}
                className="rounded-xl px-3 py-3 font-medium text-gray-900 hover:bg-[#005467]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005467]/50"
              >
                {t('catalogo')}
              </Link>

              <Disclosure>
                {({ open: sectionOpen }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-gray-900 hover:bg-[#005467]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005467]/50">
                      {t('tecnologias')}
                      <ChevronUp
                        aria-hidden="true"
                        className={`h-5 w-5 transition-transform ${
                          sectionOpen ? '' : 'rotate-180'
                        }`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="ml-4 flex flex-col pb-2">
                      {techLinks.map(({ href, label, external }) => (
                        <Link
                          key={href}
                          href={href}
                          target={external ? '_blank' : undefined}
                          className="rounded-lg px-3 py-2 text-gray-700 hover:bg-[#005467]/10 hover:text-[#005467] focus-visible:bg-[#005467]/10 focus-visible:text-[#005467] focus-visible:outline-none"
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
                  aria-current={pathname === href ? 'page' : undefined}
                  className="rounded-xl px-3 py-3 font-medium text-gray-900 hover:bg-[#005467]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005467]/50"
                >
                  {label}
                </Link>
              ))}

              <Disclosure>
                {({ open: sectionOpen }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-gray-900 hover:bg-[#005467]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005467]/50">
                      {t('latest')}
                      <ChevronUp
                        aria-hidden="true"
                        className={`h-5 w-5 transition-transform ${
                          sectionOpen ? '' : 'rotate-180'
                        }`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="ml-4 flex flex-col pb-2">
                      {latestLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          aria-current={pathname === href ? 'page' : undefined}
                          className="rounded-lg px-3 py-2 text-gray-700 hover:bg-[#005467]/10 hover:text-[#005467] focus-visible:bg-[#005467]/10 focus-visible:text-[#005467] focus-visible:outline-none"
                        >
                          {label}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <MobileLanguageSelector />
            </nav>
          </motion.div>
        </div>
      </Disclosure.Panel>
    );
  }

  return (
    <Disclosure as="header" className="sticky top-0 z-50 pt-4 sm:pt-6">
      {({ open, close }) => (
        <>
          <div className="flex items-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 sm:gap-8">
              <Link
                href="/"
                title={t('home')}
                aria-label={t('home')}
                className="flex items-center"
              >
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

          <MobileNav open={open} close={close} />
        </>
      )}
    </Disclosure>
  );
}
