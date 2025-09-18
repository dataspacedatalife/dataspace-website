import { CheckCircle2, Globe, ShieldCheck, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('how');
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

async function Header() {
  const t = await getTranslations('how.header');
  return (
    <Container className="mt-24">
      <Heading as="h1" className="text-center">
        {t('title')}
      </Heading>
      <Lead className="mt-6 text-center">{t('lead')}</Lead>
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

export default async function How() {
  const t = await getTranslations('how');
  const who = t.raw('who.items') as string[];
  const benefits = t.raw('benefits.items') as string[];
  const commitments = t.raw('commitments.items') as string[];
  const howToJoin = t.raw('howToJoin.items') as string[];

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />

      <Container className="mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Section title={t('who.title')} items={who} icon={Users} />
          <Section
            title={t('benefits.title')}
            items={benefits}
            icon={CheckCircle2}
          />
          <Section
            title={t('commitments.title')}
            items={commitments}
            icon={ShieldCheck}
          />
          <Section
            title={t('howToJoin.title')}
            items={howToJoin}
            icon={CheckCircle2}
          />
        </div>
      </Container>

      <Footer />
    </main>
  );
}
