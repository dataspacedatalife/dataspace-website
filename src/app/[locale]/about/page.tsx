import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { AnimatedNumber } from '@/components/animated-number';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about.metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

async function Header() {
  const t = await getTranslations('about');

  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        {t('header.title')}
      </Heading>

      <Lead className="mt-10 text-center">
        {t('header.lead')}
      </Lead>

      {/* ONE HEALTH GRAPH */}
      <section className="mt-16 mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">

        <div className="mb-10 lg:mb-0 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-square">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#009AB8]/30 blur-3xl" />
            </div>

            <div className="relative w-full h-full rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl shadow-2xl">

              <svg className="absolute inset-0 w-full h-full">

                {/* líneas principales */}
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#009AB8" strokeWidth="5" opacity="0.5" />
                <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="#009AB8" strokeWidth="5" opacity="0.5" />
                <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="#009AB8" strokeWidth="5" opacity="0.5" />

                {/* conexiones secundarias */}
                <line x1="50%" y1="15%" x2="15%" y2="85%" stroke="#009AB8" strokeWidth="2.5" opacity="0.3" />
                <line x1="50%" y1="15%" x2="85%" y2="85%" stroke="#009AB8" strokeWidth="2.5" opacity="0.3" />
                <line x1="15%" y1="85%" x2="85%" y2="85%" stroke="#009AB8" strokeWidth="2.5" opacity="0.3" />

                {/* nodos */}
                <circle cx="50%" cy="15%" r="8" fill="#009AB8" opacity="0.85" />
                <circle cx="15%" cy="85%" r="8" fill="#009AB8" opacity="0.85" />
                <circle cx="85%" cy="85%" r="8" fill="#009AB8" opacity="0.85" />

                {/* centro de la red (SIN favicon) */}
                <circle cx="50%" cy="50%" r="10" fill="#009AB8" opacity="0.95" />

              </svg>

              {/* TEXTO ARRIBA */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
                <div className="text-lg font-semibold text-[#009AB8]">
                  {t('graphic.human')}
                </div>
              </div>

              {/* TEXTO ABAJO IZQUIERDA */}
              <div className="absolute bottom-6 left-4 text-center">
                <div className="text-lg font-semibold text-[#009AB8]">
                   {t('graphic.animal')}
                </div>
              </div>

              {/* TEXTO ABAJO DERECHA */}
              <div className="absolute bottom-6 right-4 text-center">
                <div className="text-lg font-semibold text-[#009AB8]">
                   {t('graphic.environmental')}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div className="max-w-2xl lg:order-1">

          <h2 className="text-3xl tracking-tight text-gray-900">
            {t('objective.title')}
          </h2>

          <p className="mt-6 text-lg/7 text-gray-700">
            {t('objective.text1')}
          </p>

          <p className="mt-4 text-lg/7 text-gray-700">
            {t('objective.text2')}
          </p>

          <h2 className="mt-10 text-3xl tracking-tight text-gray-900">
            {t('motivation.title')}
          </h2>

          <p className="mt-6 text-lg/7 text-gray-600">
            {t('motivation.text')}
          </p>

        </div>
      </section>


      {/* FUNDING */}
      <div className="mb-16 mt-12 pt-6">
        <Subheading>{t('funding.title')}</Subheading>
        <hr className="mt-6 mb-6 border-t border-gray-200" />

        <p className="mt-6 text-md/7 text-gray-700">{t('funding.call')}</p>
        <p className="mt-4 text-/7 text-gray-700">{t('funding.grant')}</p>
        <p className="mt-4 mb-4 text-md/7 text-gray-700">
          {t('funding.program')}
        </p>

        <p className="text-gray-700 mb-4 whitespace-pre-line">
          {t('funding.details')}
        </p>

        <Button href={t('funding.linkUrl')} target="_blank">
          {t('funding.linkText')}
        </Button>
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