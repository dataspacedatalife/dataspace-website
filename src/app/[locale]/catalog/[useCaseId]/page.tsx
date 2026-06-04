'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

import useCasesData from '../data/useCases.json';

import { Container } from '@/components/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Heading } from '@/components/text';

export default function UseCaseDetail() {
  const params = useParams();

  const useCaseId = params.useCaseId as string;

  const caso =
    useCasesData[
      useCaseId as keyof typeof useCasesData
    ];

  if (!caso) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <GradientBackground />

      <Container>
        <Navbar />
      </Container>

      {/* Header */}
      <Container className="mt-20">
        <div className="max-w-5xl mx-auto">
          <Heading
            as="h1"
            className="text-5xl font-bold text-center"
          >
            {caso.denominacion_oficial}
          </Heading>

          <p className="mt-10 text-lg leading-8 text-gray-600  max-w-4xl mx-auto">
            {caso.descripcion_completa_resultados_esperados}
          </p>
        </div>
      </Container>

      {/* Contenido */}
      <Container className="mt-24 pb-32">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Información general */}
          <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold mb-10">
              Información general
            </h2>

            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Acrónimo
                </p>

                <p className="mt-2 text-lg text-gray-900">
                  {caso.acronimo}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Categoría
                </p>

                <p className="mt-2 text-lg text-gray-900">
                  {caso.categoria_caso_uso}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Entidad promotora
                </p>

                <p className="mt-2 text-lg text-gray-900">
                  {caso.entidad_promotora}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Entidades participantes
                </p>

                <p className="mt-2 text-lg text-gray-900">
                  {Array.isArray(
                    caso.entidades_participantes
                  )
                    ? caso.entidades_participantes.join(
                        ', '
                      )
                    : caso.entidades_participantes}
                </p>
              </div>

            </div>
          </section>

          {/* Caso de uso */}
          <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold mb-8">
              Caso de uso
            </h2>

            <p className="text-lg leading-8 text-gray-700 whitespace-pre-line">
              {
                caso.descripcion_completa_resultados_esperados
              }
            </p>
          </section>

          {/* Dataset */}
          <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold mb-10">
              Dataset asociado
            </h2>

            <div className="space-y-10">

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Nombre del dataset
                </p>

                <p className="mt-3 text-lg text-gray-900">
                  {caso.dataset.nombre}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Descripción
                </p>

                <p className="mt-3 text-lg leading-8 text-gray-700">
                  {caso.dataset.descripcion_breve}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Naturaleza de los datos
                </p>

                <p className="mt-3 text-lg leading-8 text-gray-700">
                  {caso.dataset.naturaleza_datos}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Procedencia de los datos
                </p>

                <p className="mt-3 text-lg leading-8 text-gray-700">
                  {caso.dataset.procedencia_datos}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 pt-4">

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Volumen esperado
                  </p>

                  <p className="mt-3 text-lg text-gray-900">
                    {caso.dataset.volumen}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Número de ficheros
                  </p>

                  <p className="mt-3 text-lg text-gray-900">
                    {caso.dataset.n_ficheros}
                  </p>
                </div>

              </div>

            </div>
          </section>

        </div>
      </Container>

      <Footer />
    </main>
  );
}