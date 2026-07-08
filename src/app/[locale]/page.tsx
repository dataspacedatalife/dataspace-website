import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { GradientBackground } from '@/components/gradient';
import { OneHealthLanding } from './home-content';

export const metadata: Metadata = {
  title: 'OneHealth DataSpace',
  description: 'OneHealth DataSpace',
};

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