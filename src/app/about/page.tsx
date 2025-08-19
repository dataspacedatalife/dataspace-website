import {
  FileLock,
  Globe,
  Landmark,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';
import Image from 'next/image';
import { AnimatedNumber } from '@/components/animated-number';
import EntornoDemostrador from '../../../public/demostrador/demostrador_entorno.jpg';

export const metadata: Metadata = {
  title: '¿Qué es el demostrador?',
  description:
    'El demostrador DATAlife permite experimentar con la compartición ética y segura de datos en el ámbito de la salud y biotecnología en Galicia.',
};

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        ¿Qué es el demostrador DATAlife?
      </Heading>
      <Lead className="mt-10 text-center">
        Se trata de una plataforma que permite compartir y acceder a datos del
        sector salud de forma segura, ética, gobernada e interoperable,
        respetando la soberanía del dato.
      </Lead>

      {/* Imagen + texto lado a lado */}
      <section className="mt-16 mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Imagen primero en móvil */}
        <div className="mb-10 lg:mb-0 lg:order-2 flex justify-center">
          <Image
            src={EntornoDemostrador}
            alt="Entorno del demostrador DATAlife"
            className="w-full"
          />
        </div>

        {/* Texto */}
        <div className="max-w-2xl lg:order-1">
          <h2 className="text-3xl tracking-tight text-gray-900">
            Objetivo del demostrador
          </h2>
          <p className="mt-6 text-lg/7 text-gray-700">
            El demostrador desarrollado en el marco del proyecto europeo
            <span className="font-semibold"> Data Spaces Support Centre</span> y
            liderado en Galicia por el{' '}
            <span className="font-semibold">CESGA</span>, tiene como objetivo
            ilustrar cómo múltiples organizaciones del sector biotecnológico y
            de la salud pueden intercambiar datos de forma segura y controlada.
          </p>
          <p className="mt-4 text-lg/7 text-gray-700">
            El sistema garantiza el cumplimiento normativo, la soberanía del
            dato y la interoperabilidad entre diferentes actores, desde
            hospitales y centros de investigación hasta empresas privadas.
          </p>

          {/* Motivación */}
          <h2 className="mt-10 text-3xl tracking-tight text-gray-900">
            Motivación
          </h2>
          <p className="mt-6 text-lg/7 text-gray-600">
            Los retos en salud humana, animal y ambiental están interconectados
            y requieren una visión conjunta basada en datos que permitan
            afrontarlos. Este demostrador ofrece una plataforma para integrar y
            analizar información multisectorial, facilitando decisiones
            informadas y políticas públicas basadas en evidencia.
          </p>
        </div>
      </section>

      {/* Impacto del proyecto */}
      <div className="mb-16 max-lg:mt-16 lg:col-span-2">
        <Subheading>Impacto del Proyecto</Subheading>
        <hr className="mt-6 border-t border-gray-200" />
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">Casos de uso</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={7} />
            </dd>
          </div>
          <div className="flex flex-col items-center text-center gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">Sectores implicados</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={4} />
            </dd>
          </div>
          {/* <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
            <dt className="text-sm/6 text-gray-600">Tecnologías aplicadas</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={6} />
            </dd>
          </div> */}
          <div className="flex flex-col items-center text-center gap-y-2">
            <dt className="text-sm/6 text-gray-600">
              Organizaciones participantes
            </dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={6} />
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Footer />
    </main>
  );
}
