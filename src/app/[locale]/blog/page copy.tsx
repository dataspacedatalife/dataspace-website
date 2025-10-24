import dayjs from 'dayjs';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';
import 'dayjs/locale/es';
import 'dayjs/locale/en';

// 📘 Si usas Next.js 14+, este archivo debe ser un Server Component.
export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Carga las traducciones desde next-intl
  const t = await getTranslations({ locale, namespace: 'blog' });

  // Obtenemos los posts como array desde las traducciones
  const posts = t.raw('posts') as {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image?: string;
    author?: { name: string; image?: string };
  }[];

  // Ajustamos dayjs al idioma actual
  dayjs.locale(locale);

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        {/* <Subheading className="mt-16 text-center">{t('title')}</Subheading> */}
        <Heading as="h1" className="mt-16 text-center">
          {t('subtitle')}
        </Heading>
        <Lead className="mt-6 text-center">
          {t.raw('lead').map((paragraph: string, idx: number) => (
            <p key={idx} className="mb-3">
              {paragraph}
            </p>
          ))}
        </Lead>
      </Container>

      <Container className="mt-16 pb-24">
        <div className="mt-6 space-y-10">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 sm:grid-cols-3 sm:gap-6"
            >
              {/* Columna lateral: fecha + autor */}
              <div>
                <div className="text-sm/5 text-gray-700 sm:font-medium">
                  {dayjs(post.date).format('dddd, MMMM D, YYYY')}
                </div>
                {post.author && (
                  <div className="mt-2.5 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt={post.author.name}
                        src={`/team/${post.author.image}`}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>

              {/* Contenido principal del post */}
              <div className="sm:col-span-2 sm:max-w-2xl">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mb-4 w-full rounded-xl object-cover aspect-video"
                  />
                )}
                <h2 className="text-base font-semibold">{post.title}</h2>
                <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
                <div className="mt-4">
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="flex items-center gap-1 text-sm/5 font-medium"
                  >
                    {locale === 'es' ? 'Leer más' : 'Read more'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}
