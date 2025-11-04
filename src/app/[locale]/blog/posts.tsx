import type { StaticImageData } from 'next/image';
import type { Locale } from 'next-intl';
import DinamicaCRED from '../../../../public/blog/dinamicaEventoInicialCRED.png';
import ArchitectureImg from '../../../../public/logo_completo.jpg';
import MCastineiraImg from '../../../../public/team/mcastineira.jpg';

interface TextNodeBase {
  type: string;
  content?: React.ReactNode;
}

interface HeadingNode extends TextNodeBase {
  type: 'h1' | 'h2';
  content: React.ReactNode;
}

interface BoldNode extends TextNodeBase {
  type: 'bold';
  content: React.ReactNode;
}

interface UnderlineNode extends TextNodeBase {
  type: 'underline';
  content: React.ReactNode;
}

interface LinkNode extends TextNodeBase {
  type: 'link';
  content: string;
  href: string;
  external?: boolean;
}

interface ImageNode extends TextNodeBase {
  type: 'image';
  src: StaticImageData;
  alt: string;
  caption?: string;
}

export type TextNode =
  | HeadingNode
  | BoldNode
  | UnderlineNode
  | LinkNode
  | ImageNode;

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
      key: 'initial-post-2025',
      date: '2025-11-04',
      title:
        'Del dato al impacto: así avanza el Centro Demostrador Multisectorial DATAlife',
      excerpt:
        'En los últimos meses hemos dado pasos firmes para aterrizar los espacios de datos en el ecosistema gallego, conectando necesidades reales con tecnología, gobernanza y buenas prácticas.',
      image: ArchitectureImg,
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        { type: 'h1', content: 'Del dato al impacto' },
        'En los últimos meses hemos dado pasos firmes para aterrizar los espacios de datos en el ecosistema gallego, conectando necesidades reales con tecnología, gobernanza y buenas prácticas. A continuación, te contamos qué hemos hecho, qué hemos aprendido y cómo sumarte a una iniciativa que está cambiando el modo en que compartimos y aprovechamos la información.',
        { type: 'h2', content: '¿Qué hemos hecho?' },
        {
          type: 'bold',
          content: '18 de junio · Presentación pública del Centro Demostrador',
        },
        'Celebramos la presentación oficial del Centro Demostrador multisectorial DATAlife, con foco en cómo un espacio de datos impulsa la investigación y la innovación bajo el paraguas One Health. Hubo ponencias de personas expertas, casos de uso y una llamada clara a la colaboración.',
        'Tras las charlas de la mañana, pudimos disfrutar de una sesión colaborativa en la que participamos tanto el Centro Demostrador como los casos de uso, guiados por asesores del Centro de Referencia de Espacios de Datos (CRED). ¡Una sesión muy productiva!',
        {
          type: 'image',
          src: DinamicaCRED,
          alt: 'Participantes de la dinámica colaborativa',
          caption:
            'Equipo del Centro Demostrador y casos de uso durante la dinámica colaborativa del evento inicial con el CRED',
        },
        {
          type: 'bold',
          content:
            '2 de octubre · Taller técnico con SQS: FarmaciaVAX + D-Spacer',
        },
        'Organizamos un taller práctico donde mostramos, de extremo a extremo, cómo se materializa un espacio de datos en salud con la plataforma D-Spacer (SQS). Exploramos cómo conectarse al espacio de datos, cómo intercambiar información manteniendo la soberanía, así como, operar de forma segura entre organizaciones.',
        {
          type: 'link',
          content:
            '▶️ Grabación: Taller de espacio de datos FarmaciaVAX con la plataforma D-Spacer de SQS',
          href: 'https://www.youtube.com/watch?v=50Ahpz-1VPI',
          external: true,
        },
        {
          type: 'bold',
          content: '31 de octubre · Taller de presentación de XDataShare (MVD)',
        },
        'Más adelante, ese mismo mes, organizamos un segundo taller donde mostramos cómo trabajar en un espacio de datos usando la plataforma XDataShare basada en Eclipse Dataspace Components (EDC) a través de nuestro caso de uso sintético (FarmaciaVAX).',
        'Concretamente, disfrutamos de una introducción a XDataShare en la que se presentó la plataforma de intercambio de datos, sus principios de interoperabilidad y seguridad, los roles implicados y la arquitectura básica: catálogo, control de acceso, trazabilidad y auditoría.',
        'A continuación, se describió el caso de uso FarmaciaVAX,  se introdujo el contexto y objetivos del caso, actores participantes, fuentes de datos, modelo de gobernanza y cumplimiento normativo. Se detalló el flujo de datos de extremo a extremo. Además, se hizo un recorrido guiado por el proceso de alta: registro institucional, verificación de identidad y asignación de roles. ',
        {
          type: 'link',
          content:
            '▶️ Grabación: Taller de espacio de datos FarmaciaVAX con la plataforma XDataShare (MVD)',
          href: 'https://www.youtube.com/watch?v=u7zTyU795n8',
          external: true,
        },
        { type: 'h2', content: 'Nuestro catálogo' },
        'El espacio de datos DATAlife combina interoperabilidad, gobernanza, seguridad y operación sobre infraestructuras de alto rendimiento. En la web encontrarás nuestro catálogo así como información útil sobre nuestro espacio de datos.',
        {
          type: 'link',
          content: '▶️ Consulta el catálogo',
          href: 'https://dataspace.cesga.es/es/catalog',
          external: true,
        },
        { type: 'h2', content: 'Casos de uso actuales' },
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
        { type: 'h2', content: 'Divulgación: por qué lo contamos y cómo' },
        'Desde el equipo del Centro Demostrador hemos puesto en marcha una línea de divulgación para explicar los conceptos clave de los espacios de datos con un enfoque claro, útil y ameno... ¡Mantente atento/a pues próximamente daremos inicio a esta linea!',

        { type: 'h2', content: '¿Y ahora qué?' },
        'Esto es solo el principio. En las próximas semanas publicaremos nuevos materiales, fichas detalladas de casos de uso y fechas de próximas sesiones. ¡Atento/a a nuestras novedades!',
        { type: 'h2', content: 'Cómo participar' },
        'Si quieres explorar la demo o preparar a tu organización para conectarse a un espacio de datos, contáctanos y estate atento/a a nuestra web.',
      ],
    },
  ],
  en: [
    {
      key: 'initial-post-2025',
      date: '2025-11-04',
      title:
        'From Data to Impact: Progress of the DATAlife Multisector Demonstrator Center',
      excerpt:
        'In recent months, we have taken solid steps to bring data spaces closer to the Galician ecosystem, connecting real needs with technology, governance, and best practices.',
      image: ArchitectureImg,
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        { type: 'h1', content: 'From Data to Impact' },
        'In recent months, we have made steady progress in grounding data spaces within the Galician ecosystem, connecting real needs with technology, governance, and good practices. Here, we share what we’ve accomplished, what we’ve learned, and how you can join an initiative that is changing the way we share and make use of information.',
        { type: 'h2', content: 'What Have We Done So Far?' },
        {
          type: 'bold',
          content: 'June 18 · Public Presentation of the Demonstrator Center',
        },
        'We held the official presentation of the Demonstrator Center, focused on how a data space can drive research and innovation under the One Health umbrella. The event included expert talks, use cases, and a strong call for collaboration.',
        'In the afternoon, we enjoyed a collaborative workshop with participation from both the Demonstrator Center and the use case teams, guided by advisors from the Data Spaces Reference Center (CRED). It was a very productive session!',
        {
          type: 'image',
          src: DinamicaCRED,
          alt: 'Participants of the collaborative session',
          caption:
            'Team of the Demonstrator Center and use cases during the collaborative session of the initial event with CRED',
        },
        {
          type: 'bold',
          content:
            'October 2 · Technical Workshop with SQS: FarmaciaVAX + D-Spacer',
        },
        'We organized a hands-on workshop where we demonstrated, end-to-end, how a health data space operates using the D-Spacer platform (SQS). We explored how to connect to a data space, exchange information while preserving sovereignty, and operate securely across organizations.',
        {
          type: 'link',
          content:
            '▶️ Recording: FarmaciaVAX Data Space Workshop with the D-Spacer Platform by SQS',
          href: 'https://www.youtube.com/watch?v=50Ahpz-1VPI',
          external: true,
        },
        {
          type: 'bold',
          content: 'October 31 · Presentation Workshop of XDataShare (MVD)',
        },
        'Later that month, we held a second workshop showcasing how to work within a data space using the XDataShare platform based on Eclipse Dataspace Components (EDC) through our synthetic use case, FarmaciaVAX.',
        'We started with an introduction to XDataShare, presenting the platform’s data exchange model, interoperability and security principles, key roles, and its core architecture: catalog, access control, traceability, and auditing.',
        'Next, we presented the FarmaciaVAX use case, introducing its context and objectives, participating entities, data sources, governance model, and regulatory compliance framework. We also detailed the complete data flow, along with a guided walkthrough of the onboarding process: institutional registration, identity verification, and role assignment.',
        {
          type: 'link',
          content:
            '▶️ Recording: FarmaciaVAX Data Space Workshop with the XDataShare Platform (MVD)',
          href: 'https://www.youtube.com/watch?v=u7zTyU795n8',
          external: true,
        },
        { type: 'h2', content: 'Our Catalog' },
        'The DATAlife data space combines interoperability, governance, security, and operations running on high-performance infrastructures. On our website, you can find our catalog as well as additional information about our data space.',
        {
          type: 'link',
          content: '▶️ Explore the catalog',
          href: 'https://dataspace.cesga.es/en/catalog',
          external: true,
        },
        { type: 'h2', content: 'Current Use Cases' },
        { type: 'bold', content: 'Brilliant' },
        'Sarcopenia observatory using AI applied to lumbar MRI (public repositories) and simulated demographic variables. Provides structured, interoperable datasets for early detection and population analysis, with reusable services aimed at monitoring, assisted diagnosis, and the use of anonymized clinical data. Potential inclusion of external hospital data.',
        { type: 'bold', content: 'CeliaSpace' },
        'Dataset derived from conversations between older adults and the virtual assistant Serenia (app and WhatsApp), focused on companionship and emotional well-being. After anonymization, the data is shared with organizations such as Serenia Solutions S.L. and i4Life (Datiacare) for the development and training of health assessment algorithms.',
        { type: 'bold', content: 'Datiacare' },
        'Platform for home monitoring of elderly individuals using sensors and AI. Analyzes daily activity to detect anomalies and generate alerts. Mixed B2C/B2B/B2G model (families, centers, and administrations). Generates economic, social, scientific, and environmental value, with a strong focus on ethics and privacy (GDPR, DPIA) and a vision aligned with European data nodes.',
        { type: 'bold', content: 'AIDataMed' },
        'Generation of synthetic data in gastroenterology using AI models trained on anonymized and expert-validated clinical, sociodemographic, nutritional, and environmental data. Reduces bias and improves representativeness. Implemented in OMOP CDM, aligned with IDSA/Gaia-X, deployed at CESGA, and following FAIR principles.',
        {
          type: 'bold',
          content: 'GIFT (Gastroenterology Interface with Fair Treatment)',
        },
        'Conversational assistant for gastroenterology and hepatology with scientific evidence and up-to-date references. Supports clinical decision-making and management, accelerating processes and promoting research with high standards of quality and reliability.',
        { type: 'bold', content: 'BiomeXplore' },
        'Interoperable platform for microbiota analysis based on synthetic data (e.g., SEQ2MGS + simulated metadata). Provides repository, APIs, pipelines, AI, visualization, and benchmarking. A reusable, scalable node promoting responsible data sharing and FAIR compliance. Potential inclusion of environmental data.',
        { type: 'bold', content: 'Salusbench' },
        'Hospital process mining platform powered by LLMs. Reconstructs real workflows from anonymized data, generates indicators, and facilitates benchmarking, change simulation, and bottleneck detection. Collaborates with public and private hospitals and applies GDPR and UNE 0087:2025 frameworks. Subscription + services business model; includes potential return mechanisms for data providers.',
        { type: 'h2', content: 'Outreach: Why and How We Share' },
        'The Demonstrator Center team has launched a communication line to explain key concepts of data spaces in a clear, practical, and engaging way... Stay tuned, as we’ll be launching this new outreach series very soon!',
        { type: 'h2', content: 'What’s Next?' },
        'This is just the beginning. In the coming weeks, we’ll be publishing new materials, detailed use case summaries, and dates for upcoming sessions. Stay tuned for updates!',
        { type: 'h2', content: 'How to Participate' },
        'If you’d like to explore the demo or prepare your organization to connect to a data space, get in touch with us and keep an eye on our website.',
      ],
    },
  ],
};
