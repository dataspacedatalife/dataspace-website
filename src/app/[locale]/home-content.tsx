'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
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
  CloudUpload,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';

type ServiceItem = {
  key: string;
  icon: LucideIcon;
  title: string;
  text: string;
  what: string;
  example: string;
  image: string;
  href: string;
};

const SERVICES_GRADIENT =
  'linear-gradient(180deg, #00aec6 0%, #009AB8 60%, #009AB8 100%)';

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const HEADING = "'Barlow Condensed', sans-serif";

/* ================= LANDING ================= */
export function OneHealthLanding() {
  const t = useTranslations('home.hero');

  function scrollToServices() {
    document
      .getElementById('servicios')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-text {
          background: linear-gradient(135deg, #3fd7c0 0%, #00b7d4 35%, #009ab8 65%, #006b8f 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 10s ease infinite;
        }
        .tech-dots-light {
          background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll 45s linear infinite;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .gradient-text { animation: none; }
          .marquee-track { animation: none; }
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 py-10 min-h-[calc(100vh-95px)] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
              <div>
                <h1
                  className="hidden sm:block gradient-text"
                  style={{
                    fontFamily: HEADING,
                    fontSize: 'clamp(3.25rem, 10vw, 6rem)',
                    fontWeight: 500,
                    lineHeight: 1.05,
                    margin: 0,
                  }}
                >
                  OneHealth
                  <br />
                  DataSpace
                </h1>

                <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl whitespace-pre-line">
                  {t('subtitle')}
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  {/* Saber más → primer servicio */}
                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#009AB8]/40 text-[#006b8f] font-semibold bg-white/80 backdrop-blur hover:border-[#009AB8] hover:bg-white transition cursor-pointer"
                  >
                    {t('learnMore')}
                    <ChevronDown
                      size={18}
                      className="transition-transform group-hover:translate-y-0.5"
                    />
                  </button>

                  <a
                    href="https://dashboard.dataspace.cesga.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-cyan-900/20 hover:shadow-xl hover:-translate-y-0.5 transition bg-gradient-to-r from-[#3fd7c0] via-[#00a8b8] to-[#006b8f]"
                  >
                    {t('access')}
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <DataSpaceWheel />
              </div>
            </div>
          </div>
        </section>

        {/* ancla de scroll hacia los servicios */}
        <div id="servicios" className="scroll-mt-24" />

        <Services />

        {/* tira de cuadrícula invertida: espejo de la del footer */}
        <div
          className="w-full h-20"
          style={{
            backgroundImage: "url('/demostrador/cuadricula.svg')",
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
            backgroundSize: 'auto 100%',
            marginTop: '-3px',
            transform: 'scaleY(-1)',
          }}
        />

        <ParticipantsOutro />

        <Footer />
      </main>
    </>
  );
}

/* ============ CIERRE: ENTIDADES PARTICIPANTES ============ */
const OUTRO_LOGOS = [
  'uvigo.png',
  'usc.png',
  'cesga.png',
  'logo_IDIS.png',
  'IISGS.png',
  'meteogalicia.png',
  'Logotipo_Citius.png',
  'logoCIMUS.png',
  'iim.png',
  'Inverbis.png',
  'imatia.png',
  'trueworld.png',
  'tophealthtech.png',
  'wireless_galicia.png',
];

function ParticipantsOutro() {
  const tOutro = useTranslations('home.outro');

  return (
    <section className="relative py-24 overflow-hidden">
      <Container>
        <div className="text-center">
          <h2
            className="font-semibold text-[#009AB8]"
            style={{ fontFamily: HEADING, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
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
              src={`/use-cases/${logo}`}
              alt=""
              aria-hidden={i >= OUTRO_LOGOS.length}
              loading="lazy"
              className="h-10 sm:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="/catalog"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-cyan-900/20 hover:shadow-xl hover:-translate-y-0.5 transition"
          style={{
            background: 'linear-gradient(135deg, #00a8b8 0%, #006b8f 100%)',
          }}
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

function useServicesData(): ServiceItem[] {
  const t = useTranslations();
  const tS = useTranslations('home.services');

  const base = [
    { key: 'share', icon: Share2, href: 'https://dl-cesga.srv.cesga.es' },
    { key: 'analyze', icon: Search, href: 'https://bigdata.dataspace.cesga.es/' },
    { key: 'compute', icon: Cpu, href: 'https://hpc.dataspace.cesga.es' },
    { key: 'deliver', icon: CloudUpload, href: 'https://cloud.dataspace.cesga.es' },
  ] as const;

  return base.map(({ key, icon, href }) => ({
    key,
    icon,
    href,
    title: t(`Navbar.${key}`),
    text: tS(key),
    what: tS(`${key}What`),
    example: tS(`${key}Example`),
    image: `/services/${key}.jpg`,
  }));
}

/* ============ HERO: RUEDA INTERACTIVA DEL DATASPACE ============ */
function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(a1: number, a2: number, r: number) {
  const s = polar(50, 50, r, a1);
  const e = polar(50, 50, r, a2);
  return `M ${s.x} ${s.y} A ${r} ${r} 0 0 1 ${e.x} ${e.y}`;
}

function DataSpaceWheel() {
  const t = useTranslations('home.hero');
  const services = useServicesData();
  const [active, setActive] = useState<number | null>(null);

  // clic en nodo → scroll al servicio correspondiente
  function goToService(i: number) {
    const scrolly = document.getElementById('servicios-scrolly');
    if (scrolly && window.innerWidth >= 1024) {
      const total = scrolly.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: scrolly.offsetTop + (total * (i + 0.5)) / services.length,
        behavior: 'smooth',
      });
      return;
    }
    document
      .getElementById(`servicio-m-${i}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // nodos: arriba → derecha → abajo → izquierda (sentido horario, orden 01→04)
  const angles = [-90, 0, 90, 180];
  const NODE_R = 38;
  const GAP = 20; // grados de hueco alrededor de cada nodo

  return (
    <div className="w-full max-w-[max(460px,min(580px,calc(100vh_-_240px)))] select-none pt-5">
      <style>{`
        @keyframes dashFlow { to { stroke-dashoffset: -24; } }
        .flow-arc { animation: dashFlow 2.4s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .flow-arc { animation: none; }
        }
      `}</style>

      <div className="relative aspect-square w-full">
        {/* anillos y flujo (SVG de fondo) */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="flowArrow"
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#009AB8" />
            </marker>
          </defs>

          {/* anillo exterior punteado: gobernanza */}
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="#009AB8"
            strokeOpacity="0.5"
            strokeWidth="0.8"
            strokeDasharray="1.5 2.5"
          />

          {/* arcos de flujo entre nodos (sentido horario) */}
          {angles.map((a, i) => {
            const next = angles[(i + 1) % angles.length];
            const a2 = next <= a ? next + 360 : next;
            return (
              <path
                key={i}
                className="flow-arc"
                d={arcPath(a + GAP, a2 - GAP, NODE_R)}
                fill="none"
                stroke="#009AB8"
                strokeOpacity="0.5"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                strokeLinecap="round"
                markerEnd="url(#flowArrow)"
              />
            );
          })}
        </svg>

        {/* etiqueta de gobernanza sobre el anillo */}
        <span
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#009AB8]/40 bg-white px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-[#006b8f] whitespace-nowrap"
          style={{ fontFamily: MONO }}
        >
          {t('governance')}
        </span>

        {/* centro: OneHealth DataSpace / info del servicio activo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[52%] rounded-full border border-[#009AB8]/25 bg-gradient-to-b from-white to-cyan-50 shadow-xl shadow-cyan-900/10 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <AnimatePresence mode="wait">
            {active === null ? (
              <motion.div
                key="brand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p
                  className="gradient-text font-semibold leading-none"
                  style={{
                    fontFamily: HEADING,
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  }}
                >
                  OneHealth
                  <br />
                  DataSpace
                </p>
                <p className="mt-2 text-[11px] sm:text-xs font-bold text-slate-700">
                  {t('graphTagline')}
                </p>
                <p className="mt-1 text-[10px] sm:text-[11px] text-slate-500">
                  {t('graphControl')}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <p
                  className="font-semibold text-[#006b8f] leading-tight"
                  style={{
                    fontFamily: HEADING,
                    fontSize: 'clamp(1.1rem, 2.6vw, 1.5rem)',
                  }}
                >
                  {services[active].title}
                </p>
                <p className="mt-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {services[active].text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* nodos de servicio */}
        {services.map((s, i) => {
          const pos = polar(50, 50, NODE_R, angles[i]);
          const Icon = s.icon;
          const isActive = i === active;

          return (
            <button
              key={s.key}
              type="button"
              aria-label={s.title}
              onClick={() => goToService(i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer group"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <span
                className="flex items-center justify-center size-14 sm:size-16 rounded-full text-white shadow-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, #00a8b8 0%, #006b8f 100%)'
                    : '#009AB8',
                  boxShadow: isActive
                    ? '0 0 0 6px rgba(0,154,184,0.18), 0 10px 20px rgba(0,85,110,0.25)'
                    : undefined,
                }}
              >
                <Icon size={26} strokeWidth={1.6} />
              </span>
              <span
                className="rounded-full bg-white/90 backdrop-blur px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold transition-colors"
                style={{ color: isActive ? '#006b8f' : '#009AB8' }}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Services() {
  const services = useServicesData();

  return (
    <>
      <ServicesScrolly services={services} />
      <ServicesSequence services={services} />
    </>
  );
}

/* ============ FOTO DEL SERVICIO (con fallback al icono) ============ */
function ServiceImage({
  service,
  className = '',
}: {
  service: ServiceItem;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl shadow-black/15 ${className}`}
    >
      {!failed ? (
        <img
          src={service.image}
          alt={service.title}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(63,215,192,0.35) 0%, rgba(0,107,143,0.35) 100%)',
          }}
        >
          <Icon size={72} className="text-white/70" strokeWidth={1} />
        </div>
      )}
    </div>
  );
}

/* ============ DESKTOP: SCROLLYTELLING ENCADENADO ============ */
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

  const isLast = active === services.length - 1;
  const activeService = services[active];
  const Icon = activeService.icon;
  const pad = (n: number) => String(n).padStart(2, '0');

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

        {/* progreso segmentado superior */}
        <div className="absolute top-0 left-0 right-0 flex gap-1.5 px-6 pt-4">
          {services.map((_, i) => (
            <div
              key={i}
              className="h-[3px] flex-1 rounded-full bg-white/15 overflow-hidden"
            >
              <div
                className="h-full bg-white rounded-full transition-transform duration-500 origin-left"
                style={{ transform: `scaleX(${i <= active ? 1 : 0})` }}
              />
            </div>
          ))}
        </div>

        <Container className="w-full relative">
          <div className="grid grid-cols-[1fr_1fr_auto] gap-10 xl:gap-14 items-center">
            {/* ---- Columna de contenido ---- */}
            <div className="relative min-h-[440px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {/* contador técnico */}
                  <p
                    className="mb-4 text-sm tracking-[0.25em] text-white/60 uppercase"
                    style={{ fontFamily: MONO }}
                  >
                    {tServices('stepLabel')} {pad(active + 1)}
                    <span className="text-white/35">
                      {' '}
                      / {pad(services.length)}
                    </span>
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center size-14 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shrink-0">
                      <Icon size={28} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-white font-semibold"
                      style={{
                        fontFamily: HEADING,
                        fontSize: 'clamp(2.25rem, 3.2vw, 3rem)',
                        lineHeight: 1.05,
                      }}
                    >
                      {activeService.title}
                    </h3>
                  </div>

                  {/* Qué es */}
                  <div className="mt-6">
                    <p
                      className="text-[11px] tracking-[0.25em] uppercase text-[#d6f8f1]"
                      style={{ fontFamily: MONO }}
                    >
                      {tServices('whatLabel')}
                    </p>
                    <p className="mt-2 text-white/90 leading-relaxed max-w-lg">
                      {activeService.what}
                    </p>
                  </div>

                  {/* Ejemplo */}
                  <div className="mt-5 max-w-lg rounded-xl border border-white/15 bg-white/[0.07] backdrop-blur-sm p-4 border-l-2 border-l-[#d6f8f1]">
                    <p
                      className="text-[11px] tracking-[0.25em] uppercase text-white/55"
                      style={{ fontFamily: MONO }}
                    >
                      {tServices('exampleLabel')}
                    </p>
                    <p className="mt-1.5 text-sm text-white/85 leading-relaxed">
                      {activeService.example}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    {/* CTA principal: siguiente servicio o Únete */}
                    {isLast ? (
                      <Link
                        href="/how"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#006b8f] font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                      >
                        {tServices('join')}
                        <ArrowRight size={18} />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => goTo(active + 1)}
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#006b8f] font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition cursor-pointer"
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
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ---- Columna de foto ---- */}
            <div className="relative">
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
                    className="aspect-[4/5] w-full max-w-[560px] mx-auto max-h-[78vh]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

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
                    className="group flex items-center gap-4 py-3 text-left cursor-pointer"
                  >
                    <span
                      className="text-xs tabular-nums transition-colors duration-300"
                      style={{
                        fontFamily: MONO,
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {pad(i + 1)}
                    </span>
                    <span
                      className="h-9 w-[3px] rounded-full transition-colors duration-300"
                      style={{
                        background: isActive
                          ? '#ffffff'
                          : 'rgba(255,255,255,0.25)',
                      }}
                    />
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

/* ============ MÓVIL / TABLET: SECUENCIA ENCADENADA ============ */
function ServicesSequence({ services }: { services: ServiceItem[] }) {
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
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="scroll-mt-24"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg shadow-black/10">
                  {/* foto */}
                  <ServiceImage
                    service={item}
                    className="aspect-[4/3] w-full rounded-none border-0"
                  />

                  <div className="p-6">
                    <p
                      className="text-xs tracking-[0.25em] text-white/60 uppercase"
                      style={{ fontFamily: MONO }}
                    >
                      {tServices('stepLabel')} {pad(i + 1)}
                      <span className="text-white/35">
                        {' '}
                        / {pad(services.length)}
                      </span>
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="inline-flex items-center justify-center size-11 rounded-lg border border-white/20 bg-white/10 shrink-0">
                        <Icon
                          size={22}
                          className="text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3
                        className="text-white font-semibold text-3xl"
                        style={{ fontFamily: HEADING }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Qué es */}
                    <p
                      className="mt-5 text-[11px] tracking-[0.25em] uppercase text-[#d6f8f1]"
                      style={{ fontFamily: MONO }}
                    >
                      {tServices('whatLabel')}
                    </p>
                    <p className="mt-1.5 text-white/90 leading-relaxed">
                      {item.what}
                    </p>

                    {/* Ejemplo */}
                    <div className="mt-4 rounded-xl border border-white/15 bg-white/[0.07] p-4 border-l-2 border-l-[#d6f8f1]">
                      <p
                        className="text-[11px] tracking-[0.25em] uppercase text-white/55"
                        style={{ fontFamily: MONO }}
                      >
                        {tServices('exampleLabel')}
                      </p>
                      <p className="mt-1.5 text-sm text-white/85 leading-relaxed">
                        {item.example}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {isLast ? (
                        <Link
                          href="/how"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#006b8f] font-semibold shadow-lg active:scale-[0.98] transition"
                        >
                          {tServices('join')}
                          <ArrowRight size={18} />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => goToCard(i + 1)}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#006b8f] font-semibold shadow-lg active:scale-[0.98] transition cursor-pointer"
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
                    </div>
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
