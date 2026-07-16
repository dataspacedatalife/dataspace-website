'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import {
  CTA_GRADIENT,
  CTA_SHADOW,
  CtaGloss,
  CtaPulseRing,
  useCtaHover,
  useServicesData,
} from './shared';
import { scrollToId } from './hero';

/* ============ PUENTE: POR QUÉ SOMOS DIFERENTES ============ */
export function LifecycleBridge() {
  const t = useTranslations('home.bridge');
  const services = useServicesData();
  const { active: ctaActive, hoverHandlers } = useCtaHover();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 180, damping: 24 },
    },
  };

  return (
    <section
      id="por-que"
      className="relative py-16 lg:py-24 scroll-mt-6 lg:scroll-mt-24"
    >
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-white/70 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-brand-700 font-mono"
          >
            {t('kicker')}
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-6 font-heading font-semibold text-slate-700"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.1 }}
          >
            {t('title')}
            <br />
            <span className="gradient-text">{t('titleHighlight')}</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {t('text')}
          </motion.p>

          {/* tira del ciclo de vida */}
          <motion.button
            variants={item}
            type="button"
            onClick={() => scrollToId('servicios')}
            aria-label={t('cta')}
            className="relative mt-14 w-full max-w-3xl mx-auto block cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-700 rounded-2xl"
          >
            {/* línea que conecta los nodos */}
            <div
              aria-hidden="true"
              className="absolute top-7 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-brand-500/30"
            />

            <div className="relative grid grid-cols-4 gap-x-2">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.key} className="flex flex-col items-center gap-2">
                    <span
                      className="relative flex items-center justify-center size-14 rounded-full text-white shadow-[0_8px_20px_rgba(0,90,120,0.28),inset_0_1px_0_rgba(255,255,255,0.25)] transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background:
                          'linear-gradient(160deg, #00b7d4 0%, #009ab8 45%, #007092 100%)',
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 55%)',
                        }}
                      />
                      <Icon size={24} strokeWidth={1.6} className="relative" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-brand-700">
                      {s.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* anotaciones: dónde termina un espacio de datos tradicional */}
            <div className="mt-4 grid grid-cols-4 gap-x-2 items-start">
              <div className="flex flex-col items-center gap-1.5">
                <span className="h-3 w-px bg-slate-400" aria-hidden="true" />
                <span className="text-[10px] sm:text-[11px] leading-snug text-slate-500 font-mono max-w-[9rem]">
                  {t('traditionalLabel')}
                </span>
              </div>
              <div className="col-span-3 flex flex-col items-center gap-1.5">
                <div
                  aria-hidden="true"
                  className="h-3 w-full border-x-2 border-b-2 border-brand-400/60 rounded-b-xl"
                  style={{ width: '66.6%' }}
                />
                <span className="text-[10px] sm:text-[11px] leading-snug text-brand-700 font-semibold font-mono">
                  {t('oursLabel')}
                </span>
              </div>
            </div>
          </motion.button>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            <button
              type="button"
              onClick={() => scrollToId('servicios')}
              {...hoverHandlers}
              className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold ${CTA_SHADOW} hover:shadow-xl hover:-translate-y-0.5 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700`}
              style={{ background: CTA_GRADIENT }}
            >
              <CtaPulseRing active={ctaActive} />
              <CtaGloss />

              {t('cta')}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <Link
              href="/what"
              className="inline-flex items-center gap-1.5 font-medium text-brand-700 border-b border-brand-500/40 pb-0.5 hover:border-brand-700 transition-colors"
            >
              {t('ctaSecondary')}
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
