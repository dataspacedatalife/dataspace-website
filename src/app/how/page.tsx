import {
  CheckCircle2,
  Users,
  Landmark,
  Network,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

export const metadata: Metadata = {
  title: 'Participa',
  description:
    'Cómo unirse al espacio de datos: quién puede participar, pasos de adhesión, compromisos y beneficios.',
};

function Header() {
  return (
    <Container className="mt-24">
      <Heading as="h1" className="text-center">
        Participa en el espacio de datos DATAlife
      </Heading>
      <Lead className="mt-6 text-center">
        Comparte, consume o desarrolla servicios basados en datos en un entorno
        confiable que garantiza soberanía, privacidad e interoperabilidad.
      </Lead>
    </Container>
  );
}

interface SectionProps {
  title: string;
  items: string[];
  icon: any;
}

function Section({ title, items, icon: Icon }: SectionProps) {
  return (
    <div className="mt-20 text-center">
      <Subheading className="text-3xl md:text-4xl">{title}</Subheading>
      <hr className="mx-auto mt-6 w-24 border-t border-gray-200" />
      <ul className="mx-auto mt-10 max-w-2xl space-y-4 text-left">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Icon className="h-5 w-5 text-gray-900 mt-0.5 shrink-0" />
            <span className="text-lg text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Participa() {
  const who = [
    'Hospitales, centros de investigación y universidades',
    'Administraciones y entidades públicas',
    'Empresas, startups y centros tecnológicos',
    'Colaboraciones nacionales y europeas',
  ];

  const benefits = [
    'Integración con actores y espacios de datos europeos',
    'Diposición de servicios comunes: catálogos, anonimización, análisis',
    'Oportunidad de establecer nuevas colaboraciones y alianzas',
  ];

  const commitments = [
    'Cumplir el marco de gobernanza y las reglas de acceso y uso',
    'Garantizar calidad y trazabilidad de los datos',
    'Respetar la normativa de privacidad, seguridad y ética',
    'Reportar incidencias o disputas por los canales habilitados',
  ];

  const how = [
    'Solicitud de participación mediante Acuerdo Marco',
    'Validación por la autoridad de gobierno (CESGA)',
    'Asignación de rol en el ecosistema',
    'Activación de credenciales y acceso a servicios',
  ];

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />

      <Container className="mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Section title="¿Quién puede participar?" items={who} icon={Users} />
          <Section title="Beneficios" items={benefits} icon={CheckCircle2} />
          <Section title="Compromisos" items={commitments} icon={ShieldCheck} />
          <Section title="Cómo adherirse" items={how} icon={CheckCircle2} />
        </div>

        {/* <div className="mt-16 text-center">
          <a
            href="/formulario-adhesion"
            className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Solicita tu adhesión
          </a>
        </div> */}
      </Container>

      <Footer />
    </main>
  );
}
