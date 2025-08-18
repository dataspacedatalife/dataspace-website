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
import { Heading, Lead } from '@/components/text';
import Image from 'next/image';
import EntornoDemostrador from '../../../public/demostrador/demostrador_entorno.jpg';

export const metadata: Metadata = {
  title: '¿Qué es el demostrador?',
  description:
    'El demostrador Dem Ms DATAlife permite experimentar con la compartición ética y segura de datos en el ámbito de la salud y biotecnología en Galicia.',
};

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        ¿Qué es el demostrador Dem Ms DATAlife?
      </Heading>
      <Lead className="mt-10 text-center">
        Es una plataforma experimental que muestra cómo compartir y acceder a
        datos del sector salud de forma segura, ética y gobernada, respetando la
        soberanía del dato.
      </Lead>

      {/* Imagen + texto lado a lado */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="max-w-lg">
          {/* <h2 className="text-2xl font-medium tracking-tight">
            Objetivo del demostrador
          </h2> */}
          <p className="mt-6 text-lg/6 text-gray-600">
            El demostrador desarrollado en el marco del proyecto europeo Data
            Spaces Support Centre y liderado en Galicia por CESGA y DATAlife,
            tiene como objetivo ilustrar cómo múltiples organizaciones del
            sector biotecnológico y de la salud pueden intercambiar datos de
            forma segura y controlada. El sistema garantiza el cumplimiento
            normativo, la soberanía del dato y la interoperabilidad entre
            diferentes actores, desde hospitales y centros de investigación
            hasta empresas privadas.
          </p>
        </div>

        <div className="mt-10 lg:mt-0">
          <Image
            src={EntornoDemostrador}
            alt="Entorno del demostrador Dem Ms DATAlife"
            className="w-full"
          />
        </div>
      </section>
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
