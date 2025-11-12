'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image, { type StaticImageData } from 'next/image';
import { type AppConfig, useMessages, useTranslations } from 'next-intl';
import React, { Suspense, useState } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { useSearchState } from '@/hooks/useSearchState';
import LogoIISGS from '../../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../../public/use-cases/i4life.png';
import LogoUvigo from '../../../../public/use-cases/uvigo.png';

type DatasetKey = keyof AppConfig['Messages']['catalog']['datasets'];

const useCasesData = [
  {
    id: 'aidatamed_synthetic_patients',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'aidatamed@iisgaliciasur.es',
  },
  {
    id: 'biomexplore',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'sonia.perez.castro@sergas.es',
  },
  {
    id: 'brilliant',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'cesar.veiga@iisgaliciasur.es',
  },
  {
    id: 'celiaspace',
    imagen: LogoUvigo,
    link: 'https://www.uvigo.gal/',
    email: 'javier@det.uvigo.es',
  },
  {
    id: 'datiacare',
    imagen: Logoi4life,
    link: 'https://i4life.es/',
    email: 'info@i4life.es',
  },
  {
    id: 'gift_conversations',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'gift@iisgaliciasur.es',
  },
  {
    id: 'salusbench',
    imagen: LogoInverbis,
    link: 'https://web.inverbisanalytics.com/',
    email: 'salusbench@inverbisanalytics.com',
  },
] as const satisfies {
  id: DatasetKey;
  imagen: StaticImageData;
  link: string;
  email: string;
}[];

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

function DatasetModal({
  datasetKey,
  onClose,
}: {
  datasetKey: DatasetKey;
  onClose: () => void;
}) {
  const t = useTranslations();
  const baseKey = `catalog.datasets.${datasetKey}` as const;

  const name = t(`${baseKey}.name`);
  const dataset_name = t(`${baseKey}.dataset_name`);
  const use_case = t(`${baseKey}.use_case`);
  const provider = t(`${baseKey}.provider`);
  const description = t(`${baseKey}.description`);
  const volumen = t(`${baseKey}.volumen`);
  const n_ficheros = t(`${baseKey}.n_ficheros`);
  const dataset_name_txt = t('catalog.dataset_name');
  const provider_txt = t('catalog.provider');
  const volume_txt = t('catalog.volume');
  const number_of_files_txt = t('catalog.number_of_files');
  const data_type_txt = t('catalog.data_type');
  const file_format_txt = t('catalog.file_format');
  const data_standard_txt = t('catalog.data_standard');
  const data_license_txt = t('catalog.license');

  const messages = useMessages();

  const subsetEntries = Object.entries(
    messages.catalog.datasets[datasetKey].subsets,
  );

  // Estado de plegado para cada subset
  const [openSubsets, setOpenSubsets] = useState<Record<string, boolean>>(() =>
    subsetEntries.reduce(
      (acc, [key]) => {
        // Si hay solo un subset, se abre por defecto
        acc[key] = subsetEntries.length === 1;
        return acc;
      },
      {} as Record<string, boolean>,
    ),
  );

  const toggleSubset = (key: string) => {
    setOpenSubsets((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Dialog open={!!datasetKey} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel className="relative max-w-5xl w-full rounded-xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold mb-1 text-gray-900">
            {name}
          </DialogTitle>

          <div className="flex items-center gap-3 mb-2 mt-2">
            <p className="text-md text-gray-500 font-medium">
              {dataset_name_txt}:
            </p>
            <p className="text-md font-medium">{dataset_name}</p>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-md text-gray-500 font-medium">{provider_txt}:</p>
            <p className="text-md font-medium">{use_case} - </p>
            <p className="text-md font-medium">{provider}</p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
              <span className="font-medium text-gray-700">{volume_txt}:</span>{' '}
              <span className="text-gray-900">{volumen || '-'}</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
              <span className="font-medium text-gray-700">
                {number_of_files_txt}:
              </span>{' '}
              <span className="text-gray-900">{n_ficheros || '-'}</span>
            </div>
          </div>

          {subsetEntries.map(([subsetKey, subsetValue]) => {
            const {
              name: subsetName,
              description: subsetDescription,
              metadata,
              variables,
            } = subsetValue;

            const isOpen = openSubsets[subsetKey] ?? true;

            return (
              <div
                key={subsetKey}
                className={`rounded-2xl border border-gray-200 shadow-sm bg-gray-50 mb-6`}
              >
                {/* Header plegable */}
                <div
                  className="flex justify-between items-center p-5 cursor-pointer"
                  onClick={() => toggleSubset(subsetKey)}
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {subsetName}
                  </h3>
                  <span
                    className="text-gray-500 transform transition-transform duration-200"
                    style={{
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▶
                  </span>
                </div>

                {/* Contenido plegable */}
                {isOpen && (
                  <div className="px-5 pb-5 space-y-4">
                    <p className="text-gray-600">{subsetDescription}</p>
                    {/* Metadata cards */}
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">
                          {data_type_txt}:
                        </span>{' '}
                        <span className="text-gray-900">
                          {metadata.data_type || '-'}
                        </span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">
                          {file_format_txt}:
                        </span>{' '}
                        <span className="text-gray-900">
                          {metadata.file_format || '-'}
                        </span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">
                          {data_standard_txt}:
                        </span>{' '}
                        <span className="text-gray-900">
                          {metadata.data_standard || '-'}
                        </span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">
                          {data_license_txt}:
                        </span>{' '}
                        <span className="text-gray-900">
                          {metadata.license || '-'}
                        </span>
                      </div>
                    </div>

                    {/* Variables table */}

                    {variables.length > 0 && (
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm border border-gray-200 bg-white rounded-lg overflow-hidden">
                          <thead className="bg-gray-100 text-gray-700">
                            <tr>
                              <th className="p-2 text-left">
                                {t('catalog.variables.name')}
                              </th>
                              <th className="p-2 text-left w-1/2">
                                {t('catalog.variables.description')}
                              </th>
                              <th className="p-2 text-left">
                                {t('catalog.variables.type')}
                              </th>
                              {/* <th className="p-2 text-left">
                                {t('catalog.variables.detailed_description')}
                              </th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {variables.map((v: any) => (
                              <tr
                                key={v.name}
                                className="even:bg-gray-50 border-b border-gray-200"
                              >
                                <td className="p-2 font-medium text-gray-700">
                                  {v.name}
                                </td>
                                <td className="p-2">{v.data_description}</td>
                                <td className="p-2">{v.data_type}</td>
                                {/* <td className="p-2">
                                  {v.detailed_description || '-'}
                                </td> */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <div className="mt-6 flex justify-end">
            <Button onClick={onClose} className="px-4 py-2">
              {t('catalog.close')}
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      variant="secondary"
      className="w-full flex items-center justify-center gap-2 text-xs py-1.5"
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <CheckIcon className="w-4 h-4 text-green-600" />
          ¡Copiado!
        </>
      ) : (
        <>
          <ClipboardIcon className="w-4 h-4 text-gray-600" />
          {email}
        </>
      )}
    </Button>
  );
}

// Dataset list
function DatasetList({
  page,
  onOpen,
}: {
  page: number;
  onOpen: (datasetKey: DatasetKey) => void;
}) {
  const list = getDatasets(page);
  const t = useTranslations();

  return (
    <Container>
      <div className="space-y-8">
        {list.map((dataset) => {
          const baseKey = `catalog.datasets.${dataset.id}` as const;
          return (
            <div
              key={dataset.id}
              className="flex flex-col sm:flex-row border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md bg-white"
            >
              {/* Imagen */}
              {dataset.imagen && (
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mr-6 mb-4 sm:mb-0">
                  <Image
                    src={dataset.imagen}
                    alt={t(`catalog.datasets.${dataset.id}.name`)}
                    className="object-contain w-full h-full rounded-lg"
                  />
                </div>
              )}

              {/* Contenido y columna de botones */}
              <div className="flex flex-1 flex-col sm:flex-row gap-4">
                {/* Texto */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t(`catalog.datasets.${dataset.id}.name`)}
                  </h3>
                  <p className="text-md text-gray-600 mt-1">
                    {t(`catalog.datasets.${dataset.id}.use_case`)}
                  </p>
                  <p className="mt-3 text-sm text-gray-500 max-w-3xl">
                    {t(`catalog.datasets.${dataset.id}.description`)}
                  </p>
                </div>

                {/* Columna de botones, responsive */}

                <div className="flex flex-col gap-2 sm:w-65 w-full">
                  <Button className="w-full" onClick={() => onOpen(dataset.id)}>
                    {t('catalog.viewDetails')}
                  </Button>

                  <CopyEmailButton email={dataset.email} />
                </div>
              </div>
            </div>
          );
        })}
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
  const t = useTranslations();
  const total = getDatasetsCount();
  const pageCount = Math.ceil(total / datasetsPerPage);
  if (pageCount < 2) return null;

  return (
    <div className="mt-10 flex justify-center gap-2">
      <Button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <ChevronLeftIcon className="size-4" /> {t('catalog.previous')}
      </Button>
      <Button
        disabled={currentPage === pageCount}
        onClick={() => setPage(currentPage + 1)}
      >
        {t('catalog.next')} <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

// Page hook
const usePage = () => {
  const [pageStr, setPageStr] = useSearchState('page', '1');
  const page = Number.parseInt(pageStr ?? '1') ?? 1;
  return [page, (p: number) => setPageStr(p.toString())] as const;
};

// Main page
const CatalogoDeDatos = () => {
  const [selectedDataset, setSelectedDataset] = useState<DatasetKey | null>(
    null,
  );
  const [page, setPage] = usePage();
  const t = useTranslations();

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Heading as="h1" className="mt-16 text-center">
          {t('catalog.title')}
        </Heading>
        <Lead className="mt-10 text-center">{t('catalog.subtitle')}</Lead>
      </Container>

      <Container className="mt-16 pb-24">
        <DatasetList page={page} onOpen={setSelectedDataset} />
        <Pagination currentPage={page} setPage={setPage} />
      </Container>

      <Footer />

      {selectedDataset && (
        <DatasetModal
          datasetKey={selectedDataset}
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
