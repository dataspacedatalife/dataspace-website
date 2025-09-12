import {
  FileLock,
  Globe,
  Landmark,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('what.metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

async function Header() {
  const t = await getTranslations('what');
  const tHeader = await getTranslations('what.header');

  const features = [
    {
      icon: <ShieldCheck className="text-blue-600 w-16 h-16 mb-6" />,
      title: t('features.security.title'),
      description: t('features.security.description'),
      color: 'bg-blue-50',
    },
    {
      icon: <Network className="text-green-600 w-16 h-16 mb-6" />,
      title: t('features.interoperability.title'),
      description: t('features.interoperability.description'),
      color: 'bg-green-50',
    },
    {
      icon: <FileLock className="text-purple-600 w-16 h-16 mb-6" />,
      title: t('features.privacy.title'),
      description: t('features.privacy.description'),
      color: 'bg-purple-50',
    },
    {
      icon: <Landmark className="text-yellow-600 w-16 h-16 mb-6" />,
      title: t('features.governance.title'),
      description: t('features.governance.description'),
      color: 'bg-yellow-50',
    },
    {
      icon: <Users className="text-pink-600 w-16 h-16 mb-6" />,
      title: t('features.collaboration.title'),
      description: t('features.collaboration.description'),
      color: 'bg-pink-50',
    },
    {
      icon: <Globe className="text-teal-600 w-16 h-16 mb-6" />,
      title: t('features.sovereignty.title'),
      description: t('features.sovereignty.description'),
      color: 'bg-teal-50',
    },
  ];

  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        {tHeader('title')}
      </Heading>
      <Lead className="mt-10 text-center">{tHeader('lead')}</Lead>

      {/* Imagen + texto lado a lado */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-medium tracking-tight">
            {t('objective.title')}
          </h2>
          <p className="mt-6 text-lg/7 text-gray-600">{t('objective.text')}</p>
        </div>

        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-medium tracking-tight">
            {t('motivation.title')}
          </h2>
          <p className="mt-6 text-lg/7 text-gray-600">{t('motivation.text')}</p>
        </div>
      </section>

      {/* Sección con iconos grandes y coloridos */}
      <section className="mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`flex flex-col items-center ${feature.color} rounded-2xl p-8 shadow-md text-center`}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default function What() {
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
