'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid';
import Image from 'next/image';
import { useMessages, useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import { updateSearchParams, useSearchState } from '@/hooks/useSearchState';
import { type HealthCategory, useCasesData } from './datasets';

type DatasetKey = (typeof useCasesData)[number]['id'];

const CATEGORY_VALUES = ['human', 'animal', 'environmental'] as const;

const CATEGORY_STYLES: Record<HealthCategory, string> = {
  human: 'bg-blue-100 text-blue-800',
  animal: 'bg-green-100 text-green-800',
  environmental: 'bg-teal-100 text-teal-800',
};

const datasetsPerPage = 4;

// Normaliza texto para búsqueda insensible a mayúsculas y tildes
function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Texto buscable de un dataset a partir de sus traducciones
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function datasetSearchText(datasetMessages: any) {
  return normalizeText(
    [
      datasetMessages?.name,
      datasetMessages?.use_case,
      datasetMessages?.description,
      datasetMessages?.entidad_promotora,
    ]
      .filter(Boolean)
      .join(' '),
  );
}

// Componente principal del catálogo
export function CatalogoDeDatos() {
  const [selectedDataset, setSelectedDataset] = useState<DatasetKey | null>(
    null,
  );
  const categoryFilter = useCategory();
  const [page, setPage] = usePage();
  const [query] = useSearchState('q', '');
  const t = useTranslations();
  const messages = useMessages();

  const normalizedQuery = normalizeText((query ?? '').trim());
  const filtered = useCasesData.filter((d) => {
    if (categoryFilter !== 'all' && !d.categories.includes(categoryFilter)) {
      return false;
    }
    if (!normalizedQuery) return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const datasetMessages = (messages as any).catalog?.datasets?.[d.id];
    return datasetSearchText(datasetMessages).includes(normalizedQuery);
  });

  const pageCount = Math.max(1, Math.ceil(filtered.length / datasetsPerPage));
  const currentPage = Math.min(page, pageCount);
  const pageItems = filtered.slice(
    (currentPage - 1) * datasetsPerPage,
    currentPage * datasetsPerPage,
  );

  // Cambio de filtro: una única entrada en el historial (categoría + reset de página)
  const selectCategory = (cat: HealthCategory | 'all') => {
    updateSearchParams(
      { category: cat === 'all' ? null : cat, page: null },
      'push',
    );
  };

  // Al paginar, volver al inicio de la lista (los botones quedan al pie de la página)
  const listTopRef = useRef<HTMLDivElement>(null);
  const goToPage = (p: number) => {
    setPage(p);
    listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Escribir en el buscador no debe generar entradas de historial por tecla
  const changeQuery = (value: string) => {
    updateSearchParams({ q: value || null, page: null }, 'replace');
  };

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
        <div
          ref={listTopRef}
          className="mb-8 flex scroll-mt-4 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => selectCategory('all')}
              aria-pressed={categoryFilter === 'all'}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors ${
                categoryFilter === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('catalog.categories.all')}
            </button>

            {CATEGORY_VALUES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => selectCategory(cat)}
                aria-pressed={categoryFilter === cat}
                className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  categoryFilter === cat
                    ? CATEGORY_STYLES[cat]
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {t(`catalog.categories.${cat}`)}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query ?? ''}
              onChange={(e) => changeQuery(e.target.value)}
              placeholder={t('catalog.search_placeholder')}
              aria-label={t('catalog.search_placeholder')}
              className="w-full rounded-full border border-gray-300 bg-white py-1.5 pl-9 pr-9 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => changeQuery('')}
                aria-label={t('catalog.search_clear')}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <XMarkIcon className="size-4" />
              </button>
            )}
          </div>
        </div>
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            {t('catalog.no_results')}
          </p>
        ) : (
          <DatasetList list={pageItems} onOpen={setSelectedDataset} />
        )}
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          setPage={goToPage}
        />
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
// Los cambios de página crean entradas de historial para que atrás/adelante funcionen
const usePage = () => {
  const [pageStr, setPageStr] = useSearchState('page', '1');
  const parsed = Number.parseInt(pageStr ?? '1', 10);
  const page = Number.isNaN(parsed) || parsed < 1 ? 1 : parsed;
  return [
    page,
    (p: number) => setPageStr(p <= 1 ? '' : p.toString(), 'push'),
  ] as const;
};

// Hook para leer el filtro de categoría de la URL (se escribe vía selectCategory)
const useCategory = (): HealthCategory | 'all' => {
  const [raw] = useSearchState('category', 'all');
  return CATEGORY_VALUES.includes(raw as HealthCategory)
    ? (raw as HealthCategory)
    : 'all';
};

// ------------------ Subcomponentes ------------------

// Lista de datasets
function DatasetList({
  list,
  onOpen,
}: {
  list: readonly (typeof useCasesData)[number][];
  onOpen: (datasetKey: DatasetKey) => void;
}) {
  const t = useTranslations();

  return (
    <Container>
      <div className="space-y-8">
        {list.map((dataset) => {
          return (
            <div
              key={dataset.id}
              className="flex flex-col sm:flex-row border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md bg-white"
            >
              {/* Imagen */}
              {dataset.imagen && (
                <div className="relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mr-6 mb-4 sm:mb-0">
                  <Image
                    src={dataset.imagen}
                    alt={t(`catalog.datasets.${dataset.id}.name`)}
                    fill
                    sizes="(min-width: 640px) 8rem, 6rem"
                    className="object-contain rounded-lg"
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

// Un metadato se considera vacío si falta o solo contiene '-'
function hasValue(value: string | undefined | null): value is string {
  return Boolean(value && value.trim() && value.trim() !== '-');
}

// ── Rich-text helpers ──────────────────────────────────────────────────────

// Las etiquetas de sección viven en messages/<locale>.json (catalog.data_section_labels)
// porque los textos de datos_descripcion están redactados en el idioma de cada locale
function useDataSectionLabels(): string[] {
  const messages = useMessages();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const labels = ((messages as any).catalog?.data_section_labels ??
    {}) as Record<string, string>;
  return Object.values(labels).filter(Boolean);
}

function buildSectionRegex(labels: string[]) {
  return new RegExp(
    `(${labels.map((l) => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')}):`,
    'g',
  );
}

function renderListContent(text: string) {
  const trimmed = text.trim().replace(/\.$/, '');
  const items = trimmed
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
  if (items.length > 1) {
    return (
      <ul className="list-disc list-inside space-y-1 mt-1">
        {items.map((item, i) => (
          <li key={i}>{item.replace(/\.$/, '')}</li>
        ))}
      </ul>
    );
  }
  return <span>{text.trim()}</span>;
}

function DatosDescripcionRenderer({ text }: { text: string }) {
  const sectionLabels = useDataSectionLabels();
  const sectionRegex = buildSectionRegex(sectionLabels);
  const paragraphs = text.split('\n\n');
  return (
    <div className="space-y-4">
      {paragraphs.map((para, pIdx) => {
        const hasSections =
          sectionLabels.length > 0 &&
          sectionLabels.some((l) => para.includes(`${l}:`));
        if (hasSections) {
          const parts = para.split(sectionRegex);
          const sections: Array<{ label: string; content: string }> = [];
          for (let i = 1; i < parts.length; i += 2) {
            sections.push({
              label: parts[i],
              content: (parts[i + 1] ?? '').trim(),
            });
          }
          return (
            <dl key={pIdx} className="space-y-3">
              {sections.map(({ label, content }) => (
                <div key={label}>
                  <dt className="font-semibold text-gray-800">{label}</dt>
                  <dd className="text-gray-600 mt-0.5 ml-0">
                    {renderListContent(content)}
                  </dd>
                </div>
              ))}
            </dl>
          );
        }
        // Non-structured paragraph — could be a bullet list if lines start with items
        const lines = para.split('\n').filter(Boolean);
        if (lines.length > 1) {
          return (
            <ul
              key={pIdx}
              className="list-disc list-inside space-y-1 text-gray-600"
            >
              {lines.map((line, i) => (
                <li key={i}>{line.replace(/^[-–•]\s*/, '')}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={pIdx} className="text-gray-600 leading-relaxed">
            {para}
          </p>
        );
      })}
    </div>
  );
}

function DescripcionAmpliadaRenderer({ text }: { text: string }) {
  const paragraphs = text.split('\n\n');
  return (
    <div className="space-y-3 mb-6">
      {paragraphs.map((para, i) => (
        <p key={i} className="text-gray-600 leading-relaxed">
          {para}
        </p>
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
  // Acceso defensivo: una traducción ausente no debe romper la página
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const datasetMessages = ((messages as any).catalog?.datasets?.[datasetKey] ??
    {}) as any;
  const descripcionAmpliada = datasetMessages.descripcion_ampliada as
    | string
    | undefined;
  const datosDescripcion = datasetMessages.datos_descripcion as
    | string
    | undefined;
  const subsetEntries = Object.entries(datasetMessages.subsets ?? {});

  const entityLabel =
    (datasetMessages.entidad_promotora as string | undefined) ?? use_case;
  const datasetMeta = useCasesData.find((d) => d.id === datasetKey);
  const categories = datasetMeta?.categories ?? [];

  const [openSubsets, setOpenSubsets] = useState<Record<string, boolean>>(() =>
    subsetEntries.reduce(
      (acc, [key]) => {
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
          <button
            type="button"
            onClick={onClose}
            aria-label={t('catalog.close')}
            className="absolute right-4 top-4 cursor-pointer rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <XMarkIcon className="size-5" />
          </button>
          <DialogTitle className="text-2xl font-bold mb-1 pr-10 text-gray-900">
            {name}
          </DialogTitle>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 font-medium">
              {entidad_promotora_txt}:
            </span>
            <span className="text-sm font-medium text-gray-700">
              {entityLabel}
            </span>
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

          {(hasValue(volumen) || hasValue(n_ficheros)) && (
            <div className="flex flex-wrap gap-4 mb-6">
              {hasValue(volumen) && (
                <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                  <span className="font-medium text-gray-700">
                    {volume_txt}:
                  </span>{' '}
                  <span className="text-gray-900">{volumen}</span>
                </div>
              )}
              {hasValue(n_ficheros) && (
                <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                  <span className="font-medium text-gray-700">
                    {number_of_files_txt}:
                  </span>{' '}
                  <span className="text-gray-900">{n_ficheros}</span>
                </div>
              )}
            </div>
          )}

          {subsetEntries.map(([subsetKey, subsetValue]) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const {
              name: subsetName,
              description: subsetDescription,
              metadata = {},
              variables = [],
            } = subsetValue as any;
            const isOpen = openSubsets[subsetKey] ?? true;

            return (
              <div
                key={subsetKey}
                className="rounded-2xl border border-gray-200 shadow-sm bg-gray-50 mb-6"
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
                  onClick={() => toggleSubset(subsetKey)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {subsetName}
                  </h3>
                  <ChevronRightIcon
                    className={`size-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 space-y-4">
                    <p className="text-gray-600">{subsetDescription}</p>

                    {(() => {
                      const metadataBoxes = [
                        [data_type_txt, metadata.data_type],
                        [file_format_txt, metadata.file_format],
                        [data_standard_txt, metadata.data_standard],
                        [data_license_txt, metadata.license],
                      ].filter(([, value]) => hasValue(value));
                      if (metadataBoxes.length === 0) return null;
                      return (
                        <div className="flex flex-wrap gap-4">
                          {metadataBoxes.map(([label, value]) => (
                            <div
                              key={label}
                              className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm"
                            >
                              <span className="font-medium text-gray-700">
                                {label}:
                              </span>{' '}
                              <span className="text-gray-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      );
                    })()}

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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('catalog.data_description')}
              </h3>
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
  pageCount,
  setPage,
}: {
  currentPage: number;
  pageCount: number;
  setPage: (p: number) => void;
}) {
  const t = useTranslations();
  if (pageCount < 2) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <Button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <ChevronLeftIcon className="size-4" /> {t('catalog.previous')}
      </Button>
      <span className="text-sm font-medium text-gray-600 tabular-nums">
        {currentPage} / {pageCount}
      </span>
      <Button
        disabled={currentPage === pageCount}
        onClick={() => setPage(currentPage + 1)}
      >
        {t('catalog.next')} <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}
