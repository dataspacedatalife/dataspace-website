import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { GradientBackground } from '@/components/gradient';
import Link from 'next/link';

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

/* ================= LANDING ================= */

function OneHealthLanding() {
  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-95px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h1
                className="hidden sm:block gradient-text"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(4rem, 10vw, 6rem)',
                  fontWeight: 500,
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                OneHealth
                <br />
                DataSpace
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Facilitamos a las entidades participantes compartir,
                procesar, almacenar y analizar datos de salud humana,
                animal y medioambiental, manteniendo el control sobre ellos y
                transformándolos en conocimiento para mejorar la salud global
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="/about"
                  className="px-8 py-4 rounded-md border border-[#009AB8] text-[#009AB8] bg-white hover:bg-slate-50 transition"
                >
                  Saber más
                </a>
               <a
                  href="https://dashboard.dataspace.cesga.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg text-white font-semibold bg-[#009AB8] shadow-lg hover:scale-105 transition"
                >
                  Acceder
                </a>
                
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-[650px] flex items-center justify-center">
                <div
                  className="absolute inset-0 blur-3xl opacity-30"
              
                />

                <img
                  src="/demostrador/grafica4_web_660px.png"
                  alt="OneHealth DataSpace"
                  className="relative z-10 w-full max-w-[450px] h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SERVICIOS HEADER */}
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
            Un ciclo de vida operativo completo para los datos
          </p>
        </section>

        <Services />


        <Footer />
      </main>
    </>
  );
}

/* ================= SERVICES ================= */

function Services() {
  const services = [
    {
      icon: Share2,
      title: 'Compartir',
      text: 'Compartir datos de forma segura entre entidades',
      href: 'https://dl-cesga.srv.cesga.es',
    },
    {
      icon: Cpu,
      title: 'Computar',
      text: 'Procesamiento avanzado de datos y HPC',
      href: 'https://hpc.dataspace.cesga.es',
    },
    {
      icon: Search,
      title: 'Analizar',
      text: 'Transformar datos en conocimiento útil',
      href: 'https://bigdata.dataspace.cesga.es/',
    },
    {
      icon: Database,
      title: 'Almacenar',
      text: 'Gestión segura de grandes volúmenes de datos',
      href: 'https://storage.dataspace.cesga.es',
    },
    {
      icon: CloudUpload,
      title: 'Exponer',
      text: 'Publicar servicios y resultados de datos',
      href: 'https://cloud.dataspace.cesga.es',
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #3fd7c0 0%, #00a8b8 50%, #006b8f 100%)',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <Link
                key={i}
                href={item.href}
                className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl block"
              >
                <div className="bg-white p-6 h-full rounded-xl text-center">
                  <Icon size={40} className="mx-auto mb-4 text-[#009AB8]" />
                  <h3 className="font-semibold text-[#009AB8]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    {item.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ================= PAGE ================= */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <GradientBackground />

      <div className="max-w-7xl mx-auto w-full ">
        <Navbar />
      </div>

      <OneHealthLanding />
    </div>
  );
}