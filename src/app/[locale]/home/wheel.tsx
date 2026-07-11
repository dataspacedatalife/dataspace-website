'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { polar, useServicesData } from './shared';

const CYCLE_MS = 8000;

/* ============ HERO: RUEDA INTERACTIVA DEL DATASPACE ============ */
export function DataSpaceWheel() {
  const t = useTranslations('home.hero');
  const services = useServicesData();
  const reduceMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.4 });

  const [active, setActive] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const [started, setStarted] = useState(false);

  // arranque del ciclo automático: solo tras entrar en pantalla,
  // con margen para leer primero la tarjeta de marca
  useEffect(() => {
    if (!inView || started) return;
    const id = setTimeout(() => setStarted(true), 2500);
    return () => clearTimeout(id);
  }, [inView, started]);

  const cycling = started && inView && !hovering && !reduceMotion;

  useEffect(() => {
    if (!cycling) return;
    const id = setInterval(() => {
      setActive((a) =>
        a === null ? 0 : a === services.length - 1 ? null : a + 1,
      );
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [cycling, services.length]);

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

  // posiciones del ciclo en sentido horario, según el orden del array
  // [share, analyze, compute, deliver]: abajo → izquierda → arriba → derecha
  const angles = [90, 180, -90, 0];
  const NODE_R = 38;

  return (
    <motion.div
      ref={containerRef}
      role="group"
      aria-label={t('graphTagline')}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setActive(null);
      }}
      className="w-full max-w-[max(460px,min(580px,calc(100vh_-_240px)))] select-none pt-5"
    >
      <div className="relative aspect-square w-full">
        {/* envoltorio de gobernanza y confianza: un aura que rodea todo */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, transparent 60%, rgba(0,154,184,0.09) 73%, rgba(63,215,192,0.07) 82%, transparent 93%)',
          }}
        />

        {/* anillos y flujo (SVG de fondo) */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="ringGrad"
              gradientUnits="userSpaceOnUse"
              x1="50"
              y1="0"
              x2="50"
              y2="100"
            >
              <stop offset="0%" stopColor="#3fd7c0" />
              <stop offset="100%" stopColor="#006b8f" />
            </linearGradient>
          </defs>

          {/* límite tenue del envoltorio de confianza (sin trazo duro) */}
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="url(#ringGrad)"
            strokeOpacity="0.14"
            strokeWidth="0.5"
          />

          {/* pista base del ciclo entre servicios */}
          <circle
            cx="50"
            cy="50"
            r={NODE_R}
            fill="none"
            stroke="url(#ringGrad)"
            strokeOpacity="0.12"
            strokeWidth="0.5"
          />

          {/* anillo de flujo animado: el dato circulando por el ciclo
              (sentido horario: compartir → analizar → computar → exponer) */}
          <circle
            className="cycle-flow"
            cx="50"
            cy="50"
            r={NODE_R}
            fill="none"
            pathLength={100}
            stroke="url(#ringGrad)"
            strokeOpacity="0.75"
            strokeWidth="1"
            strokeDasharray="2 4"
            strokeLinecap="round"
          />
        </svg>

        {/* etiqueta de gobernanza sobre el aura */}
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/30 bg-white/90 backdrop-blur px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-brand-700 whitespace-nowrap font-mono">
          {t('governance')}
        </span>

        {/* halo ambiental tras el centro */}
        <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(closest-side,rgba(0,183,212,0.16),transparent_70%)] pointer-events-none" />

        {/* centro: OneHealth DataSpace / info del servicio activo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[52%] rounded-full border border-white/70 ring-1 ring-brand-500/15 bg-white/65 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,90,120,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
          <AnimatePresence>
            {active === null ? (
              <motion.div
                key="brand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                <p
                  className="gradient-text font-heading font-semibold leading-none"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
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
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                {(() => {
                  const ActiveIcon = services[active].icon;
                  return (
                    <span
                      className="mb-2 inline-flex items-center justify-center size-10 rounded-xl text-white shadow-md"
                      style={{
                        background:
                          'linear-gradient(160deg, #00b7d4 0%, #009ab8 45%, #007092 100%)',
                      }}
                    >
                      <ActiveIcon size={20} strokeWidth={1.7} />
                    </span>
                  );
                })()}
                <p
                  className="font-heading font-semibold text-brand-700 leading-tight"
                  style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.5rem)' }}
                >
                  {services[active].title}
                </p>
                <p className="mt-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {services[active].text}
                </p>
                <ArrowDown
                  size={13}
                  className="mt-2 text-brand-500/70"
                  aria-hidden="true"
                />
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
            <motion.button
              key={s.key}
              type="button"
              aria-label={s.title}
              onClick={() => goToService(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                delay: 0.15 + i * 0.08,
                type: 'spring',
                stiffness: 320,
                damping: 22,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer group rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <span className="relative flex items-center justify-center size-14 sm:size-16">
                {/* halo difuso */}
                <span
                  className="absolute -inset-1.5 rounded-full bg-brand-400/20 blur-md transition-opacity duration-300"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
                {/* onda expansiva al activarse */}
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-brand-400"
                    animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                )}
                {/* cuerpo con volumen */}
                <span
                  className="absolute inset-0 rounded-full shadow-[0_8px_20px_rgba(0,90,120,0.28),inset_0_1px_0_rgba(255,255,255,0.25)]"
                  style={{
                    background:
                      'linear-gradient(160deg, #00b7d4 0%, #009ab8 45%, #007092 100%)',
                  }}
                />
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 55%)',
                  }}
                />
                <Icon
                  size={26}
                  strokeWidth={1.6}
                  className="relative text-white"
                />
              </span>
              <span
                className="rounded-full bg-white/85 backdrop-blur-md px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold transition-all"
                style={{
                  color: isActive ? '#006b8f' : '#009ab8',
                  // el anillo se refuerza al activarse
                  boxShadow: isActive
                    ? '0 0 0 1px rgba(0,154,184,0.5)'
                    : '0 0 0 1px rgba(0,154,184,0.2)',
                }}
              >
                {s.title}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* indicador de posición en el ciclo (sin barrido, en calma) */}
      <div
        className="mt-7 flex items-center justify-center gap-2"
        aria-hidden="true"
      >
        {services.map((s, i) => (
          <span
            key={s.key}
            className="h-1.5 rounded-full transition-all duration-500 ease-out"
            style={{
              width: i === active ? '1.5rem' : '0.375rem',
              backgroundColor:
                i === active ? '#009ab8' : 'rgba(0,154,184,0.22)',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
