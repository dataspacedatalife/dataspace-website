'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import {
  CTA_GRADIENT,
  CTA_SHADOW,
  CtaGloss,
  CtaPulseRing,
  useCtaHover,
} from './shared';

/* ============ CIERRE: ENTIDADES PARTICIPANTES ============ */
const OUTRO_LOGOS: { file: string; name: string }[] = [
  { file: 'uvigo.png', name: 'Universidade de Vigo' },
  { file: 'usc.png', name: 'Universidade de Santiago de Compostela' },
  { file: 'cesga.png', name: 'CESGA' },
  { file: 'logo_IDIS.png', name: 'IDIS' },
  { file: 'IISGS.png', name: 'IIS Galicia Sur' },
  { file: 'meteogalicia.png', name: 'MeteoGalicia' },
  { file: 'Logotipo_Citius.png', name: 'CiTIUS' },
  { file: 'logoCIMUS.png', name: 'CiMUS' },
  { file: 'iim.png', name: 'IIM-CSIC' },
  { file: 'Inverbis.png', name: 'Inverbis' },
  { file: 'imatia.png', name: 'Imatia' },
  { file: 'trueworld.png', name: 'Trueworld' },
  { file: 'tophealthtech.png', name: 'TopHealthTech' },
  { file: 'wireless_galicia.png', name: 'Wireless Galicia' },
];

export function ParticipantsOutro() {
  const tOutro = useTranslations('home.outro');
  const { active: ctaActive, hoverHandlers } = useCtaHover();

  return (
    <section
      id="participantes"
      className="relative py-24 overflow-hidden scroll-mt-6 lg:scroll-mt-24"
    >
      <Container>
        <div className="text-center">
          <h2
            className="font-heading font-semibold text-brand-500"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
          >
            {tOutro('title')}
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            {tOutro('text')}
          </p>
        </div>
      </Container>

      {/* marquee de logos */}
      <div
        className="marquee-mask mt-14 overflow-hidden"
        aria-label="Entidades participantes"
      >
        <div className="marquee-track flex items-center gap-16 w-max">
          {[...OUTRO_LOGOS, ...OUTRO_LOGOS].map((logo, i) => (
            <img
              key={i}
              src={`/use-cases/${logo.file}`}
              alt={i < OUTRO_LOGOS.length ? logo.name : ''}
              aria-hidden={i >= OUTRO_LOGOS.length}
              loading="lazy"
              className="h-10 sm:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-5">
        <Link
          href="/how"
          {...hoverHandlers}
          className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold ${CTA_SHADOW} hover:shadow-xl hover:-translate-y-0.5 transition`}
          style={{ background: CTA_GRADIENT }}
        >
          <CtaPulseRing active={ctaActive} />
          <CtaGloss />

          {tOutro('join')}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
        <Link
          href="/catalog"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-500/40 text-brand-700 font-semibold bg-white/80 backdrop-blur hover:border-brand-500 hover:bg-white transition"
        >
          {tOutro('cta')}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
