'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { Button } from '@/components/button';

export default function FAQClient() {
  const t = useTranslations('faq');

  const faqs = [
    { q: t('question1'), a: t('answer1') },
    { q: t('question2'), a: t('answer2') },
    { q: t('question3'), a: t('answer3') },
    { q: t('question4'), a: t('answer4') },
    { q: t('question5'), a: t('answer5') },
    { q: t('question6'), a: t('answer6') },
    { q: t('question7'), a: t('answer7') },
    { q: t('question8'), a: t('answer8') },
    { q: t('question9'), a: t('answer9') },
    { q: t('question10'), a: t('answer10') },
    { q: t('question11'), a: t('answer11') },
    { q: t('question12'), a: t('answer12') },
    { q: t('question13'), a: t('answer13') },
    { q: t('question14'), a: t('answer14') },
    { q: t('question15'), a: t('answer15') },
    { q: t('question16'), a: t('answer16') },
    { q: t('question17'), a: t('answer17') },
    { q: t('question18'), a: t('answer18') },
    { q: t('question19'), a: t('answer19') },
  ];

  return (
    <main className="overflow-hidden">
      <GradientBackground />

      <Container>
        <Navbar />

        <Heading as="h1" className="mt-16 text-center">
          {t('title')}
        </Heading>

        <Lead className="mt-10 text-center">
          {t('description')}
        </Lead>

        <div className="mt-8 text-center">
          <a
            href="/faq/Manual_Usuario_MVD_XDataShare_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#009AB8] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            {t('link')}
          </a>
        </div>
      </Container>

      <Container className="mt-16 pb-24">
        <div className="mx-auto max-w-5xl text-left">
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`pb-6 ${
                  i !== faqs.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <h3 className="text-2xl font-bold text-[#009AB8]">
                  {item.q}
                </h3>

                <p className="mt-3 text-xl text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}