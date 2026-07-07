import clsx from 'clsx';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Handshake,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React, { Suspense } from 'react';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { ReviewCalendar } from '@/components/review-calendar';
import { Heading, Lead, Subheading } from '@/components/text';
import { Button } from '@/components/button';

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

      <Lead className="mt-6 text-center">
        {t('lead')}
      </Lead>

      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button href="#how-to-join">{t('guideButton.label')}</Button>
      </div>
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
  button,
}: SectionProps & {
  centered?: boolean;
  button?: { label: string; href: string };
}) {
  const isSingleItem = items.length === 1;

  return (
    <div
      className={`mt-20 text-center ${centered ? 'mx-auto flex flex-col items-center' : ''
        }`}
    >
      <Subheading className="text-3xl md:text-4xl">{title}</Subheading>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />

      <ul
        className={`mt-10 ${centered ? 'w-full max-w-md' : 'mx-auto max-w-2xl'
          } ${isSingleItem ? '' : 'space-y-4 text-left'}`}
      >
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 ${centered ? 'justify-center' : ''
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
  const roles = t.raw('roles.items') as string[];
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Users */}
          <div className="bg-white border border-[#009AB8]/15 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#3fd7c0] to-[#00a8b8] shadow-md">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              {t('who.title')}
            </h3>
            <ul className="space-y-3 text-left">
              {who.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-[#009AB8] mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Roles */}
          <div className="bg-white border border-[#009AB8]/15 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00a8b8] to-[#006b8f] shadow-md">
              <Handshake className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              {t('roles.title')}
            </h3>
            <ul className="space-y-3 text-left">
              {roles.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Handshake className="h-5 w-5 text-[#006b8f] mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white border border-[#009AB8]/15 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#3fd7c0] to-[#00a8b8] shadow-md">
              <CheckCircle2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              {t('benefits.title')}
            </h3>
            <ul className="space-y-3 text-left">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#009AB8] mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commitments */}
          <div className="bg-white border border-[#009AB8]/15 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00a8b8] to-[#006b8f] shadow-md">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              {t('commitments.title')}
            </h3>
            <ul className="space-y-3 text-left">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#006b8f] mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="my-24 relative">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          {t('process.title')}
        </h2>
        <div className="mx-auto mt-6 mb-10 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#3fd7c0] via-[#00a8b8] to-[#006b8f]" />

        <div className="bg-white border border-[#009AB8]/15 rounded-3xl p-8 shadow-sm md:grid md:grid-cols-2 md:gap-10">
          {processPhases.map((phase, phaseIndex) => {
            const phaseGradient =
              phaseIndex === 0
                ? 'from-[#3fd7c0] to-[#00a8b8]'
                : 'from-[#00a8b8] to-[#006b8f]';

            return (
              <div
                key={phaseIndex}
                className={clsx(
                  phaseIndex > 0 &&
                  'mt-12 pt-12 border-t border-gray-200 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:pl-10',
                )}
              >
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">
                  {phase.title}
                </h2>
                <div
                  className={clsx(
                    'mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-to-r',
                    phaseGradient,
                  )}
                />
                <div className="flex flex-col items-center gap-6">
                  {phase.items.map((step, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#009AB8]/15 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm w-full"
                    >
                      {/* Círculo numerado */}
                      <div
                        className={clsx(
                          'flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-4 shadow-md bg-gradient-to-br',
                          phaseGradient,
                        )}
                      >
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
                                className="text-[#009AB8] underline hover:text-[#006b8f] transition"
                                href="https://xdatashare.srv.cesga.es/static/files/Guia-del-participante.pdf"
                              >
                                {chunks}
                              </Link>
                            ),
                            aForm: (chunks: React.ReactNode) => (
                              <Link
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#009AB8] underline hover:text-[#006b8f] transition"
                                href={t('howToJoin.formLink')}
                              >
                                {chunks}
                              </Link>
                            ),
                          },
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <Container id="how-to-join" className="mt-16 mb-24 relative z-10 scroll-mt-24">
        <div className="bg-gradient-to-br from-white via-[#f5fcfe] to-[#e6f7fa] border border-[#009AB8]/15 rounded-3xl p-10 md:p-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-gray-900">
            {t('howToJoin.title')}
          </h2>

          <div className="mx-auto mt-6 mb-10 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#3fd7c0] via-[#00a8b8] to-[#006b8f]" />

          {/* Grid responsive side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* IZQUIERDA: Descripción + Botón */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <h3 className="text-center text-2xl font-semibold text-gray-900 mb-4">
                {t('howToJoin.subtitle')}
              </h3>

              <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                {t('howToJoin.description')}
              </p>

              <div className="flex justify-center">
                <Button
                  href={t('howToJoin.formLink')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('howToJoin.formButton')}
                </Button>
              </div>
            </div>

            {/* DERECHA: Ciclo revisiones + Calendario */}
            <div className="text-center md:text-left">
              <h3 className="text-center text-2xl font-semibold text-gray-900 mb-4">
                {t('reviewCycle.title')}
              </h3>

              <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {t('reviewCycle.description')}
              </p>

              <ReviewCalendar />
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
