import Image from 'next/image';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

async function Header() {
  const t = await getTranslations('about');

  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        {t('header.title')}
      </Heading>

      <Lead className="mt-10 text-center">
        {t('header.lead')}
      </Lead>

      {/* ABOUT + BENEFITS */}
      <section className="mt-16 mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ABOUT */}
        <div>
          <h2 className="text-3xl font-medium tracking-tight">
            {t('about.title')}
          </h2>

          <p className="mt-6 text-lg/7 text-gray-700">
            {t.rich('about.paragraph1', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className="mt-4 text-lg/7 text-gray-700">
            {t.rich('about.paragraph2', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className="mt-4 text-lg/7 text-gray-700">
            {t.rich('about.paragraph3', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className="mt-4 text-lg/7 text-gray-700">
            {t.rich('about.paragraph4', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

       
           {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-[#009AB8]/20 blur-3xl" />
            </div>

            <div className="relative overflow-hidden">
              <Image
                src={t('oneHealth.image')}
                alt={t('header.title')}
                width={900}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 space-y-20">
        {/* ONE HEALTH */}
        <div>
          <h2 className="text-3xl font-medium tracking-tight">
            {t('oneHealth.title')}
          </h2>

          <p className="mt-6 text-lg/7 text-gray-700">
            {t.rich('oneHealth.paragraph1', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className="mt-4 text-lg/7 text-gray-700">
            {t.rich('oneHealth.paragraph2', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className="mt-4 text-lg/7 text-gray-700">
            {t.rich('oneHealth.paragraph3', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

 {/* BENEFITS */}
        <div>
          <h2 className="text-3xl font-medium tracking-tight">
            {t('benefits.title')}
          </h2>

          <ul className="mt-6 space-y-4 text-lg/7 text-gray-700">
            <li>{t('benefits.item1')}</li>
            <li>{t('benefits.item2')}</li>
            <li>{t('benefits.item3')}</li>
            <li>{t('benefits.item4')}</li>
            <li>{t('benefits.item5')}</li>
            <li>{t('benefits.item6')}</li>
          </ul>
        </div>
     
      </section>

      {/* FUNDING */}
      <div className="mt-12 mb-16 pt-6">
        <Subheading>{t('funding.title')}</Subheading>

        <hr className="mt-6 mb-6 border-t border-gray-200" />

        <p className="mt-6 text-md/7 text-gray-700">
          {t.rich('funding.call', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <p className="mt-4 text-gray-700">
          {t.rich('funding.grant', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <p className="mt-4 mb-4 text-md/7 text-gray-700">
          {t.rich('funding.program', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <p className="mb-4 whitespace-pre-line text-gray-700">
          {t.rich('funding.details', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <Button href={t('funding.linkUrl')} target="_blank">
          {t('funding.linkText')}
        </Button>
      </div>
    </Container>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />

      <Container>
        <Navbar />
      </Container>

      <Header />

      <Footer />
    </main>
  );
}