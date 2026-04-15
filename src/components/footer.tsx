'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import LogoEU from '../../public/logos/ES_Financiado_por_la_Unión_Europea_RGB_POS.png';
import LogoPRTR from '../../public/logos/Logo-PRTR-tres-lineas_COLOR-1536x864.png';
import LogoMinisterio from '../../public/logos/Ministerio-transformacion.jpg';
import LogoCESGA from '../../public/logos/nuevoLogoCesga_mayo2023.png';
import LogoXacobeo from '../../public/logos/Xacobeo.png';
import OneHealthLogo from '../../public/logos/onehealth_logo_white.png';
import { Link } from './link';
import { Barlow_Condensed } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '700'] });

export function Footer() {
  const t = useTranslations('Footer');

  const [cols, setCols] = useState(0);

  useEffect(() => {
    const squareSize = 8;
    const gap = 8;

    function updateCols() {
      const width = window.innerWidth;
      const total = Math.floor(width / (squareSize + gap));
      setCols(total);
    }

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const rows = 8;

  return (
    <footer className="relative">

      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5FCFE] via-[#009AB8] to-[#005596] py-16 sm:py-20 md:py-24 flex flex-col justify-center">

        {/* Cuadrados decorativos */}
        <div className="absolute inset-0 flex flex-col justify-start gap-2 pointer-events-none z-0 opacity-25">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center items-center gap-2">
              {Array.from({ length: cols }).map((_, i) => {
                const baseSize = 8;
                const size = baseSize + Math.floor(Math.random() * 5);

                if (rowIndex === 0 && i % 2 !== 0) {
                  return (
                    <div
                      key={i}
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        flex: '0 0 auto',
                        boxSizing: 'content-box'
                      }}
                    />
                  );
                }

                return (
                  <div
                    key={i}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      flex: '0 0 auto',
                      boxSizing: 'content-box'
                    }}
                    className="bg-[#009ab8]"
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

          <hgroup>
            <p className={`${barlowCondensed.className} mt-6 text-3xl font-medium tracking-tight sm:text-5xl`}>
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
              href="https://www.linkedin.com/in/onehealth-dataspace"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-white text-white transition-all duration-300 hover:bg-white hover:text-[#0A66C2]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z" />
              </svg>
            </Link>

            {/* YouTube */}
            <Link
              href="https://youtube.com/playlist?list=PLvAJrckik_UPT2zDxHGaO5jOd27q1hBIz&si=P_YlpEjT4yKaA092"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-white text-white transition-all duration-300 hover:bg-white hover:text-[#FF0000]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a2.995 2.995 0 0 0-2.115-2.117C19.465 3.5 12 3.5 12 3.5s-7.465 0-9.383.569A2.995 2.995 0 0 0 .502 6.186 31.15 31.15 0 0 0 0 12a31.15 31.15 0 0 0 .502 5.814 2.995 2.995 0 0 0 2.115 2.117C4.535 20.5 12 20.5 12 20.5s7.465 0 9.383-.57a2.995 2.995 0 0 0 2.115-2.117A31.15 31.15 0 0 0 24 12a31.15 31.15 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="w-full bg-white py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center px-4 md:px-8">

          <Image src={LogoEU} alt="Financiado por la Unión Europea" className="object-contain h-10 sm:h-12 md:h-16 w-auto justify-self-center" />

          <Image src={LogoMinisterio} alt="Ministerio para la Transformación Digital y de la Función Pública" className="object-contain h-10 sm:h-12 md:h-16 w-auto justify-self-center" />

          <Image src={LogoPRTR} alt="Plan de Recuperación, Transformación y Resiliencia" className="object-contain h-10 sm:h-12 md:h-16 w-auto justify-self-center" />

          <Image src={LogoCESGA} alt="CESGA" className="object-contain h-10 sm:h-12 md:h-16 w-auto justify-self-center" />
          <div className="col-span-2 sm:col-span-1 flex justify-center">
            <Image
              src={LogoXacobeo}
              alt="Xacobeo"
              className="object-contain h-10 sm:h-12 md:h-16 w-auto"
            />
          </div>

        </div>
      </div>
      {/* Footer inferior */}
      <div className="bg-[#005596] relative w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3">
          <p className="text-center text-xs text-white max-w-3xl">
            {t('funding_note')}
          </p>

          <Image src={OneHealthLogo} alt="One Health" className="h-9 w-auto" />

          <div className="text-sm text-white mt-2">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </div>
        </div>
      </div>

    </footer>
  );
}