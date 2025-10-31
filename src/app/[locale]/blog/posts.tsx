import type { StaticImageData } from 'next/image';
import type { Locale } from 'next-intl';
import ArchitectureImg from '../../../../public/logo.svg';
import MCastineiraImg from '../../../../public/team/mcastineira.jpg';

interface TextNode {
  type: 'h1' | 'h2' | 'bold' | 'underline';
  content: React.ReactNode;
}

export interface Post {
  key: string;
  date: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  author_name: string;
  author_image: StaticImageData;
  description: (React.ReactElement | string | TextNode)[];
  cesgalink?: string;
  featured?: boolean;
}

export const blogPosts: Record<Locale, Post[]> = {
  es: [
    {
      key: 'datalife-2025',
      date: '2025-10-31',
      title:
        'Del dato al impacto: así avanza el Centro Demostrador Multisectorial DATAlife',
      excerpt:
        'En los últimos meses hemos dado pasos firmes para aterrizar los espacios de datos en el ecosistema gallego, conectando necesidades reales con tecnología, gobernanza y buenas prácticas.',
      image: ArchitectureImg,
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        { type: 'h1', content: 'Del dato al impacto' },
        'En los últimos meses hemos dado pasos firmes para aterrizar los espacios de datos en el ecosistema gallego, conectando necesidades reales con tecnología, gobernanza y buenas prácticas. A continuación te contamos qué hemos hecho, qué hemos aprendido y cómo sumarte a una iniciativa que está cambiando el modo en que compartimos y aprovechamos la información.',
        { type: 'h2', content: '¿Qué hemos hecho?' },
        {
          type: 'bold',
          content: '18 de junio · Presentación pública del demostrador',
        },
        'Celebramos la presentación oficial del demostrador multisectorial DATAlife, con foco en cómo un espacio de datos impulsa la investigación y la innovación bajo el paraguas One Health. Hubo ponencias de personas expertas, casos de uso y una llamada clara a la colaboración.',
        {
          type: 'bold',
          content:
            '2 de octubre · Taller técnico con SQS: FarmaciaVAX + D-Spacer',
        },
        'Organizamos un taller práctico donde mostramos, de extremo a extremo, cómo se materializa un espacio de datos en salud con D-Spacer (SQS): conexión al espacio, intercambio soberano de datos y operación segura entre organizaciones.',
        {
          type: 'underline',
          content:
            '▶️ Grabación: Taller de espacio de datos FarmaciaVAX con la plataforma D-Spacer de SQS',
        },
        {
          type: 'bold',
          content:
            '31 de octubre · Taller de presentación de XDATAshared (MVD)',
        },
        'To be completed',
        { type: 'h2', content: 'Nuestra arquitectura (en una mirada)' },
        'El espacio de datos DATAlife combina interoperabilidad, gobernanza, seguridad y operación sobre infraestructuras de alto rendimiento. En la web encontrarás un esquema actualizado de la arquitectura y los roles de participación. (Si lo deseas, incluimos aquí una infografía breve en la versión HTML).',
        'To be completed con el contenido de XDatashare',
        { type: 'h2', content: 'Casos de uso (en curso)' },
        { type: 'bold', content: 'Brilliant' },
        'Observatorio de sarcopenia con IA aplicada a RM lumbar (repositorios públicos) y variables demográficas simuladas. Entrega datasets estructurados e interoperables para detección precoz y análisis poblacional, con servicios reutilizables orientados a monitorización, diagnóstico asistido y explotación de datos clínicos anonimizados. Posible uso de datos hospitalarios externos.',
        { type: 'bold', content: 'CeliaSpace' },
        'Conjunto de datos procedentes de conversaciones entre personas mayores y la asistente virtual Serenia (app y WhatsApp), enfocado en acompañamiento y bienestar emocional. Tras anonimización, se comparte con entidades como Serenia Solutions S.L. e i4Life (Datiacare) para desarrollo y entrenamiento de algoritmos de evaluación de salud.',
        { type: 'bold', content: 'Datiacare' },
        'Plataforma para seguimiento domiciliario de personas mayores mediante sensores + IA. Analiza actividad cotidiana para detectar anomalías y generar alertas. Modelo mixto B2C/B2B/B2G (familias, centros y administraciones). Aporta valor económico, social, científico y ambiental, con fuerte enfoque en ética y privacidad (RGPD, DPIA) y visión de integración en nodos europeos.',
        { type: 'bold', content: 'AIDataMed' },
        'Generación de datos sintéticos en gastroenterología con modelos de IA entrenados sobre información clínica, sociodemográfica, nutricional y ambiental anonimizada y validada por expertos. Corrige sesgos y mejora representatividad. Implementación en OMOP CDM, alineada con IDSA/Gaia-X, desplegada en CESGA y bajo principios FAIR.',
        {
          type: 'bold',
          content: 'GIFT (Gastroenterology Interface with Fair Treatment)',
        },
        'Asistente conversacional para gastroenterología y hepatología con evidencia científica y referencias actualizadas. Apoya la toma de decisiones clínicas y la gestión, acelerando trámites y fomentando la investigación con altos estándares de calidad y fiabilidad.',
        { type: 'bold', content: 'BiomeXplore' },
        'Plataforma interoperable para análisis de microbiota a partir de datos sintéticos (p. ej., SEQ2MGS + metadatos simulados). Ofrece repositorio, APIs, pipelines, IA, visualización y benchmarking. Nodo reutilizable y escalable que promueve compartición responsable y cumplimiento FAIR. Posible integración de datos ambientales.',
        { type: 'bold', content: 'Salusbench' },
        'Plataforma de minería de procesos hospitalarios con apoyo de LLMs. Reconstruye flujos reales a partir de datos anonimizados, genera indicadores y facilita benchmarking, simulación de cambios y detección de cuellos de botella. Colabora con hospitales (públicos/privados) y aplica marcos RGPD y UNE 0087:2025. Modelo de negocio por suscripción + servicios; prevé mecanismos de retorno para proveedores de datos.',
        { type: 'h2', content: 'Divulgación: por qué lo contamos (y cómo)' },
        'Desde el equipo del Centro Demostrador (https://dataspace.cesga.es/es/team) hemos puesto en marcha una línea de divulgación para explicar los conceptos clave de los espacios de datos con un enfoque claro, útil y ameno. Tras varias sesiones internas, lanzamos el taller con SQS que mostró paso a paso la conexión, el intercambio soberano y la operación entre organizaciones.',
        {
          type: 'underline',
          content:
            '▶️ Si no pudiste asistir, aquí tienes la grabación: Taller de espacio de datos FarmaciaVAX con la plataforma D-Spacer de SQS',
        },
        { type: 'h2', content: '¿Y ahora qué?' },
        'Esto es solo el principio. En las próximas semanas publicaremos nuevos materiales, fichas detalladas de casos de uso y fechas de próximas sesiones. ¡Atento/a a nuestras novedades!',
        { type: 'h2', content: 'Cómo participar' },
        'Si quieres explorar un piloto o preparar a tu organización para conectarse a un espacio de datos, contáctanos:',
        '🌐 dataspace.cesga.es → sección Participa',
        '✉️ Equipo del demostrador: dmd@cesga.es (respuesta rápida)',
        'Si eres pyme, administración o centro del ecosistema, existen líneas estatales como el Kit Espacios de Datos / CRED que ayudan a financiar la preparación y conexión. Te orientamos en el proceso.',
      ],
    },
  ],
  en: [
    {
      key: 'datalife-2025',
      date: '2025-10-31',
      title:
        'From Data to Impact: How the DATAlife Multisector Demonstrator Center is Advancing',
      excerpt:
        'From Data to Impact: How the DATAlife Multisector Demonstrator Center is Advancing',
      image: ArchitectureImg,
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        { type: 'h1', content: 'From Data to Impact' },
        'To be translated',
      ],
    },
  ],
};
