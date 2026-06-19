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
      icon: <ShieldCheck className="text-[#009AB8] w-16 h-16 mb-6" />,
      title: t('features.security.title'),
      description: t('features.security.description'),
      color: 'bg-cyan-50',
    },
    {
      icon: <Network className="text-[#009AB8] w-16 h-16 mb-6" />,
      title: t('features.interoperability.title'),
      description: t('features.interoperability.description'),
      color: 'bg-sky-50',
    },
    {
      icon: <FileLock className="text-[#009AB8] w-16 h-16 mb-6" />,
      title: t('features.privacy.title'),
      description: t('features.privacy.description'),
      color: 'bg-teal-50',
    },
    {
      icon: <Landmark className="text-[#009AB8] w-16 h-16 mb-6" />,
      title: t('features.governance.title'),
      description: t('features.governance.description'),
      color: 'bg-cyan-100',
    },
    {
      icon: <Users className="text-[#009AB8] w-16 h-16 mb-6" />,
      title: t('features.collaboration.title'),
      description: t('features.collaboration.description'),
      color: 'bg-sky-100',
    },
    {
      icon: <Globe className="text-[#009AB8] w-16 h-16 mb-6" />,
      title: t('features.sovereignty.title'),
      description: t('features.sovereignty.description'),
      color: 'bg-teal-100',
    },
  ];

  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center font-heading text-[#009AB8]">
        {tHeader('title')}
      </Heading>

      <Lead className="mt-10 text-center">
        {tHeader('lead')}
      </Lead>

      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-medium tracking-tight">
            {t('objective.title')}
          </h2>
          <p className="mt-6 text-lg/7 text-gray-600">
            {t('objective.text')}
          </p>
        </div>

        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-medium tracking-tight">
            {t('motivation.title')}
          </h2>
          <p className="mt-6 text-lg/7 text-gray-600">
            {t('motivation.text')}
          </p>
        </div>
      </section>
      <section className="mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature) => {
          const Icon = feature.icon.type;

          return (
            <div
              key={feature.title}
              className="
          flex flex-col items-center
          bg-white
          border border-[#009AB8]/15
          rounded-2xl
          p-8
          shadow-sm
          text-center
          hover:shadow-lg
          hover:-translate-y-1
          transition-all duration-300
        "
            >
              {/* ICONO */}
              <div className="w-16 h-16 mb-6 rounded-full bg-[#e6f7fa] flex items-center justify-center">
                <Icon className="w-8 h-8 text-[#009AB8]" />
              </div>

              {/* TÍTULO */}
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                {feature.title}
              </h3>

              {/* TEXTO */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
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