import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
// Logo empresa general (importa tu logo real aquí)
import LogoEmpresa from '../../../public/logos/nuevoLogoCesga_mayo2023.png';
// Logos proyectos (los puedes seguir manteniendo)
import LogoIISGS from '../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../public/use-cases/i4life.png';
import LogoUvigo from '../../../public/use-cases/uvigo.png';

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
  },
  {
    nombre: 'Brilliant',
    entidad: 'IISGS',
    objetivo: 'Observatorio de sarcopenia',
    imagen: LogoIISGS,
  },
  {
    nombre: 'GIFT',
    entidad: 'Chup/IISGS',
    objetivo: 'Salud gastrointestinal',
    imagen: LogoIISGS,
  },
  {
    nombre: 'SALUSBENCH',
    entidad: 'Inverbis',
    objetivo: 'Benchmarking de procesos de gestión hospitalaria',
    imagen: LogoInverbis,
  },
  {
    nombre: 'CeliaSpace',
    entidad: 'Uvigo',
    objetivo:
      'Datos de asistentes conversacionales para la evaluación de la salud.',
    imagen: LogoUvigo,
  },
  {
    nombre: 'DATIACARE',
    entidad: 'i4life',
    objetivo: 'Cuidado de personas mayores',
    imagen: Logoi4life,
  },
  {
    nombre: 'BiomeXplore',
    entidad: 'IISGS',
    objetivo: 'Observatorio del índice poblacional de microbiota intestinal',
    imagen: LogoIISGS,
  },
];

// Colores para los círculos
const colors = [
  'bg-blue-200',
  'bg-emerald-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-yellow-200',
  'bg-red-200',
  'bg-indigo-200',
];

function Header() {
  return (
    <Container className="mt-16 flex flex-col items-center">
      <div className="flex items-center mb-6">
        <Heading
          as="h1"
          className="text-4xl font-extrabold text-gray-900 text-center"
        >
          Casos de uso
        </Heading>
      </div>
      <Lead className="max-w-2xl text-center">
        Estos son algunos de los casos de uso que ya están aprovechando los
        espacios de datos para generar valor científico, social y operativo.
      </Lead>
    </Container>
  );
}

function UseCaseGrid() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {useCases.map((caso, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center p-6 rounded-full ${colors[idx % colors.length]} shadow-lg w-48 h-48 relative`}
          >
            <div className="absolute -top-10 bg-white rounded-full p-2 shadow-md">
              <Image
                src={caso.imagen}
                alt={`Logo de ${caso.nombre}`}
                width={60}
                height={60}
                className="object-contain rounded-full"
              />
            </div>
            <h3 className="mt-16 text-black text-xl font-bold">
              {caso.nombre}
            </h3>
            <p className="text-black mt-2 text-sm font-semibold">
              <span className="opacity-80">Entidad:</span> {caso.entidad}
            </p>
            <p className="text-black mt-1 text-xs opacity-90">
              {caso.objetivo}
            </p>
          </div>
        ))}
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
