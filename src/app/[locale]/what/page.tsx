import {
  FileLock,
  Globe,
  Landmark,
  Network,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import type { ElementType } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('what.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

/* TIPADO SEGURO */
type Principle = {
  key: 'sovereignty' | 'interoperability' | 'governance' | 'trust' | 'value';
  icon: ElementType;
};

async function Header() {
  const t = await getTranslations('what');
  const tHeader = await getTranslations('what.header');

  const principles: Principle[] = [
    { key: 'sovereignty', icon: ShieldCheck },
    { key: 'interoperability', icon: Network },
    { key: 'governance', icon: Landmark },
    { key: 'trust', icon: FileLock },
    { key: 'value', icon: Globe },
  ];

  /* 🔥 FIX CLAVE: acceso correcto a nested translations */
  const getPrinciple = (key: Principle['key']) => ({
    title: t(`principles.${key}.title`),
    description: t(`principles.${key}.description`),
  });

  return (
    <Container className="mt-16">
      {/* HEADER */}
      <Heading as="h1" className="text-center font-heading text-[#009AB8]">
        {tHeader('title')}
      </Heading>

      <Lead className="mt-10 text-center">
        {tHeader('lead')}
      </Lead>

      {/* DEFINICIÓN */}
      <section className="mt-16">
        <h2 className="text-3xl font-medium tracking-tight">
          {t('definition.title')}
        </h2>
        <p className="mt-6 text-lg leading-7 text-gray-600">
          {t('definition.text')}
        </p>
      </section>

      {/* IMPORTANCIA */}
      <section className="mt-12">
        <h2 className="text-3xl font-medium tracking-tight">
          {t('importance.title')}
        </h2>

        <p className="mt-6 text-lg leading-7 text-gray-600">
          {t('importance.paragraph1')}
        </p>

        <p className="mt-6 text-lg leading-7 text-gray-600">
          {t('importance.paragraph2')}
        </p>
      </section>

      {/* PRINCIPIOS */}
      <section className="mt-16 mb-20">
        <h2 className="text-3xl font-medium tracking-tight text-center mb-12">
          {t('principles.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const principle = getPrinciple(item.key);

            const isLast = index === principles.length - 1;

            return (
              <div
                key={item.key}
                className={`
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
                  ${isLast ? 'md:col-span-2' : ''}
                `}
              >
                <div className="w-full max-w-sm flex flex-col items-center">
                  <div className="w-16 h-16 mb-6 rounded-full bg-[#e6f7fa] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#009AB8]" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-slate-800">
                    {principle.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
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