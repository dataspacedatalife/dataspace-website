import clsx from 'clsx';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import LogoEmpresa from '../../../../public/logos/nuevoLogoCesga_mayo2023.png';
import LogoIISGS from '../../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../../public/use-cases/i4life.png';
import LogoUvigo from '../../../../public/use-cases/uvigo.png';

export const metadata: Metadata = {
  title: 'Casos de uso',
  description:
    'Ejemplos reales de aplicación de espacios de datos en distintos sectores: salud, gestión, benchmarking y más.',
};

const useCases = [
  {
    nombre: 'AiDataMed',
    entidad: 'Chup/IISGS',
    objetivo: 'Análisis de datos sanitarios',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
  },
  {
    nombre: 'Brilliant',
    entidad: 'IISGS',
    objetivo: 'Observatorio de sarcopenia',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
  },
  {
    nombre: 'GIFT',
    entidad: 'Chup/IISGS',
    objetivo: 'Salud gastrointestinal',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
  },
  {
    nombre: 'BiomeXplore',
    entidad: 'IISGS',
    objetivo: 'Observatorio del índice poblacional de microbiota intestinal',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
  },
  {
    nombre: 'SALUSBENCH',
    entidad: 'Inverbis',
    objetivo: 'Benchmarking de procesos de gestión hospitalaria',
    imagen: LogoInverbis,
    link: 'https://web.inverbisanalytics.com/',
  },
  {
    nombre: 'CeliaSpace',
    entidad: 'Uvigo',
    objetivo: 'Datos de asistentes conversacionales con seniors',
    imagen: LogoUvigo,
    link: 'https://www.uvigo.gal/',
  },
  {
    nombre: 'Datiacare',
    entidad: 'i4life',
    objetivo: 'Cuidado de personas mayores',
    imagen: Logoi4life,
    link: 'https://i4life.es/',
  },
] satisfies {
  nombre: string;
  entidad: string;
  objetivo: string;
  imagen?: React.ComponentProps<typeof Image>['src'];
  link: string;
}[];

const colors = ['bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100'];

function Header() {
  return (
    <Container className="mt-16 flex flex-col items-center">
      <div className="flex items-center mb-6">
        <Heading
          as="h1"
          className="text-4xl font-extrabold text-gray-900 mx-auto"
        >
          Casos de uso
        </Heading>
      </div>
      <Lead className="mt-6 text-center">
        Estos son algunos de los casos de uso que ya están aprovechando los
        espacios de datos para generar valor científico, social y operativo.
      </Lead>
    </Container>
  );
}

function UseCaseGrid() {
  return (
    <Container className="py-24">
      <div className="flex flex-wrap justify-center gap-8">
        {useCases.map((caso, i) => {
          const imagenSrc = caso.imagen ?? LogoEmpresa;

          return (
            <Link
              key={i}
              href={caso.link}
              className="w-full sm:w-1/2 lg:w-1/3 max-w-[400px]"
            >
              <div
                className={clsx(
                  'flex flex-row items-center justify-between rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md hover:scale-[1.02] duration-200',
                  colors[i % colors.length],
                )}
              >
                <div className="flex flex-col text-left pr-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {caso.nombre}
                  </h3>
                  <p className="text-gray-700 mt-1">{caso.objetivo}</p>
                </div>
                <div className="flex-shrink-0 w-20 h-20 bg-white/70 p-2 rounded-lg flex items-center justify-center">
                  <Image
                    src={imagenSrc}
                    alt={`Logo de ${caso.entidad}`}
                    className="object-contain w-full h-full opacity-80"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default function UseCases() {
  return (
    <main className="overflow-hidden bg-gray-50 min-h-screen">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <UseCaseGrid />
      <Footer />
    </main>
  );
}
