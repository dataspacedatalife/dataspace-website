import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
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
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[calc(100vh-150px)]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* TEXTO */}
            <div className="flex flex-col justify-center">
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

                <h1
                  className="gradient-text"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(4rem, 10vw, 6rem)',
                    fontWeight: 500,
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                    overflow: 'visible',
                    paddingBottom: '0.1em',
                  }}
                >
                  OneHealth
                  <br />
                  DataSpace
                </h1>

                <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">
                  {t('subtitle')}
                </p>

                <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                  <a
                    href="/about"
                    className="inline-block px-8 py-4 rounded-lg text-white font-semibold bg-[#009AB8] shadow-lg hover:scale-105 transition"
                  >
                    {t('learnMore')}
                  </a>

                  <a
                    href="https://dashboard.dataspace.cesga.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 rounded-md border border-[#009AB8] text-[#009AB8] bg-white hover:bg-slate-50 transition"
                  >
                    {t('testDemo')}
                  </a>
                </div>

              </div>
            </div>

            {/* DIAGRAMA */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-2xl">
                <img
                  src="/demostrador/grafica_evo_web_fondo-transparente.png"
                  alt="Diagrama OneHealth DataSpace"
                  className="w-[90%] mx-auto h-auto object-contain scale-100 lg:w-full lg:scale-105"
                  loading="eager"
                  decoding="async"
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
    <div className="min-h-screen flex flex-col overflow-hidden">
      <GradientBackground />
      <Hero />
      <Footer />
    </div>
  );
}