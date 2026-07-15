'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/container';
import { SERVICES_GRADIENT, ServiceImage, type ServiceItem } from './shared';

const cardContainer: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.07,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

/* ============ MÓVIL / TABLET: SECUENCIA ENCADENADA ============ */
export function ServicesSequence({ services }: { services: ServiceItem[] }) {
  const tServices = useTranslations('home.services');
  const pad = (n: number) => String(n).padStart(2, '0');

  function goToCard(i: number) {
    document
      .getElementById(`servicio-m-${i}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section
      className="lg:hidden relative py-20 overflow-hidden"
      style={{ background: SERVICES_GRADIENT }}
    >
      <div className="tech-dots-light absolute inset-0 pointer-events-none" />

      <Container>
        <div className="flex flex-col gap-8 relative">
          {services.map((item, i) => {
            const Icon = item.icon;
            const isLast = i === services.length - 1;

            return (
              <motion.div
                key={i}
                id={`servicio-m-${i}`}
                variants={cardContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="scroll-mt-6"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg shadow-black/10">
                  {/* foto */}
                  <ServiceImage
                    service={item}
                    className="aspect-[4/3] w-full rounded-none border-0 ring-0"
                  />

                  <div className="p-6">
                    <motion.p
                      variants={cardItem}
                      className="text-xs tracking-[0.25em] text-white/60 uppercase font-mono"
                    >
                      {tServices('stepLabel')} {pad(i + 1)}
                      <span className="text-white/35">
                        {' '}
                        / {pad(services.length)}
                      </span>
                    </motion.p>

                    <motion.div
                      variants={cardItem}
                      className="mt-4 flex items-center gap-3"
                    >
                      <div className="inline-flex items-center justify-center size-11 rounded-lg bg-[#006b8f]/70 shrink-0">
                        <Icon
                          size={22}
                          className="text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-white font-heading font-semibold text-3xl">
                        {item.title}
                      </h3>
                    </motion.div>

                    {/* Qué es */}
                    <motion.div variants={cardItem}>
                      <p className="mt-5 text-[11px] tracking-[0.25em] uppercase text-brand-200 font-mono">
                        {tServices('whatLabel')}
                      </p>
                      <p className="mt-1.5 text-white/90 leading-relaxed">
                        {item.what}
                      </p>
                    </motion.div>

                    {/* Ejemplo */}
                    <motion.div
                      variants={cardItem}
                      className="mt-4 rounded-xl bg-[#006b8f]/70 p-4"
                    >
                      <p className="text-[11px] tracking-[0.25em] uppercase text-white/55 font-mono">
                        {tServices('exampleLabel')}
                      </p>
                      <p className="mt-1.5 text-sm text-white/85 leading-relaxed">
                        {item.example}
                      </p>
                    </motion.div>

                    <motion.div
                      variants={cardItem}
                      className="mt-6 flex flex-wrap items-center gap-4"
                    >
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
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-700 font-semibold shadow-lg active:scale-[0.98] transition cursor-pointer"
                        >
                          {tServices('participants')}
                          <ArrowDown size={18} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => goToCard(i + 1)}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-700 font-semibold shadow-lg active:scale-[0.98] transition cursor-pointer"
                        >
                          {tServices('next')}
                          <ArrowDown size={18} />
                        </button>
                      )}

                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 border-b border-white/40 pb-0.5"
                      >
                        {tServices('cta')}
                        <ArrowUpRight size={15} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
