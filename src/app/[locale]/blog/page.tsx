'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { useSearchState } from '@/hooks/useSearchState';
import { blogPosts } from './posts';

interface BlogPageProps {
  params: { locale: 'es' | 'en' };
}

const postsPerPage = 5;

export default function BlogPage({ params }: BlogPageProps) {
  const locale = params.locale;
  const t = useTranslations('blog');
  const posts = blogPosts[locale] || [];

  const [page, setPage] = usePage();

  const pastPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice((page - 1) * postsPerPage, page * postsPerPage);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const formatDate = (dateStr: string) =>
    new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateStr));

  return (
    <Suspense>
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
          <Heading as="h1" className="mt-16 text-center">
            {t('title')}
          </Heading>
          <Lead className="mt-10 text-center">{t('lead')}</Lead>
        </Container>

        <Container className="mt-16 pb-24">
          <PastPostsList
            posts={pastPosts}
            formatDate={formatDate}
            locale={locale}
            t={t}
          />
          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            t={t}
          />
        </Container>

        <Footer />
      </main>
    </Suspense>
  );
}

function PastPostsList({
  posts,
  formatDate,
  locale,
  t,
}: {
  posts: any[];
  formatDate: (dateStr: string) => string;
  locale: 'es' | 'en';
  t: ReturnType<typeof useTranslations>;
}) {
  if (posts.length === 0)
    return <p className="mt-6 text-gray-500">{t('noPosts')}</p>;

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.key}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 sm:grid-cols-3"
        >
          <div className="sm:col-span-1 sm:max-w-l">
            <div className="text-sm/5 text-gray-700 sm:font-medium">
              {formatDate(post.date)}
            </div>
            <div className="mt-2.5 flex items-center gap-3">
              <Image
                alt={post.author_name}
                src={post.author_image}
                className="aspect-square w-6 h-6 rounded-full object-cover"
              />
              <div className="text-sm/5 text-gray-700">{post.author_name}</div>
            </div>
          </div>

          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-base font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link href={`/blog/${post.key}`}>
                <Button className="flex items-center gap-1 text-sm/5 font-medium text-blue-600">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  setPage,
  t,
}: {
  page: number;
  totalPages: number;
  setPage: (p: number) => void;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="mt-6 flex justify-center gap-2">
      <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        <ChevronLeftIcon className="w-4 h-4" /> {t('previous')}
      </Button>
      <Button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
        {t('next')} <ChevronRightIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}

function usePage() {
  const [pageStr, setPageStr] = useSearchState('page', '1');
  const page = Number(pageStr) || 1;
  return [page, (p: number) => setPageStr(p.toString())] as const;
}
