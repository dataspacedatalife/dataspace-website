import type { Metadata } from 'next';
import { AnimatedNumber } from '@/components/animated-number';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
};

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Impulsando la innovación desde el CESGA</Heading>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
        {/* Nuestra misión */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">
            Nuestra misión
          </h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            En CESGA, nuestra misión es acelerar la transformación digital de
            los sectores de la biotecnología, agroalimentación,
            forestal-mar-industrial y salud. A través del demostrador
            multisectorial, proporcionamos soluciones basadas en inteligencia
            artificial, big data y computación de alto rendimiento.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Este proyecto busca explotar, mediante casos reales, tecnologías
            emergentes que puedan mejorar la competitividad de las empresas
            gallegas, apostando por una Galicia conectada, sostenible y líder en
            innovación.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 max-w-lg">
            <img
              alt="Supercomputador Finisterrae"
              src="/cesga/FTIII.png"
              className="block w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

function Person({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: string;
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-35 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  );
}

function Team() {
  return (
    <Container className="my-32">
      <Subheading as="h3" className="mt-24">
        El equipo
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Javier Cacheiro"
          description="Coordinador de proyecto"
          img="/team/jcacheiro.png"
        />
        <Person
          name="Antón Ambroa"
          description="Coordinador técnico de proyecto"
          img="/team/aambroa.jpg"
        />
        <Person
          name="Pedro Ferreiro"
          description="Técnico de proyector"
          img="/team/pferreiro.jpg"
        />
        <Person
          name="Marta Castiñeira"
          description="Técnica investigadora en simulación computacional"
          img="/team/mcastineira.jpg"
        />
        <Person
          name="Ledicia Díaz"
          description="Técnica investigadora en Machine Learning y Data Science"
          img="/team/ldiaz.jpg"
        />
        <Person
          name="Lara Vázquez"
          description="Técnica investigadora en Artificial Intelligence"
          img="/team/lvazquez.jpg"
        />
      </ul>
    </Container>
  );
}

export default function TeamPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      {/* <Investors />
      <Careers /> */}
      <Footer />
    </main>
  );
}
