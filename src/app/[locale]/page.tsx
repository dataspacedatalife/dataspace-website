import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/navbar';
import { GradientBackground } from '@/components/gradient';
import { OneHealthLanding } from './home-content';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home.metadata');

  return {
    title: 'OneHealth DataSpace',
    description: t('description'),
  };
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <GradientBackground />

      <div className="max-w-7xl mx-auto w-full ">
        <Navbar />
      </div>

      <OneHealthLanding />
    </div>
  );
}