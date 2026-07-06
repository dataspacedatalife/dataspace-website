'use client';

import { useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import type { LucideIcon } from 'lucide-react';

import {
  Share2,
  Cpu,
  Search,
  Database,
  CloudUpload,
  ArrowRight,
} from 'lucide-react';

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
};

const SERVICES_GRADIENT =
  'linear-gradient(to right, #3fd7c0 0%, #00a8b8 50%, #006b8f 100%)';

/* ================= LANDING ================= */
export function OneHealthLanding() {
  const locale = useLocale();
  const t = useTranslations('home.hero');
  const tServices = useTranslations('home.services');

  const graphByLocale: Record<string, string> = {
    es: '/demostrador/grafica4_web_es.png',
    en: '/demostrador/grafica4_web_eng.png',
    gl: '/demostrador/grafica4_web_gal.png',
  };

  const graphSrc =
    graphByLocale[locale] || '/demostrador/grafica4_web_660px.png';

  return (
    <>
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

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-95px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1
                className="hidden sm:block gradient-text"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(4rem, 10vw, 6rem)',
                  fontWeight: 500,
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                OneHealth
                <br />
                DataSpace
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {t('subtitle')}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="/about"
                  className="px-8 py-4 rounded-md border border-[#009AB8] text-[#009AB8] bg-white hover:bg-slate-50 transition"
                >
                  {t('learnMore')}
                </a>

                <a
                  href="https://dashboard.dataspace.cesga.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg text-white font-semibold bg-[#009AB8] shadow-lg hover:scale-105 transition"
                >
                  {t('access')}
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-[650px] flex items-center justify-center">
                <img
                  src={graphSrc}
                  alt="OneHealth DataSpace"
                  className="relative z-10 w-full max-w-[450px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS HEADER */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-6 pb-10 text-center"
        >
          <h2
            className="font-semibold text-[#009AB8]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(3rem, 6vw, 4rem)',
            }}
          >
            {tServices('title')}
          </h2>

          <p className="mt-4 text-slate-600 text-lg max-w-4xl mx-auto">
            {tServices('subtitle')}
          </p>
        </motion.section>

        <Services />

        <Footer />
      </main>
    </>
  );
}

function useServicesData(): ServiceItem[] {
  const t = useTranslations();

  return [
    {
      icon: Share2,
      title: t('Navbar.share'),
      text: t('home.services.share'),
      href: 'https://dl-cesga.srv.cesga.es',
    },
    {
      icon: Cpu,
      title: t('Navbar.compute'),
      text: t('home.services.compute'),
      href: 'https://hpc.dataspace.cesga.es',
    },
    {
      icon: Search,
      title: t('Navbar.analyze'),
      text: t('home.services.analyze'),
      href: 'https://bigdata.dataspace.cesga.es/',
    },
    {
      icon: Database,
      title: t('Navbar.store'),
      text: t('home.services.store'),
      href: 'https://storage.dataspace.cesga.es',
    },
    {
      icon: CloudUpload,
      title: t('Navbar.deliver'),
      text: t('home.services.deliver'),
      href: 'https://cloud.dataspace.cesga.es',
    },
  ];
}

function Services() {
  const services = useServicesData();

  return (
    <>
      <ServicesScrolly services={services} />
      <ServicesGrid services={services} />
    </>
  );
}

/* ============ DESKTOP: SCROLLYTELLING ============ */
function ServicesScrolly({ services }: { services: ServiceItem[] }) {
  const tServices = useTranslations('home.services');
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      services.length - 1,
      Math.max(0, Math.floor(v * services.length)),
    );
    setActive(idx);
  });

  function goTo(i: number) {
    const el = containerRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const target = el.offsetTop + (total * (i + 0.5)) / services.length;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  const activeService = services[active];
  const Icon = activeService.icon;

  return (
    <section
      ref={containerRef}
      className="hidden lg:block relative"
      style={{ height: `${services.length * 90}vh` }}
    >
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={{ background: SERVICES_GRADIENT }}
      >
        {/* progress bar */}
        <div className="absolute left-0 top-0 h-full w-1 bg-white/15">
          <motion.div
            className="w-full bg-white origin-top"
            style={{ scaleY: scrollYProgress, height: '100%' }}
          />
        </div>

        <Container className="w-full">
          <div className="grid grid-cols-[1fr_auto] gap-20 items-center">
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div
                    className="mb-6 flex items-center justify-center size-20 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.16)' }}
                  >
                    <Icon size={40} className="text-white" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="text-white font-semibold"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    }}
                  >
                    {activeService.title}
                  </h3>

                  <p className="mt-4 text-lg text-white/85 max-w-md">
                    {activeService.text}
                  </p>

                  <Link
                    href={activeService.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-medium text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors"
                  >
                    {tServices('cta')}
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* stepper */}
            <div className="flex flex-col gap-1">
              {services.map((item, i) => {
                const StepIcon = item.icon;
                const isActive = i === active;

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className="group flex items-center gap-4 py-3 text-left cursor-pointer"
                  >
                    <span
                      className="h-9 w-[3px] rounded-full transition-colors duration-300"
                      style={{
                        background: isActive
                          ? '#ffffff'
                          : 'rgba(255,255,255,0.3)',
                      }}
                    />
                    <StepIcon
                      size={20}
                      className="transition-colors duration-300"
                      style={{
                        color: isActive
                          ? '#ffffff'
                          : 'rgba(255,255,255,0.55)',
                      }}
                    />
                    <span
                      className="text-sm font-medium whitespace-nowrap transition-colors duration-300"
                      style={{
                        color: isActive
                          ? '#ffffff'
                          : 'rgba(255,255,255,0.55)',
                      }}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ============ MOBILE / TABLET: GRID ============ */
function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <section
      className="lg:hidden relative py-24 overflow-hidden"
      style={{ background: SERVICES_GRADIENT }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl block h-full"
                >
                  <div className="bg-white p-6 h-full rounded-xl text-center flex flex-col items-center">
                    <div
                      className="mb-4 flex items-center justify-center size-16 rounded-full transition-transform group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background:
                          'linear-gradient(135deg, #3fd7c0 0%, #009ab8 100%)',
                      }}
                    >
                      <Icon size={30} className="text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-semibold text-[#009AB8]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600">{item.text}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
