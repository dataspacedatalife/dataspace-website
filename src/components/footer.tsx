'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PlusGrid, PlusGridRow } from '@/components/plus-grid';
import LogoEU from '../../public/logos/ES_Financiado_por_la_Unión_Europea_RGB_POS.png';
import LogoPRTR from '../../public/logos/Logo-PRTR-tres-lineas_COLOR-1536x864.png';
import LogoMinisterio from '../../public/logos/Logotipo_del_Ministerio_para_la_Transformación_Digital_y_de_la_Función_Pública-cropped.svg';
import LogoCESGA from '../../public/logos/nuevoLogoCesga_mayo2023.png';
import { Container } from './container';
import { Gradient } from './gradient';
import { Link } from './link';
import { Logo } from './logo';
import { Subheading } from './text';

export default function Linkedin() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0 0 0)"
    >
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
      <div className="relative pt-20 pb-16 text-center sm:py-24">
        <hgroup>
          <Subheading>{t('contact_title')}</Subheading>
          <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
            {t('contact_subtitle')}
          </p>
        </hgroup>
        <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-700">
          {t('contact_text')}{' '}
          <Link href={`mailto:${t('email')}`}>{t('email')}</Link>
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="https://www.linkedin.com/in/centro-demostrador-de-espacio-de-datos-multisectorial-one-health-8a4a2838a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-800 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            {Linkedin()} {t('social_linkedin')}
          </Link>
        </div>
      </div>
    );
  }

  function SocialLinks() {
    return (
      <div className="flex justify-center gap-4 mt-6">
        <Link
          href="https://facebook.com"
          target="_blank"
          aria-label={t('social_facebook')}
          className="text-gray-950 data-hover:text-gray-950/75"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
            />
          </svg>
        </Link>
        <Link
          href="https://x.com"
          target="_blank"
          aria-label={t('social_x')}
          className="text-gray-950 data-hover:text-gray-950/75"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
          </svg>
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          aria-label={t('social_linkedin')}
          className="text-gray-950 data-hover:text-gray-950/75"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
          </svg>
        </Link>
      </div>
    );
  }

  function Copyright() {
    return (
      <div className="text-lg/6 text-gray-950">
        &copy; {new Date().getFullYear()} {t('copyright')}
      </div>
    );
  }

  function Logos() {
    return (
      <div className="my-10 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-5xl mx-auto">
          <Image
            src={LogoEU}
            alt="Financiado por la Unión Europea"
            className="object-contain"
            height={80}
          />
          <Image
            src={LogoMinisterio}
            alt="Ministerio para la Transformación Digital y de la Función Pública"
            className="object-contain"
            height={80}
          />
          <Image
            src={LogoPRTR}
            alt="Plan de Recuperación, Transformación y Resiliencia"
            className="object-contain"
            height={80}
          />
          <Image
            src={LogoCESGA}
            alt="CESGA"
            className="object-contain"
            height={80}
          />
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-xs text-gray-700 ">
          {t('funding_note')}
        </p>
      </div>
    );
  }

  return (
    <footer>
      <Gradient className="relative rounded-4xl overflow-hidden m-4">
        <div className="absolute bg-white/50 inset-0" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-3 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-3 lg:col-span-6 flex justify-center items-center gap-2">
                  <Logo className="h-9" />
                  <Copyright />
                </div>
              </div>
            </PlusGridRow>
            <div className="isolate">
              <Logos />
            </div>
            {/* <div className="flex justify-center mt-4">
              <SocialLinks />
            </div> */}
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  );
}
