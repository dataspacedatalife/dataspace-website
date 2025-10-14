import clsx from 'clsx';
import { color } from 'motion';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';
import LogoEmpresa from '../../../../public/logos/nuevoLogoCesga_mayo2023.png';
import LogoCesga from '../../../../public/logos/nuevoLogoCesga_mayo2023.png';
import LogoIISGS from '../../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../../public/use-cases/i4life.png';
import LogoUvigo from '../../../../public/use-cases/uvigo.png';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('use-cases.metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}
const colors_blue = ['bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100'];
const colors_green = [
  'bg-gradient-to-br from-green-100 via-lime-100 to-emerald-100',
];

const useCasesData = [
  {
    id: 'farmaciavax',
    imagen: LogoCesga,
    link: 'https://dspacer-cesga.es/portal',
    color: colors_green,
  },
  {
    id: 'aidamed',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'brilliant',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'gift',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'biomexplore',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    color: colors_blue,
  },
  {
    id: 'salusbench',
    imagen: LogoInverbis,
    link: 'https://web.inverbisanalytics.com/',
    color: colors_blue,
  },
  {
    id: 'celiaspace',
    imagen: LogoUvigo,
    link: 'https://www.uvigo.gal/',
    color: colors_blue,
  },
  {
    id: 'datiacare',
    imagen: Logoi4life,
    link: 'https://i4life.es/',
    color: colors_blue,
  },
] as const;

async function Header() {
  const t = await getTranslations('use-cases.header');
  return (
    <Container className="mt-16 flex flex-col items-center">
      <div className="flex items-center mb-6">
        <Heading
          as="h1"
          className="text-4xl font-extrabold text-gray-900 mx-auto"
        >
          {t('title')}
        </Heading>
      </div>
      <Lead className="mt-6 text-center">{t('lead')}</Lead>
    </Container>
  );
}

async function UseCaseGrid() {
  const t = await getTranslations('use-cases.cases');
  const useCases = useCasesData.map((uc) => ({
    ...uc,
    nombre: t(`${uc.id}.name`),
    entidad: t(`${uc.id}.entity`),
    objetivo: t(`${uc.id}.objective`),
  }));

  return (
    <Container className="py-24">
      <div className="flex flex-wrap justify-center gap-8">
        {useCases.map((caso, i) => {
          const imagenSrc = caso.imagen ?? LogoEmpresa;

          return (
            <Link
              key={i}
              href={caso.link}
              target="_blank"
              className="w-full sm:w-1/2 lg:w-1/3 max-w-[400px]"
            >
              <div
                className={clsx(
                  'flex flex-row items-center justify-between rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md hover:scale-[1.02] duration-200',
                  caso.color[i % caso.color.length],
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
                    alt={`Logo of ${caso.entidad}`}
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
