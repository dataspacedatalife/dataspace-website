import clsx from 'clsx';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React, { Suspense } from 'react';
import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('how');
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

function Header() {
  const t = useTranslations('how.header');
  return (
    <Container className="mt-24">
      <Heading as="h1" className="text-center">
        {t('title')}
      </Heading>
      <Lead className="mt-6 text-center">{t('lead')}</Lead>
    </Container>
  );
}

interface SectionProps {
  title: string;
  items: string[];
  icon: any;
}

function Section({
  title,
  items,
  icon: Icon,
  centered = false,
  button, // 👈 añadimos esta prop opcional
}: SectionProps & {
  centered?: boolean;
  button?: { label: string; href: string };
}) {
  const isSingleItem = items.length === 1;

  return (
    <div
      className={`mt-20 text-center ${
        centered ? 'mx-auto flex flex-col items-center' : ''
      }`}
    >
      <Subheading className="text-3xl md:text-4xl">{title}</Subheading>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />

      <ul
        className={`mt-10 ${
          centered ? 'w-full max-w-md' : 'mx-auto max-w-2xl'
        } ${isSingleItem ? '' : 'space-y-4 text-left'}`}
      >
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 ${
              centered ? 'justify-center' : ''
            }`}
          >
            {isSingleItem ? (
              <div className="w-full rounded-2xl border border-gray-200 bg-white/80 shadow-sm p-6 text-center">
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ) : (
              <>
                <Icon className="h-5 w-5 text-gray-900 mt-0.5 shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* 👇 botón opcional */}
      {button && (
        <div className="mt-10">
          <a
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl border border-emerald-200 bg-emerald-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-emerald-700 transition"
          >
            {button.label}
          </a>
        </div>
      )}
    </div>
  );
}

export default function HowPage() {
  return (
    <Suspense>
      <How />
    </Suspense>
  );
}

function How() {
  const t = useTranslations('how');
  const who = t.raw('who.items') as string[];
  const benefits = t.raw('benefits.items') as string[];
  const commitments = t.raw('commitments.items') as string[];
  // const howToJoin = t.raw('howToJoin.items') as string[];
  // const processSteps = t.raw('process.items') as {
  //   title: string;
  //   description: string;
  // }[];

  type ProcessStep = {
    title: string;
    description: string;
  };

  type ProcessPhase = {
    title: string;
    items: ProcessStep[];
    intermediateMessage?: string;
  };

  // Traemos las fases desde i18n
  const processPhases: ProcessPhase[] = t.raw(
    'process.phases',
  ) as ProcessPhase[];

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />

      <Container className="mt-20 mb-20">
        {/* <Subheading className="text-3xl md:text-4xl text-center font-semibold">
          {t('overview.title')} 
        </Subheading>
        <hr className="mx-auto mt-6 w-24 border-t border-gray-200" /> */}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Users */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <Subheading className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
              {t('who.title')}
            </Subheading>
            <ul className="space-y-3 text-left">
              {who.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-emerald-600 mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <Subheading className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
              {t('benefits.title')}
            </Subheading>
            <ul className="space-y-3 text-left">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commitments */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <Subheading className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
              {t('commitments.title')}
            </Subheading>
            <ul className="space-y-3 text-left">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="my-24 relative">
        <Subheading className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          {t('process.title')}
        </Subheading>
        <div className="mx-auto mt-6 mb-10 h-1 w-24 rounded-full bg-emerald-500" />

        {processPhases.map((phase, phaseIndex) => (
          <Card key={phaseIndex} className="mb-12">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              {phase.title}
            </h2>
            <div className="relative grid grid-flow-row md:grid-flow-col auto-cols-fr gap-8 w-fit mx-auto">
              {phase.items.map((step, index) => (
                <Card key={index} className="max-w-sm w-full z-10">
                  {/* Círculo numerado */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-bold text-lg mb-4">
                    {index + 1 + (phaseIndex === 1 ? 2 : 0)}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {/* {step.description} */}
                    {t.rich(
                      `process.phases.${phaseIndex as 0}.items.${index as 0}.description`,
                      // @ts-expect-error importing translations from JSON doesn't correctly infer interpolated components
                      {
                        a: (chunks: React.ReactNode) => (
                          <Link
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-600 underline hover:text-emerald-800 transition"
                            href="https://xdatashare.srv.cesga.es/assets/static/files/Guia-del-participante.pdf"
                          >
                            {chunks}
                          </Link>
                        ),
                        aForm: (chunks: React.ReactNode) => (
                          <Link
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-600 underline hover:text-emerald-800 transition"
                            href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQnCH95UNzE4SVFKRDlMNlNKU0ROODlEM1dNSFdCQy4u"
                          >
                            {chunks}
                          </Link>
                        ),
                      },
                    )}
                  </p>
                </Card>
              ))}
              <div className="hidden md:absolute inset-x-10 h-0 border-emerald-600 border top-1/2 -translate-y-1/2"></div>
            </div>
          </Card>
        ))}
      </Container>

      <Container className="mt-16 mb-24 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-10 md:p-16 shadow-lg text-center">
          <Subheading className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
            {t('howToJoin.title')}
          </Subheading>
          <hr className="mx-auto mt-6 mb-6 w-24 border-t border-gray-200" />

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            {t('howToJoin.description')}
          </p>

          <a
            href={t('howToJoin.formLink')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl border border-emerald-200 bg-emerald-600 px-8 py-4 text-white font-semibold shadow-md hover:bg-emerald-700 transition"
          >
            {t('howToJoin.formButton')}
          </a>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
