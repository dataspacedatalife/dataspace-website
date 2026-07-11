'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { Share2, Cpu, Search, CloudUpload } from 'lucide-react';

export type ServiceItem = {
  key: string;
  icon: LucideIcon;
  title: string;
  text: string;
  what: string;
  example: string;
  image: string;
  href: string;
};

export const SERVICES_GRADIENT =
  'linear-gradient(180deg, #00aec6 0%, #009AB8 60%, #009AB8 100%)';

export const BRAND_GRADIENT =
  'linear-gradient(135deg, #3fd7c0 0%, #00b7d4 35%, #009ab8 65%, #006b8f 100%)';

export const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
export const HEADING = "'Barlow Condensed', sans-serif";

/* orden narrativo del ciclo de vida: entra → se procesa → se convierte
   en conocimiento → vuelve como servicios */
export function useServicesData(): ServiceItem[] {
  const t = useTranslations();
  const tS = useTranslations('home.services');

  const base = [
    { key: 'share', icon: Share2, href: 'https://dl-cesga.srv.cesga.es' },
    { key: 'compute', icon: Cpu, href: 'https://hpc.dataspace.cesga.es' },
    { key: 'analyze', icon: Search, href: 'https://bigdata.dataspace.cesga.es/' },
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

export function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ============ FOTO DEL SERVICIO (con fallback al icono) ============ */
export function ServiceImage({
  service,
  className = '',
  kenBurns = false,
  chip = false,
}: {
  service: ServiceItem;
  className?: string;
  kenBurns?: boolean;
  chip?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;
  const animateIn = kenBurns && !reduceMotion;

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 ring-1 ring-white/25 shadow-xl shadow-black/15 ${className}`}
    >
      {!failed ? (
        <motion.div
          className="absolute inset-0"
          initial={animateIn ? { scale: 1.08 } : false}
          animate={animateIn ? { scale: 1 } : undefined}
          transition={{ duration: 6, ease: 'easeOut' }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            onError={() => setFailed(true)}
            className="object-cover"
          />
        </motion.div>
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

      {/* velo inferior para legibilidad del chip */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

      {/* chip con el dominio real del servicio */}
      {chip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35, ease: 'easeOut' }}
          className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 backdrop-blur-md px-3.5 py-2 shadow-lg"
        >
          <Icon size={15} className="text-white" strokeWidth={1.8} />
          <span
            className="text-[11px] text-white/95"
            style={{ fontFamily: MONO }}
          >
            {new URL(service.href).hostname}
          </span>
        </motion.div>
      )}
    </div>
  );
}
