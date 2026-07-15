'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/container';
import {
  SERVICES_GRADIENT,
  DARK_BLUE_UNDERLINE,
  ServiceImage,
  type ServiceItem,
} from './shared';

/* segmento de progreso que se rellena de forma continua con el scroll */
function ProgressSegment({
  progress,
  index,
  count,
  label,
  onClick,
}: {
  progress: MotionValue<number>;
  index: number;
  count: number;
  label: string;
  onClick: () => void;
}) {
  const scaleX = useTransform(progress, (v) =>
    Math.min(1, Math.max(0, v * count - index)),
  );

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="h-[3px] flex-1 rounded-full bg-white/15 overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <motion.div
        className="h-full bg-white rounded-full origin-left"
        style={{ scaleX }}
      />
    </button>
  );
}

/* posiciones del foco de luz de fondo, una por etapa */
const HIGHLIGHT_POS = [
  { top: '6%', left: '4%' },
  { top: '10%', left: '68%' },
  { top: '62%', left: '8%' },
  { top: '58%', left: '70%' },
];

/* ============ DESKTOP: SCROLLYTELLING ENCADENADO ============ */
export function ServicesScrolly({ services }: { services: ServiceItem[] }) {
  const tServices = useTranslations('home.services');
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

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

  const imgY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  function goTo(i: number) {
    const el = containerRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const target = el.offsetTop + (total * (i + 0.5)) / services.length;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  const isLast = active === services.length - 1;
  const activeService = services[active];
  const Icon = activeService.icon;
  const pad = (n: number) => String(n).padStart(2, '0');

  const contentContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.06 } },
    exit: reduceMotion
      ? { opacity: 0, transition: { duration: 0.15 } }
      : { opacity: 0, y: -12, transition: { duration: 0.15 } },
  };
  const contentItem: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 260, damping: 28 },
        },
      };
  const titleReveal: Variants = reduceMotion
    ? contentItem
    : {
        hidden: { y: '100%' },
        show: {
          y: 0,
          transition: { type: 'spring', stiffness: 260, damping: 30 },
        },
      };

  return (
    <section
      ref={containerRef}
      id="servicios-scrolly"
      className="hidden lg:block relative"
      style={{ height: `${services.length * 90}vh` }}
    >
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={{ background: SERVICES_GRADIENT }}
      >
        {/* textura técnica */}
        <div className="tech-dots-light absolute inset-0 pointer-events-none" />

        {/* foco de luz que se desplaza con cada etapa */}
        <motion.div
          aria-hidden="true"
          className="absolute size-[60vmin] rounded-full bg-white/10 blur-3xl pointer-events-none"
          animate={HIGHLIGHT_POS[active]}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 60, damping: 20 }
          }
        />

        {/* progreso segmentado superior */}
        <div className="absolute top-0 left-0 right-0 flex gap-1.5 px-6 pt-4">
          {services.map((s, i) => (
            <ProgressSegment
              key={i}
              progress={scrollYProgress}
              index={i}
              count={services.length}
              label={`${tServices('stepLabel')} ${pad(i + 1)}: ${s.title}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <Container className="w-full relative">
          <div className="grid grid-cols-[1fr_1fr_auto] gap-10 xl:gap-14 items-center">
            {/* ---- Columna de contenido ---- */}
            <div className="relative min-h-[440px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={contentContainer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {/* contador técnico */}
                  <motion.p
                    variants={contentItem}
                    className="mb-4 text-sm tracking-[0.25em] text-white/60 uppercase font-mono"
                  >
                    {tServices('stepLabel')} {pad(active + 1)}
                    <span className="text-white/35">
                      {' '}
                      / {pad(services.length)}
                    </span>
                  </motion.p>

                  <motion.div
                    variants={contentItem}
                    className="flex items-center gap-4"
                  >
                    <div className="inline-flex items-center justify-center size-14 rounded-xl bg-[#006b8f]/70 backdrop-blur-sm shrink-0">
                      <Icon size={28} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div className="overflow-hidden">
                      <motion.h3
                        variants={titleReveal}
                        className="text-white font-heading font-semibold"
                        style={{
                          fontSize: 'clamp(2.25rem, 3.2vw, 3rem)',
                          lineHeight: 1.05,
                        }}
                      >
                        {activeService.title}
                      </motion.h3>
                    </div>
                  </motion.div>

                  {/* Qué es */}
                  <motion.div variants={contentItem} className="mt-6">
                    <p className="text-[11px] tracking-[0.25em] uppercase text-brand-200 font-mono">
                      {tServices('whatLabel')}
                    </p>
                    <p
                      className="mt-2 pb-2 text-white/90 leading-relaxed max-w-lg border-b-2"
                      style={{ borderImage: `${DARK_BLUE_UNDERLINE} 1` }}
                    >
                      {activeService.what}
                    </p>
                  </motion.div>

                  {/* Ejemplo */}
                  <motion.div
                    variants={contentItem}
                    className="mt-5 max-w-lg rounded-xl bg-[#006b8f]/70 backdrop-blur-sm p-4"
                  >
                    <p className="text-[11px] tracking-[0.25em] uppercase text-white/55 font-mono">
                      {tServices('exampleLabel')}
                    </p>
                    <p className="mt-1.5 text-sm text-white/85 leading-relaxed">
                      {activeService.example}
                    </p>
                  </motion.div>

                  <motion.div
                    variants={contentItem}
                    className="mt-8 flex flex-wrap items-center gap-5"
                  >
                    {/* CTA principal: siguiente servicio o continuar
                        hacia quién participa */}
                    {isLast ? (
                      <button
                        type="button"
                        onClick={() =>
                          document
                            .getElementById('participantes')
                            ?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            })
                        }
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {tServices('participants')}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => goTo(active + 1)}
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {tServices('next')}: {services[active + 1].title}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    )}

                    {/* enlace secundario al servicio real */}
                    <Link
                      href={activeService.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-white/85 border-b border-white/40 pb-0.5 hover:text-white hover:border-white transition-colors"
                    >
                      {tServices('cta')}
                      <ArrowUpRight size={16} />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ---- Columna de foto ---- */}
            <motion.div
              className="relative"
              style={{ y: reduceMotion ? 0 : imgY }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${active}`}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <ServiceImage
                    service={activeService}
                    kenBurns
                    chip
                    className="aspect-[4/5] w-full max-w-[560px] mx-auto max-h-[78vh]"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* ---- Stepper numerado ---- */}
            <div className="flex flex-col gap-1 relative">
              {services.map((item, i) => {
                const StepIcon = item.icon;
                const isActive = i === active;

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={isActive ? 'step' : undefined}
                    className="group flex items-center gap-4 py-3 text-left cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span
                      className="text-xs tabular-nums transition-colors duration-300 font-mono"
                      style={{
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {pad(i + 1)}
                    </span>
                    <span className="relative h-9 w-[3px] rounded-full bg-white/25">
                      {isActive && (
                        <motion.span
                          layoutId="step-indicator"
                          className="absolute inset-0 rounded-full bg-white"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </span>
                    <StepIcon
                      size={20}
                      className="transition-colors duration-300"
                      style={{
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.55)',
                      }}
                    />
                    <span
                      className="text-sm font-medium whitespace-nowrap transition-colors duration-300 hidden xl:inline"
                      style={{
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.55)',
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
