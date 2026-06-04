import LogoIISGS from '../../../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../../../public/use-cases/i4life.png';
import LogoUvigo from '../../../../../public/use-cases/uvigo.png';

export const datasets = [
  {
    id: 'aidatamed_synthetic_patients',
    useCaseId: 'aidamed',
    imagen: LogoIISGS,
    email: 'aidatamed@iisgaliciasur.es',
  },
  {
    id: 'biomexplore',
    useCaseId: 'biomexplore',
    imagen: LogoIISGS,
    email: 'sonia.perez.castro@sergas.es',
  },
  {
    id: 'brilliant',
    useCaseId: 'brilliant',
    imagen: LogoIISGS,
    email: 'cesar.veiga@iisgaliciasur.es',
  },
  {
    id: 'celiaspace',
    useCaseId: 'celiaspace',
    imagen: LogoUvigo,
    email: 'javier@det.uvigo.es',
  },
  {
    id: 'datiacare',
    useCaseId: 'datiacare',
    imagen: Logoi4life,
    email: 'info@i4life.es',
  },
  {
    id: 'gift_conversations',
    useCaseId: 'gift',
    imagen: LogoIISGS,
    email: 'gift@iisgaliciasur.es',
  },
  {
    id: 'salusbench',
    useCaseId: 'salusbench',
    imagen: LogoInverbis,
    email: 'salusbench@inverbisanalytics.com',
  },
] as const;