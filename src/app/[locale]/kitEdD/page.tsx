import { CheckCircle2, Globe, ShieldCheck, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { type AppConfig, useMessages, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React, { Suspense } from 'react';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

/* ---------- Metadata ---------- */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('kit.metadata');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: { title: t('title'), description: t('description') },
    alternates: { canonical: '/kit' },
  };
}

/* ---------- Small helpers (inline to avoid extra files) ---------- */
function Linkify({ text }: { text: string }) {
  const parts = text.split(/(\bhttps?:\/\/\S+|\b[\w.+-]+@[\w-]+\.[\w.-]+)\b/g);
  return (
    <>
      {parts.map((part, i) => {
        if (/^https?:\/\//.test(part)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {part}
            </a>
          );
        }
        if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`} className="underline">
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-cyan-400/10 via-emerald-200/10 to-green-400/10 p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-gray-700/80">{label}</div>
    </div>
  );
}

/* ---------- Visual blocks ---------- */
function HeroIllustration({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/70 shadow-sm">
        {/* priority is optional; remove if you prefer */}
        <Image src={src} alt={alt} width={1920} height={1080} priority />
      </div>
    </div>
  );
}

const CardIcons = { Users, Globe, CheckCircle2 };
export type CardIcon = keyof typeof CardIcons;

function FeatureCards({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    text: string;
    icon: CardIcon;
  }[];
}) {
  return (
    <section className="mt-20">
      <h3 className="text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h3>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />

      {/* <div className="font-mono text-2xl font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
        {title}
      </div>
      <hr className="mt-6 border-t border-gray-200" /> */}

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {items.map((it) => {
          const Icon = CardIcons[it.icon];
          return (
            <div
              key={it.title}
              className="rounded-2xl border border-emerald-200/50 bg-white/30 p-6 shadow-sm hover:shadow-md transition backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-green-600/80" />
                <h4 className="text-lg font-semibold text-gray-900/90">
                  {it.title}
                </h4>
              </div>
              <p className="mt-3 text-gray-700/80">{it.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Timeline({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section className="mt-20">
      <h3 className="text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h3>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />
      <ol className="mx-auto mt-10 max-w-2xl space-y-6">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-sm font-semibold text-gray-900">
              {i + 1}
            </span>
            <p className="text-lg text-gray-700">
              <Linkify text={s} />
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

type MetricItem = {
  label: string;
  value: string;
};

type MetricsProps = {
  title: string;
  sections: {
    [key: string]: {
      title: string;
      items: MetricItem[];
    };
  };
};

function Metrics({ title, sections }: MetricsProps) {
  return (
    <section className="mt-20">
      <h3 className="text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h3>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />

      <div className="mx-auto mt-12 max-w-4xl space-y-12">
        {Object.values(sections).map((section) => (
          <div key={section.title}>
            <h4 className="text-xl font-semibold text-center mb-6">
              {section.title}
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {section.items.map((m) => (
                <StatCard key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LogoCloud({
  title,
  items,
}: {
  title: string;
  items: { name: string; src: string }[];
}) {
  return (
    <section className="mt-20">
      <h3 className="text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h3>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 items-center gap-8 sm:grid-cols-3">
        {items.map((l) => (
          <div
            key={l.name}
            className="flex items-center justify-center opacity-90"
          >
            <Image src={l.src} alt={l.name} width={140} height={40} />
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoEmbed({ title, url }: { title: string; url: string }) {
  return (
    <section className="mt-20">
      <h3 className="text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h3>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />
      <div className="mx-auto mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm">
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="size-full"
        ></iframe>
      </div>
    </section>
  );
}

/* ---------- Header ---------- */
async function Header() {
  const t = await getTranslations('kit.header');
  return (
    <Container className="mt-24 text-center">
      <Heading as="h1" className="mt-4">
        {t('title')}
      </Heading>
      {t('ribbon') && (
        <div className="inline-block rounded-full bg-gray-900 mt-8 px-3 py-1 text-xs font-semibold text-white">
          {t('ribbon')}
        </div>
      )}
      <Lead className="mt-6">{t('lead')}</Lead>

      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href={t('ctaPrimary.href')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-200 bg-white/80 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white"
        >
          {t('ctaPrimary.label')}
        </a>
        <a
          href={t('cta3.href')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-200 bg-white/80 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white"
        >
          {t('cta3.label')}
        </a>
        <a
          href={t('ctaSecondary.href')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-200 bg-white/80 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white"
        >
          {t('ctaSecondary.label')}
        </a>
      </div>
    </Container>
  );
}

/* ---------- Generic Section ---------- */
interface SectionProps {
  title: string;
  items: string[];
  icon: any;
  centered?: boolean;
}
function Section({ title, items, icon: Icon, centered = false }: SectionProps) {
  const isSingleItem = items.length === 1;
  return (
    <div
      className={`mt-20 text-center ${centered ? 'mx-auto flex flex-col items-center' : ''}`}
    >
      <Subheading className="text-3xl md:text-4xl">{title}</Subheading>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />
      <ul
        className={`mt-10 ${centered ? 'w-full max-w-md' : 'mx-auto max-w-2xl'} ${
          isSingleItem ? '' : 'space-y-4 text-left'
        }`}
      >
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 ${centered ? 'justify-center' : ''}`}
          >
            {isSingleItem ? (
              <div className="w-full rounded-2xl border border-gray-200 bg-white/80 p-6 text-center shadow-sm">
                <span className="text-lg text-gray-700">
                  <Linkify text={item} />
                </span>
              </div>
            ) : (
              <>
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gray-900" />
                <span className="text-lg text-gray-700">
                  <Linkify text={item} />
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Page ---------- */
const Kit = () => {
  const messages = useMessages();

  const t = useTranslations('kit');

  const who = t.raw('who.items') as string[];
  const benefits = t.raw('benefits.items') as string[];
  const amounts = t.raw('amounts.items') as string[];
  const conditions = t.raw('conditions.items') as string[];
  // const why = t.raw('why.items') as string[];
  const steps = t.raw('steps.items') as string[];
  // const stats = t.raw('stats.items') as { label: string; value: string }[];
  // const links = t.raw('links.items') as string[];

  // const visual = t.raw('visual') as {
  //   heroImage: { src: string; alt: string };
  //   video?: { title: string; url: string };
  //   logos: { title: string; items: { name: string; src: string }[] };
  //   metrics: { title: string; items: { label: string; value: string }[] };
  //   cards: {
  //     title: string;
  //     items: {
  //       title: string;
  //       text: string;
  //       icon: 'Users' | 'Globe' | 'CheckCircle2';
  //     }[];
  //   };
  //   timeline: { title: string; steps: string[] };
  // };

  const visual = messages.kit.visual;

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />

      {/* Hero illustration */}
      {/* <Container>
        <HeroIllustration
          src={visual.heroImage.src}
          alt={visual.heroImage.alt}
        />
      </Container> */}

      {/* Vídeo (opcional) */}
      {visual.video?.url && (
        <VideoEmbed title={visual.video.title} url={visual.video.url} />
      )}

      <Container className="mt-20 mb-20">
        {/* Cards (modalidades) */}
        <FeatureCards
          title={visual.cards.title}
          items={
            visual.cards
              .items as (AppConfig['Messages']['kit']['visual']['cards']['items'][number] & {
              icon: CardIcon;
            })[]
          }
        />

        {/* Métricas compactas (visuales) */}
        <Metrics
          title={visual.metrics.title}
          sections={visual.metrics.sections}
        />

        {/* Secciones base */}
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <Section title={t('who.title')} items={who} icon={Users} />
          <Section
            title={t('benefits.title')}
            items={benefits}
            icon={CheckCircle2}
          />
          {/* <Section title={t('amounts.title')} items={amounts} icon={Globe} /> */}
          <Section
            title={t('conditions.title')}
            items={conditions}
            icon={ShieldCheck}
          />
          {/* <Section title={t('why.title')} items={why} icon={CheckCircle2} /> */}
          <Section title={t('steps.title')} items={steps} icon={CheckCircle2} />
        </div>

        {/* Timeline */}
        {/* <Timeline title={visual.timeline.title} steps={visual.timeline.steps} /> */}
      </Container>

      <Footer />
    </main>
  );
};

export default function KitPage() {
  return (
    <Suspense>
      <Kit />
    </Suspense>
  );
}
