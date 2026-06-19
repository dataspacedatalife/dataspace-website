'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { useTranslations, useMessages } from 'next-intl';
import React, { useState } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { useSearchState } from '@/hooks/useSearchState';
import { useCasesData, type HealthCategory } from './datasets';

type DatasetKey = (typeof useCasesData)[number]['id'];

const CATEGORY_STYLES: Record<HealthCategory, string> = {
  human: 'bg-blue-100 text-blue-800',
  animal: 'bg-green-100 text-green-800',
  environmental: 'bg-teal-100 text-teal-800',
};

// Funciones para paginación
const datasetsPerPage = 4;
function getFilteredDatasets(category: HealthCategory | 'all') {
  if (category === 'all') return useCasesData;
  return useCasesData.filter((d) => d.categories.includes(category));
}

function getDatasets(page: number, category: HealthCategory | 'all') {
  const filtered = getFilteredDatasets(category);
  const start = (page - 1) * datasetsPerPage;
  const end = page * datasetsPerPage;
  return filtered.slice(start, end);
}

function getDatasetsCount(category: HealthCategory | 'all') {
  const filtered = getFilteredDatasets(category);
  return filtered.length;
}

// Componente principal del catálogo
export function CatalogoDeDatos() {
  const [selectedDataset, setSelectedDataset] = useState<DatasetKey | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<HealthCategory | 'all'>('all');
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
        <div className="flex gap-2 flex-wrap mb-8">
  <button
    onClick={() => setCategoryFilter('all')}
    className={`px-3 py-1 rounded-full text-xs border ${
      categoryFilter === 'all'
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-700'
    }`}
  >
    {t('catalog.categories.all')}
  </button>

  {(['human', 'animal', 'environmental'] as HealthCategory[]).map((cat) => (
    <button
      key={cat}
      onClick={() => setCategoryFilter(cat)}
      className={`px-3 py-1 rounded-full text-xs border ${
        categoryFilter === cat
          ? CATEGORY_STYLES[cat]
          : 'bg-white text-gray-700'
      }`}
    >
      {t(`catalog.categories.${cat}`)}
    </button>
  ))}
</div>
        <DatasetList
  page={page}
  categoryFilter={categoryFilter}
  onOpen={setSelectedDataset}
/>
       <Pagination currentPage={page} setPage={setPage} categoryFilter={categoryFilter} />
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
}

// Hook para manejar la página de la paginación
const usePage = () => {
  const [pageStr, setPageStr] = useSearchState('page', '1');
  const page = Number.parseInt(pageStr ?? '1') ?? 1;
  return [page, (p: number) => setPageStr(p.toString())] as const;
};

// ------------------ Subcomponentes ------------------

// Lista de datasets
function DatasetList({
  page,
  categoryFilter,
  onOpen,
}: {
  page: number;
  categoryFilter: HealthCategory | 'all';
  onOpen: (datasetKey: DatasetKey) => void;
}) {
  const list = getDatasets(page, categoryFilter);
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
                  {/* Badges de categoría */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {dataset.categories.map((cat) => (
                      <span
                        key={cat}
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_STYLES[cat]}`}
                      >
                        {t(`catalog.categories.${cat}`)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Columna de botón, centrado verticalmente */}
                <div className="flex items-center justify-center sm:w-48 w-full">
                  <Button className="w-full" onClick={() => onOpen(dataset.id)}>
                    {t('catalog.viewDetails')}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

// ── Rich-text helpers ──────────────────────────────────────────────────────

const DATA_SECTION_LABELS = [
  'Tipo de datos',
  'Fuente de los datos',
  'Uso previsto de los datos',
];
const DATA_SECTION_REGEX = new RegExp(
  `(${DATA_SECTION_LABELS.map(l => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')}):`,
  'g',
);

function renderListContent(text: string) {
  const trimmed = text.trim().replace(/\.$/, '');
  const items = trimmed.split(';').map(s => s.trim()).filter(Boolean);
  if (items.length > 1) {
    return (
      <ul className="list-disc list-inside space-y-1 mt-1">
        {items.map((item, i) => <li key={i}>{item.replace(/\.$/, '')}</li>)}
      </ul>
    );
  }
  return <span>{text.trim()}</span>;
}

function DatosDescripcionRenderer({ text }: { text: string }) {
  const paragraphs = text.split('\n\n');
  return (
    <div className="space-y-4">
      {paragraphs.map((para, pIdx) => {
        const hasSections = DATA_SECTION_LABELS.some(l => para.includes(`${l}:`));
        if (hasSections) {
          const parts = para.split(DATA_SECTION_REGEX);
          const sections: Array<{ label: string; content: string }> = [];
          for (let i = 1; i < parts.length; i += 2) {
            sections.push({ label: parts[i], content: (parts[i + 1] ?? '').trim() });
          }
          return (
            <dl key={pIdx} className="space-y-3">
              {sections.map(({ label, content }) => (
                <div key={label}>
                  <dt className="font-semibold text-gray-800">{label}</dt>
                  <dd className="text-gray-600 mt-0.5 ml-0">{renderListContent(content)}</dd>
                </div>
              ))}
            </dl>
          );
        }
        // Non-structured paragraph — could be a bullet list if lines start with items
        const lines = para.split('\n').filter(Boolean);
        if (lines.length > 1) {
          return (
            <ul key={pIdx} className="list-disc list-inside space-y-1 text-gray-600">
              {lines.map((line, i) => <li key={i}>{line.replace(/^[-–•]\s*/, '')}</li>)}
            </ul>
          );
        }
        return <p key={pIdx} className="text-gray-600 leading-relaxed">{para}</p>;
      })}
    </div>
  );
}

function DescripcionAmpliadaRenderer({ text }: { text: string }) {
  const paragraphs = text.split('\n\n');
  return (
    <div className="space-y-3 mb-6">
      {paragraphs.map((para, i) => (
        <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
      ))}
    </div>
  );
}

// Modal de dataset
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
  const use_case = t(`${baseKey}.use_case`);
  const provider = t(`${baseKey}.provider`);
  const description = t(`${baseKey}.description`);
  const volumen = t(`${baseKey}.volumen`);
  const n_ficheros = t(`${baseKey}.n_ficheros`);
  const entidad_promotora_txt = t('catalog.entidad_promotora');
  const volume_txt = t('catalog.volume');
  const number_of_files_txt = t('catalog.number_of_files');
  const data_type_txt = t('catalog.data_type');
  const file_format_txt = t('catalog.file_format');
  const data_standard_txt = t('catalog.data_standard');
  const data_license_txt = t('catalog.license');

  const messages = useMessages();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const datasetMessages = messages.catalog.datasets[datasetKey] as any;
  const descripcionAmpliada = datasetMessages.descripcion_ampliada as string | undefined;
  const datosDescripcion = datasetMessages.datos_descripcion as string | undefined;
  const subsetEntries = Object.entries(datasetMessages.subsets);

  const entityLabel = use_case;
  const datasetMeta = useCasesData.find((d) => d.id === datasetKey);
  const categories = datasetMeta?.categories ?? [];

  const [openSubsets, setOpenSubsets] = useState<Record<string, boolean>>(() =>
    subsetEntries.reduce((acc, [key]) => {
      acc[key] = subsetEntries.length === 1;
      return acc;
    }, {} as Record<string, boolean>),
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

          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 font-medium">{entidad_promotora_txt}:</span>
            <span className="text-sm font-medium text-gray-700">{entityLabel}</span>
          </div>

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_STYLES[cat]}`}
                >
                  {t(`catalog.categories.${cat}`)}
                </span>
              ))}
            </div>
          )}

          {descripcionAmpliada ? (
            <DescripcionAmpliadaRenderer text={descripcionAmpliada} />
          ) : (
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
          )}

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
              <span className="font-medium text-gray-700">{volume_txt}:</span>{' '}
              <span className="text-gray-900">{volumen || '-'}</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
              <span className="font-medium text-gray-700">{number_of_files_txt}:</span>{' '}
              <span className="text-gray-900">{n_ficheros || '-'}</span>
            </div>
          </div>

          {subsetEntries.map(([subsetKey, subsetValue]) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { name: subsetName, description: subsetDescription, metadata, variables } =
              subsetValue as any;
            const isOpen = openSubsets[subsetKey] ?? true;

            return (
              <div
                key={subsetKey}
                className="rounded-2xl border border-gray-200 shadow-sm bg-gray-50 mb-6"
              >
                <div
                  className="flex justify-between items-center p-5 cursor-pointer"
                  onClick={() => toggleSubset(subsetKey)}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{subsetName}</h3>
                  <span
                    className="text-gray-500 transform transition-transform duration-200"
                    style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                  >
                    ▶
                  </span>
                </div>

                {isOpen && (
                  <div className="px-5 pb-5 space-y-4">
                    <p className="text-gray-600">{subsetDescription}</p>

                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">{data_type_txt}:</span>{' '}
                        <span className="text-gray-900">{metadata.data_type || '-'}</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">{file_format_txt}:</span>{' '}
                        <span className="text-gray-900">{metadata.file_format || '-'}</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">{data_standard_txt}:</span>{' '}
                        <span className="text-gray-900">{metadata.data_standard || '-'}</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                        <span className="font-medium text-gray-700">{data_license_txt}:</span>{' '}
                        <span className="text-gray-900">{metadata.license || '-'}</span>
                      </div>
                    </div>

                    {variables.length > 0 && (
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm border border-gray-200 bg-white rounded-lg overflow-hidden">
                          <thead className="bg-gray-100 text-gray-700">
                            <tr>
                              <th className="p-2 text-left">{t('catalog.variables.name')}</th>
                              <th className="p-2 text-left w-1/2">{t('catalog.variables.description')}</th>
                              <th className="p-2 text-left">{t('catalog.variables.type')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {variables.map((v: any) => (
                              <tr key={v.name} className="even:bg-gray-50 border-b border-gray-200">
                                <td className="p-2 font-medium text-gray-700">{v.name}</td>
                                <td className="p-2">{v.data_description}</td>
                                <td className="p-2">{v.data_type}</td>
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
          {datosDescripcion && subsetEntries.length === 0 && (
            <div className="rounded-2xl border border-gray-200 shadow-sm bg-gray-50 mb-6 p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('catalog.data_description')}</h3>
              <DatosDescripcionRenderer text={datosDescripcion} />
            </div>
          )}

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


// Paginación
function Pagination({
  currentPage,
  setPage,
  categoryFilter,
}: {
  currentPage: number;
  setPage: (p: number) => void;
  categoryFilter: HealthCategory | 'all';
}) {
  const t = useTranslations();
const total = getDatasetsCount(categoryFilter);
  const pageCount = Math.ceil(total / datasetsPerPage);
  if (pageCount < 2) return null;

  return (
    <div className="mt-10 flex justify-center gap-2">
      <Button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>
        <ChevronLeftIcon className="size-4" /> {t('catalog.previous')}
      </Button>
      <Button disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}>
        {t('catalog.next')} <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}