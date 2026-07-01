import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('training');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

function VideoEmbed({ title, url }: { title: string; url: string }) {
  return (
    <section className="mt-4">
      <div className="mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm">
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="size-full"
        />
      </div>

      <p className="mt-2 text-center text-sm text-gray-600">{title}</p>
    </section>
  );
}

async function Header() {
  const t = await getTranslations('training');

  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        {t('metadata.title')}
      </Heading>

      <Lead className="mt-6 text-center">
        {t('metadata.description')}
      </Lead>

      <div className="mt-20 mb-24">

        {/* Workshop 23 de marzo */}
        <div className="mb-12">
          <h3 className="mb-2 text-center text-2xl font-semibold text-[#009AB8]">
            {t('videos.workshop23marchTitle')}
          </h3>

          <hr className="mx-auto mb-8 w-16 border-t border-gray-300" />

          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
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

        {/* Talleres */}
        <div className="mb-12">
          <h3 className="mb-2 text-center text-2xl font-semibold text-[#009AB8]">
            {t('videos.workshopsTitle')}
          </h3>

          <hr className="mx-auto mb-6 w-16 border-t border-gray-300" />

          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
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

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.workshop3Caption')}
                url={t('videos.workshop3Url')}
              />
            </div>
          </div>
        </div>

        {/* Tutoriales */}
        <div>
          <h3 className="mb-2 text-center text-2xl font-semibold text-[#009AB8]">
            {t('videos.tutorialsTitle')}
          </h3>

          <hr className="mx-auto mb-8 w-16 border-t border-gray-300" />

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
    </Container>
  );
}

export default function XDataShareVideos() {
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