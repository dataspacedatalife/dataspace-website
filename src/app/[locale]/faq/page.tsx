import { Suspense } from 'react';
import FAQClient from './FAQClient';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('faq');
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function FAQPage() {
  return (
    <Suspense>
      <FAQClient />
    </Suspense>
  );
}