import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { Link } from '@/components/link';
import clsx from 'clsx';

import useCasesData from '../catalog/data/useCases.json';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('catalog');
  const t2 = await getTranslations('use-cases');

  return {
    title: t('title'),
    description: t2('metadata.description'),
  };
}

async function Header() {
  const t = await getTranslations('catalog');
  const t2 = await getTranslations('use-cases');

  return (
    <Container className="mt-16 flex flex-col items-center">
      <Heading as="h1" className="text-4xl font-extrabold text-center">
        {t('title')}
      </Heading>

      <Lead className="mt-6 text-center">
        {t2('metadata.description')}
      </Lead>
    </Container>
  );
}

async function UseCaseGrid() {
  const casos = Object.entries(useCasesData);

  const colors = [
    'bg-gradient-to-br from-sky-100 via-sky-100 to-cyan-300',
  ];

  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {casos.map(([id, caso], index) => (
          <Link
            key={id}
            href={`/catalog/${id}`}
            className="w-full"
          >
            <div
              className={clsx(
                'flex flex-col justify-between rounded-2xl border border-gray-200 p-10 shadow-sm transition hover:shadow-md hover:scale-[1.02] duration-200 h-full',
                colors[index % colors.length]
              )}
            >
              <div className="flex h-full flex-col text-left">

  <div>
    <h3 className="text-3xl font-bold text-gray-900">
      {caso.acronimo || caso.denominacion_oficial}
    </h3>

    <p className="mt-4 text-lg leading-relaxed text-gray-700">
      {caso.denominacion_oficial}
    </p>

    <div className="mt-2">
      <span className="text-sm font-medium text-gray-600">
        Entidad promotora: {caso.entidad_promotora}
      </span>
    </div>
  </div>

  {/* Categoría siempre abajo */}
  <div className="mt-auto pt-6">
    <span className="inline-flex items-center rounded-lg bg-[#009AB8] px-4 py-2 text-sm font-semibold text-white shadow-sm">
      {caso.categoria_caso_uso}
    </span>
  </div>

</div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default function CatalogPage() {
  return (
    <main className="overflow-hidden min-h-screen relative">
      <GradientBackground />

      <Container>
        <Navbar />
      </Container>

      <Header />
      <UseCaseGrid />
      <Footer />
    </main>
  );
}