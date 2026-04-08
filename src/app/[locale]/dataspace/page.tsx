import type { Metadata } from 'next';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';
import MVDImage from '../../../../public/EdD_mvd/EdD_MVD.png';
import MVDEnglishImage from '../../../../public/EdD_mvd/EdD_MVD_en.png';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('technologies.xdatashare');
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

function VideoEmbed({ title, url }: { title: string; url: string }) {
  return (
    <section className="mt-4">
      {/* <h3 className="text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h3>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" /> */}
      <div className="mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm">
        <iframe
          src={url}
          //   title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="size-full"
        ></iframe>
      </div>
      <p className="text-center text-gray-600 text-sm mt-2">{title}</p>
    </section>
  );
}
async function Header() {
  const t = await getTranslations('technologies.xdatashare');
  const locale = await getLocale();
  const imageSrc = locale === 'en' ? MVDEnglishImage : MVDImage;
  return (
    <Container className="mt-16">
      {/* Título principal */}
      <Heading as="h1" className="text-center">
        {t('header.title')}
      </Heading>
      <Lead className="mt-6 text-center">{t('header.lead')}</Lead>

      {/* Botón destacado arriba */}
      <div className="mt-10 flex justify-center">
        <Button
          href="https://xdatashare.srv.cesga.es"
          target="_blank"
          className="bg-emerald-100 hover:bg-emerald-600 text-white text-lg px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          {t('access.button')}
        </Button>
      </div>

      {/* Imagen + texto lado a lado */}
      <section className="mt-20 mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="mb-10 lg:mb-0 lg:order-2 flex justify-center">
          <Image
            src={imageSrc}
            alt={t('header.imageAlt')}
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        <div className="max-w-2xl lg:order-1">
          <h2 className="text-3xl tracking-tight text-gray-900">
            {t('whatIs.title')}
          </h2>
          <p className="mt-6 text-lg/7 text-gray-700">{t('whatIs.text1')}</p>
          <p className="mt-4 text-lg/7 text-gray-700">{t('whatIs.text2')}</p>
        </div>
      </section>

      {/* Fases y componentes */}
      <div className="mb-16">
        {/* <Subheading className="text-3xl">{t('features.title')}</Subheading> */}
        <h2 className="text-3xl tracking-tight text-gray-900">
          {t('features.title')}
        </h2>
        <hr className="mt-6 mb-6 border-t border-gray-200" />
        <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
          <li>{t('features.iam')}</li>
          <li>{t('features.governance')}</li>
          <li>{t('features.connectors')}</li>
          <li>{t('features.observability')}</li>
          <li>{t('features.support')}</li>
        </ul>
      </div>

      {/* <Subheading>{t('videos.title')}</Subheading> */}

      {/* Videos del taller del 23 de marzo */}
      <div className="mb-24">
        <h2 className="text-3xl tracking-tight text-gray-900">
          {t('videos.title')}
        </h2>
        <hr className="mt-6 mb-10 border-t border-gray-200" />

        {/* Sección: Workshop 23 de marzo */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            {t('videos.workshop23marchTitle')}
          </h3>
          <hr className="w-16 border-t border-gray-300 mx-auto mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.workshop23marchCaption1')}
                url={t('videos.workshop23marchUrl1')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.workshop23marchCaption2')}
                url={t('videos.workshop23marchUrl2')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.workshop23marchCaption3')}
                url={t('videos.workshop23marchUrl3')}
              />
            </div>
          </div>
        </div>

        {/* Sección: Talleres */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            {t('videos.workshopsTitle')}
          </h3>
          <hr className="w-16 border-t border-gray-300 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center px-4 md:px-16">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.workshop1Caption')}
                url={t('videos.workshop1Url')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.workshop2Caption')}
                url={t('videos.workshop2Url')}
              />
            </div>
          </div>
        </div>

        {/* Sección: Tutoriales */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            {t('videos.tutorialsTitle')}
          </h3>
          <hr className="w-16 border-t border-gray-300 mx-auto mb-8" />

          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorial1Caption')}
                url={t('videos.tutorial1Url')}
              />
            </div>
          </div>
        </div>


      </div>
    </Container >
  );
}

export default function XDataShare() {
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
