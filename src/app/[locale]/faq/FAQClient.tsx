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

  const sections = [
    {
      title: t('section1'),
      items: [
        { q: t('question1'), a: t('answer1') },
        { q: t('question2'), a: t('answer2') },
        { q: t('question3'), a: t('answer3') },
        { q: t('question4'), a: t('answer4') },
      ],
    },
    {
      title: t('section2'),
      items: [
        { q: t('question5'), a: t('answer5') },
        { q: t('question6'), a: t('answer6') },
      ],
    },
    {
      title: t('section3'),
      items: [
        { q: t('question7'), a: t('answer7') },
        { q: t('question8'), a: t('answer8') },
        { q: t('question9'), a: t('answer9') },
      ],
    },
    {
      title: t('section4'),
      items: [
        { q: t('question10'), a: t('answer10') },
        { q: t('question11'), a: t('answer11') },
        { q: t('question12'), a: t('answer12') },
        { q: t('question13'), a: t('answer13') },
      ],
    },
    {
      title: t('section5'),
      items: [
        { q: t('question14'), a: t('answer14') },
        { q: t('question15'), a: t('answer15') },
        { q: t('question16'), a: t('answer16') },
      ],
    },
    {
      title: t('section6'),
      items: [
        { q: t('question17'), a: t('answer17') },
        { q: t('question18'), a: t('answer18') },
      ],
    },
    {
      title: t('section7'),
      items: [
        { q: t('question19'), a: t('answer19') },
        { q: t('question20'), a: t('answer20') },
        { q: t('question21'), a: t('answer21') },
      ],
    },
    {
      title: t('section8'),
      items: [
        { q: t('question22'), a: t('answer22') },
        { q: t('question23'), a: t('answer23') },
      ],
    },
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

        <div className="mt-8 flex justify-center">
          <Button
            href="https://xdatashare.srv.cesga.es/static/files/Manual_de_Usuario-MVD.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('link')}
          </Button>
        </div>
      </Container>
      <Container className="mt-16 pb-24">
        <div className="mx-auto max-w-5xl space-y-14 text-left">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-[#009AB8] mb-6 text-center">
                {section.title}
              </h2>

              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className={`pb-6 ${i !== section.items.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.q}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}