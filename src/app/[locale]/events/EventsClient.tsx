'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { Calendar, Pointer, X, ZoomIn } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';
import { type AppConfig, useTranslations } from 'next-intl';
import React, { Suspense, useState } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { useDateFormatter } from '@/hooks/formatters';
import { useSearchState } from '@/hooks/useSearchState';
import webinarBaidataCESGAImg from '../../../../public/events/BAIDATA_Datos_Accion_Cesga.png';
import EGI2025Img from '../../../../public/events/EGI2025Img.jpg';
import ForoBAIDATAImg from '../../../../public/events/ForoBAIDATAImg.jpg';
import GaiaXSaludImg from '../../../../public/events/GaiaXSaludImg.jpg';
import JornadaPresentacionImg from '../../../../public/events/JornadaPresentacionImg.png';
import KitDatosCREDImg from '../../../../public/events/lanzamientokitCRED.jpg';
import NormaUNE42001Img from '../../../../public/events/NormaUNE42001Img.jpg';
import TallerSQSImg from '../../../../public/events/TallerSQSImg.png';
import TallerCREDImg from '../../../../public/events/tallerCRED.jpg';
import tallergradiantImg from '../../../../public/events/tallergradiant.jpg';
import tallergradiantConectoresImg from '../../../../public/events/tallergradiantConectores.png';
import tallerKitSaludCRED from '../../../../public/events/tallerKitSaludCRED.png';
import KitDatosCREDImg2 from '../../../../public/events/tallerPracticokitCRED.jpg';
import conectorGestionActivos from '../../../../public/events/conectorGestionActivos.png';
import formacionDesarrolloExtensiones from '../../../../public/events/formacion-avanzada-sobre-desarrollo-de-extensiones-para-casos-de-uso.png';
import evolucionEspacioDatos from  '../../../../public/events/evolucion-espacio-datos.png';
import usoPracticoImage from  '../../../../public/events/uso-practico.png';
import evolucionEspacioDatosHPCBigDataCloud from '../../../../public/events/evolucion-espacio-datos-hpc-bigdata-cloud.png';
import gobernanzaDeDatos from '../../../../public/events/gobernanza-de-datos.png';
import eventoFinal from '../../../../public/events/evento-final-onehealth-dataspace-aplazado.png';
import gobernanzaDeDatosAporte from '../../../../public/events/gobernanza-de-datos-aporte.png';

const eventsPerPage = 5;

interface Event {
  key: keyof AppConfig['Messages']['events']['events'];
  date: string;
  image: StaticImageData;
  organizer: string;
  cesgalink?: string;
  featured: boolean;
}

// Hardcoded events
const events = [
  {
    key: 'tallersqs',
    date: '2025-10-09',
    image: TallerSQSImg,
    organizer: 'Centro de Supercomputación de Galicia (CESGA)',
    cesgalink: 'https://dspacer-cesga.es/portal',
    featured: false,
  },
  {
    key: 'datalife',
    date: '2025-06-18',
    image: JornadaPresentacionImg,
    organizer: 'Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
  {
    key: 'egi2025',
    date: '2025-06-03',
    image: EGI2025Img,
    organizer: 'European Grid Infrastructure (EGI)',
    featured: false,
  },

  {
    key: 'baidata',
    date: '2025-06-25',
    image: ForoBAIDATAImg,
    organizer: 'BAIDATA',
    featured: false,
  },
  {
    key: 'gaiaxsalud',
    date: '2025-06-26',
    image: GaiaXSaludImg,
    organizer: 'Gaia-X España',
    featured: false,
  },
  {
    key: 'normaune',
    date: '2025-07-10',
    image: NormaUNE42001Img,
    organizer:
      'Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA)',
    featured: false,
  },
  {
    key: 'tallercred',
    date: '2025-09-16',
    image: TallerCREDImg,
    organizer: 'Centro de Referencia de Espacios de Datos (CRED)',
    featured: false,
  },
  {
    key: 'kitdatoscred',
    date: '2025-07-17',
    image: KitDatosCREDImg,
    cesgalink: 'https://www.youtube.com/watch?v=LCVWLknjHEQ',
    organizer: 'Centro de Referencia de Espacios de Datos (CRED)',
    featured: false,
  },
  {
    key: 'tallergradiantconectores',
    date: '2025-11-13',
    image: tallergradiantConectoresImg,
    cesgalink: 'https://www.youtube.com/watch?v=WGBCGCz8vHc&t=2s',
    organizer: 'Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
  {
    key: 'tallergradiant',
    date: '2025-10-31',
    image: tallergradiantImg,
    cesgalink: 'https://www.youtube.com/watch?v=u7zTyU795n8',
    organizer: 'Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
  {
    key: 'kitdatoscred2',
    date: '2025-10-30',
    image: KitDatosCREDImg2,
    cesgalink: 'https://www.youtube.com/watch?v=L5V9ISX40-g&t=4s',
    organizer: 'Centro de Referencia de Espacios de Datos (CRED)',
    featured: false,
  },
  {
    key: 'webinarBaidataCESGA',
    date: '2025-10-26',
    image: webinarBaidataCESGAImg,
    cesgalink: 'https://baidata.eu/datos-en-accion-cesga',
    organizer: 'BAIDATA',
    featured: false,
  },
  { //new!
    key: 'conectorGestionActivos',
    date: '2026-03-23',
    image: conectorGestionActivos,
    cesgalink:
      'https://forms.cloud.microsoft/e/jzZ1aarLKP',
    organizer: 'Centro demostrador de espacio de datos multisectorial One Health & Centro de Supercomputación de Galicia (CESGA)',
    featured: false, 
  }, 
  {
    key: 'kitDatosSaludCRED',
    date: '2025-12-16',
    image: tallerKitSaludCRED,
    cesgalink:
      'https://events.teams.microsoft.com/event/99b36601-cfc5-4bb8-9fb2-6f2e35a8b0b4@24e38255-2c42-4538-999c-5fd53e8456d2',
    organizer: 'Centro de Referencia de Espacios de Datos (CRED)',
    featured: false,
  },
   {
    key: 'formacionDesarrolloExtensiones',
    date: '2026-04-29',
    image: formacionDesarrolloExtensiones,
    cesgalink:
      'https://aula.cesga.es/main/auth/inscription.php?c=EDDOHDS00129042026&',
    organizer: 'OneHealth DataSpace & Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
  {
    key: 'evolucionEspacioDatos',
    date: '2026-05-08',
    image: evolucionEspacioDatos,
    cesgalink:
      'https://www.cesga.es/formacion-onehealth-dataspace/',
    organizer: 'OneHealth DataSpace & Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
  {
    key: 'usoPractico',
    date: '2026-05-15',
    image: usoPracticoImage,
    cesgalink:
      'https://www.cesga.es/formacion-onehealth-dataspace/',
    organizer: 'OneHealth DataSpace & Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
  {
    key: 'evolucionEspacioDatosHPCBigDataCloud',
    date: '2026-05-22',
    image: evolucionEspacioDatosHPCBigDataCloud,
    cesgalink:
      'https://www.cesga.es/formacion-onehealth-dataspace/',
    organizer: 'OneHealth DataSpace & Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
   {
    key: 'gobernanzaDeDatos',
    date: '2026-05-29',
    image: gobernanzaDeDatos,
    cesgalink:
      'https://www.cesga.es/formacion-onehealth-dataspace/',
    organizer: 'OneHealth DataSpace & Centro de Supercomputación de Galicia (CESGA)',
    featured: false,
  },
   {
    key: 'eventoFinal',
    date: '2026-06-17',
    image: eventoFinal,
    cesgalink:
      'https://dataspacedatalife.github.io/onehealth-dataspace-evento-final/',
    organizer: 'OneHealth DataSpace & Centro de Supercomputación de Galicia (CESGA)',
    featured: true,
  },
  {
    key: 'gobernanzaDeDatosAporte',
    date: '2026-06-05',
    image: gobernanzaDeDatosAporte,
    cesgalink:
      'https://www.cesga.es/formacion-onehealth-dataspace/',
    organizer: 'OneHealth DataSpace & Centro de Supercomputación de Galicia (CESGA)',
    featured: true,
  },
   
] as const satisfies Event[];

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
function FeaturedEvents({ onOpen }: { onOpen: (event: Event) => void }) {
  const t = useTranslations('events');
  const formatDate = useDateFormatter();

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
              className="relative bg-clip-padding overflow-clip flex flex-col rounded-3xl bg-white border-8 border-white shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {event.image && (
                <Image
                  src={event.image}
                  alt={t(`events.${event.key}.header`)}
                  // className="object-contain w-full h-full opacity-80"
                  className="w-[400px] h-[300px] object-cover rounded-t-3xl"
                  width={400}
                  height={300}
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {formatDate(event.date)}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  {t(`events.${event.key}.header`)}
                </div>
                {/* <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {t(`events.${event.key}.excerpt`)}
                </div> */}
                <div className="mt-6 flex items-center gap-3 text-sm/5 text-gray-700">
                  {t('organizer')}: {event.organizer}
                </div>
                <div className="mt-4">
                  <Button
                    onClick={() => onOpen(event)}
                    className="flex items-center gap-1 text-sm/5 font-medium text-blue-600"
                  >
                    {t('learnMore')}
                  </Button>
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
  ref,
}: {
  page: number;
  onOpen: (event: Event) => void;
  ref?: React.Ref<HTMLDivElement>;
}) {
  const t = useTranslations('events');
  const formatDate = useDateFormatter();
  const pastEvents = getPastEvents(page);

  if (pastEvents.length === 0)
    return <p className="mt-6 text-gray-500">{t('noEvents')}</p>;

  return (
    <Container ref={ref}>
      <h2 className="text-2xl font-medium tracking-tight">
        {t('header.pastTitle')}
      </h2>
      <div className="mt-6">
        {pastEvents.map((event) => (
          <div
            key={event.key}
            className="relative flex flex-col sm:flex-row border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 gap-6 items-center sm:items-start"
          >
            {/* Imagen */}
            <div className="w-[300px] h-[200px] shrink-0">
              {event.image && (
                <Image
                  src={event.image}
                  alt={t(`events.${event.key}.header`)}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover size-full"
                />
              )}
            </div>

            {/* Detalles */}
            <div className="flex flex-col justify-between max-sm:w-full max-sm:max-w-[300px]">
              <div>
                <div className="text-sm/5 text-gray-700 sm:font-medium">
                  {formatDate(event.date)} - {event.organizer}
                </div>
                {/* <div className="mt-2 text-sm/5 text-gray-700">
                  {t('organizer')}: {event.organizer}
                </div> */}
              </div>
              <div className="mt-4">
                <h2 className="text-base font-medium">
                  {t(`events.${event.key}.header`)}
                </h2>
                <p className="mt-3 text-sm/6 text-gray-500">
                  {t(`events.${event.key}.excerpt`)}
                </p>
                <div className="mt-4">
                  <Button
                    onClick={() => onOpen(event)}
                    className="flex items-center gap-1 text-sm/5 font-medium text-blue-600"
                  >
                    {t('learnMore')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
  const t = useTranslations('events');
  const totalEvents = getPastEventsCount();
  const pageCount = Math.ceil(totalEvents / eventsPerPage);

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
        {t(`previous`)}
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
        {t(`next`)}
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const t = useTranslations('events');
  const formatDate = useDateFormatter();
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Optional extra safely typed
  const extra = t.has(`events.${event.key}.extra`)
    ? t(`events.${event.key}.extra`)
    : null;

  return (
    <Dialog open={!!event} onClose={onClose} className="relative isolate">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel className="relative max-w-2xl w-full rounded-xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
          {/* Title */}
          <DialogTitle className="text-2xl font-extrabold mb-2 text-gray-900">
            {t(`events.${event.key}.header`)}
          </DialogTitle>

          {/* Metadata with calendar icon */}
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500 shrink-0" />
            {formatDate(event.date)} —{' '}
            <span className="font-medium">
              {t('organizer')}: {event.organizer}
            </span>
          </p>

          {/* Image */}
          <div
            className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => setIsImageOpen(true)}
          >
            <Image
              src={event.image}
              alt={t(`events.${event.key}.header`)}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
            </div>
          </div>

          {/* Optional extra */}
          {extra && event.cesgalink && (
            <p className="text-gray-700 mb-4 flex items-center gap-2">
              <Pointer className="h-5 w-5 text-gray-900 rotate-90 shrink-0" />
              <span>
                {extra}:{' '}
                <a
                  href={event.cesgalink}
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  target="_blank"
                >
                  {event.cesgalink}
                </a>
              </span>
            </p>
          )}
          {t
            .raw(`events.${event.key}.description`)
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
              src={event.image}
              alt={t(`events.${event.key}.header`)}
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

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const t = useTranslations();
  const [pastEventsRef, setPastEventsRef] = useState<HTMLDivElement | null>(
    null,
  );

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Heading as="h1" className="mt-16 text-center">
          {t('events.header.title')}
        </Heading>
        <Lead className="mt-10 text-center">
          {t('events.header.description')}
        </Lead>
      </Container>
      <FeaturedEvents onOpen={setSelectedEvent} />
      <Container className="mt-16 pb-24">
        <PastEvents
          page={page}
          onOpen={setSelectedEvent}
          ref={setPastEventsRef}
        />
        <Pagination pastEventsRef={pastEventsRef} />
      </Container>
      <Footer />
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
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
