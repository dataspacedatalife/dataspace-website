'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  motion,
  animate,
  AnimatePresence,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { MONO, polar, useServicesData } from './shared';

/* una vuelta completa del paquete de datos: 4 tramos de 7 s */
const ORBIT_MS = 28000;

/* el paquete arranca 40° antes de "comparte" para que la tarjeta de marca
   se lea unos segundos antes de la primera activación */
const START_ANGLE = 50;

/* paquete de datos que orbita el anillo: cabeza brillante + estela corta y
   compacta que se atenúa por detrás (offsets angulares negativos) */
const DATA_PACKET = [
  { d: 0, r: 2.6, op: 1, head: true },
  { d: -5, r: 2, op: 0.55, head: false },
  { d: -11, r: 1.5, op: 0.32, head: false },
  { d: -18, r: 1.1, op: 0.18, head: false },
  { d: -26, r: 0.8, op: 0.1, head: false },
];

/* ============ HERO: RUEDA INTERACTIVA DEL DATASPACE ============ */
export function DataSpaceWheel() {
  const t = useTranslations('home.hero');
  const services = useServicesData();
  const reduceMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const packetRef = useRef<SVGGElement>(null);
  const inView = useInView(containerRef, { amount: 0.4 });

  const [active, setActive] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);

  /* un único reloj para el paquete y el resaltado: el ángulo de órbita */
  const angle = useMotionValue(START_ANGLE);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);
  const lastSegRef = useRef(3); // tramo previo a la primera llegada
  const idleRef = useRef(true); // tarjeta de marca hasta la próxima llegada

  /* el paquete gira y, al llegar a un nodo, ese servicio se activa y se
     mantiene mientras recorre su tramo de salida */
  useEffect(() => {
    return angle.on('change', (a) => {
      const el = packetRef.current;
      if (el) el.style.transform = `rotate(${a}deg)`;

      // tramos de 90°: comparte [90,180) · analiza [180,270) ·
      // computa [270,360) · expón [0,90)
      const seg = Math.floor((((a % 360) - 90 + 360) % 360) / 90);
      if (seg !== lastSegRef.current) {
        lastSegRef.current = seg;
        idleRef.current = false;
        setActive(seg);
      }
    });
  }, [angle]);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(angle, angle.get() + 360, {
      duration: ORBIT_MS / 1000,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    });
    animRef.current = controls;
    return () => {
      controls.stop();
      animRef.current = null;
    };
  }, [inView, reduceMotion, angle]);

  /* ratón o foco de teclado sobre la rueda: la órbita espera */
  const interacting = hovering || focused;
  useEffect(() => {
    const controls = animRef.current;
    if (!controls) return;
    if (interacting) controls.pause();
    else controls.play();
  }, [interacting]);

  /* al salir, vuelve la tarjeta de marca hasta la siguiente llegada */
  function rest() {
    setActive(null);
    idleRef.current = true;
  }

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
        rest();
      }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocused(false);
          rest();
        }
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
          className="absolute inset-0 w-full h-full overflow-visible"
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

          {/* la etiqueta de gobernanza abraza el aura por su arco inferior,
              bajo el nodo de comparte, reforzando la idea de envoltorio.
              Dos radios: la etiqueta de comparte no escala con el SVG y en
              pantallas pequeñas invade un arco más cerrado */}
          <path
            id="govArcSm"
            d="M 7.87 85.35 A 55 55 0 0 0 92.13 85.35"
            fill="none"
          />
          <path
            id="govArc"
            d="M 10.17 83.42 A 52 52 0 0 0 89.83 83.42"
            fill="none"
          />
          <text
            className="sm:hidden"
            fill="#006b8f"
            fontSize="2.4"
            letterSpacing="0.5"
            style={{ fontFamily: MONO, textTransform: 'uppercase' }}
          >
            <textPath href="#govArcSm" startOffset="50%" textAnchor="middle">
              {t('governance')}
            </textPath>
          </text>
          <text
            className="hidden sm:block"
            fill="#006b8f"
            fontSize="2"
            letterSpacing="0.5"
            style={{ fontFamily: MONO, textTransform: 'uppercase' }}
          >
            <textPath href="#govArc" startOffset="50%" textAnchor="middle">
              {t('governance')}
            </textPath>
          </text>

          {/* halo suave del paquete de datos en movimiento */}
          <filter id="dataGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* pista base del ciclo entre servicios: el camino del dato */}
          <circle
            cx="50"
            cy="50"
            r={NODE_R}
            fill="none"
            stroke="url(#ringGrad)"
            strokeOpacity="0.16"
            strokeWidth="0.6"
            strokeDasharray="1 3"
            strokeLinecap="round"
          />

          {/* paquete de datos circulando por el ciclo entre servicios
              (sentido horario: compartir → analizar → computar → exponer).
              Su llegada a cada nodo es la que activa ese servicio. */}
          <g
            ref={packetRef}
            style={{
              transform: `rotate(${START_ANGLE}deg)`,
              transformBox: 'view-box',
              transformOrigin: '50px 50px',
            }}
          >
            {DATA_PACKET.map(({ d, r, op, head }, k) => {
              const p = polar(50, 50, NODE_R, d);
              return (
                <circle
                  key={k}
                  cx={p.x}
                  cy={p.y}
                  r={r}
                  fill={head ? '#5ff0d8' : '#00b7d4'}
                  fillOpacity={op}
                  filter={head ? 'url(#dataGlow)' : undefined}
                />
              );
            })}
          </g>
        </svg>

        {/* la etiqueta curvada vive en un SVG decorativo: versión accesible */}
        <span className="sr-only">{t('governance')}</span>

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
              <motion.button
                key={active}
                type="button"
                onClick={() => goToService(active)}
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-700 rounded-full"
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
              </motion.button>
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
              <span className="relative flex items-center justify-center size-12 sm:size-16">
                {/* halo difuso */}
                <span
                  className="absolute -inset-1.5 rounded-full bg-brand-400/20 blur-md transition-opacity duration-300"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
                {/* onda expansiva al activarse: un único pulso, sin bucle */}
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-brand-400 pointer-events-none"
                    animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
                    transition={{
                      duration: 0.9,
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
                className="rounded-full bg-white/85 backdrop-blur-md px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold transition-all"
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
    </motion.div>
  );
}
