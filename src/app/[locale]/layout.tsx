import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: {
    template: '%s - OneHealth DataSpace',
    default: 'OneHealth DataSpace',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = React.PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ params, children }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap"
        />
      </head>

      <body
        className="bg-[#f5fcfe] text-gray-950 antialiased"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}