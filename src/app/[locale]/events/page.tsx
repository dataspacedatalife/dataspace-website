'use client';

import { Dialog } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { clsx } from 'clsx';
import Image, { type StaticImageData } from 'next/image';
import { type AppConfig, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import JornadaPresentacionImg from '../../../../public/events/Jornada-de-Presentacion.png';
import KitDatosCREDImg from '../../../../public/events/lanzamientokitCRED.jpg';
import TallerCREDImg from '../../../../public/events/tallerCRED.jpg';

const eventsPerPage = 5;

interface Event {
  key: keyof AppConfig['Messages']['events']['events'];
  date: string;
  image: StaticImageData;
  organizer: string;
  featured: boolean;
}

// Hardcoded events
const events = [
  {
    key: 'cesga',
    date: '2025-06-18',
    image: JornadaPresentacionImg,
    organizer: 'CESGA',
    featured: true,
  },
  {
    key: 'tallercred',
    date: '2025-09-16',
    image: TallerCREDImg,
    organizer: 'CRED',
    featured: false,
  },
  {
    key: 'kitdatoscred',
    date: '2025-07-17',
    image: KitDatosCREDImg,
    organizer: 'CRED',
    featured: false,
  },
] as const satisfies Event[];

// Formatear fecha: día mes año
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

// Obtener eventos pasados paginados
function getPastEvents(page: number) {
  const pastEvents = events
    .filter((e) => !e.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const start = (page - 1) * eventsPerPage;
  const end = page * eventsPerPage;
  return pastEvents.slice(start, end);
}

// Contar eventos pasados
function getPastEventsCount() {
  return events.filter((e) => !e.featured).length;
}

// Componentes

function FeaturedEvents({ onOpen }: { onOpen: (event: any) => void }) {
  const t = useTranslations('events');
  const featured = events.filter((e) => e.featured);

  if (featured.length === 0) return null;

  return (
    <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">
          {t('header.featuredTitle')}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featured.map((event) => (
            <div
              key={event.key}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {event.image && (
                <Image
                  src={event.image}
                  alt={t(`events.${event.key}.header`)}
                  className="object-contain w-full h-full opacity-80"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {formatDate(event.date)}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  {t(`events.${event.key}.header`)}
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {t(`events.${event.key}.excerpt`)}
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm/5 text-gray-700">
                  {t('organizer')}: {event.organizer}
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => onOpen(event)}
                    className="flex items-center gap-1 text-sm/5 font-medium text-blue-600"
                  >
                    {t('learnMore')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function PastEvents({
  page,
  onOpen,
}: {
  page: number;
  onOpen: (event: any) => void;
}) {
  const t = useTranslations('events');
  const pastEvents = getPastEvents(page);

  if (pastEvents.length === 0)
    return <p className="mt-6 text-gray-500">{t('noEvents')}</p>;

  return (
    <Container>
      <h2 className="text-2xl font-medium tracking-tight">
        {t('header.pastTitle')}
      </h2>
      <div className="mt-6">
        {pastEvents.map((event) => (
          <div
            key={event.key}
            className="relative grid grid-cols-1 sm:grid-cols-4 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 gap-6"
          >
            {/* Imagen */}
            <div className="sm:col-span-1 w-[300px] h-[200px] overflow-hidden rounded-lg">
              {' '}
              {event.image && (
                <Image
                  src={event.image}
                  alt={t(`events.${event.key}.header`)}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-auto"
                />
              )}
            </div>

            {/* Detalles */}
            <div className="sm:col-span-3 flex flex-col justify-between">
              <div>
                <div className="text-sm/5 text-gray-700 sm:font-medium">
                  {formatDate(event.date)}
                </div>
                <div className="mt-2 text-sm/5 text-gray-700">
                  {t('organizer')}: {event.organizer}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-base font-medium">
                  {t(`events.${event.key}.header`)}
                </h2>
                <p className="mt-3 text-sm/6 text-gray-500">
                  {t(`events.${event.key}.excerpt`)}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => onOpen(event)}
                    className="flex items-center gap-1 text-sm/5 font-medium text-blue-600"
                  >
                    {t('learnMore')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function Pagination({ page }: { page: number }) {
  const totalEvents = getPastEventsCount();
  const pageCount = Math.ceil(totalEvents / eventsPerPage);
  const hasPrevious = page > 1;
  const hasNext = page < pageCount;

  function url(p: number) {
    return `/events?page=${p}`;
  }

  if (pageCount < 2) return null;

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        disabled={!hasPrevious}
        variant="outline"
        href={hasPrevious ? url(page - 1) : '#'}
        // variant="outline"
        // href={hasPrevious ? url(page - 1) : '#'}
        // disabled={!hasPrevious}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-hover:bg-gray-100',
              'data-active:shadow-sm data-active:ring-1 data-active:ring-black/10',
              'data-active:data-hover:bg-gray-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button
        variant="outline"
        href={hasNext ? url(page + 1) : '#'}
        disabled={!hasNext}
      >
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const t = useTranslations('events');
  if (!event) return null;

  return (
    <Dialog open={!!event} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-2xl w-full rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="text-xl font-bold mb-4">
            {t(`events.${event.key}.header`)}
          </Dialog.Title>
          <Image
            src={event.image}
            alt={t(`events.${event.key}.header`)}
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-sm text-gray-500 mb-2">
            {formatDate(event.date)} — {t('organizer')}: {event.organizer}
          </p>
          <p className="text-gray-700 mb-4">
            {t(`events.${event.key}.excerpt`)}
          </p>
          <p className="text-gray-600">
            {t(`events.${event.key}.description`)}
          </p>
          <div className="mt-6 flex justify-end">
            <Button onClick={onClose}>Cerrar</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams?.page === 'string' && parseInt(searchParams.page) > 0
      ? parseInt(searchParams.page)
      : 1;

  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const t = useTranslations();

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Heading as="h1" className="mt-2">
          {t('events.header.title')}
        </Heading>
        <Lead className="mt-6 max-w-3xl">{t('events.header.description')}</Lead>
      </Container>
      {page === 1 && <FeaturedEvents onOpen={setSelectedEvent} />}
      <Container className="mt-16 pb-24">
        <PastEvents page={page} onOpen={setSelectedEvent} />
        <Pagination page={page} />
      </Container>
      <Footer />
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </main>
  );
}
