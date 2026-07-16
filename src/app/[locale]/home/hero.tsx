'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { DataSpaceWheel } from './wheel';

export function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  const t = useTranslations('home.hero');
  const reduceMotion = useReducedMotion();
  const [ctaActive, setCtaActive] = useState(false);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 120, damping: 20 },
        },
      };

  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-10 lg:py-8 lg:min-h-[calc(100vh-95px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="gradient-text font-heading"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 5.75rem)',
                fontWeight: 500,
                lineHeight: 1.05,
              }}
            >
              {t('title')}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl whitespace-pre-line"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://dashboard.dataspace.cesga.es/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCtaActive(true)}
                onMouseLeave={() => setCtaActive(false)}
                onFocus={() => setCtaActive(true)}
                onBlur={() => setCtaActive(false)}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-[0_8px_20px_rgba(0,90,120,0.28),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-xl hover:-translate-y-0.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                style={{
                  background:
                    'linear-gradient(160deg, #00b7d4 0%, #009ab8 45%, #007092 100%)',
                }}
              >
                {/* pulso al activarse, igual de rápido y con la misma
                    respuesta que en los nodos de la rueda */}
                {ctaActive && !reduceMotion && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute rounded-[14px] border-2 border-brand-400 pointer-events-none"
                    initial={{ top: -4, right: -4, bottom: -4, left: -4 }}
                    animate={{
                      top: -14,
                      right: -14,
                      bottom: -14,
                      left: -14,
                      opacity: [0.7, 0],
                    }}
                    transition={{
                      duration: 0.9,
                      ease: 'easeOut',
                    }}
                  />
                )}

                {/* brillo radial, igual que en los nodos */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 55%)',
                  }}
                />

                {t('access')}
                <ArrowUpRight size={18} />
              </a>

              {/* Saber más → puente "por qué somos diferentes" */}
              <button
                type="button"
                onClick={() => scrollToId('por-que')}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-500/40 text-brand-700 font-semibold bg-white/80 backdrop-blur ring-1 ring-inset ring-white/60 shadow-sm hover:border-brand-500 hover:bg-white transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {t('learnMore')}
                <ChevronDown
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <DataSpaceWheel />
          </motion.div>
        </div>
      </div>

      {/* invitación al scroll */}
      <button
        type="button"
        onClick={() => scrollToId('por-que')}
        aria-label={t('learnMore')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-brand-700/70 hover:text-brand-700 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 rounded-full"
      >
        <span className="flex items-start justify-center h-9 w-6 rounded-full border border-brand-500/30 pt-1.5">
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={14} />
          </motion.span>
        </span>
      </button>
    </section>
  );
}
