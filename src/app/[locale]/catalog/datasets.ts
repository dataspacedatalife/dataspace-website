import LogoIISGS from '../../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../../public/use-cases/i4life.png';
import LogoUvigo from '../../../../public/use-cases/uvigo.png';
import { type StaticImageData } from 'next/image';

export const useCasesData = [
  {
    id: 'aidatamed_synthetic_patients',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'aidatamed@iisgaliciasur.es',
  },
  {
    id: 'biomexplore',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'sonia.perez.castro@sergas.es',
  },
  {
    id: 'brilliant',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'cesar.veiga@iisgaliciasur.es',
  },
  {
    id: 'celiaspace',
    imagen: LogoUvigo,
    link: 'https://www.uvigo.gal/',
    email: 'javier@det.uvigo.es',
  },
  {
    id: 'datiacare',
    imagen: Logoi4life,
    link: 'https://i4life.es/',
    email: 'info@i4life.es',
  },
  {
    id: 'gift_conversations',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    email: 'gift@iisgaliciasur.es',
  },
  {
    id: 'salusbench',
    imagen: LogoInverbis,
    link: 'https://web.inverbisanalytics.com/',
    email: 'salusbench@inverbisanalytics.com',
  },
] as const satisfies {
  id: string;
  imagen: StaticImageData;
  link: string;
  email: string;
}[];