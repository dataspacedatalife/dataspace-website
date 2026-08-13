import Image from 'next/image';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('demos.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

const useCaseKeys = ['item1', 'item2', 'item3'] as const;

async function Header() {
  const t = await getTranslations('demos');

  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        {t('header.title')}
      </Heading>

      <Lead className="mt-10 text-center">
        {t('header.lead')}
      </Lead>

      {/* USE CASES */}
      <section className="mt-16 mb-20 space-y-20">
        {useCaseKeys.map((key, index) => {
          const reversed = index % 2 === 1;

          return (
            <div
              key={key}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              {/* IMAGE */}
              <div
                className={`flex justify-center ${reversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
              >
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-80 w-80 rounded-full bg-[#009AB8]/20 blur-3xl" />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={t(`useCases.${key}.image`)}
                      alt={t(`useCases.${key}.title`)}
                      width={900}
                      height={700}
                      className="h-auto w-full object-cover"
                    />

                    <span className="absolute top-3 right-3 rounded-full bg-[#005467] px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-md">
                      {t(`useCases.${key}.badge`)}
                    </span>
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className={reversed ? 'lg:order-1' : 'lg:order-2'}>
                <h2 className="text-3xl font-medium tracking-tight">
                  {t(`useCases.${key}.title`)}
                </h2>

                <p className="mt-6 text-lg/7 text-gray-700">
                  {t(`useCases.${key}.text`)}
                </p>

                <Button
                  href={t(`useCases.${key}.demoUrl`)}
                  target="_blank"
                  className="mt-6"
                >
                  {t('demoButton')}
                </Button>
              </div>
            </div>
          );
        })}
      </section>
    </Container>
  );
}

export default function Demos() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />

      <Container>
        <Navbar />
      </Container>

      <Header />

      <Footer />
    </main>
  );
}
