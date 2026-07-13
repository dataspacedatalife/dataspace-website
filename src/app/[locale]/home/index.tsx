'use client';

import { Footer } from '@/components/footer';
import { Hero } from './hero';
import { LifecycleBridge } from './bridge';
import { ServicesScrolly } from './services-scrolly';
import { ServicesSequence } from './services-sequence';
import { ParticipantsOutro } from './participants-outro';
import { useServicesData } from './shared';

function Services() {
  const services = useServicesData();

  return (
    <>
      <ServicesScrolly services={services} />
      <ServicesSequence services={services} />
    </>
  );
}

/* ================= LANDING ================= */
export function OneHealthLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
      <Hero />

      {/* puente: por qué somos diferentes */}
      <LifecycleBridge />

      {/* ancla de scroll hacia los servicios */}
      <div id="servicios" className="scroll-mt-6 lg:scroll-mt-24" />

      <Services />

      {/* tira de cuadrícula invertida: espejo de la del footer */}
      <div
        className="w-full h-20"
        style={{
          backgroundImage: "url('/demostrador/cuadricula.svg')",
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: 'auto 100%',
          marginTop: '-3px',
          transform: 'scaleY(-1)',
        }}
      />

      <ParticipantsOutro />

      <Footer />
    </main>
  );
}
