import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/button';
import { GradientBackground } from '@/components/gradient';

import {
  Share2,
  Cpu,
  Search,
  Database,
  CloudUpload,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'OneHealth DataSpace',
  description: 'OneHealth DataSpace',
};

function OneHealthLanding() {
  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #3fd7c0 0%,
            #00b7d4 35%,
            #009ab8 65%,
            #006b8f 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 10s ease infinite;
        }

        .float-1 { animation: float 5s ease-in-out infinite; }
        .float-2 { animation: float 6s ease-in-out infinite; }
        .float-3 { animation: float 7s ease-in-out infinite; }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1
                className="gradient-text"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                  fontWeight: 500,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  overflow: 'visible',
                  paddingBottom: '0.1em',
                }}
              >
                OneHealth
                <br />
                DataSpace
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Facilitamos a las entidades participantes compartir,
                procesar, almacenar y analizar datos de salud humana,
                animal y medioambiental —manteniendo el control sobre ellos—
                transformándolos en conocimiento para mejorar la salud global.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://dashboard.dataspace.cesga.es/en"
                  className="inline-block px-8 py-4 rounded-lg text-white font-semibold bg-[#009AB8] shadow-lg hover:scale-105 transition"
                >
                  Qué ofrecemos
                </a>

                <a
                  href="https://dataspace.cesga.es/es/about"
                  className="inline-block px-8 py-4 rounded-md border border-[#009AB8] text-[#009AB8] bg-white hover:bg-slate-50 transition"
                >
                  Saber más
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-28 h-28 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#3fd7c0] to-[#00B7D4] flex items-center justify-center text-white text-4xl md:text-6xl shadow-xl float-1" />
                <div className="absolute left-0 bottom-8 w-28 h-28 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#009AB8] to-[#006B8F] flex items-center justify-center text-white text-4xl md:text-6xl shadow-xl float-2" />
                <div className="absolute right-0 bottom-8 w-28 h-28 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-4xl md:text-6xl shadow-xl float-3" />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 rounded-full bg-white shadow-2xl flex items-center justify-center">
                  <span className="text-[#009AB8] font-bold text-center text-sm md:text-xl">
                    ONE<br />HEALTH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-10 text-center">
          <h2
            className="font-semibold text-[#009AB8]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(3rem, 6vw, 4rem)',
            }}
          >
            Más que datos
          </h2>

          <p className="mt-4 text-slate-600 text-lg max-w-4xl mx-auto">
            Un ciclo de vida operativo completo para datos
          </p>
        </section>
      </main>
    </>
  );
}

function Hero() {
  const t = useTranslations('home.hero');

  return (
    <div className="relative flex flex-col">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: Share2,
      title: 'Compartir',
      text: 'Compartir datos de forma segura entre entidades',
    },
    {
      icon: Cpu,
      title: 'Computar',
      text: 'Procesamiento avanzado de datos y HPC',
    },
    {
      icon: Search,
      title: 'Analizar',
      text: 'Transformar datos en conocimiento útil',
    },
    {
      icon: Database,
      title: 'Almacenar',
      text: 'Gestión segura de grandes volúmenes de datos',
    },
    {
      icon: CloudUpload,
      title: 'Exponer',
      text: 'Publicar servicios y resultados de datos',
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden mb-20"
      style={{
        background:
          'linear-gradient(to right, #3fd7c0 0%, #00a8b8 50%, #006b8f 100%)',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl"
              >
                <div className="bg-white p-6 h-full rounded-xl text-center">
                  <Icon
                    size={40}
                    className="mx-auto mb-4 text-[#009AB8]"
                    strokeWidth={2}
                  />

                  <h3 className="font-semibold text-[#009AB8]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <GradientBackground />
      <Hero />
      <OneHealthLanding />
      <Services />
      <Footer />
    </div>
  );
}