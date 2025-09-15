'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
];

export function LanguageSelector() {
  const router = useRouter();
  const currentLocale = useLocale();

  function switchLanguage(lang: string) {
    // Get current path
    const pathname = window.location.pathname;

    // Replace locale in path if it's in the URL
    const segments = pathname.split('/').filter(Boolean);
    if (languages.some((l) => l.code === segments[0])) {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }
    const newPath = '/' + segments.join('/');

    router.push(newPath);
  }

  return (
    <div className="relative group flex">
      <button className="flex left-0 items-center px-4 py-3 text-base font-medium text-gray-950 cursor-pointer">
        🌐 Idioma
      </button>
      <div className="absolute left-0 top-full hidden w-40 flex-col rounded-lg border border-gray-200 bg-white shadow-md group-hover:flex">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            className={`px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-left ${
              currentLocale === code ? 'font-semibold' : ''
            }`}
            onClick={() => switchLanguage(code)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function MobileLanguageSelector() {
  const router = useRouter();
  const currentLocale = useLocale();

  function switchLanguage(lang: string) {
    const pathname = window.location.pathname;
    const segments = pathname.split('/').filter(Boolean);
    if (languages.some((l) => l.code === segments[0])) {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }
    const newPath = '/' + segments.join('/');
    router.push(newPath);
  }

  return (
    <div className="ml-0 flex flex-col gap-2">
      {/* Parent label */}
      <p className="text-base font-medium text-gray-950">🌐 Idioma</p>

      {/* Language options */}
      <div className="ml-4 flex flex-col gap-2">
        {languages.map(({ code, label }) => (
          <a
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
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
