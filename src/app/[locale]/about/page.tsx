import type { Metadata } from 'next';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { AnimatedNumber } from '@/components/animated-number';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';
import EntornoDemostrador from '../../../../public/demostrador/demostrador_entorno.png';
import EntornoDemostradorIngles from '../../../../public/demostrador/demostrador_entorno_ingles.png';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about');

  return {
    title: t('header.title'),
  };
}

async function Header() {
  const t = await getTranslations('about');
  const locale = await getLocale();

  const imageSrc =
    locale === 'en' ? EntornoDemostradorIngles : EntornoDemostrador;
  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        {t('header.title')}
      </Heading>
      <Lead className="mt-10 text-center">{t('header.lead')}</Lead>

      {/* Imagen + texto lado a lado */}
      <section className="mt-16 mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Imagen primero en móvil */}
        <div className="mb-10 lg:mb-0 lg:order-2 flex justify-center">
          <Image src={imageSrc} alt={t('header.imageAlt')} className="w-full" />
        </div>

        {/* Texto */}
        <div className="max-w-2xl lg:order-1">
          <h2 className="text-3xl tracking-tight text-gray-900">
            {t('objective.title')}
          </h2>
          <p className="mt-6 text-lg/7 text-gray-700">{t('objective.text1')}</p>
          <p className="mt-4 text-lg/7 text-gray-700">{t('objective.text2')}</p>

          {/* Motivación */}
          <h2 className="mt-10 text-3xl tracking-tight text-gray-900">
            {t('motivation.title')}
          </h2>
          <p className="mt-6 text-lg/7 text-gray-600">{t('motivation.text')}</p>
        </div>
      </section>

      {/* Impacto del proyecto */}
      <div className="mb-16 max-lg:mt-16 lg:col-span-2">
        <Subheading>{t('impact.title')}</Subheading>
        <hr className="mt-6 border-t border-gray-200" />
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">{t('impact.useCases')}</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={7} />
            </dd>
          </div>
          <div className="flex flex-col items-center text-center gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">{t('impact.sectors')}</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={4} />
            </dd>
          </div>
          <div className="flex flex-col items-center text-center gap-y-2">
            <dt className="text-sm/6 text-gray-600">
              {t('impact.organizations')}
            </dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={6} />
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-12  pt-6">
        <Subheading>{t('funding.title')}</Subheading>
        <hr className="mt-6 mb-6 border-t border-gray-200" />

        <p className="mt-6 text-lg/7 text-gray-700">{t('funding.call')}</p>
        <p className="mt-4 text-lg/7 text-gray-700">{t('funding.grant')}</p>
        <p className="mt-4 mb-4 text-lg/7 text-gray-700">
          {t('funding.program')}
        </p>
        <p className="text-gray-700 mb-4 whitespace-pre-line">
          {t('funding.details')}
        </p>
        <p className="text-gray-700">
          <Button href={t('funding.linkUrl')} target="_blank">
            {t('funding.linkText')}
          </Button>
        </p>
      </div>
    </Container>
  );
}

export default function About() {
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
