import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import LogoImage from '../../../public/logo1_svg_normal.svg';
import { GradientBackground } from '@/components/gradient';

export const metadata: Metadata = {
  title: 'OneHealth DataSpace',
  description: 'OneHealth DataSpace',
};

function Hero() {
  const t = useTranslations('home.hero');

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative flex flex-col flex-1">
        <Container>
          <Navbar />
        </Container>

        <div className="px-6 lg:px-8 flex-1 flex flex-col">
          <div className="mx-auto max-w-2xl lg:max-w-7xl flex flex-1 place-items-center">
            <div className="flex flex-row pt-2 pb-24 sm:pt-4 sm:pb-32 md:pt-6 md:pb-48">
              <div className="pt-10 sm:pt-16 md:pt-30">
                <h1 className="font-heading text-3xl font-medium tracking-tight text-balance text-[#199AB6] sm:text-5xl md:text-6xl">
                  {t('title')}
                </h1>

                <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                  {t('subtitle')}
                </p>

                <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
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

              <div>
                <Image
                  alt="Logo image"
                  src={LogoImage}
                  width={400}
                  height={400}
                  className="object-contain"
                />
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
    <div className="overflow-hidden">
      <GradientBackground />

      <Hero />

      <main></main>

      <Footer />
    </div>
  );
}