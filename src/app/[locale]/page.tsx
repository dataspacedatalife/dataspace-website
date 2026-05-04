import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { GradientBackground } from '@/components/gradient';

export const metadata: Metadata = {
  title: 'OneHealth DataSpace',
  description: 'OneHealth DataSpace',
};

function Hero() {
  const t = useTranslations('home.hero');

  return (
    <div className="relative flex flex-col">
      {/* NAVBAR */}
      <Container>
        <Navbar />
      </Container>

      {/* CONTENIDO CENTRADO REAL */}
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[calc(100vh-150px)]">
        <div className="mx-auto w-full max-w-5xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

            {/* TEXTO */}
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

                <h1 className="font-heading text-3xl font-medium tracking-tight text-balance text-[#009AB8] sm:text-5xl md:text-6xl">
                  {t('title')}
                </h1>

                <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-medium text-gray-950/75">
                  {t('subtitle')}
                </p>

                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-x-6 justify-center lg:justify-start">
                  <Button href="/about">{t('learnMore')}</Button>

                  <Button
                    href="https://xdatashare.srv.cesga.es"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('testDemo')}
                  </Button>
                </div>

              </div>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <GradientBackground />
      <Hero />
      <Footer />
    </div>
  );
}