import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('technologies.xdatashare');
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

async function Header() {
  const t = await getTranslations('technologies.xdatashare');
  const tHomeServices = await getTranslations('home.services');

  const services = [
    { key: 'share', title: t('features.shareTitle'), text: tHomeServices('shareWhat') },
    { key: 'analyze', title: t('features.analyzeTitle'), text: tHomeServices('analyzeWhat') },
    { key: 'compute', title: t('features.computeTitle'), text: tHomeServices('computeWhat') },
    { key: 'deliver', title: t('features.deliverTitle'), text: tHomeServices('deliverWhat') },
  ];

  return (
    <Container className="mt-16">
      {/* Título principal */}
      <Heading as="h1" className="text-center">
        {t('header.title')}
      </Heading>
      <Lead className="mt-6 text-center">{t('header.lead')}</Lead>

      {/* Texto explicativo */}
      <section className="mt-20 mb-16">
        <h2 className="text-3xl tracking-tight text-gray-900">
          {t('whatIs.title')}
        </h2>
        <p className="mt-6 text-lg/7 text-gray-700">{t('whatIs.text1')}</p>
        <p className="mt-4 text-lg/7 text-gray-700">{t('whatIs.text2')}</p>
      </section>

      {/* Servicios que incluye */}
      <div className="mb-16">
        <h2 className="text-3xl tracking-tight text-gray-900">
          {t('features.title')}
        </h2>
        <hr className="mt-6 mb-6 border-t border-gray-200" />
        <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
          {services.map((service) => (
            <li key={service.key}>
              <span className="font-semibold text-gray-900">
                {service.title}:
              </span>{' '}
              {service.text}
            </li>
          ))}
          <li>
            <span className="font-semibold text-gray-900">
              {t('features.governanceTitle')}:
            </span>{' '}
            {t('features.governance')}
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default function XDataShare() {
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
