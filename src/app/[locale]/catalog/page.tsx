import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { Link } from '@/components/link';
import clsx from 'clsx';

import { useCasesData } from '../catalog/data/useCases';

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
  const t = await getTranslations('use-cases.cases');

  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {useCasesData.map((caso) => {
          const name = t(`${caso.id}.name`);
          const objective = t(`${caso.id}.objective`);

          // 👇 lógica clave
          const href = caso.url ?? `/datalog/${caso.id}`;
          const isExternal = !!caso.url;

          return (
            <Link
              key={caso.id}
              href={href}
              className="w-full"
              {...(isExternal && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              <div
                className={clsx(
                  'flex flex-col justify-between rounded-2xl border border-gray-200 p-10 shadow-sm transition hover:shadow-md hover:scale-[1.02] duration-200 h-full',
                  caso.color
                )}
              >
                <div className="flex flex-col text-left">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {name}
                  </h3>

                  <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                    {objective}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default function DatalogPage() {
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