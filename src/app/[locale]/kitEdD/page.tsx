import { CheckCircle2, Globe, ShieldCheck, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { useMessages, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React, { Suspense } from 'react';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Button } from '@/components/button';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import KitEdDImg from '../../../../public/kit/portada-kit-espacios-de-datos.svg';

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

const CardIcons = { Users, Globe, CheckCircle2 };
export type CardIcon = keyof typeof CardIcons;

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

      <Lead className="mt-6">{t('lead')}</Lead>

      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button
          href={t('ctaPrimary.href')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('ctaPrimary.label')}
        </Button>

        <Button
          href={t('ctaSecondary.href')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('ctaSecondary.label')}
        </Button>

        <Button
          href={t('cta3.href')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('cta3.label')}
        </Button>
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
      {/* <Subheading className="text-3xl md:text-4xl">{title}</Subheading> */}
      <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />
      <ul
        className={`mt-10 ${centered ? 'w-full max-w-md' : 'mx-auto max-w-2xl'} ${isSingleItem ? '' : 'space-y-4 text-left'
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

function FeatureCardsWithMetrics({
  title,
  cards,
  metrics,
}: {
  title: string;
  cards: {
    title: string;
    text: string;
    icon: CardIcon;
  }[];
  metrics: {
    sections: {
      [key: string]: {
        title: string;
        items: { label: string; value: string }[];
      };
    };
  };
}) {
  return (
    <section className="mt-24">
      <h3 className="text-center text-4xl font-semibold md:text-5xl">
        {title}
      </h3>
      <hr className="mx-auto mt-6 w-28 border-t border-gray-300" />

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2">
        {cards.map((card) => {
          const Icon = CardIcons[card.icon];
          const metricSection = card.title.toLowerCase().includes('proveedor')
            ? metrics.sections.proveedor
            : metrics.sections.participante;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-emerald-200/50 bg-white/40 p-8 shadow-md hover:shadow-lg transition backdrop-blur-sm text-center"
            >
              {/* Card principal */}
              <div className="flex flex-col items-center">
                <Icon className="h-10 w-10 text-emerald-600/80 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h4>
              </div>

              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {card.text}
              </p>

              {/* Métricas unidas debajo */}
              <div className="mt-8">
                <h5 className="text-sm font-medium text-gray-800 mb-4 uppercase tracking-wide">
                  {metricSection.title}
                </h5>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {metricSection.items.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-100/20 via-emerald-100/10 to-transparent p-5 shadow-sm"
                    >
                      <div className="text-2xl font-bold text-black">
                        {m.value}
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
const Kit = () => {
  const messages = useMessages();
  const t = useTranslations('kit');

  const who = t.raw('who.items') as string[];
  const benefits = t.raw('benefits.items') as string[];
  const conditions = t.raw('conditions.items') as string[];
  const steps = t.raw('steps.items') as string[];
  const visual = messages.kit.visual;

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />

      <Container className="mt-20 mb-20 space-y-24">
        {/* Imagen y texto superior */}
        <div className="relative mt-16 w-full overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)',
            }}
          >
            <Image
              src={KitEdDImg}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center w-full px-6 lg:px-16 py-20">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-4xl font-semibold text-gray-900">
                {t('what.title')}
              </h3>
              <p className="mt-4 text-lg text-gray-800">
                {t('what.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Bloques principales */}
        <div className="border-b border-gray-200/60 pb-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <Section title={t('who.title')} items={who} icon={Users} />
            <Section
              title={t('benefits.title')}
              items={benefits}
              icon={CheckCircle2}
            />
          </div>
        </div>

        <div className="border-b border-gray-200/60 pb-16">
          <FeatureCardsWithMetrics
            title={visual.cards.title}
            cards={visual.cards.items as any}
            metrics={visual.metrics}
          />
        </div>

        <div className="border-b border-gray-200/60 pb-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <Section
              title={t('conditions.title')}
              items={conditions}
              icon={ShieldCheck}
            />
            <Section
              title={t('steps.title')}
              items={steps}
              icon={CheckCircle2}
            />
          </div>
        </div>

        {/* Sección: Interés en solicitar el kit */}
        <section className="mt-24 pb-16 border-b border-gray-200/60 text-center">
          <h3 className="text-3xl font-semibold text-gray-900">
            {t('interest.title')}
          </h3>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            {t('interest.description')}
          </p>

          <div className="mt-8">
            <Button
              href={t('interest.formLink')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('interest.button')}
            </Button>
          </div>
        </section>

        {visual.video?.url && (
          <VideoEmbed title={visual.video.title} url={visual.video.url} />
        )}
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
