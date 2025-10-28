'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { Calendar, Pointer, X, ZoomIn } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';
import { type AppConfig, useFormatter, useTranslations } from 'next-intl';
import React, { Suspense, useState } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { useSearchState } from '@/hooks/useSearchState';

import MCastineiraImg from '../../../../public/team/mcastineira.jpg';

const postsPerPage = 5;

interface Post {
  key: keyof AppConfig['Messages']['blog']['posts'];
  date: string;
  image: StaticImageData;
  author_name: string;
  author_image: StaticImageData;
  cesgalink?: string;
  featured: boolean;
}

const posts = [
  {
    key: 'post-1',
    date: '2025-10-09',
    image: MCastineiraImg,
    author_name: 'Marta Castiñeira',
    author_image: MCastineiraImg,
    featured: false,
  },
  {
    key: 'post-2',
    date: '2025-06-18',
    image: MCastineiraImg,
    author_name: 'Marta Castiñeira',
    author_image: MCastineiraImg,
    featured: false,
  },
] as const satisfies Post[];

// Obtener eventos pasados paginados
function getPastEvents(page: number) {
  const pastEvents = posts
    .filter((e) => !e.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const start = (page - 1) * postsPerPage;
  const end = page * postsPerPage;
  return pastEvents.slice(start, end);
}

// Contar eventos pasados
function getPastEventsCount() {
  return posts.filter((e) => !e.featured).length;
}

const useDateFormatter = () => {
  const format = useFormatter();
  return (dateStr: string) =>
    format.dateTime(new Date(dateStr), {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
};

function PastPosts({
  page,
  onOpen,
  ref,
}: {
  page: number;
  onOpen: (event: Post) => void;
  ref?: React.Ref<HTMLDivElement>;
}) {
  const t = useTranslations('blog');
  const formatDate = useDateFormatter();
  const pastPosts = getPastEvents(page);

  if (pastPosts.length === 0)
    return <p className="mt-6 text-gray-500">{t('noPosts')}</p>;
  return (
    <Container ref={ref}>
      <h2 className="text-2xl font-medium tracking-tight">{t('subtitle')}</h2>
      <hr className="mt-6 border-t border-gray-200" />
      <div className="mt-6">
        {pastPosts.map((post) => (
          <div
            key={post.key}
            className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 sm:grid-cols-3 sm:gap-6"
          >
            {/* Columna lateral: fecha + autor */}
            <div>
              <div className="text-sm/5 text-gray-700 sm:font-medium">
                {formatDate(post.date)}
              </div>

              <div className="mt-2.5 flex items-center gap-3">
                <Image
                  alt={post.author_name}
                  src={post.author_image}
                  className="aspect-square size-6 rounded-full object-cover"
                />

                <div className="text-sm/5 text-gray-700">
                  {post.author_name}
                </div>
              </div>
            </div>

            {/* Contenido principal del post */}
            <div className="sm:col-span-2 sm:max-w-2xl">
              {/* {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-4 w-full rounded-xl object-cover aspect-video"
                />
              )} */}
              <h2 className="text-base font-semibold">
                {t(`posts.${post.key}.title`)}
              </h2>
              <p className="mt-3 text-sm/6 text-gray-500">
                {t(`posts.${post.key}.excerpt`)}
              </p>
              <div className="mt-4">
                <Button
                  onClick={() => onOpen(post)}
                  className="flex items-center gap-1 text-sm/5 font-medium text-blue-600"
                >
                  {t('learnMore')}
                </Button>
              </div>
            </div>
          </div>

          //   <div
          //     key={post.key}
          //     className="relative flex flex-col sm:flex-row border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 gap-6 items-center sm:items-start"
          //   >
          //     {/* Imagen */}
          //     <div className="w-[300px] h-[200px] shrink-0">
          //       {post.image && (
          //         <Image
          //           src={post.image}
          //           alt={t(`posts.${post.key}.header`)}
          //           width={300}
          //           height={200}
          //           className="rounded-lg object-cover size-full"
          //         />
          //       )}
          //     </div>

          //     {/* Detalles */}
          //     <div className="flex flex-col justify-between max-sm:w-full max-sm:max-w-[300px]">
          //       <div>
          //         <div className="text-sm/5 text-gray-700 sm:font-medium">
          //           {formatDate(post.date)}
          //         </div>
          //         {/* <div className="mt-2 text-sm/5 text-gray-700">
          //           {t('organizer')}: {event.organizer}
          //         </div> */}
          //       </div>
          //       <div className="mt-4">
          //         <h2 className="text-base font-medium">
          //           {t(`posts.${post.key}.header`)}
          //         </h2>
          //         <p className="mt-3 text-sm/6 text-gray-500">
          //           {t(`posts.${post.key}.excerpt`)}
          //         </p>
          //         <div className="mt-4">
          //           <Button
          //             onClick={() => onOpen(post)}
          //             className="flex items-center gap-1 text-sm/5 font-medium text-blue-600"
          //           >
          //             {t('learnMore')}
          //           </Button>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
        ))}
      </div>
    </Container>
  );
}

function Pagination({
  pastEventsRef,
}: {
  pastEventsRef?: HTMLDivElement | null;
}) {
  const totalEvents = getPastEventsCount();
  const pageCount = Math.ceil(totalEvents / postsPerPage);

  const [page, setPage] = usePage();

  const hasPrevious = page > 1;
  const hasNext = page < pageCount;

  if (pageCount < 2) return null;

  return (
    <div className="mt-6 flex justify-center mx-auto gap-2">
      <Button
        disabled={!hasPrevious}
        onClick={() => {
          setPage(page - 1);
          setTimeout(() => {
            pastEventsRef?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          });
        }}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <Button
        disabled={!hasNext}
        onClick={() => {
          setPage(page + 1);
          setTimeout(() => {
            pastEventsRef?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          });
        }}
      >
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

function PostModal({ post, onClose }: { post: Post; onClose: () => void }) {
  const t = useTranslations('blog');
  const formatDate = useDateFormatter();
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Optional extra safely typed
  const extra = t.has(`posts.${post.key}.extra`)
    ? t(`posts.${post.key}.extra`)
    : null;

  return (
    <Dialog open={!!post} onClose={onClose} className="relative isolate">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel className="relative max-w-2xl w-full rounded-xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
          {/* Title */}
          <DialogTitle className="text-2xl font-extrabold mb-2 text-gray-900">
            {t(`posts.${post.key}.header`)}
          </DialogTitle>

          {/* Metadata with calendar icon */}
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500 shrink-0" />
            {formatDate(post.date)} —{' '}
          </p>

          {/* Image */}
          <div
            className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => setIsImageOpen(true)}
          >
            <Image
              src={post.image}
              alt={t(`posts.${post.key}.header`)}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
            </div>
          </div>

          {/* Optional extra */}
          {extra && post.cesgalink && (
            <p className="text-gray-700 mb-4 flex items-center gap-2">
              <Pointer className="h-5 w-5 text-gray-900 rotate-90 shrink-0" />
              <span>
                {extra}:{' '}
                <a
                  href={post.cesgalink}
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  target="_blank"
                >
                  {post.cesgalink}
                </a>
              </span>
            </p>
          )}
          {t
            .raw(`posts.${post.key}.description`)
            .map((paragraph: string, idx: number) => (
              <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

          {/* Close button */}
          <div className="mt-6 flex justify-end">
            <Button onClick={onClose}>Cerrar</Button>
          </div>
        </DialogPanel>
      </div>

      {/* Fullscreen image viewer */}
      {isImageOpen && (
        <Dialog
          open={isImageOpen}
          onClose={() => setIsImageOpen(false)}
          className="fixed flex items-center justify-center bg-black/90 isolate inset-0"
        >
          <DialogPanel>
            <Button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
              aria-label="Close image"
            >
              <X className="w-8 h-8" />
            </Button>

            <Image
              src={post.image}
              alt={t(`posts.${post.key}.header`)}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </DialogPanel>
        </Dialog>
      )}
    </Dialog>
  );
}

const usePage = () => {
  const [pageStr, setPageStr] = useSearchState('page', '1');

  const unsafePage = Number.parseInt(pageStr ?? '1');

  const page = Number.isNaN(unsafePage) || unsafePage < 1 ? 1 : unsafePage;

  return [
    page,
    (page: number) => {
      if (page <= 0 || Number.isNaN(page)) {
        return;
      }
      setPageStr(page.toString());
    },
  ] as const;
};

const Events = () => {
  const search = useSearchParams();
  const page = search.has('page') ? parseInt(search.get('page')!) : 1;

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const t = useTranslations();
  const [pastEventsRef, setPastPostsRef] = useState<HTMLDivElement | null>(
    null,
  );

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Heading as="h1" className="mt-16 text-center">
          {t('blog.title')}
        </Heading>
        <Lead className="mt-10 text-center">{t('blog.lead')}</Lead>
      </Container>
      <Container className="mt-16 pb-24">
        <PastPosts page={page} onOpen={setSelectedPost} ref={setPastPostsRef} />
        <Pagination pastEventsRef={pastEventsRef} />
      </Container>
      <Footer />
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </main>
  );
};

export default function EventsPage() {
  return (
    <Suspense>
      <Events />
    </Suspense>
  );
}
