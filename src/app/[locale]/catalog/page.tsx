'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { Database, Pointer, X, ZoomIn } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useFormatter } from 'next-intl';
import React, { Suspense, useState } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { useSearchState } from '@/hooks/useSearchState';

// Logos from your use-cases file
import LogoCesga from '../../../../public/logos/nuevoLogoCesga_mayo2023.png';
import LogoIISGS from '../../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../../public/use-cases/i4life.png';
import LogoUvigo from '../../../../public/use-cases/uvigo.png';

// --- Use case data (from your existing use-cases.tsx) ---
const colors_blue = ['bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100'];
const colors_green = [
  'bg-gradient-to-br from-green-100 via-lime-100 to-emerald-100',
];

const useCasesData = [
  {
    id: 'farmaciavax',
    nombre: 'Farmaciavax',
    entidad: 'CESGA',
    objetivo: 'Plataforma para descubrimiento y diseño de vacunas.',
    imagen: LogoCesga,
    link: 'https://dspacer-cesga.es/portal',
    color: colors_green,
  },
  {
    id: 'aidamed',
    nombre: 'AIDAMED',
    entidad: 'IIS Galicia Sur',
    objetivo: 'Inteligencia artificial aplicada al diagnóstico médico.',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'brilliant',
    nombre: 'Brilliant',
    entidad: 'IIS Galicia Sur',
    objetivo: 'Modelado de biomarcadores en entornos clínicos.',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'gift',
    nombre: 'GIFT',
    entidad: 'IIS Galicia Sur',
    objetivo: 'Genómica y farmacogenética en terapias personalizadas.',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'biomexplore',
    nombre: 'BiomExplore',
    entidad: 'IIS Galicia Sur',
    objetivo: 'Exploración de biomarcadores y datos moleculares.',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'salusbench',
    nombre: 'SalusBench',
    entidad: 'Inveris Analytics',
    objetivo: 'Benchmark de procesos clínicos mediante minería de procesos.',
    imagen: LogoInverbis,
    link: 'https://web.inverbisanalytics.com/',
    color: colors_blue,
  },
  {
    id: 'celiaspace',
    nombre: 'CeliaSpace',
    entidad: 'Universidade de Vigo',
    objetivo: 'Espacio de investigación en datos de salud celiaca.',
    imagen: LogoUvigo,
    link: 'https://www.uvigo.gal/',
    color: colors_blue,
  },
  {
    id: 'datiacare',
    nombre: 'Datiacare',
    entidad: 'i4Life',
    objetivo: 'Datos clínicos para monitorización de pacientes crónicos.',
    imagen: Logoi4life,
    link: 'https://i4life.es/',
    color: colors_blue,
  },
];

// Pagination
const datasetsPerPage = 4;
function getDatasets(page: number) {
  const start = (page - 1) * datasetsPerPage;
  const end = page * datasetsPerPage;
  return useCasesData.slice(start, end);
}
function getDatasetsCount() {
  return useCasesData.length;
}

// Dataset modal
function DatasetModal({
  dataset,
  onClose,
}: {
  dataset: (typeof useCasesData)[number];
  onClose: () => void;
}) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
    <Dialog open={!!dataset} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel className="relative max-w-2xl w-full rounded-xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold mb-2 text-gray-900">
            {dataset.nombre}
          </DialogTitle>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium">{dataset.entidad}</span>
          </p>

          <div
            className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => setIsImageOpen(true)}
          >
            <Image
              src={dataset.imagen}
              alt={dataset.nombre}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            {dataset.objetivo}
          </p>

          <p className="text-sm text-gray-700 flex items-center gap-2 mb-4">
            <Database className="h-4 w-4 text-gray-700" />
            <strong>Fuente:</strong>{' '}
            <a
              href={dataset.link}
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
            >
              {dataset.link}
            </a>
          </p>

          <div className="mt-6 flex justify-end">
            <Button onClick={onClose}>Cerrar</Button>
          </div>
        </DialogPanel>
      </div>

      {isImageOpen && (
        <Dialog
          open={isImageOpen}
          onClose={() => setIsImageOpen(false)}
          className="fixed flex items-center justify-center bg-black/90 inset-0"
        >
          <DialogPanel>
            <Button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </Button>

            <Image
              src={dataset.imagen}
              alt={dataset.nombre}
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

// Dataset list
function DatasetList({
  page,
  onOpen,
}: {
  page: number;
  onOpen: (dataset: (typeof useCasesData)[number]) => void;
}) {
  const list = getDatasets(page);

  return (
    <Container>
      <div className="space-y-10">
        {list.map((dataset) => (
          <div
            key={dataset.id}
            className={clsx(
              'flex flex-col sm:flex-row border-b border-gray-100 pb-8 gap-6 items-center sm:items-start p-4 rounded-xl shadow-sm hover:shadow-md transition',
              dataset.color[0],
            )}
          >
            <div className="w-[200px] h-[200px] shrink-0 bg-white/70 p-4 rounded-lg flex items-center justify-center">
              <Image
                src={dataset.imagen}
                alt={dataset.nombre}
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-medium text-gray-900">
                {dataset.nombre}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{dataset.entidad}</p>
              <p className="mt-3 text-sm text-gray-500">{dataset.objetivo}</p>
              <div className="mt-4">
                <Button onClick={() => onOpen(dataset)}>Ver detalles</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

// Pagination
function Pagination({
  currentPage,
  setPage,
}: {
  currentPage: number;
  setPage: (p: number) => void;
}) {
  const total = getDatasetsCount();
  const pageCount = Math.ceil(total / datasetsPerPage);
  if (pageCount < 2) return null;

  return (
    <div className="mt-10 flex justify-center gap-2">
      <Button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <ChevronLeftIcon className="size-4" /> Anterior
      </Button>
      <Button
        disabled={currentPage === pageCount}
        onClick={() => setPage(currentPage + 1)}
      >
        Siguiente <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

// Page state
const usePage = () => {
  const [pageStr, setPageStr] = useSearchState('page', '1');
  const page = Number.parseInt(pageStr) || 1;
  return [page, (p: number) => setPageStr(p.toString())] as const;
};

// Page component
const CatalogoDeDatos = () => {
  const [selectedDataset, setSelectedDataset] = useState<
    (typeof useCasesData)[number] | null
  >(null);
  const [page, setPage] = usePage();

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Heading as="h1" className="mt-16 text-center">
          Catálogo de Datos
        </Heading>
        <Lead className="mt-10 text-center">
          Consulta el listado de los conjuntos de datos disponibles, así como su
          información relacionada y forma de uso.
        </Lead>
      </Container>

      <Container className="mt-16 pb-24">
        <DatasetList page={page} onOpen={setSelectedDataset} />
        <Pagination currentPage={page} setPage={setPage} />
      </Container>

      <Footer />

      {selectedDataset && (
        <DatasetModal
          dataset={selectedDataset}
          onClose={() => setSelectedDataset(null)}
        />
      )}
    </main>
  );
};

export default function CatalogoDeDatosPage() {
  return (
    <Suspense>
      <CatalogoDeDatos />
    </Suspense>
  );
}
