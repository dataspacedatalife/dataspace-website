'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { clsx } from 'clsx';
import { PlusGrid, PlusGridRow } from '@/components/plus-grid';
import LogoEU from '../../public/logos/ES_Financiado_por_la_Unión_Europea_RGB_POS.png';
import LogoPRTR from '../../public/logos/Logo-PRTR-tres-lineas_COLOR-1536x864.png';
import LogoMinisterio from '../../public/logos/Logotipo_del_Ministerio_para_la_Transformación_Digital_y_de_la_Función_Pública-cropped.svg';
import LogoCESGA from '../../public/logos/nuevoLogoCesga_mayo2023.png';
import OneHealthLogo from '../../public/logos/onehealth_logo_white.png';
import { Container } from './container';
import { Link } from './link';
import { Subheading } from './text';

export function Gradient({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(className, 'bg-linear-to-b from-[#199AB6] to-[#005596]')}
    />
  );
}

export default function Linkedin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
        fill="#343C54"
      />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations('Footer');

  function CallToAction() {
    return (
      <div className="relative pt-20 pb-16 text-center sm:py-24 text-white">
        <hgroup>
          <Subheading>{t('contact_title')}</Subheading>
          <p className="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">
            {t('contact_subtitle')}
          </p>
        </hgroup>
        <p className="mx-auto mt-6 max-w-xs text-sm/6">
          {t('contact_text')}{' '}
          <Link href={`mailto:${t('email')}`} className="underline text-white">
            {t('email')}
          </Link>
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="https://www.linkedin.com/in/centro-demostrador-de-espacio-de-datos-multisectorial-one-health-8a4a2838a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-800 px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors text-white"
          >
            {Linkedin()} {t('social_linkedin')}
          </Link>
        </div>
      </div>
    );
  }

  function Logos() {
    return (
      <div className="w-full bg-white py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center w-full px-4 md:px-8">
          <Image src={LogoEU} alt="Financiado por la Unión Europea" className="object-contain" height={80} />
          <Image src={LogoMinisterio} alt="Ministerio para la Transformación Digital y de la Función Pública" className="object-contain" height={80} />
          <Image src={LogoPRTR} alt="Plan de Recuperación, Transformación y Resiliencia" className="object-contain" height={80} />
          <Image src={LogoCESGA} alt="CESGA" className="object-contain" height={80} />
        </div>
      </div>
    );
  }

  function Copyright() {
    return (
      <div className="text-lg/6 text-white">&copy; {new Date().getFullYear()} {t('copyright')}</div>
    );
  }

  return (
    <footer>
      {/* Gradiente principal */}
      <div className="bg-linear-to-b from-[#199AB6] to-[#005596] relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Call to action */}
          <div className="relative pt-20 pb-16 text-center sm:py-24 text-white">
            <hgroup>
              <p className="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">
                {t('contact_subtitle')}
              </p>
            </hgroup>
            <p className="mx-auto mt-6 max-w-xs text-sm/6">
              {t('contact_text')}{' '}
              <Link href={`mailto:${t('email')}`} className="underline text-white">
                {t('email')}
              </Link>
            </p>
            <div className="mt-8 flex justify-center gap-4">
  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/in/centro-demostrador-de-espacio-de-datos-multisectorial-one-health-8a4a2838a/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center w-10 h-10 rounded-full border border-white text-white transition-colors hover:bg-white hover:text-[#0A66C2]"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
      />
    </svg>
  </Link>

  {/* YouTube */}
  <Link
    href="https://youtube.com/playlist?list=PLvAJrckik_UPT2zDxHGaO5jOd27q1hBIz&si=P_YlpEjT4yKaA092"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center w-10 h-10 rounded-full border border-white text-white transition-colors hover:bg-white hover:text-[#FF0000]"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a2.995 2.995 0 0 0-2.115-2.117C19.465 3.5 12 3.5 12 3.5s-7.465 0-9.383.569A2.995 2.995 0 0 0 .502 6.186 31.15 31.15 0 0 0 0 12a31.15 31.15 0 0 0 .502 5.814 2.995 2.995 0 0 0 2.115 2.117C4.535 20.5 12 20.5 12 20.5s7.465 0 9.383-.569a2.995 2.995 0 0 0 2.115-2.117A31.15 31.15 0 0 0 24 12a31.15 31.15 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  </Link>
</div>
          </div>
        </div>
      </div>

      {/* Logos de financiación sobre fondo blanco */}
      <div className="w-full bg-white py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center w-full px-4 md:px-8">
          <Image src={LogoEU} alt="Financiado por la Unión Europea" className="object-contain h-20 w-auto" />
          <Image src={LogoMinisterio} alt="Ministerio para la Transformación Digital y de la Función Pública" className="object-contain h-20 w-auto" />
          <Image src={LogoPRTR} alt="Plan de Recuperación, Transformación y Resiliencia" className="object-contain h-20 w-auto" />
          <Image src={LogoCESGA} alt="CESGA" className="object-contain h-20 w-auto" />
        </div>
      </div>

      {/* OneHealth logo + copyright + funding note sobre azul sólido */}
      <div className="bg-[#005596] relative w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2">
          <p className="mb-5 text-center text-xs text-white">
            {t('funding_note')}
          </p>
          <Image src={OneHealthLogo} alt="One Health" className="h-9 w-auto" />
          <div className="text-lg/6 text-white mt-2">&copy; {new Date().getFullYear()} {t('copyright')}</div>

        </div>
      </div>
    </footer>
  );
}