import { type StaticImageData } from 'next/image';
import LogoAgrolinera from '../../../../public/use-cases/agrolinera.png';
import LogoAIDATAMED from '../../../../public/use-cases/aidatamed.png';
import LogoBioHPC from '../../../../public/use-cases/biohpc.png';
import LogoCESGA from '../../../../public/use-cases/cesga.png';
import LogoClimatocLab from '../../../../public/use-cases/climatoclab.png';
import LogoCognitus from '../../../../public/use-cases/cognitus.png';
import LogoConsuvet from '../../../../public/use-cases/consuvet.png';
import LogoDatiacare from '../../../../public/use-cases/datiacare.png';
import LogoDeLaFuenteLab from '../../../../public/use-cases/delafuentelab.png';
import LogoGeneCoLab from '../../../../public/use-cases/genecolab.png';
import LogoGrHeCo from '../../../../public/use-cases/grheco.png';
import LogoIISGS from '../../../../public/use-cases/IISGS.png';
import LogoInverbis from '../../../../public/use-cases/Inverbis.png';
import Logoi4life from '../../../../public/use-cases/i4life.png';
import LogoICIGA from '../../../../public/use-cases/iciga.png';
import LogoIIM from '../../../../public/use-cases/iim.png';
import LogoImatia from '../../../../public/use-cases/imatia.png';
import LogoInsati from '../../../../public/use-cases/insati.png';
import LogoCiTIUS from '../../../../public/use-cases/Logotipo_Citius.png';
import LogoCiMUS from '../../../../public/use-cases/logoCIMUS.png';
import LogoEPhysLab from '../../../../public/use-cases/logoEphyslab.png';
import LogoMasMetodo from '../../../../public/use-cases/masmetodo.png';
import LogoMDUSE from '../../../../public/use-cases/mduse.png';
import LogoMercantia from '../../../../public/use-cases/mercantia.png';
import LogoMeteogalicia from '../../../../public/use-cases/meteogalicia.png';
import LogoMicroBioTool from '../../../../public/use-cases/microbiotool.png';
import LogoNextHealth from '../../../../public/use-cases/nexthealth.webp';
import LogoOTTO from '../../../../public/use-cases/otto.png';
import LogoSimbios from '../../../../public/use-cases/simbios.png';
import LogoTopHealthTech from '../../../../public/use-cases/tophealthtech.png';
import LogoTrueWorld from '../../../../public/use-cases/trueworld.png';
import LogoUSC from '../../../../public/use-cases/usc.png';
import LogoUvigo from '../../../../public/use-cases/uvigo.png';
import LogoWirelessGalicia from '../../../../public/use-cases/wireless_galicia.png';

const LogoDepoOurense = '/use-cases/depoourense.svg';
const LogoGift = '/use-cases/logo-gift.svg';
const LogoIntecmar = '/use-cases/intecmar.png';

export type HealthCategory = 'human' | 'animal' | 'environmental';

export const useCasesData = [
  {
    id: 'aidatamed_synthetic_patients',
    imagen: LogoAIDATAMED,
    link: 'https://www.idara.health/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'biomexplore',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'brilliant',
    imagen: LogoIISGS,
    link: 'https://www.iisgaliciasur.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'celiaspace',
    imagen: LogoUvigo,
    link: 'https://atlanttic.uvigo.es/es',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'datiacare',
    imagen: LogoDatiacare,
    link: 'https://www.i4life.es/en/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'gift_conversations',
    imagen: LogoGift,
    link: 'https://www.idara.health/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'salusbench',
    imagen: LogoInverbis,
    link: 'https://web.inverbisanalytics.com/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'farmaciavax',
    imagen: LogoCESGA,
    link: 'https://www.cesga.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'agentes_contraste_rmi',
    imagen: LogoUSC,
    link: 'https://investigacion.usc.gal/grupos/4612/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'anemoi_ai_downscaling_canarias',
    imagen: LogoCESGA,
    link: 'https://www.cesga.es/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'base_climatologica_eventos_hidrologicos_extremos',
    imagen: LogoEPhysLab,
    link: 'https://ephyslab.uvigo.es/en/home/',
    categories: ['human', 'environmental'] as HealthCategory[],
  },
  {
    id: 'bio_hpc_from_billions_to_leads',
    imagen: LogoBioHPC,
    link: 'https://bio-hpc.eu/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'ccmm_ieo',
    imagen: LogoIIM,
    link: 'https://www.ieo.es/en/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'ieo_carabelas_drift_risk',
    imagen: LogoIIM,
    link: 'https://carabelas.dataspace.cesga.es/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'cd_ligand_ml',
    imagen: LogoMDUSE,
    link: 'https://mduse.com/en/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'climaticseriesai',
    imagen: LogoClimatocLab,
    link: 'https://climatoclab.csic.es/en/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'compound_drought_heat_lattin',
    imagen: LogoEPhysLab,
    link: 'https://ephyslab.uvigo.es/en/home/',
    categories: ['human', 'environmental'] as HealthCategory[],
  },
  {
    id: 'dl_meteodownscaling',
    imagen: LogoClimatocLab,
    link: 'https://climatoclab.csic.es/en/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'gene_regulatory_control_mpnst',
    imagen: LogoGeneCoLab,
    link: 'https://cimus.usc.gal/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'grheco_medical_foundation_models',
    imagen: LogoGrHeCo,
    link: 'https://www.idisantiago.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'grheco_egfr_virtual_screening',
    imagen: LogoGrHeCo,
    link: 'https://www.idisantiago.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'grheco_stardist_gpu',
    imagen: LogoGrHeCo,
    link: 'https://www.idisantiago.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'heat_stress_lattin',
    imagen: LogoEPhysLab,
    link: 'https://ephyslab.uvigo.es/en/home/',
    categories: ['human', 'environmental'] as HealthCategory[],
  },
  {
    id: 'meteogalicia',
    imagen: LogoMeteogalicia,
    link: 'https://www.meteogalicia.gal/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'microbioma_16s_citius',
    imagen: LogoCiTIUS,
    link: 'https://citius.gal/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'multimodal_protein_llm',
    imagen: LogoDeLaFuenteLab,
    link: 'https://www.med.upenn.edu/delafuentelab/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'olamur',
    imagen: LogoCESGA,
    link: 'https://www.cesga.es/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'peptide_binder_design',
    imagen: LogoDeLaFuenteLab,
    link: 'https://www.med.upenn.edu/delafuentelab/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'evo2_viral_genomes',
    imagen: LogoDeLaFuenteLab,
    link: 'https://www.med.upenn.edu/delafuentelab/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'pounds',
    imagen: LogoCESGA,
    link: 'https://www.cesga.es/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'simbios_amp_membrana',
    imagen: LogoSimbios,
    link: 'https://www.usc.es/ciqus/en/groups/granja-montenegro-garcia-fandino',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'wrf_brisasmarinas',
    imagen: LogoClimatocLab,
    link: 'https://climatoclab.csic.es/en/',
    categories: ['human', 'environmental'] as HealthCategory[],
  },
  {
    id: 'aid_g',
    imagen: LogoCognitus,
    link: 'https://metodocognitus.aaccentia.com/en/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'ccvet',
    imagen: LogoConsuvet,
    link: 'https://www.consuvet.com/',
    categories: ['human', 'animal', 'environmental'] as HealthCategory[],
  },
  {
    id: 'databench',
    imagen: LogoImatia,
    link: 'https://www.imatia.com/',
    categories: ['human', 'animal', 'environmental'] as HealthCategory[],
  },
  {
    id: 'depourense',
    imagen: LogoDepoOurense,
    link: 'https://www.depourense.gal/es',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'insati_vaira',
    imagen: LogoInsati,
    link: 'https://www.insati.com/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'masmetodo',
    imagen: LogoMasMetodo,
    link: 'https://www.masmetodo.com/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'matlabid',
    imagen: LogoICIGA,
    link: 'https://iciga.com/',
    categories: ['human', 'animal', 'environmental'] as HealthCategory[],
  },
  {
    id: 'microbiotooldb',
    imagen: LogoMercantia,
    link: 'https://mercantia.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'nexthealth',
    imagen: LogoNextHealth,
    link: 'https://nexthealth.es/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'otto_365',
    imagen: LogoOTTO,
    link: 'https://otto365.com/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'tophealthtech',
    imagen: LogoTopHealthTech,
    link: 'https://www.tophealthtech.ai/',
    categories: ['human'] as HealthCategory[],
  },
  {
    id: 'two',
    imagen: LogoTrueWorld,
    link: 'https://www.trueworldorganization.com/en',
    categories: ['human', 'environmental'] as HealthCategory[],
  },
  {
    id: 'wheydata',
    imagen: LogoAgrolinera,
    link: 'https://agrolinera.com/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'wirelessgalicia_coviled',
    imagen: LogoWirelessGalicia,
    link: 'https://www.wirelessgalicia.com/',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'woah_disease',
    imagen: LogoConsuvet,
    link: 'https://www.consuvet.com/',
    categories: ['human', 'animal', 'environmental'] as HealthCategory[],
  },
  {
    id: 'intecmar_radar_hf',
    imagen: LogoIntecmar,
    link: 'https://xeocatalogo.xunta.gal/xeocatalogo/srv/api/records/GLG_INTECMAR_RADARHF_2011',
    categories: ['environmental'] as HealthCategory[],
  },
  {
    id: 'intecmar_upwelling_index',
    imagen: LogoIntecmar,
    link: 'https://www.intecmar.gal/',
    categories: ['environmental'] as HealthCategory[],
  },
] as const satisfies {
  readonly id: string;
  readonly imagen: StaticImageData | string;
  readonly link: string;
  readonly categories: readonly HealthCategory[];
}[];
