import clsx from 'clsx';
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
  },
  {
    nombre: 'Brilliant',
    entidad: 'IISGS',
    objetivo: 'Observatorio de sarcopenia',
  },
  {
    nombre: 'GIFT',
    entidad: 'Chup/IISGS',
    objetivo: 'Salud gastrointestinal',
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
  },
] satisfies {
  nombre: string;
  entidad: string;
  objetivo: string;
  imagen?: React.ComponentProps<typeof Image>['src'];
}[];

// Colores para los círculos
const colors = [
  'bg-gradient-to-br from-blue-300 via-sky-200 to-cyan-300',
  'bg-gradient-to-br from-emerald-300 via-emerald-200 to-teal-300',
  'bg-gradient-to-br from-purple-300 via-violet-200 to-indigo-300',
  'bg-gradient-to-br from-pink-300 via-rose-200 to-fuchsia-300',
  'bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-300',
  'bg-gradient-to-br from-red-300 via-rose-200 to-pink-300',
  'bg-gradient-to-br from-indigo-300 via-indigo-200 to-violet-300',
];

// const colors = [
//   'bg-blue-200',
//   'bg-emerald-200',
//   'bg-purple-200',
//   'bg-pink-200',
//   'bg-yellow-200',
//   'bg-red-200',
//   'bg-indigo-200',
// ];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {useCases.map((caso, i) => (
          <div
            key={i}
            className={clsx(
              'flex flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md size-full justify-evenly',
              colors[i % colors.length],
            )}
          >
            <div className="bg-white/30 w-fit h-fit mx-auto sm:w-2/3 border rounded-4xl">
              <Image src={caso.imagen ?? LogoIISGS} alt={caso.nombre} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{caso.nombre}</h3>
              <div className="">{caso.objetivo}</div>
            </div>
          </div>
        ))}
        {/* {useCases.map((caso, i) => ( */}
        {/*   <div key={i} className="border"> */}
        {/*     <div className="border"> */}
        {/*       <Image */}
        {/*         src={caso.imagen ?? LogoIISGS} */}
        {/*         alt={caso.nombre} */}
        {/*         className="object-contain aspect-square" */}
        {/*       /> */}
        {/*     </div> */}
        {/*     <div>{caso.nombre}</div> */}
        {/*     <div>{caso.objetivo}</div> */}
        {/*   </div> */}
        {/* ))} */}
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
