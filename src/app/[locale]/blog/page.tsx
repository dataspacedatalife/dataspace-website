import type { Metadata } from 'next';
import { type Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import { BlogClient } from './BlogClient';

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('blog.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  return (
    <Suspense>
      <BlogClient locale={locale} />
    </Suspense>
  );
}