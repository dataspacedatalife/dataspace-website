import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Subheading } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('team.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

async function Header() {
  const t = await getTranslations('team.header');

  return (
    <Container className="mt-16">
      <Heading as="h1" className="text-center">
        {t('title')}
      </Heading>

      <section className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="mx-auto max-w-xl lg:mx-0">

          <p className="mt-6 text-xl text-gray-600">
            {t('missionText1')}
          </p>

          <p className="mt-8 text-xl text-gray-600">
            {t('missionText2')}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10 max-w-xl">
            <Image
              alt={t('imageAlt')}
              src="/cesga/FTIII_azul.webp"
              width={1200}
              height={800}
              priority
              className="block h-auto w-full object-cover"
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
    <li className="flex w-full max-w-[320px] items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Image
        alt={name}
        src={img}
        width={112}
        height={112}
        loading="lazy"
        sizes="(max-width: 640px) 96px, 112px"
        className="size-24 shrink-0 rounded-full border-4 border-[#009AB8] object-cover sm:size-28"
      />

      <div className="min-w-0">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </li>
  );
}

async function Team() {
  const t = await getTranslations('team.team');

  const members = Object.values(
    t.raw('members' as Parameters<typeof t.raw>[0]) as Record<
      string,
      { name: string; description: string; img: string }
    >
  );
  const rows = [3, 4, 3, 4, 3, 2]; //distribucion

  let start = 0;

  const groupedMembers = rows.map((count) => {
    const row = members.slice(start, start + count);
    start += count;
    return row;
  });

  return (
    <Container className="my-24">
      <Subheading as="h3" className="text-center">
        {t('title')}
      </Subheading>

      <hr className="mt-6 border-t border-gray-200" />

      <div className="mt-16 flex flex-col items-center gap-10">
        {groupedMembers.map((row, rowIndex) => (
          <ul
            key={rowIndex}
            role="list"
            className="
              flex w-full flex-wrap justify-center
              gap-x-6 gap-y-6
              lg:flex-nowrap
            "
          >
            {row.map((member, index) => (
              <Person
                key={`${rowIndex}-${index}`}
                name={member.name}
                description={member.description}
                img={`/team/${member.img}`}
              />
            ))}
          </ul>
        ))}
      </div>
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