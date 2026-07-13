'use client';

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
      <div className="relative max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-95px)] flex items-center">
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
                className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-[0_10px_30px_rgba(0,140,170,0.35)] hover:shadow-xl hover:-translate-y-0.5 transition bg-gradient-to-r from-[#3fd7c0] via-[#00a8b8] to-[#006b8f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {/* destello al pasar el ratón */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent"
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
            className="flex justify-center"
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
