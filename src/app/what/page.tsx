import {
  FileLock,
  Globe,
  Landmark,
  Network,
  ShieldCheck,
  Users,
  Brain,
  Database,
  Share2,
  Users2,
} from 'lucide-react';
import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead } from '@/components/text';

export const metadata: Metadata = {
  title: '¿Qué?',
  description:
    'Estamos construyendo un ecosistema donde los datos puedan ser compartidos de forma segura, gobernada y ética entre múltiples organizaciones.',
};

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        ¿Qué es un espacio de datos?
      </Heading>
      <Lead className="mt-10 text-center">
        Un espacio de datos es un marco estructurado que permite el intercambio,
        acceso, gestión y uso de datos entre múltiples entidades de manera
        segura, interoperable y conforme a normativas.
      </Lead>

      {/* Imagen + texto lado a lado */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-medium tracking-tight">Objetivo</h2>
          <p className="mt-6 text-lg/7 text-gray-600">
            El objetivo es facilitar la colaboración basada en datos, respetando
            principios como la soberanía del dato, la privacidad y la ética. Los
            espacios de datos combinan tecnologías como infraestructuras de
            intercambio, estándares comunes y control de acceso, junto con
            acuerdos legales y organizativos, para permitir un uso compartido y
            responsable.
          </p>
        </div>

        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-medium tracking-tight">Motivación</h2>
          <p className="mt-6 text-lg/7 text-gray-600">
            Los grandes retos sociales, económicos y ambientales suelen estar
            interconectados y requieren una visión conjunta basada en datos que
            permitan afrontarlos. Los espacios de datos proporcionan un marco
            para integrar y analizar información de distintos sectores, lo que
            facilita la colaboración entre actores, la toma de decisiones
            informadas y el desarrollo de políticas y servicios basados en
            evidencia.
          </p>
          {/* <img
            src="/images/espacio-datos.jpg"
            alt="Representación de un espacio de datos"
            className="w-full rounded-2xl shadow-md"
          /> */}
        </div>
      </section>

      {/* Sección con iconos grandes y coloridos */}
      <section className="mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center bg-blue-50 rounded-2xl p-8 shadow-md text-center">
          <ShieldCheck className="text-blue-600 w-16 h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Seguridad</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Protección integral de los datos mediante cifrado y autenticación.
          </p>
        </div>

        <div className="flex flex-col items-center bg-green-50 rounded-2xl p-8 shadow-md text-center">
          <Network className="text-green-600 w-16 h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Interoperabilidad</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Integración entre plataformas y sistemas mediante estándares
            abiertos.
          </p>
        </div>

        <div className="flex flex-col items-center bg-purple-50 rounded-2xl p-8 shadow-md text-center">
          <FileLock className="text-purple-600 w-16 h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Privacidad</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Acceso a datos basado en consentimiento y políticas transparentes.
          </p>
        </div>

        <div className="flex flex-col items-center bg-yellow-50 rounded-2xl p-8 shadow-md text-center">
          <Landmark className="text-yellow-600 w-16 h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Gobernanza</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Normas claras sobre cómo se accede, usa y comparte la información.
          </p>
        </div>

        <div className="flex flex-col items-center bg-pink-50 rounded-2xl p-8 shadow-md text-center">
          <Users className="text-pink-600 w-16 h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Colaboración</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Cooperación entre sectores públicos, privados y ciudadanos.
          </p>
        </div>

        <div className="flex flex-col items-center bg-teal-50 rounded-2xl p-8 shadow-md text-center">
          <Globe className="text-teal-600 w-16 h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Soberanía del dato</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Cada organización mantiene control sobre sus propios datos.
          </p>
        </div>
      </section>
    </Container>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div>{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function What() {
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

// import { Container } from '@/components/container'
// import { Footer } from '@/components/footer'
// import { GradientBackground } from '@/components/gradient'
// import { Navbar } from '@/components/navbar'
// import { Heading, Lead } from '@/components/text'
// import type { Metadata } from 'next'
// import {
//   ShieldCheck,
//   Network,
//   FileLock,
//   Landmark,
//   Users,
//   Globe,
// } from 'lucide-react'

// export const metadata: Metadata = {
//   title: '¿Qué?',
//   description:
//     'Estamos construyendo un ecosistema donde los datos puedan ser compartidos de forma segura, gobernada y ética entre múltiples organizaciones.',
// }

// function Header() {
//   return (
//     <Container className="mt-16">
//       <Heading as="h1" className='text-center'>¿Qué es un espacio de datos?</Heading>
//       <Lead className="mt-10 text-center">
//         Un espacio de datos es un marco estructurado que permite el intercambio, acceso, gestión y uso de datos entre múltiples entidades de manera segura, interoperable y conforme a normativas.
//       </Lead>

//       {/* Imagen + texto lado a lado */}
//       <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
//         <div className="max-w-lg">
//           <h2 className="text-2xl font-medium tracking-tight">Objetivo</h2>
//           <p className="mt-6 text-sm/6 text-gray-600">
//             Su objetivo es facilitar la colaboración basada en datos, respetando principios como la soberanía del dato, la privacidad y la ética. Los espacios de datos combinan tecnologías como infraestructuras de intercambio, estándares comunes y control de acceso, junto con acuerdos legales y organizativos, para permitir un uso compartido y responsable.
//           </p>
//         </div>

//         <div className="mt-10 lg:mt-0">
//           <img
//             src="/images/espacio-datos.jpg"
//             alt="Representación de un espacio de datos"
//             className="w-full rounded-2xl shadow-md"
//           />
//         </div>
//       </section>

//       {/* Propiedades debajo */}
//       <section className="mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <FeatureCard icon={<ShieldCheck />} title="Seguridad">
//           Protección integral de los datos mediante cifrado, autenticación y auditoría.
//         </FeatureCard>
//         <FeatureCard icon={<Network />} title="Interoperabilidad">
//           Integración entre plataformas y sistemas mediante estándares abiertos.
//         </FeatureCard>
//         <FeatureCard icon={<FileLock />} title="Privacidad">
//           Acceso a datos basado en consentimiento y políticas transparentes.
//         </FeatureCard>
//         <FeatureCard icon={<Landmark />} title="Gobernanza">
//           Normas claras sobre cómo se accede, usa y comparte la información.
//         </FeatureCard>
//         <FeatureCard icon={<Users />} title="Colaboración">
//           Facilita la cooperación entre sectores públicos, privados y ciudadanos.
//         </FeatureCard>
//         <FeatureCard icon={<Globe />} title="Soberanía del dato">
//           Cada organización mantiene control sobre sus propios datos.
//         </FeatureCard>
//       </section>
//     </Container>
//   )
// }

// function FeatureCard({
//   icon,
//   title,
//   children,
// }: {
//   icon: React.ReactNode
//   title: string
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
//       <div className="text-primary">{icon}</div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-sm text-gray-600">{children}</p>
//     </div>
//   )
// }

// export default function What() {
//   return (
//     <main className="overflow-hidden">
//       <GradientBackground />
//       <Container>
//         <Navbar />
//       </Container>
//       <Header />
//       <Footer />
//     </main>
//   )
// }
