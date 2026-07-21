'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { type Locale, useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { useDateFormatter } from '@/hooks/formatters';
import { useSearchState } from '@/hooks/useSearchState';
import { blogPosts, type Post } from './posts';

interface BlogClientProps {
  locale: Locale;
}

const postsPerPage = 5;

export function BlogClient({ locale }: BlogClientProps) {
  const t = useTranslations('blog');
  const posts = (blogPosts[locale] || []).filter(
    (post) => post.published !== false,
  );

  const [page, setPage] = usePage();

  const pastPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice((page - 1) * postsPerPage, page * postsPerPage);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Al paginar, volver al inicio de la lista de noticias.
  // Se hace en un efecto (tras el re-render) para que la página ya tenga su
  // altura definitiva: si se llama a scrollIntoView justo tras setPage, el
  // scroll se calcula sobre la página anterior (más alta) y al encogerse el
  // documento el scroll suave queda anclado al final, mostrando el footer.
  const listTopRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page]);

  return (
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
        <div ref={listTopRef} className="scroll-mt-4">
          <PastPostsList posts={pastPosts} />
        </div>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} t={t} />
      </Container>

      <Footer />
    </main>
  );
}

function PastPostsList({ posts }: { posts: Post[] }) {
  const t = useTranslations('blog');
  const formatDate = useDateFormatter();

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">{t('noPosts')}</p>;
  }

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
                width={32}
                height={32}
                className="aspect-square w-8 h-8 rounded-full object-cover"
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
    <div className="mt-6 flex items-center justify-center gap-2">
      <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        <ChevronLeftIcon className="w-4 h-4" /> {t('previous')}
      </Button>

      <span className="text-sm font-medium text-gray-600 tabular-nums">
        {page} / {totalPages}
      </span>

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