import {
  Brain,
  Database,
  Globe,
  Share2,
  ShieldCheck,
  Users2,
} from 'lucide-react';
import type { Metadata } from 'next';
import { AnimatedNumber } from '@/components/animated-number';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

export const metadata: Metadata = {
  title: '¿Por qué?',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
};

function Header() {
  return (
    <Container className="mt-16 mb-16">
      <Heading as="h1" className="text-center">
        ¿Por qué?
      </Heading>
      <Lead className="mt-6 text-center">
        Los retos en salud humana, animal y ambiental están interconectados y
        requieren una visión conjunta basada en datos. Este demostrador ofrece
        una plataforma para integrar y analizar información multisectorial,
        facilitando decisiones informadas y políticas públicas basadas en
        evidencia.
      </Lead>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<ShieldCheck className="h-8 w-8 text-green-600" />}
          title="Interoperabilidad y gobernanza"
          description="Integra datos heterogéneos con estándares comunes y una gobernanza clara que garantiza calidad, seguridad y trazabilidad."
        />
        <FeatureCard
          icon={<Brain className="h-8 w-8 text-purple-600" />}
          title="Casos de uso estratégicos"
          description="Aborda desafíos clave como la genómica, seguridad alimentaria, sostenibilidad acuícola, deterioro cognitivo y gestión sanitaria."
        />
        <FeatureCard
          icon={<Share2 className="h-8 w-8 text-blue-600" />}
          title="Transferencia y reutilización"
          description="Fomenta el intercambio de datos entre entidades públicas y privadas, promoviendo innovación y decisiones basadas en ciencia."
        />
        <FeatureCard
          icon={<Database className="h-8 w-8 text-orange-500" />}
          title="Plataforma basada en datos"
          description="Analiza información multisectorial para respaldar decisiones públicas en salud, medio ambiente y bienestar animal."
        />
        <FeatureCard
          icon={<Globe className="h-8 w-8 text-teal-600" />}
          title="Tecnología abierta y accesible"
          description="Desarrollado con software y estándares abiertos para garantizar su reutilización y escalabilidad en otros contextos."
        />
        <FeatureCard
          icon={<Users2 className="h-8 w-8 text-pink-600" />}
          title="Impacto colaborativo"
          description="Impulsa soluciones conjuntas entre ciencia, administración y sociedad civil para enfrentar desafíos de forma integrada y sostenible."
        />
      </div>
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

export default function Why() {
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
