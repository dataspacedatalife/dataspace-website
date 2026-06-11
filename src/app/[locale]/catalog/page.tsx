import { Suspense } from 'react';
import { CatalogoDeDatos } from './CatalogClient';
import { type Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('catalog');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function CatalogoDeDatosPage() {
  return (
    <Suspense>
      <CatalogoDeDatos />
    </Suspense>
  );
}