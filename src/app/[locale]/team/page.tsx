import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Subheading } from '@/components/text';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'team.metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

async function Header() {
  const t = await getTranslations('team.header');
  return (
    <Container className="mt-16">
      <Heading as="h1">{t('title')}</Heading>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
        {/* Nuestra misión */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">
            {t('mission')}
          </h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            {t('missionText1')}
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            {t('missionText2')}
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 max-w-lg">
            <img
              alt={t('imageAlt')}
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

async function Team() {
  const t = await getTranslations('team.team');
  const members = t.raw('members');

  return (
    <Container className="my-32">
      <Subheading as="h3" className="mt-24">
        {t('title')}
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {Object.keys(members).map((key) => (
          <Person
            key={key}
            name={members[key].name}
            description={members[key].description}
            img={`/team/${members[key].img}`}
          />
        ))}
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
      <Footer />
    </main>
  );
}
