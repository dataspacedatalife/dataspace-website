import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("training");

  const headersList = await headers();

  const protocol =
    headersList.get("x-forwarded-proto") ??
    (process.env.NODE_ENV === "development" ? "http" : "https");

  const host =
    headersList.get("x-forwarded-host") ??
    headersList.get("host");

  const baseUrl = `${protocol}://${host}`;
  const image = `${baseUrl}/training/training-${locale}.png`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      type: "website",
      url: `${baseUrl}/${locale}/training`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: t("metadata.title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: [image],
    },
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
        {t('intro.title')}
      </Heading>

      <div className="mx-auto mt-8 max-w-3xl">
        <p className="text-gray-600">{t('intro.paragraph1')}</p>
        <p className="mt-4 text-gray-600">{t('intro.paragraph2')}</p>
        <p className="mt-4 text-gray-600">{t('intro.paragraph3')}</p>

      </div>

      <div className="mt-10 text-center">
        <Link
          href="/events"
          className="inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold bg-[#009AB8] shadow-lg hover:scale-105 transition"
        >
          {t('cta.text')}
        </Link>
      </div>

      <div className="mt-20 mb-24">

         {/* Cursos */}
        <div className="mb-2">
          <h3 className="mb-2 text-center text-2xl font-semibold text-[#009AB8]">
            {t('videos.coursesTitle')}
          </h3>

          <hr className="mx-auto mb-6 w-16 border-t border-gray-300" />

          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.courseCaption1')}
                url={t('videos.courseUrl1')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.courseCaption2')}
                url={t('videos.courseUrl2')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.courseCaption3')}
                url={t('videos.courseUrl3')}
              />
            </div>
          </div>
        </div>
        
          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.courseCaption4')}
                url={t('videos.courseUrl4')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.courseCaption5')}
                url={t('videos.courseUrl5')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.courseCaption6')}
                url={t('videos.courseUrl6')}
              />
            </div>
          </div>
        

        {/* Talleres y tutoriales*/}
        <div className="mb-2 mt-20">
          <h3 className="mb-2 text-center text-2xl font-semibold text-[#009AB8]">
            {t('videos.tutorialsTitle')}
          </h3>

          <hr className="mx-auto mb-6 w-16 border-t border-gray-300" />

          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorialCaption1')}
                url={t('videos.tutorialUrl1')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorialCaption2')}
                url={t('videos.tutorialUrl2')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorialCaption3')}
                url={t('videos.tutorialUrl3')}
              />
            </div>
          </div>
        </div>
        <div className="mb-12 mt-6">

          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorialCaption4')}
                url={t('videos.tutorialUrl4')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorialCaption5')}
                url={t('videos.tutorialUrl5')}
              />
            </div>

            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorialCaption6')}
                url={t('videos.tutorialUrl6')}
              />
            </div>
          </div>
        </div>
        <div className="mb-12">

          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
            <div className="w-full max-w-sm">
              <VideoEmbed
                title={t('videos.tutorialCaption7')}
                url={t('videos.tutorialUrl7')}
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