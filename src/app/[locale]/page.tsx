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
    <div className="relative min-h-screen flex flex-col">
      <div className="relative flex flex-col flex-1">
        <Container>
          <Navbar />
        </Container>

        <div className="px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <div className="mx-auto w-full max-w-5xl flex-1 flex items-start justify-center pt-12 sm:pt-16 md:pt-20">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

              {/* TEXTO */}
              <div className="flex flex-col justify-center">
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

                  <h1 className="font-heading text-3xl font-medium tracking-tight text-balance text-[#199AB6] sm:text-5xl md:text-6xl">
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

              {/* DASHBOARD */}
              <div className="relative flex items-center justify-center w-full">

                {/* Glow fondo */}
                <div className="absolute w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-[#199AB6]/20 blur-3xl" />

                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl shadow-2xl p-4 sm:p-6">

                  {/* Header */}
                  <div className="flex gap-2 mb-4 sm:mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#199AB6]/70" />
                    <div className="w-3 h-3 rounded-full bg-[#199AB6]/40" />
                    <div className="w-3 h-3 rounded-full bg-[#199AB6]/20" />
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="rounded-xl bg-[#199AB6]/10 p-2 sm:p-3">
                      <div className="text-[10px] sm:text-xs text-gray-500">Use Cases</div>
                      <div className="text-sm sm:text-lg font-semibold text-[#199AB6]">7</div>
                    </div>

                    <div className="rounded-xl bg-[#199AB6]/10 p-2 sm:p-3">
                      <div className="text-[10px] sm:text-xs text-gray-500">Involved Sectors</div>
                      <div className="text-sm sm:text-lg font-semibold text-[#199AB6]">4</div>
                    </div>

                    <div className="rounded-xl bg-[#199AB6]/10 p-2 sm:p-3">
                      <div className="text-[10px] sm:text-xs text-gray-500">Participating Organizations</div>
                      <div className="text-sm sm:text-lg font-semibold text-[#199AB6]">6 </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-end gap-1 sm:gap-2 h-20 sm:h-24">
                      <div className="w-4 sm:w-6 h-10 rounded bg-[#199AB6]/20" />
                      <div className="w-4 sm:w-6 h-16 rounded bg-[#199AB6]/30" />
                      <div className="w-4 sm:w-6 h-10 rounded bg-[#199AB6]/40" />
                      <div className="w-4 sm:w-6 h-12 rounded bg-[#199AB6]/40" />
                      <div className="w-4 sm:w-6 h-9 rounded bg-[#199AB6]/40" />
                      <div className="w-4 sm:w-6 h-16 rounded bg-[#199AB6]/40" />
                      <div className="w-4 sm:w-6 h-20 rounded bg-[#199AB6]/40" />
                      <div className="w-4 sm:w-6 h-24 rounded bg-[#199AB6]/40" />
                    </div>
                  </div>

                  {/* Rows */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center rounded-xl bg-[#199AB6]/5 px-3 py-2">
                      <span className="text-sm text-gray-700">Clinical dataset</span>
                      <span className="text-xs text-[#199AB6]">active</span>
                    </div>

                  

                    <div className="flex justify-between items-center rounded-xl bg-[#199AB6]/5 px-3 py-2">
                      <span className="text-sm text-gray-700">Research node</span>
                      <span className="text-xs text-[#199AB6]">online</span>
                    </div>
                  </div>

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
    <div className="overflow-hidden">
      <GradientBackground />
      <Hero />
      <main></main>
      <Footer />
    </div>
  );
}