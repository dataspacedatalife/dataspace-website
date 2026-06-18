import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/button';
import { GradientBackground } from '@/components/gradient';

export const metadata: Metadata = {
  title: 'OneHealth DataSpace',
  description: 'OneHealth DataSpace',
};

function Hero() {
  const t = useTranslations('home.hero');

  return (
    <div className="relative flex flex-col">
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #3fd7c0 0%,
            #00b7d4 35%,
            #009ab8 65%,
            #006b8f 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 10s ease infinite;
        }
      `}</style>

      {/* NAVBAR */}
      <Container>
        <Navbar />
      </Container>

      {/* HERO */}
      <div className="
        px-4 sm:px-6 lg:px-8
        py-10 sm:py-14 lg:py-16
        flex items-center
        min-h-[calc(100vh-120px)]
      ">
        <div className="mx-auto w-full max-w-7xl">
          <div className="
            grid grid-cols-1 lg:grid-cols-2
            gap-10 lg:gap-14
            items-center
          ">

            {/* TEXTO */}
            <div className="flex flex-col justify-center">
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

                <h1
                  className="hidden sm:block gradient-text"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                    fontWeight: 500,
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                  }}
                >
                  OneHealth
                  <br />
                  DataSpace
                </h1>

                <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                  {t('subtitle')}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                  <Button
                    href="https://dashboard.dataspace.cesga.es"
                    target="_blank"
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold bg-[#009AB8] shadow-lg hover:scale-105 transition"
                  >
                    {t('testDemo')}
                  </Button>

                  <a
                    href="/about"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-md border border-[#009AB8] text-[#009AB8] bg-white hover:bg-slate-50 transition"
                  >
                    {t('learnMore')}
                  </a>
                </div>

              </div>
            </div>

            {/* DIAGRAMA */}
            <div className="
              flex justify-center lg:justify-end
              w-full
              max-h-[45vh] lg:max-h-none
            ">
              <img
                src="/demostrador/grafica_evo_web_fondo-transparente.png"
                alt="Diagrama OneHealth DataSpace"
                className="
                  w-full
                  max-w-md sm:max-w-lg lg:max-w-2xl
                  h-auto
                  object-contain
                  max-h-[45vh] lg:max-h-[60vh]
                "
                loading="eager"
                decoding="async"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <GradientBackground />
      <Hero />
      <Footer />
    </div>
  );
}