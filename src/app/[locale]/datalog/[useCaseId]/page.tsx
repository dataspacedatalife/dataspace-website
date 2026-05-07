'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

import {
  useMessages,
  useTranslations,
} from 'next-intl';

import { useState } from 'react';

import { datasets } from '../data/dataSets';

import { Container } from '@/components/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Heading, Lead } from '@/components/text';
import { Button } from '@/components/button';

import type { StaticImageData } from 'next/image';

type Dataset = {
  id: string;
  useCaseId: string;
  imagen?: string | StaticImageData;
  email?: string;
};

export default function UseCaseDetail() {
  const params = useParams();
  const useCaseId = params.useCaseId as string;

  const t = useTranslations();
  const messages = useMessages();

  const [selectedDataset, setSelectedDataset] =
    useState<Dataset | null>(null);

  const name = t(`use-cases.cases.${useCaseId}.name` as any);
  const objective = t(`use-cases.cases.${useCaseId}.objective` as any);

  const entity = t(`use-cases.cases.${useCaseId}.entity` as any);
  const data = t(`use-cases.cases.${useCaseId}.data` as any);
  const contact = t(`use-cases.cases.${useCaseId}.contact` as any);

  const filtered = datasets.filter(
    (d) => d.useCaseId === useCaseId
  );

  const isEmpty = (v?: string) => !v || v.trim() === '';

  return (
    <main className="relative min-h-screen overflow-hidden">
      <GradientBackground />

      {/* Navbar */}
      <Container>
        <Navbar />
      </Container>

      {/* Header */}
      <Container className="mt-16 text-center">
        <Heading as="h1" className="text-4xl font-bold">
          {name}
        </Heading>

        <Lead className="mt-6 max-w-3xl mx-auto">
          {objective}
        </Lead>
      </Container>

      {/* Content */}
      <Container className="mt-16 space-y-12 pb-24">

        {/* Entidades */}
        {!isEmpty(entity) && (
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Entidades
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {entity}
            </p>
          </section>
        )}

        {/* Datos */}
        {!isEmpty(data) && (
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Datos
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {data}
            </p>
          </section>
        )}

        {/* Contacto */}
        {!isEmpty(contact) && (
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contacto
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {contact}
            </p>
          </section>
        )}

        {/* Datasets */}
        {filtered.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Datasets relacionados
            </h2>

            <div className="space-y-8">
              {filtered.map((dataset: Dataset) => (
                <div
                  key={dataset.id}
                  className="flex flex-col sm:flex-row items-start border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Imagen */}
                  {dataset.imagen && (
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 mr-0 sm:mr-6 mb-4 sm:mb-0">
                      <Image
                        src={dataset.imagen}
                        alt={dataset.id}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  )}

                  {/* Contenido */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t(`catalog.datasets.${dataset.id}.name` as any)}
                    </h3>

                    <p className="mt-2 text-md text-gray-600">
                      {t(`catalog.datasets.${dataset.id}.use_case` as any)}
                    </p>

                    <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                      {t(`catalog.datasets.${dataset.id}.description` as any)}
                    </p>
                  </div>

                  {/* Botón */}
                  <div className="mt-6 sm:mt-0 sm:ml-6 flex items-center">
                    <Button
                      onClick={() => setSelectedDataset(dataset)}
                    >
                      Ver detalles
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </Container>

      {/* Modal */}
      {selectedDataset && (
        <Dialog
          open={!!selectedDataset}
          onClose={() => setSelectedDataset(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/50" />

          <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
            <DialogPanel className="relative max-w-5xl w-full rounded-xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">

              <DialogTitle className="text-2xl font-bold mb-1 text-gray-900">
                {t(`catalog.datasets.${selectedDataset.id}.name` as any)}
              </DialogTitle>

              <div className="flex items-center gap-3 mb-2 mt-2">
                <p className="text-md text-gray-500 font-medium">
                  {t('catalog.dataset_name')}:
                </p>

                <p className="text-md font-medium">
                  {t(`catalog.datasets.${selectedDataset.id}.dataset_name` as any)}
                </p>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <p className="text-md text-gray-500 font-medium">
                  {t('catalog.provider')}:
                </p>

                <p className="text-md font-medium">
                  {t(`catalog.datasets.${selectedDataset.id}.use_case` as any)}
                </p>

                <p className="text-md font-medium">-</p>

                <p className="text-md font-medium">
                  {t(`catalog.datasets.${selectedDataset.id}.provider` as any)}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {t(`catalog.datasets.${selectedDataset.id}.description` as any)}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                  <span className="font-medium text-gray-700">
                    {t('catalog.volume')}:
                  </span>{' '}
                  <span className="text-gray-900">
                    {t(`catalog.datasets.${selectedDataset.id}.volumen` as any)}
                  </span>
                </div>

                <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                  <span className="font-medium text-gray-700">
                    {t('catalog.number_of_files')}:
                  </span>{' '}
                  <span className="text-gray-900">
                    {t(`catalog.datasets.${selectedDataset.id}.n_ficheros` as any)}
                  </span>
                </div>
              </div>

              {Object.entries(
                (messages.catalog.datasets as any)[selectedDataset.id].subsets
              ).map(([subsetKey, subsetValue]: any) => (
                <div
                  key={subsetKey}
                  className="rounded-2xl border border-gray-200 shadow-sm bg-gray-50 mb-6 p-5"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {subsetValue.name}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {subsetValue.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                      <span className="font-medium text-gray-700">
                        {t('catalog.data_type')}:
                      </span>{' '}
                      <span className="text-gray-900">
                        {subsetValue.metadata.data_type}
                      </span>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                      <span className="font-medium text-gray-700">
                        {t('catalog.file_format')}:
                      </span>{' '}
                      <span className="text-gray-900">
                        {subsetValue.metadata.file_format}
                      </span>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                      <span className="font-medium text-gray-700">
                        {t('catalog.data_standard')}:
                      </span>{' '}
                      <span className="text-gray-900">
                        {subsetValue.metadata.data_standard}
                      </span>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                      <span className="font-medium text-gray-700">
                        {t('catalog.license')}:
                      </span>{' '}
                      <span className="text-gray-900">
                        {subsetValue.metadata.license}
                      </span>
                    </div>
                  </div>

                  {subsetValue.variables.length > 0 && (
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
                          {subsetValue.variables.map((v: any) => (
                            <tr
                              key={v.name}
                              className="even:bg-gray-50 border-b border-gray-200"
                            >
                              <td className="p-2 font-medium text-gray-700">
                                {v.name}
                              </td>

                              <td className="p-2">
                                {v.data_description}
                              </td>

                              <td className="p-2">
                                {v.data_type}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 flex justify-end">
                <Button onClick={() => setSelectedDataset(null)}>
                  {t('catalog.close')}
                </Button>
              </div>

            </DialogPanel>
          </div>
        </Dialog>
      )}

      <Footer />
    </main>
  );
}