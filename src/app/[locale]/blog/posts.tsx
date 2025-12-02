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
  type: 'h1' | 'h2' | 'h3';
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
  image?: StaticImageData;
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
      date: '2025-11-05',
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
          href: '/catalog',
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
    {
      key: 'dataspace-glossary-2025',
      date: '2025-11-18',
      title: 'Espacio de datos: 12 definiciones que te ahorran reuniones 🚀',
      excerpt:
        'Si estás montando o conectándote a un espacio de datos, alinear vocabulario desde el principio evita fricciones. Aquí tienes un glosario esencial 📘.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        // {
        //   type: 'h1',
        //   content:
        //     'Espacio de datos: 12 definiciones que te ahorran reuniones 🚀',
        // },
        { type: 'h1', content: 'Glosario esencial' },

        'Si estás montando o conectándote a un espacio de datos, alinear vocabulario desde el principio evita fricciones y acelera decisiones. Aquí tienes un glosario esencial 📘:',

        { type: 'bold', content: '1) Espacio de datos' },
        'Ecosistema donde distintas organizaciones comparten y usan datos bajo reglas comunes de gobernanza, seguridad, interoperabilidad y confianza verificable (acuerdos, auditorías, trazabilidad).',

        { type: 'bold', content: '2) Caso de uso' },
        'Iniciativa liderada por una o más entidades que utiliza el espacio de datos para resolver un reto concreto mediante el uso de datos compartidos. Ejemplos: vigilancia epidemiológica, optimización de rutas logísticas, evaluación de resultados en salud.',

        { type: 'bold', content: '3) Producto de datos' },
        'Según UNE 0087:2025, un producto es una “unidad que incluye datos más metadatos, políticas, servicios y elementos de soporte”. En la práctica: una capa de valor sobre un conjunto de datos del espacio para que el consumo sea controlado, documentado y útil. Ejemplo: un portal de benchmarking hospitalario que expone indicadores normalizados y actualizados.',

        { type: 'bold', content: '4) Catálogo de datos' },
        'Inventario navegable con datos, productos y/o servicios de datos con metadatos estandarizados (quién, qué, periodicidad, calidad, licencias, coste y cómo acceder).',

        { type: 'bold', content: '5) Proveedor de datos' },
        'Participante que pone a disposición datos, productos y/o servicios. Si los datos son generados por él mismo, asume además el rol de productor (responsable del origen y la calidad).',

        { type: 'bold', content: '6) Consumidor de datos' },
        'Participante que utiliza datos, productos y/o servicios con un propósito declarado y bajo contrato/políticas. Puede ser una entidad, una persona o dispositivos.',

        { type: 'bold', content: '7) Conector' },
        'Componente técnico que habilita la interoperabilidad y el intercambio seguro. Próximamente habrá disponible una guía práctica para elegir y desplegar conectores.',

        { type: 'bold', content: '8) Gobernanza' },
        'Implementación práctica del gobierno del dato en el espacio: roles, normas y procesos (gestión de accesos, resolución de incidencias, métricas, auditorías y mejora continua).',

        { type: 'bold', content: '9) Políticas de acceso y uso' },
        'Condiciones legibles por personas y máquinas que rigen el uso de datos: propósito, minimización, retención, redistribución, anonimización/pseudonimización, seguridad y cumplimiento normativo.',

        { type: 'bold', content: '10) Interoperabilidad semántica' },
        'El “diccionario común” que asegura que términos como “paciente”, “centro” o “fecha” signifiquen lo mismo entre organizaciones: ontologías, vocabularios, esquemas y mappings. La interoperabilidad es un tema amplio que trataremos en detalle en un próximo artículo.',

        {
          type: 'bold',
          content: '11) Trazabilidad y registro de consentimientos',
        },
        'Evidencias de quién accedió a qué, cuándo, para qué y con qué base legal/consentimiento; incluye logs verificables, versiones y mecanismos de rendición de cuentas.',

        { type: 'bold', content: '12) Contrato de adhesión' },
        'Marco legal que define responsabilidades, garantías, sanciones, propiedad intelectual, seguridad, política de salida (offboarding) y continuidad operativa.',

        {
          type: 'h2',
          content: 'Consejos prácticos (para empezar con buen pie)',
        },
        '• Caso de uso primero: objetivo, métricas y valor esperado.',
        '• Producto de datos mínimo viable: qué expones, a quién y cómo.',
        '• Políticas y roles antes que tecnología: después alinea conectores, catálogos y APIs con esas decisiones.',
      ],
      featured: false,
    },
    {
      key: 'mvd-access-2025',
      date: '2025-12-02',
      title: 'Acceso al MVD de nuestro Espacio de Datos',
      excerpt:
        '¡Segundo gran hito! El MVD ya está operativo para nuestro Espacio de Datos en One Health.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        {
          type: 'bold',
          content:
            '¡Segundo gran hito! El MVD ya está operativo para nuestro Espacio de Datos en One Health.',
        },

        'Esta versión inicial permite validar de extremo a extremo los flujos de intercambio seguro de datos, probar los servicios comunes y ejercitar los primeros casos de uso piloto con datos en entorno de pruebas y, donde procede, con datos reales debidamente protegidos.',

        { type: 'h2', content: '¿Qué es el MVD?' },
        'El MVD (Minimum Viable Dataspace) es la primera versión operativa del Espacio de Datos que reúne el conjunto mínimo de capacidades necesarias para poner en marcha la federación: identidad y acceso, descubrimiento de datos, gobernanza básica, trazabilidad y conectividad entre proveedores y consumidores. Sirve para aprender rápido, medir impacto y ajustar el diseño antes del escalado.',

        { type: 'h2', content: 'Qué incluye esta fase (capas y servicios)' },
        '• Gestión de identidad y acceso federado: autenticación, autorización por políticas y roles.',
        '• Acuerdos y gobernanza: políticas de uso.',
        '• Conectores EDC.',
        '• Soporte a casos de uso piloto, según demanda.',

        { type: 'h2', content: 'Cómo adherirte' },
        'Sigue nuestro proceso de adhesión con los siguientes pasos:',

        { type: 'h3', content: 'Fase de solicitud y adhesión' },

        { type: 'bold', content: '1️⃣ Infórmate' },
        'Descarga la Guía del Participante para conocer en detalle cómo funciona el Espacio de Datos, los requisitos técnicos y legales, y los beneficios de unirte. Te acompañamos en cada paso.',

        { type: 'bold', content: '2️⃣ Solicita tu adhesión' },
        'Rellena el formulario de muestra de interés y nuestro equipo revisará tu solicitud y te contactará para los siguientes pasos.',

        { type: 'h3', content: 'Fase de integración en el Espacio de Datos' },

        { type: 'bold', content: '3️⃣ Integración técnica' },
        'Conecta tus sistemas y prepara tus datos según las políticas de interoperabilidad, calidad y seguridad del Espacio de Datos. Estaremos a tu lado durante todo el proceso.',

        { type: 'bold', content: '4️⃣ Participa y crece' },
        'Una vez formes parte del Espacio, podrás intercambiar datos, participar en casos de uso y colaborar con otros participantes del ecosistema. Seguiremos acompañándote en cada etapa.',

        { type: 'h2', content: 'Recursos útiles' },
        {
          type: 'link',
          content: '▶️ Proceso de adhesión',
          href: 'https://dataspace.cesga.es/es/how',
          external: false,
        },
        {
          type: 'link',
          content: '▶️ Portal del MVD',
          href: 'https://xdatashare.srv.cesga.es/portal',
          external: true,
        },
        {
          type: 'link',
          content: '▶️ Tutorial guiado del MVD (Taller FarmaciaVAX)',
          href: 'https://www.youtube.com/watch?v=u7zTyU795n8',
          external: true,
        },
        {
          type: 'link',
          content: '▶️ Taller de espacio de datos sobre Conectores EDC',
          href: 'https://www.youtube.com/watch?v=WGBCGCz8vHc',
          external: true,
        },
        { type: 'bold', content: '💬 ¿Dudas? Escríbenos a dmd@cesga.es' },
      ],
    },
  ],
  en: [
    {
      key: 'initial-post-2025',
      date: '2025-11-05',
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
          href: '/catalog',
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
    {
      key: 'dataspace-glossary-2025',
      date: '2025-11-18',
      title: 'Data Space: 12 Definitions That Will Save You Meetings 🚀',
      excerpt:
        'If you’re building or connecting to a data space, aligning vocabulary early prevents friction. Here’s an essential glossary 📘.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        // {
        //   type: 'h1',
        //   content: 'Data Space: 12 Definitions That Will Save You Meetings 🚀',
        // },
        { type: 'h1', content: 'Essential Glossary' },
        'If you’re building or connecting to a data space, aligning vocabulary from the start helps avoid friction and speeds up decision-making. Here’s an essential glossary 📘:',

        { type: 'bold', content: '1) Data Space' },
        'An ecosystem where different organizations share and use data under common rules of governance, security, interoperability, and verifiable trust (agreements, audits, traceability).',

        { type: 'bold', content: '2) Use Case' },
        'An initiative led by one or more entities that leverages the data space to solve a specific challenge through shared data. Examples: epidemiological surveillance, logistics route optimization, evaluation of health outcomes.',

        { type: 'bold', content: '3) Data Product' },
        'According to UNE 0087:2025, a product is a “unit that includes data plus metadata, policies, services, and support elements.” In practice: a value layer built on top of a dataset within the space enabling controlled, documented, and useful consumption. Example: a hospital benchmarking portal that provides standardized and updated indicators.',

        { type: 'bold', content: '4) Data Catalog' },
        'A browsable inventory of datasets, data products, and/or services with standardized metadata (who, what, frequency, quality, licenses, cost, and access methods).',

        { type: 'bold', content: '5) Data Provider' },
        'A participant who makes data, products, and/or services available. If the data is self-generated, they also act as a producer (responsible for origin and quality).',

        { type: 'bold', content: '6) Data Consumer' },
        'A participant that consumes data, products, and/or services for a declared purpose and under contractual or policy conditions. Can be an organization, an individual, or devices.',

        { type: 'bold', content: '7) Connector' },
        'A technical component that enables interoperability and secure data exchange. A practical guide to selecting and deploying connectors will be available soon.',

        { type: 'bold', content: '8) Governance' },
        'The practical implementation of data management within the space: roles, rules, and processes (access management, incident resolution, metrics, audits, and continuous improvement).',

        { type: 'bold', content: '9) Access and Usage Policies' },
        'Human- and machine-readable conditions governing data use: purpose, minimization, retention, redistribution, anonymization/pseudonymization, security, and regulatory compliance.',

        { type: 'bold', content: '10) Semantic Interoperability' },
        'The “common dictionary” ensuring that terms such as “patient,” “center,” or “date” mean the same across organizations: ontologies, vocabularies, schemas, and mappings. Interoperability is a broad topic that we’ll explore in detail in an upcoming article.',

        { type: 'bold', content: '11) Traceability and Consent Logging' },
        'Evidence of who accessed what, when, for what purpose, and under which legal basis/consent; includes verifiable logs, versioning, and accountability mechanisms.',

        { type: 'bold', content: '12) Adhesion Contract' },
        'The legal framework defining responsibilities, guarantees, penalties, intellectual property, security, exit policy (offboarding), and operational continuity.',

        { type: 'h2', content: 'Practical Tips (for a good start)' },
        '• Start with the use case: objective, metrics, and expected value.',
        '• Define a minimum viable data product : what you expose, to whom, and how.',
        '• Set policies and roles before technology: then align connectors, catalogs, and APIs with those decisions.',
      ],
      featured: false,
    },
    {
      key: 'mvd-access-2025',
      date: '2025-12-02',
      title: 'Access to the MVD of our Data Space',
      excerpt:
        'Second major milestone! The MVD is now operational for our One Health Data Space.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        {
          type: 'bold',
          content:
            'Second major milestone! The MVD is now operational for our One Health Data Space.',
        },

        'This initial version allows end-to-end validation of secure data exchange flows, testing of common services, and exercising the first pilot use cases with test data and, where applicable, properly protected real data.',

        { type: 'h2', content: 'What is the MVD?' },
        'The MVD (Minimum Viable Dataspace) is the first operational version of the Data Space, bringing together the minimum set of capabilities needed to launch the federation: identity and access, data discovery, basic governance, traceability, and connectivity between providers and consumers. It helps to learn quickly, measure impact, and adjust the design before scaling.',

        {
          type: 'h2',
          content: 'What this phase includes (layers and services)',
        },
        '• Federated identity and access management: authentication, policy- and role-based authorization.',
        '• Agreements and governance: usage policies.',
        '• EDC connectors.',
        '• Support for pilot use cases, on demand.',

        { type: 'h2', content: 'How to join' },
        'Follow our onboarding process with the following steps:',

        { type: 'h3', content: 'Application and membership phase' },

        { type: 'bold', content: '1️⃣ Learn more' },
        'Download the Participant Guide to understand in detail how the Data Space works, the technical and legal requirements, and the benefits of joining. We guide you every step of the way.',

        { type: 'bold', content: '2️⃣ Request membership' },
        'Fill out the expression of interest form and our team will review your request and contact you for the next steps.',

        { type: 'h3', content: 'Integration phase in the Data Space' },

        { type: 'bold', content: '3️⃣ Technical integration' },
        'Connect your systems and prepare your data according to the Data Space interoperability, quality, and security policies. We will support you throughout the process.',

        { type: 'bold', content: '4️⃣ Participate and grow' },
        'Once you are part of the Data Space, you can exchange data, participate in use cases, and collaborate with other ecosystem participants. We will continue supporting you at every stage.',

        { type: 'h2', content: 'Useful resources' },
        {
          type: 'link',
          content: '▶️ Onboarding process',
          href: 'https://dataspace.cesga.es/es/how',
          external: false,
        },
        {
          type: 'link',
          content: '▶️ MVD Portal',
          href: 'https://xdatashare.srv.cesga.es/portal',
          external: true,
        },
        {
          type: 'link',
          content: '▶️ Guided MVD tutorial (FarmaciaVAX Workshop)',
          href: 'https://www.youtube.com/watch?v=u7zTyU795n8',
          external: true,
        },
        {
          type: 'link',
          content: '▶️ Data Space Workshop on EDC Connectors',
          href: 'https://www.youtube.com/watch?v=WGBCGCz8vHc',
          external: true,
        },
        { type: 'bold', content: '💬 Questions? Write to us at dmd@cesga.es' },
      ],
    },
  ],
};
