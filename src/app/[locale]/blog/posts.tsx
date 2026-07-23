import type { StaticImageData } from 'next/image';
import type { Locale } from 'next-intl';
import DinamicaCRED from '../../../../public/blog/dinamicaEventoInicialCRED.png';
import GaiaXPonencia from '../../../../public/blog/GAIAXCumbreDatoPonenciaAlejoSantolino.jpeg';
import ArchitectureImg from '../../../../public/logo_completo.jpg';
import ISequeirosImg from '../../../../public/team/isequeiros.webp';
import JCacheiroImg from '../../../../public/team/jcacheiro.webp';
import LDiazImg from '../../../../public/team/ldiaz.webp';
import LVazquezImg from '../../../../public/team/lvazquez.webp';
import MCarmenaImg from '../../../../public/team/mcarmena.webp';
import MCastineiraImg from '../../../../public/team/mcastineira.webp';
import PFerreiroImg from '../../../../public/team/pferreiro.webp';

interface TextNodeBase {
  type: string;
  content?: React.ReactNode;
}

interface HeadingNode extends TextNodeBase {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  content: React.ReactNode;
}
interface ItalicNode extends TextNodeBase {
  type: 'italic';
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

interface ImageProfileNode extends TextNodeBase {
  type: 'image_profile';
  src: StaticImageData;
  alt: string;
}

interface ImageNode extends TextNodeBase {
  type: 'image';
  src: StaticImageData;
  alt: string;
  caption?: string;
}

interface QuoteNode extends TextNodeBase {
  type: 'quote';
  content: React.ReactNode;
}

export type TextNode =
  | HeadingNode
  | BoldNode
  | UnderlineNode
  | LinkNode
  | ImageNode
  | ItalicNode
  | ImageProfileNode
  | QuoteNode;

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
  published?: boolean;
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
        { type: 'bold', content: '💬 ¿Dudas? Escríbenos a onehealth@cesga.es' },
      ],
    },
    {
      key: 'gobernanza-espacio-datos',
      title:
        'Gobernanza en un espacio de datos: la parte “invisible” que hace que todo funcione',
      date: '2025-12-15',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      excerpt:
        'La gobernanza es la capa invisible que permite que un espacio de datos funcione de forma segura, justa y reutilizable.',
      description: [
        'Cuando se habla de espacios de datos, casi siempre salen palabras como conectores, APIs, estándares o interoperabilidad. Todo eso es importante, pero hay una pieza que suele quedar en segundo plano y que, en realidad, lo sostiene todo: la gobernanza.',

        'La gobernanza es lo que evita que el espacio de datos se convierta en un “grupo de WhatsApp de datasets” donde nadie sabe qué se puede usar, quién responde si algo falla o cómo se demuestra que se han respetado las condiciones.',

        {
          type: 'bold',
          content:
            'En el demostrador multisectorial DATAlife, la gobernanza está pensada para compartir datos de forma útil, segura y justa, generando valor en un entorno One Health.',
        },

        {
          type: 'h2',
          content: 'Entonces… ¿qué es exactamente la gobernanza?',
        },

        'Piensa en la gobernanza como las reglas del juego, pero también como el árbitro y el marcador.',

        'Las reglas definen qué se puede compartir y bajo qué condiciones. El árbitro establece qué ocurre si hay un problema o un incumplimiento. El marcador permite medir si el espacio está funcionando y aportando valor.',

        'En el Centro Demostrador se distingue además entre gobernanza (las reglas y controles del día a día) y gobierno del dato, que corresponde a la capa estratégica: objetivos, riesgos, políticas y seguimiento.',

        {
          type: 'h2',
          content: 'Las tres grandes preguntas que responde la gobernanza',
        },

        {
          type: 'h3',
          content: '1) ¿Cómo se organiza el espacio?',
        },

        'La gobernanza define quién toma decisiones, cómo se incorporan nuevos participantes, qué ocurre cuando alguien abandona el espacio y cómo se gestionan los conflictos, todo ello mediante procesos claros y transparentes.',

        {
          type: 'h3',
          content: '2) ¿Cómo se garantiza que todos hablan el mismo idioma?',
        },

        'En un espacio multisectorial, interoperabilidad no es solo intercambiar archivos, sino asegurar que los datos se entienden, se usan correctamente y se pueden reutilizar.',

        'Por eso se trabaja a nivel legal, organizativo, semántico y técnico, usando formatos comunes y vocabularios reconocidos como FHIR, OMOP, DICOM, CIE-10, SNOMED o LOINC.',

        {
          type: 'h3',
          content: '3) ¿Qué se puede hacer con los datos y qué no?',
        },

        'Aquí entran en juego las licencias, las condiciones de uso, la trazabilidad, la calidad de los datos y la privacidad. Cada entidad mantiene el control de sus datos dentro de un marco común que evita malentendidos y asegura cumplimiento.',

        {
          type: 'h2',
          content: 'Roles claros para evitar zonas grises',
        },

        'Un espacio de datos funciona mejor cuando cada actor sabe qué le corresponde. En el Centro Demostrador se definen roles como autoridad de gobierno, operador del espacio, proveedor y consumidor de datos/servicios.',

        'Esta definición reduce fricciones, ahorra tiempo y hace el sistema más escalable.',

        {
          type: 'h2',
          content: 'Observabilidad: que se pueda demostrar',
        },

        'No basta con decir que se cumple. Un espacio confiable debe poder demostrarlo mediante registros, trazas y reportes que permitan auditar accesos, transferencias y usos de los datos.',

        {
          type: 'h2',
          content: '¿Qué se gana con una buena gobernanza?',
        },

        'Menos incertidumbre, mayor seguridad jurídica y técnica, mejor reutilización de los datos y un impacto medible son algunos de los beneficios directos de una gobernanza bien diseñada.',

        {
          type: 'bold',
          content:
            'En resumen, la gobernanza es lo que permite que un espacio de datos no solo exista, sino que funcione de verdad.',
        },

        {
          type: 'h2',
          content: '¿Qué viene después?',
        },

        'Para incorporarse a un espacio como el nuestro es clave tener claro el rol, los datos o servicios que se aportan o consumen y las condiciones aplicables. Con eso, la adhesión deja de ser un laberinto y se convierte en un proceso ordenado y predecible.',
      ],
    },
    {
      key: 'ontologies-vocabularies',
      date: '2026-01-26',
      title:
        'Ontologías y vocabularios en espacios de datos: una guía sencilla desde el Centro Demostrador DATAlife',
      excerpt:
        'Para que un espacio de datos funcione, no basta con compartir: hay que entender lo compartido de la misma manera. Te explicamos, de forma práctica, qué son los vocabularios y las ontologías, qué estándares se usan y cómo alinear datos con ellos.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        'En un espacio de datos no basta con compartir información: es fundamental entenderla de la misma manera. Para lograrlo se utilizan dos herramientas clave: vocabularios y ontologías, que permiten que distintos sistemas, organizaciones y profesionales hablen un lenguaje común.',

        {
          type: 'h2',
          content: '➡️ Vocabularios y ontologías: dos piezas distintas',
        },

        { type: 'h4', content: '¿Qué es un vocabulario?' },
        'Un vocabulario es un conjunto estructurado de términos y códigos que se utiliza para nombrar conceptos de forma uniforme. Por ejemplo, un código específico para “PCR”, otro para “SARS-CoV-2” o para “vacuna de la gripe”. Su objetivo es eliminar ambigüedades y garantizar que todas las partes utilizan las mismas denominaciones.',

        { type: 'h4', content: '¿Qué es una ontología?' },
        'Una ontología no solo define conceptos, sino también las relaciones entre ellos. Permite expresar, por ejemplo, que una “vacuna” pertenece a una categoría concreta, o que una “observación de laboratorio” está asociada a un “paciente”. Es, en esencia, un mapa conceptual que describe cómo se organiza un dominio de conocimiento.',

        { type: 'h2', content: '➡️ Por qué importa hablar el mismo idioma' },

        { type: 'h4', content: 'Interoperabilidad real' },
        'Si cada entidad define los conceptos de manera diferente, conectar datos es extremadamente difícil. Los vocabularios comunes garantizan que “paciente”, “lote de vacuna” o “centro dispensador” se interpreten igual en todos los sistemas.',

        { type: 'h4', content: 'Datos más FAIR' },
        'Los estándares semánticos favorecen datos más localizables (gracias a metadatos claros), interoperables (gracias a formatos compatibles) y reutilizables (gracias a definiciones y licencias bien documentadas).',

        { type: 'h4', content: 'Calidad y gobernanza' },
        'Usar conceptos bien definidos y relaciones coherentes reduce errores, facilita la validación y aporta trazabilidad a cada modificación.',

        { type: 'h4', content: 'Escalabilidad' },
        'Una base semántica sólida permite conectar dominios tan diversos como la salud, el ámbito sociosanitario, la farmacia o el medio ambiente.',

        { type: 'h2', content: '➡️ Estándares habituales en espacios de datos' },

        { type: 'h4', content: 'Modelos de datos y formatos' },
        '• HL7 FHIR para información clínica estructurada.',
        '• OMOP CDM para análisis y ciencia de datos.',
        '• RDF/OWL para construir grafos de conocimiento.',
        '• DCAT / DCAT-AP para describir datasets en catálogos.',
        '• JSON-LD / Schema.org para añadir semántica en la web.',

        { type: 'h4', content: 'Vocabularios y terminologías' },
        '• SNOMED CT para conceptos clínicos.',
        '• LOINC para laboratorio y observaciones.',
        '• ATC / RXNorm para medicamentos.',
        '• ICD-10/11 para diagnósticos.',

        { type: 'h4', content: 'Ontologías biomédicas y ómicas' },
        '• Ontologías de OBO Foundry como HPO, CHEBI u OBI.',
        '• Recursos impulsados por GA4GH para datos genómicos.',

        {
          type: 'h2',
          content: '➡️ Cómo se alinean los datos con estos estándares',
        },

        { type: 'h4', content: '1) Identificar los conceptos clave' },
        'Por ejemplo: tipo de vacuna, fecha de administración, lote, paciente, área sanitaria…',

        {
          type: 'h4',
          content: '2) Vincular cada concepto con un código estándar',
        },
        'Ejemplos:',
        '• “PCR” → LOINC.',
        '• “Vacuna frente a influenza” → SNOMED o ATC.',
        '• “Centro sanitario” → Conceptos de ubicación en FHIR.',

        { type: 'h4', content: '3) Documentar reglas básicas' },
        'Unidades, rangos válidos, obligatoriedad, tipos de dato, restricciones.',

        { type: 'h4', content: '4) Transformar los datos' },
        'A través de procesos de mapeo (ETL) que generan formatos como FHIR u OMOP a partir de fuentes originales.',

        { type: 'h4', content: '5) Gestionar equivalencias' },
        'Si distintas fuentes usan códigos distintos, se crean tablas de correspondencia o grafos SKOS.',

        { type: 'h4', content: '6) Mantener gobernanza' },
        'Versiones claras, procesos de actualización bien definidos y documentación comprensible.',

        { type: 'h2', content: '➡️ Buenas prácticas recomendadas' },
        '• Reutilizar vocabularios estándar siempre que sea posible.',
        '• Publicar URIs estables para conceptos internos.',
        '• Documentar con ejemplos sencillos y actualizados.',
        '• Versionar modelos y ontologías con criterios claros.',
        '• Incluir licencias y condiciones de uso de los metadatos.',

        { type: 'h2', content: '➡️ Errores frecuentes' },
        '• Asumir equivalencias exactas cuando solo existe una similitud aproximada.',
        '• Crear códigos internos sin documentación accesible.',
        '• Mezclar versiones de vocabularios sin indicarlo.',

        {
          type: 'quote',
          content:
            'La meta es clara: facilitar que la interoperabilidad suceda de forma fluida, comprensible y sostenible en el tiempo.',
        },
      ],
      featured: false,
    },
    {
      key: 'team-demonstrator-2026',
      date: '2026-02-20',
      title: 'El equipo del Centro Demostrador',
      excerpt:
        'El Centro Demostrador de Espacio de Datos Multisectorial One Health del CESGA se apoya en un equipo multidisciplinar que combina coordinación, ingeniería y perfiles investigadores para trasladar tecnologías de compartición y valorización del dato a escenarios reales.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        {
          type: 'h2',
          content: 'Conoce quién está detrás del espacio de datos',
        },
        // Introducción (tal cual)
        'El Centro Demostrador de Espacio de Datos Multisectorial One Health del CESGA se apoya en un equipo multidisciplinar que combina coordinación, ingeniería y perfiles investigadores para trasladar tecnologías de compartición y valorización del dato a escenarios reales.',
        'Nuestro objetivo es acelerar la transformación digital en ámbitos como la biotecnología, el agroalimentario, el sector forestal–marino–industrial y la salud, integrando capacidades de inteligencia artificial, big data y computación de alto rendimiento (HPC). Trabajamos para que los casos de uso del centro demostrador multisectorial DATAlife evolucionen desde la definición hasta la validación y la puesta en producción, fomentando un espacio de datos interoperable, seguro y escalable.',
        'La actividad del equipo se articula a través de la coordinación del proyecto, liderada por Javier Cacheiro,  junto con el soporte y la ejecución técnica de Pedro Ferreiro. Ayudando a soporte técnico pero más centrados en el área investigadora, están el resto de los integrantes del equipo. Aportando experiencia en simulación y química computacional  encontramos a  Miguel Carmena y a a Marta Castiñeira y en analítica avanzada e inteligencia artificial, encontramos a Ledicia Díaz y  Lara Vázquez. De este modo, estamos cubriendo de extremo a extremo la validación de casos de uso, el despliegue de servicios y la adopción de buenas prácticas para crear un espacio de datos robusto y orientado a impacto.',

        // Javier
        { type: 'h2', content: 'Javier Cacheiro López' },
        {
          type: 'image_profile',
          src: JCacheiroImg,
          alt: 'Javier Cacheiro López',
        },
        'Javier Cacheiro López es Project Manager y responsable de la coordinación del área de Big Data en el Centro de Supercomputación de Galicia (CESGA), donde impulsa iniciativas que combinan gestión de proyectos complejos con una sólida base técnica en Big Data, computación de altas prestaciones (HPC) e inteligencia artificial (IA). Su perfil integra liderazgo de equipos multidisciplinares, planificación y seguimiento de hitos, y alineamiento de necesidades científicas y organizativas con soluciones tecnológicas avanzadas.',
        'Cuenta con acreditación profesional en dirección de proyectos por el Project Management Institute (PMI) y es Project Management Professional (PMP) desde 2009. Es Doctor en Física (2003) y obtuvo Premio Extraordinario tanto en la Licenciatura como en el Doctorado, reflejo de una trayectoria académica de excelencia. En la actualidad coordina la creación del DATAlife (One Health), un espacio de datos estratégico que requiere integración de componentes técnicos, científicos y de gobernanza.',
        'A lo largo de su carrera ha participado en más de 20 proyectos europeos, nacionales y regionales, incluyendo iniciativas como EGEE, EGI-InSPIRE y TRAFAIR, desempeñando funciones de coordinación y responsabilidad técnica. Es autor de más de 70 publicaciones científicas en revistas y congresos internacionales, lo que evidencia una actividad investigadora sostenida y una capacidad contrastada para orientar resultados en entornos de alta exigencia tecnológica y colaboración internacional.',

        // Pedro
        { type: 'h2', content: 'Pedro Ferreiro Rega' },
        {
          type: 'image_profile',
          src: PFerreiroImg,
          alt: 'Pedro Ferreiro Rega',
        },
        'Pedro Ferreiro Rega es graduado en Biotecnología por la Universidade de Santiago de Compostela (USC). Posteriormente, completó el máster en Bioinformática en la Universidad Internacional de Valencia (ViU).',
        'Graduado en Biotecnología por la Universidade de Santiago de Compostela (USC) y Máster en Bioinformática por la Universidad Internacional de Valencia (VIU). En 2025 se incorporó al equipo de espacio de datos del CESGA, donde desarrolla su actividad actualmente. Con anterioridad, su trabajo investigador se centró en el estudio de patologías del sistema nervioso periférico mediante técnicas de análisis bioinformático, con especial interés en la neuropatía diabética. En su tiempo de ocio disfruta leyendo y compartiendo tiempo con sus amigos.',

        // Lara
        { type: 'h2', content: 'Lara María Vázquez González' },
        {
          type: 'image_profile',
          src: LVazquezImg,
          alt: 'Lara María Vázquez González',
        },
        'Lara Vázquez González es doctora en Investigación en Tecnologías de la Información por la Universidade de Santiago de Compostela (USC), donde también obtuvo el Grado en Ingeniería Informática en 2019. Posteriormente, completó el máster en Bioinformática y Bioestadística en la Universitat Oberta de Catalunya (UOC) en 2020.',
        'En 2021 recibió la Ayuda de apoyo a la etapa predoctoral de la Xunta de Galicia, que le permitió desarrollar su tesis doctoral en el ámbito de la bioinformática. Su investigación se centró en la aplicación de técnicas de aprendizaje automático para mejorar y agilizar el diagnóstico de enfermedades de origen microbiano, con especial atención a la periodontitis. Actualmente, trabaja en el CESGA en el proyecto del Centro Demostrador. En su tiempo libre, le encanta leer, viajar y escuchar música.',

        // Miguel
        { type: 'h2', content: 'Miguel Carmena Bargueño' },
        {
          type: 'image_profile',
          src: MCarmenaImg,
          alt: 'Miguel Carmena Bargueño',
        },
        'Miguel Carmena Bargueño es bioquímico por la UCLM, realizó el Máster en Bioinformática por la Universidad de Murcia y la UPCT. Obtuvo su tesis doctoral en el grupo BIO-HPC de la UCAM (2024). Dicha tesis estuvo enfocada en el uso de las simulaciones de Dinámica Molecular y Machine Learning en el contexto del descubrimiento de fármacos. Durante el desarrollo de la tesis realizó una estancia en Viena, donde se formó sobre las aplicaciones y uso del modelado farmacológico. Actualmente se encuentra trabajando en el CESGA, siendo técnico investigador de química computacional. En su tiempo libre le gusta escuchar música, leer novelas gráficas y jugar a juegos de mesa.',

        // Marta
        { type: 'h2', content: 'Marta Castiñeira Reis' },
        {
          type: 'image_profile',
          src: MCastineiraImg,
          alt: 'Marta Castiñeira Reis',
        },
        'Marta Castiñeira Reis es química computacional especializada en la integración de química mecanística, catálisis y automatización. Se doctoró en Química Teórica y Modelización Molecular en la Universidad de Vigo (2019) y ha desarrollado una trayectoria internacional. Realizó un posdoctorado de tres años en la Universidad de Groningen, donde lideró la parte computacional del grupo de S. R. Harutyunyan, con foco en procesos enantioselectivos. En CiQUS (USC) co-lideró una línea en astroquímica orientada a la elucidación automática de mecanismos. Suma más de 500 horas de docencia, 10 TFG codirigidos y varios TFM. Actualmente trabaja en el CESGA en el proyecto del Centro Demostrador. Fuera del ámbito profesional, disfruta de la naturaleza, la lectura y los animales.',

        // Ledicia
        { type: 'h2', content: 'Ledicia Díaz Lago' },
        { type: 'image_profile', src: LDiazImg, alt: 'Ledicia Díaz Lago' },
        'Ledicia Díaz Lago es física orientada a software, especializada en ciencia de datos, modelización y machine learning aplicado. Se graduó en Física por la Universidade de Santiago de Compostela y cursó el Máster en Tecnologías del Sector Financiero en la Universidad Carlos III de Madrid, donde trabajó en aprendizaje por refuerzo profundo.',
        'Ha desarrollado su trayectoria entre la investigación y la industria, con experiencia en modelos predictivos, análisis de datos complejos y analítica avanzada, tanto en entornos académicos como empresariales. Actualmente trabaja como técnica investigadora en machine learning y ciencia de datos en el CESGA, participando en proyectos relacionados con espacios de datos, interoperabilidad y transferencia tecnológica.',
      ],
    },
    {
      //NOVA NOTICIA: IAGO
      key: 'taller-one-health-kit',
      date: '2026-03-26',
      title:
        'El Espacio de Datos One Health del CESGA impulsa la integración en el Kit Espacios de Datos con un taller dirigido a empresas e instituciones ',
      excerpt:
        'El Centro Demostrador Multisectorial DATAspace de CESGA celebró una sesión formativa práctica dirigida a resolver dudas y acompañar a empresas e instituciones en su incorporación al Espacio de Datos One Health como paso previo a la solicitud del Kit Espacios de Datos.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        'El Centro Demostrador Multisectorial DATAspace de CESGA organizó el pasado 23 de marzo una sesión formativa orientada a empresas e instituciones para resolver dudas y facilitar su incorporación al Espacio de Datos One Health como paso previo a la solicitud del Kit Espacios de Datos. ',

        'La jornada reunió a 33 asistentes, en su mayoría empresas e instituciones interesadas en iniciarse o avanzar en el uso del Espacio de Datos One Health. Durante la sesión se ofreció una introducción práctica a los pasos necesarios para integrarse en este entorno.',

        {
          type: 'h2',
          content: '➡️ Una formación orientada a la aplicación práctica',
        },

        'La compartición de datos segura e interoperable es uno de los pilares fundamentales de los espacios de datos, aunque muchas organizaciones —especialmente pymes e instituciones— siguen encontrando barreras técnicas y operativas para incorporarse.',

        'Para responder a esta necesidad, DATAspace planteó esta sesión con un enfoque eminentemente práctico, explicando paso a paso cómo integrarse y participar activamente en el Espacio de Datos One Health.',

        {
          type: 'h4',
          content: 'Despliegue del conector',
        },
        'Durante la sesión se explicó el proceso de despliegue del conector necesario para comenzar a operar dentro del espacio de datos.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=z72j1-uQCVo',
          href: 'https://www.youtube.com/watch?v=z72j1-uQCVo',
          external: true,
        },

        {
          type: 'h4',
          content: 'Subida y gestión de activos de datos (assets)',
        },
        'También se mostró cómo cargar, organizar y gestionar activos de datos dentro del ecosistema de intercambio.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=yshUdWjAsw8',
          href: 'https://www.youtube.com/watch?v=yshUdWjAsw8',
          external: true,
        },

        {
          type: 'h4',
          content: 'Declaración de evidencias dentro del espacio de datos',
        },
        'Otro de los aspectos abordados fue la declaración de evidencias necesarias para operar correctamente dentro del entorno compartido.',

        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=CRtcBkdf0Wg',
          href: 'https://www.youtube.com/watch?v=CRtcBkdf0Wg',
          external: true,
        },

        'Todo ello permitió a las y los asistentes entender de forma progresiva cómo participar en el Espacio de Datos One Health y aplicar este proceso en contextos reales.',

        {
          type: 'h2',
          content: '➡️ Próximas acciones y recursos disponibles',
        },

        'El DATAspace One Health de CESGA continuará organizando nuevas sesiones formativas en las próximas semanas con el objetivo de seguir acompañando a empresas y organizaciones públicas y privadas en su proceso de incorporación y desarrollo dentro del Espacio de Datos One Health.',

        {
          type: 'h2',
          content: '➡️ Sobre el proyecto DATAspace One Health',
        },

        'Impulsado por el Centro de Supercomputación de Galicia, entidad pública vinculada al Consejo Superior de Investigaciones Científicas y a la Xunta de Galicia, el proyecto tiene como objetivo habilitar un espacio de datos que permita una cooperación segura y la generación de valor en el ecosistema biosanitario desde el enfoque One Health.',

        'Está financiado con fondos del Plan de Recuperación, Transformación y Resiliencia (PRTR) a través del Mecanismo de Recuperación y Resiliencia (MRR) del Ministerio para la Transformación Digital y de la Función Pública.',

        {
          type: 'h4',
          content: 'Un entorno estratégico para el ecosistema biosanitario',
        },

        'El ámbito biosanitario constituye un pilar estratégico de la economía del dato, generando información heterogénea y de alto valor —clínica, farmacéutica, veterinaria, agroalimentaria o ambiental— que en muchos casos permanece fragmentada en distintos sistemas.',

        {
          type: 'h4',
          content: 'Un patrón sociotécnico para compartir datos',
        },

        'En este contexto, los espacios de datos como el promovido por CESGA emergen como un patrón sociotécnico que habilita el intercambio y uso conjunto de datos mediante reglas, roles y responsabilidades claras.',

        'Este modelo combina mecanismos tecnológicos como identidad, control de acceso, trazabilidad, seguridad e interoperabilidad con componentes organizativos como gobernanza, políticas, acuerdos y procesos de adhesión.',

        {
          type: 'quote',
          content:
            'Un Espacio de Datos One Health puede acelerar la cooperación y la generación de valor cuando confluyen datos de calidad, capacidades de cómputo e inteligencia artificial.',
        },

        {
          type: 'h2',
          content: '➡️ Más información',
        },

        {
          type: 'link',
          content: '• Guía del participante del Espacio de Datos.',
          href: 'https://xdatashare.srv.cesga.es/assets/static/files/Guia-del-participante.pdf',
          external: true,
        },

        {
          type: 'link',
          content: '• Guía del Kit de solicitud del Espacio de Datos.',
          href: 'https://dataspace.cesga.es/kit/guia_solicitud_KIT_CESGA.pdf',
          external: true,
        },
      ],
      featured: false,
    },
    {
      key: 'onehealth-dataspace-consolidacion-2026',
      date: '2026-04-16',
      title:
        'El proyecto OneHealth DataSpace del CESGA se consolida como iniciativa de intercambio de datos en favor de la salud global',
      excerpt:
        'El Espacio de Datos OneHealth DataSpace ha avanzado en su proceso de consolidación como iniciativa puntera de innovación en favor de la salud global con la adhesión de más de 10 nuevas entidades en los últimos meses.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        'El Espacio de Datos OneHealth DataSpace, centrado en el concepto One Health —término en inglés acuñado por la Organización Mundial de la Salud (OMS) para describir la interrelación entre la salud humana, animal y medioambiental—, ha avanzado en su proceso de consolidación como iniciativa puntera de innovación en favor de la salud global con la adhesión de más de 10 nuevas entidades en los últimos meses.',

        'La iniciativa OneHealth DataSpace —financiada por el Ministerio para la Transformación Digital y de la Función Pública a través del Plan de Recuperación, Transformación y Resiliencia (PRTR), con cargo a los fondos europeos NextGenerationEU— ha facilitado el acceso al Kit Espacios de Datos del CRED (Centro de Referencia de Espacios de Datos) a las entidades adheridas al proyecto. Este entorno se integrará en la futura Factoría de IA One Health 1HealthAI del CESGA.',

        {
          type: 'h2',
          content: '22 entidades, un ecosistema One Health real',
        },

        'OneHealth DataSpace ha alcanzado un total de 22 entidades adheridas al espacio de datos tras el cierre, el pasado 31 de marzo, del plazo de solicitud del Kit Espacios de Datos del CRED. Este marco de colaboración permite a empresas, pymes e instituciones compartir datos de forma segura y optimizar su explotación mediante tecnologías avanzadas.',

        'Con una base ya definida de participantes, OneHealth DataSpace configura un escenario real de colaboración en torno al dato, con una fuerte presencia del ámbito sanitario. Del total de 22 entidades adheridas:',

        '• El 81,8% pertenece al sector de la salud humana',
        '• El 13,6% que genera datos de salud medioambiental',
        '• El 4,5% corresponde a salud animal',

        'En términos de actividad, 14 de las 22 entidades (63,6%) ya ofrecen datos dentro del espacio, lo que refleja un nivel relevante de adopción en una fase temprana del proyecto.',

        {
          type: 'h3',
          content: 'Más allá que compartir datos: HPC, Big Data y Cloud',
        },

        'Además de la compartición de datos, OneHealth DataSpace proporciona a las organizaciones un entorno tecnológico avanzado que combina HPC (computación de alto rendimiento), Big Data y Cloud (computación en la nube). Este conjunto de capacidades permite transformar los datos en conocimiento útil y aplicable.',

        'Más que datos. More than data.',

        {
          type: 'h4',
          content: 'Sobre la Factoría de IA One Health 1HealthAI',
        },

        'La 1Health AI Factory es la única infraestructura de la red de Factorías de IA de EuroHPC JU concebida específicamente para dar soporte a la investigación e innovación enmarcadas en la estrategia One Health. Impulsada por el CESGA y el Consejo Superior de Investigaciones Científicas (CSIC), situará a Galicia y España en la vanguardia europea del ecosistema tecnológico en salud global, ofreciendo acceso a supercomputación, herramientas avanzadas de IA, y servicios de formación y acompañamiento al tejido empresarial, académico e investigador.',

        {
          type: 'h5',
          content: 'Sobre el CESGA',
        },

        'La Fundación CESGA (Centro de Supercomputación de Galicia) es una organización sin ánimo de lucro al servicio de la investigación científica, el desarrollo tecnológico y la innovación desde 1993, participada por la Xunta de Galicia y el CSIC. Ejecuta investigación, gestiona una infraestructura integrada en la Red Española de Supercomputación (RES), reconocida como Instalación Científico-Técnica Singular (ICTS) del Estado, y proporciona servicios avanzados de HPC, Big Data, Cloud e IA a la comunidad científica, educativa y empresarial.',
      ],
      featured: false,
    },
    {
      key: 'cumbre-economia-dato-gaiax',
      date: '2026-04-24',
      title: 'OneHealth DataSpace participa en la II Cumbre de la Economía del Dato Gaia-X España',
      excerpt:
        'El proyecto del Centro de Supercomputación de Galicia comparte en Toledo su experiencia en el desarrollo de un espacio de datos operativo en el ámbito One Health',
      image: GaiaXPonencia,
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        'El proyecto del Centro de Supercomputación de Galicia comparte en Toledo su experiencia en el desarrollo de un espacio de datos operativo en el ámbito One Health',
        'El Data Space del CESGA aporta de forma gratuita, recursos de almacenamiento, procesamiento, supercomputación y análisis, todos ellos de gran valor para las entidades que generan datos en el ámbito One Health (Una sola Salud); el concepto liderado por la OMS que integra salud humana, animal y ambiental ',

        { type: 'h2', content: 'Un momento decisivo para la economía del dato en Europa' },
        'OneHealth DataSpace, iniciativa impulsada por el Centro de Supercomputación de Galicia (CESGA), participó los días 21 y 22 de abril en la II Cumbre de la Economía del Dato de Gaia-X España, celebrada en el Palacio de Congresos El Greco de Toledo.:',
        'El encuentro reunió a empresas, administraciones y entidades tecnológicas en un momento clave para el ecosistema del dato: la transición desde proyectos piloto hacia espacios de datos operativos, escalables y sostenibles. En este contexto se puso el foco en retos clave como la interoperabilidad o la generación de valor a partir del dato.',

        { type: 'h2', content: 'Intervención en Gaia-X: colaboración intersectorial y soberanía del dato' },
        'Nuestro compañero Alejo Santolino Simón, Coordinador de Marco Legal y Análisis de Negocios de OneHealth DataSpace participó activamente en el programa del evento, con intervención en el bloque de economía del dato y presencia en las mesas del ámbito socio-sanitario.',
        'Durante su intervención, el proyecto fue presentado bajo el título “El futuro de la colaboración intersectorial: impulsando la soberanía del dato en la economía digital”, destacando el papel de los espacios de datos como habilitadores de nuevos modelos de cooperación entre sectores.',
        'La intervención permitió poner en valor las capacidades tecnológicas del CESGA, en las que destacan:',
        '• Supercomputación (HPC) para el análisis de escenarios complejos',
        '• Entornos Cloud para el despliegue de servicios y almacenamiento federado',
        '• Big Data para transformar datos en conocimiento',
        '',

        'Este conjunto de capacidades posiciona al CESGA como un operador tecnológico capaz de garantizar neutralidad y soberanía del dato en el desarrollo del ecosistema One Health.',
        { type: 'h2', content: 'Más que un espacio de datos' },

        'OneHealth DataSpace es mucho más que un espacio de intercambio de datos. Se apoya en un centro de supercomputación que pone a disposición de las entidades capacidades avanzadas de computación, procesamiento, almacenamiento y explotación de la información. Gracias a esta infraestructura, los usuarios pueden trabajar con sus datos sin preocuparse por la complejidad técnica subyacente, accediendo de forma transparente a los recursos necesarios en cada caso. El sistema es altamente flexible y se adapta a las necesidades específicas de cada reto, ya sea mediante un mayor uso de CPU —el “cerebro” que gestiona las tareas generales y el sistema operativo—, GPU para el procesamiento masivo y paralelo de grandes volúmenes de datos, almacenamiento avanzado u otras capacidades especializadas.',
        { type: 'h2', content: 'Un modelo federado para compartir datos con control' },
        'El proyecto se basa en una arquitectura federada, en la que los datos permanecen bajo el control de sus propietarios y se comparten bajo condiciones definidas.',
        'Esta perspectiva, alineada con los principios de Gaia-X, permite avanzar hacia un modelo de economía del dato basada en interoperabilidad, colaboración y generación de valor.',
        'En el caso de OneHealth DataSpace, este modelo se aplica al enfoque One Health, integrando datos de salud humana, animal y medioambiental para generar conocimiento compartido.',

        { type: 'h2', content: 'Un espacio de datos ya operativo' },
        'Uno de los elementos clave presentados fue el desarrollo de una primera versión operativa del espacio de datos, el MVD, que reúne las capacidades esenciales para una federación segura y escalable.',
        'Este entorno incluye capacidades como:',
        '• Gestión IAM,  identidad y acceso federado',
        '• Gobernanza, plantilla de Data Sharing Agreement y políticas de uso automatizadas',
        '• Integración técnica mediante conectores EDC y entorno sandbox',
        '• Observabilidad, registro de accesos y trazabilidad de consentimientos',

        { type: 'h2', content: 'Próximo paso: la Factoría de IA One Health' },
        'La participación en la II Cumbre del Dato también permitió conectar con la siguiente evolución del proyecto.',
        'OneHealth DataSpace tendrá continuidad en la futura Factoría de IA One Health 1HealthAI, impulsada por el CESGA y el Consejo Superior de Investigaciones Científicas (CSIC) en el marco de EuroHPC-JU.',
        'Esta nueva infraestructura permitirá avanzar en el uso de inteligencia artificial aplicada al dato y consolidar un ecosistema de innovación en salud global, bajo el enfoque One Health.',

        { type: 'h2', content: 'Sobre OneHealth DataSpace' },
        'El proyecto OneHealth DataSpace del CESGA está financiado por el Ministerio para la Transformación Digital y de la Función Pública a través del Plan de Recuperación, Transformación y Resiliencia (PRTR), con cargo a los fondos europeos NextGenerationEU (exp. TSI-100120-2024-12).',
        { type: 'h2', content: 'Sobre el CESGA' },
        'La Fundación CESGA (Centro de Supercomputación de Galicia) es una organización sin ánimo de lucro al servicio de la investigación científica, el desarrollo tecnológico y la innovación desde 1993, participada por la Xunta de Galicia y el CSIC. Ejecuta investigación, gestiona una infraestructura integrada en la Red Española de Supercomputación (RES), reconocida como Instalación Científico-Técnica Singular (ICTS) del Estado.',

        {
          type: 'bold',
          content: 'Más que datos. More than data.',
        },



      ],
    },
    {
      key: 'galicia-biodays-2026',
      date: '2026-05-08',
      title:
        'OneHealth DataSpace presenta en Galicia Biodays 2026 su evolución hacia la futura 1HealthAI Factory',
      excerpt:
        'El Director Científico del proyecto, Javier Cacheiro, analiza en una entrevista para Faro de Vigo el papel del espacio de datos y la futura infraestructura europea de IA en Galicia',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        'El Director Científico del proyecto, Javier Cacheiro, analiza en una entrevista para Faro de Vigo el papel del espacio de datos y la futura infraestructura europea de IA en Galicia',

        'OneHealth DataSpace participó en los Galicia Biodays 2026, organizados por BIOGA, en un encuentro que reunió a empresas, centros tecnológicos, grupos de investigación, entidades y profesionales del ecosistema biosanitario y biotecnológico.',

        'En este escenario, nuestro Director Científico, Javier Cacheiro, concedió una entrevista a Faro de Vigo en la que abordó algunos de los principales ejes estratégicos de OneHealth DataSpace y el desarrollo del proyecto hacia la futura 1HealthAI Factory.',

        { type: 'h2', content: 'One Health: datos y computación' },

        'Durante la entrevista, Javier Cacheiro explicó el enfoque One Health como un modelo que integra salud humana, animal y medioambiental desde una perspectiva interconectada.',

        'Uno de los aspectos centrales destacados fue el papel diferencial de OneHealth DataSpace frente a otros espacios de datos convencionales.',

        '“Lo importante es la capacidad adicional para que en una sola plataforma puedas hacerlo todo: obtener datos y computación.',

        'En este sentido, el proyecto no solo facilita el intercambio seguro de datos entre entidades participantes, sino que se apoya en tecnologías avanzadas de procesamiento y análisis de datos.',

        'OneHealth DataSpace incorpora capacidades de supercomputación (HPC), Big Data y Cloud proporcionadas por el CESGA, permitiendo trabajar con grandes volúmenes de información de forma segura, interoperable y escalable.',

        'El objetivo es ofrecer un entorno integrado donde los datos puedan analizarse, procesarse y transformarse en soluciones aplicables a retos del ámbito biosanitario.',

        { type: 'h2', content: 'OneHealth DataSpace como antesala de la 1HealthAI Factory' },

        'La entrevista también permitió profundizar en la relación entre OneHealth DataSpace y la futura 1HealthAI Factory.',

        'Tal y como explicó Javier Cacheiro:',

        '“OneHealth DataSpace es el primer paso hacia la 1HealthAI Factory.”',

        'La futura infraestructura estará impulsada por el CESGA y contará con financiación del European High Performance Computing Joint Undertaking (EuroHPC JU), el Ministerio de Ciencia, Innovación y Universidades y la Xunta de Galicia.',

        'Se convertirá así en la única factoría europea de inteligencia artificial diseñada específicamente bajo el enfoque One Health.',

        'Esta nueva infraestructura permitirá reforzar las capacidades de computación e inteligencia artificial aplicadas al ámbito de la salud humana, animal y medioambiental.',

        { type: 'h2', content: 'Un proyecto en expansión' },

        'Actualmente, OneHealth DataSpace continúa incorporando nuevas entidades y casos de uso vinculados a salud, investigación y análisis avanzado de datos.',

        'La participación en Galicia Biodays 2026 también permitió reforzar la conexión del proyecto con el ecosistema One Health, además de abrir nuevas oportunidades de colaboración en el ámbito biotecnológico y biosanitario.',

        { type: 'h2', content: 'Entrevista completa' },

        {
          type: 'link',
          content: '🔗 Entrevista en Faro de Vigo',
          href: 'https://www.farodevigo.es/gran-vigo/2026/05/08/javier-cacheiro-director-cientifico-one-129964134.html',
          external: true,
        },
        {
          type: 'link',
          content: '🔗 Vídeo de la entrevista',
          href: 'https://www.farodevigo.es/videos/gran-vigo/2026/05/08/javier-cacheiro-director-cientifico-one-129969476.html',
          external: true,
        },
        {
          type: 'bold',
          content: 'Más que datos. More than data.',
        },
      ],
    },
    {
      key: 'gift-premio-ia-salud-2026',
      date: '2026-05-22',
      title:
        'GIFT, Caso de Uso de OneHealth DataSpace, recibe el Premio IA en Salud a la Mejor Unidad',
      excerpt:
        'El equipo del Servicio Digestivo del CHUP y su Grupo de Investigación IDARA recogen en Madrid dos galardones en los Premios IA BIC',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },

        'El equipo del Servicio Digestivo del CHUP y su Grupo de Investigación IDARA recogieron en Madrid dos galardones en los Premios IA BIC, organizados por FUNDAMED, Gaceta Médica y la Cátedra de Innovación y Gestión Sanitaria de la Universidad Rey Juan Carlos.',

        'El proyecto GIFT (Gastroenterology Interface with Fair Treatment), integrado en OneHealth DataSpace, fue reconocido con el Premio IA en Salud a la Mejor Unidad por su contribución al desarrollo de soluciones innovadoras basadas en inteligencia artificial aplicada al ámbito sanitario.',

        'El reconocimiento fue recogido el 21 de mayo de 2026 por Juan Turnes Vázquez, Investigador Principal del Grupo IDARA, junto a Eva Poveda López, Directora Científica del Instituto de Investigación Sanitaria Galicia Sur (IIS Galicia Sur).',

        'Además, el equipo del Servicio de Digestivo del Complexo Hospitalario Universitario de Pontevedra (CHUP) y su Grupo de Investigación IDARA recibieron un segundo galardón por el proyecto “Aicomta”, destacado por su capacidad para mejorar las consultas clínicas.',

        { type: 'h2', content: 'GIFT y OneHealth DataSpace' },

        'GIFT es un asistente conversacional de inteligencia artificial orientado al ámbito de la salud gastrointestinal.',

        'La herramienta facilita a profesionales sanitarios la búsqueda de información mediante respuestas fundamentadas y trazables, validadas por el Servicio de Digestivo del CHUP.',

        'El proyecto destaca especialmente por su papel en el apoyo clínico y la formación de profesionales sanitarios, integrando capacidades avanzadas de análisis y acceso inteligente a la información.',

        'En el número de marzo de 2026 de la revista Díxitos del CESGA se abordó el papel de este caso de uso dentro del ecosistema de OneHealth DataSpace.',

        { type: 'h2', content: 'Casos de uso vinculados al IIS Galicia Sur' },

        'Paralelamente, otros casos de uso vinculados al IIS Galicia Sur continúan avanzando dentro de OneHealth DataSpace.',

        'Entre ellos se encuentran BiomeXplore, Brilliant y AiDataMed, iniciativas centradas en ámbitos relacionados con salud, inteligencia artificial y análisis avanzado de datos.',

        'Este ecosistema forma parte del desarrollo de la futura 1HealthAI Factory, la infraestructura europea impulsada desde Galicia bajo el enfoque One Health.',

        'La futura infraestructura integrará capacidades avanzadas de supercomputación, inteligencia artificial y análisis de datos aplicadas a la salud humana, animal y medioambiental.',

        { type: 'h2', content: 'Formación e innovación en IA aplicada a salud' },

        'En esta misma línea, los próximos 25 y 26 de junio se celebrará el cierre de la iniciativa “Pontevedra, quen pasa? 6 expertos en saúde, 6 meses”, centrada en formación e innovación en inteligencia artificial aplicada a salud.',

        'El encuentro contará con la participación de Senén Barro, Director Científico del CiTIUS y una de las figuras más destacadas del ámbito de la inteligencia artificial generativa.',

        'También participará el cirujano Julio Mayol, referente en innovación médica y transformación digital en salud.',

        {
          type: 'bold',
          content: 'Más que datos. More than data. ',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-1healthai-factory',
      date: '2026-05-28',
      title:
        'OneHealth DataSpace presenta resultados y abre camino a la 1HealthAI Factory',
      excerpt:
        'El encuentro final del proyecto reunirá en el CHUS a entidades, investigadores e instituciones para compartir resultados y avances del ecosistema One Health',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'italic',
          content: 'El Espacio de datos del CESGA enfocado a mejorar la salud global, One Health DataSpace, celebra el 17 de junio, a las 9.30h en el CHUS, su encuentro final. En él expondrá los resultados alcanzados durante estos dos años de trayectoria. Grupos de investigación con vinculaciones entre salud humana, animal y medioambiental presentarán los casos de uso en los que el Espacio de Datos está resultando ser una iniciativa de gran valor en su aportación tecnológica para la consecución de mejores resultados y evidencias.',
        },

        'El próximo miércoles 17 de junio tendrá lugar en el Salón de Actos del Complexo Hospitalario Universitario de Santiago (CHUS) evento de cierre del OneHealth DataSpace en el que el CESGA dará cuenta de los resultados del proyecto OneHealth DataSpace, una iniciativa, antesala de la 1HealthAI Factory, la factoría de inteligencia artificial encaminada a mejorar la salud global, única en en la UE. El encuentro reunirá a representantes institucionales, entidades participantes y casos de uso para compartir los principales avances del proyecto y su evolución dentro del ecosistema One Health.',
        'El proyecto forma parte de la estrategia europea de espacios de datos y trabaja en la creación de un entorno seguro, interoperable y gobernado para compartir y explotar datos vinculados a salud humana, animal y medioambiental, respetando la soberanía del dato; todo ello bajo el enfoque One Health "Una sola salud". El OneHealth DataSpace conecta entidades de salud, investigación y empresa en un entorno apoyado por capacidades avanzadas de HPC (computación de alto rendimiento), Big Data, Cloud e Inteligencia Artificial proporcionadas por el CESGA.',

        'Durante la jornada el equipo del proyecto y las entidades que participan de sus servicios compartirán resultados, aprendizajes y retos identificados a lo largo del proyecto, además de distintas iniciativas desarrolladas dentro del ecosistema One Health. Asimismo, Antonio Alcolea, responsable del Ministerio para la Transformación Digital y de la Función Pública, hará un balance acerca del Avance de resultados de la Política de Impulso a Espacios de Datos en España.',

        'Inscripción en:',
        {
          type: 'link',
          content:
            'dataspacedatalife.github.io/onehealth-dataspace-evento-final',
          href: 'https://dataspacedatalife.github.io/onehealth-dataspace-evento-final/',
          external: true,
        },
        {
          type: 'bold',
          content: 'Más que datos. More than data. ',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-salud-global',
      date: '2026-06-04',
      title:
        'OneHealth DataSpace, el espacio de datos del CESGA ante el reto de impulsar la salud global',
      excerpt:
        'La iniciativa del CESGA combina datos, colaboración y supercomputación para impulsar la investigación y la innovación en salud humana, animal y medioambiental bajo el enfoque One Health.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'italic',
          content:
            'OneHealth DataSpace es la iniciativa del CESGA orientada a facilitar la colaboración científica y tecnológica para mejorar la salud global mediante el intercambio seguro de datos y el uso de capacidades avanzadas de computación, inteligencia artificial y análisis de datos.',
        },

        'La crisis del ébola, otras más próximas geográficamente como la del hantavirus, o pandemias de gran impacto como la COVID-19 tienen algo en común: una realidad interconectada entre las personas, los animales y el entorno en el que habitan. La Organización Mundial de la Salud (OMS) denomina a esta visión One Health —Una sola salud—.',

        'En este contexto, el Centro de Supercomputación de Galicia (CESGA) impulsa OneHealth DataSpace, una iniciativa construida sobre una de las infraestructuras tecnológicas públicas más avanzadas de Europa y orientada a facilitar la colaboración científica y tecnológica para mejorar la salud global bajo el enfoque One Health.',

        {
          type: 'h2',
          content: 'Datos, colaboración y tecnología',
        },

        '¿Cómo contribuye la supercomputación gallega a este desafío? Combinando tres elementos: datos, colaboración y tecnología. La disponibilidad de información de calidad permite construir bases científicas sólidas para abordar retos complejos relacionados con la salud humana, animal y medioambiental, siempre garantizando la soberanía de la información y la privacidad de los datos de salud de las personas.',

        'La capacidad de colaborar sin comprometer la seguridad de los datos constituye uno de los grandes desafíos tecnológicos actuales. OneHealth DataSpace (OHDS), ecosistema colaborativo del CESGA, nace precisamente para facilitar esa colaboración entre entidades de salud, investigación y empresa.',

        'Financiado con fondos europeos NextGenerationEU por la Secretaría de Estado de Digitalización e Inteligencia Artificial del Ministerio para la Transformación Digital y de la Función Pública, el proyecto integra datos y computación en una única plataforma, proporcionando a sus participantes las herramientas necesarias para transformar datos de salud humana, animal y medioambiental en soluciones reales.',

        'Todo ello sin comprometer la seguridad ni la soberanía de la información. De hecho, en OneHealth DataSpace los datos permanecen bajo el control de sus propietarios.',

        {
          type: 'h2',
          content: 'Más que datos',
        },

        'Tradicionalmente, los espacios de datos tratan de resolver el problema de cómo compartir datos. Sin embargo, desde el punto de vista científico, sabemos que obtener datos es solo el inicio de la investigación.',

        'Para poder aprovecharlos necesitamos un entorno donde almacenarlos, analizarlos y procesarlos. Solo después de este proceso es posible obtener resultados que aporten valor, ya sea a otras investigaciones e iniciativas o directamente a la sociedad.',

        'OneHealth DataSpace ofrece estos servicios y pone a disposición de los participantes recursos de Big Data, computación de altas prestaciones (HPC) y Cloud, integrados directamente en el espacio de datos.',

        'El objetivo es facilitar que los datos puedan transformarse en evidencias, conocimiento y nuevas soluciones para afrontar los retos de la salud global.',

        {
          type: 'h2',
          content: 'Pilares del ecosistema: soberanía y supercomputación',
        },

        'OneHealth DataSpace aporta además un entorno de confianza sustentado en tres pilares tecnológicos.',

        '● Los participantes mantienen en todo momento el control sobre quién accede a sus datos y con qué finalidad. Asimismo, se garantiza la privacidad de la información, permitiendo compartir datos sensibles en un entorno seguro.',

        '● A diferencia de otros espacios de datos, OneHealth DataSpace está conectado directamente con las capacidades de computación y almacenamiento del CESGA. Esto permite pasar del descubrimiento de los datos a su análisis sin abandonar el ecosistema seguro.',

        '● La plataforma incorpora mecanismos de interoperabilidad y enriquecimiento de metadatos que garantizan que la información sea localizable, accesible, interoperable y reutilizable (FAIR), maximizando el impacto de cada proyecto.',

        {
          type: 'h2',
          content: 'Un ecosistema abierto a la participación',
        },

        'La participación en OneHealth DataSpace está abierta a instituciones y empresas vinculadas al ámbito One Health. Actualmente integra 22 entidades adheridas y distintos casos de uso relacionados con ámbitos tan diversos como la salud gastrointestinal, la búsqueda de nuevos fármacos o el análisis del impacto de los parques eólicos sobre el medio ambiente.',

        'El diseño del proyecto incorpora un proceso de adhesión simplificado que fomenta la participación tanto en el procesamiento de datos como en la incorporación a casos de uso ya existentes o en la coordinación de nuevos proyectos colaborativos con otros miembros.',

        'Se trata de reunir iniciativas que, mediante la colaboración o el uso de los servicios ofrecidos por OneHealth DataSpace, contribuyan a mejorar la salud global.',

        {
          type: 'h2',
          content: 'La antesala de la 1HealthAI Factory',
        },

        'OneHealth DataSpace constituye la antesala necesaria de la 1HealthAI Factory, la única factoría europea de inteligencia artificial dedicada en exclusiva al ecosistema One Health.',

        'Esto sitúa al CESGA como referente europeo en inteligencia artificial aplicada a la salud global dentro de la red EuroHPC Joint Undertaking, una infraestructura con visión de futuro en la que el dato se convierte en motor de una salud global más integrada, inteligente y soberana.',

        'El proyecto del Centro Demostrador de Espacios de Datos DATAlife, en el que se integra OneHealth DataSpace, está financiado por la Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA) del Ministerio para la Transformación Digital y de la Función Pública, en el marco de la convocatoria de Centros Demostradores y Casos de Uso de Espacios de Datos (Orden TDF/1461/2023, de 29 de diciembre).',

        'Además, cuenta con financiación de la Unión Europea – NextGenerationEU a través del Plan de Recuperación, Transformación y Resiliencia.',

        {
          type: 'bold',
          content: 'Más que datos. More than data.',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-43-casos-uso-2026',
      date: '2026-07-22',
      title:
        'El Espacio de Datos del CESGA suma ya 43 iniciativas de investigación bajo el enfoque One Health',
      excerpt:
        'OneHealth DataSpace, el espacio de datos del CESGA, se consolida como un ecosistema activo, con 36 entidades adheridas que colaboran en un total de 43 casos de uso para alcanzar mejores resultados en favor de la salud global.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'bold',
          content:
            'OneHealth DataSpace, el espacio de datos del CESGA, se consolida como un ecosistema activo, con 36 entidades adheridas que colaboran en un total de 43 casos de uso para alcanzar mejores resultados en favor de la salud global.',
        },

        'OneHealth DataSpace, el espacio de datos del CESGA, continúa creciendo y se afianza como ecosistema de colaboración para mejorar la salud global.',

        'Los 43 casos de uso que participan actualmente en OneHealth DataSpace suponen un salto cualitativo importante si tenemos en cuenta los 7 casos de uso con los que arrancó el proyecto, o las 22 entidades adheridas que registraba el espacio de datos del CESGA en abril de este año.',

        'En pocos meses, OneHealth DataSpace ha pasado de ser un proyecto en fase de consolidación a convertirse en un ecosistema activo y sólido, en el que 36 entidades adheridas comparten conocimientos, los analizan, procesan y almacenan con un fin común: la mejora de la salud global desde un enfoque integrador que toma la salud humana, animal y medioambiental como un todo.',

        'El OneHealth DataSpace ofrece a sus entidades participantes capacidades avanzadas de computación (HPC), análisis con tecnologías Big Data, almacenamiento de alto rendimiento y la exposición de los resultados en aplicaciones y servicios listos para su uso. Todo ello, bajo el enfoque One Health (Una salud) que integra salud humana, animal y medioambiental.',

        { type: 'h2', content: 'Un ecosistema en crecimiento' },

        'Las entidades participantes del OneHealth DataSpace representan perfiles diversos, tanto públicos como privados, vinculados a la investigación, la asistencia sanitaria, la innovación tecnológica y la generación de conocimiento bajo el enfoque One Health.',

        'OneHealth DataSpace proporciona a estas organizaciones una infraestructura digital segura, interoperable y gobernada para compartir y aprovechar datos, integrada con recursos de HPC, Big Data, Cloud e Inteligencia Artificial del Centro de Supercomputación de Galicia (CESGA).',

        { type: 'h2', content: 'El proyecto amplía su actividad hasta el 31 de agosto' },

        'En paralelo a esta nueva fase de crecimiento, el proyecto extiende su actividad hasta el 31 de agosto de 2026, lo que le permitirá continuar incorporando entidades adheridas, consolidar lo avanzado e impulsar nuevas iniciativas, así como reforzar las acciones de difusión, formación y transferencia de conocimiento.',

        'Asimismo, facilitará avanzar en la evolución de OneHealth DataSpace como antesala de la futura 1HealthAI Factory, la infraestructura europea impulsada desde Galicia para la aplicación de la inteligencia artificial al ámbito One Health.',

        {
          type: 'h2',
          content:
            'Mini Encuentros: explicamos cómo responde OneHealth DataSpace a las necesidades del sector',
        },

        'Como parte de esta nueva etapa, el proyecto del CESGA ha puesto en marcha los Mini Encuentros OneHealth DataSpace, una iniciativa orientada a acercar el espacio de datos a grupos de investigación y entidades interesadas en explorar nuevas oportunidades de colaboración.',

        {
          type: 'bold',
          content:
            'Bajo el lema «Tus datos. Tu control. Conocimiento que transforma la salud global», cada sesión combina una breve presentación del proyecto con un espacio de diálogo orientado a identificar necesidades e impulsar nuevas colaboraciones dentro del ecosistema One Health.',
        },

        'El primero de estos encuentros se celebró el 23 de junio en la Sala Anfiteatro del IDIS (Instituto de Investigación Sanitaria de Santiago), en el CHUS de Santiago de Compostela. En julio continuó con nuevos encuentros, el 8 de julio en el Instituto de Investigación Biomédica de A Coruña (INIBIC) y el 9 de julio en el Instituto de Investigación en Saúde Global e Desenvolvemento Sostible (iTERRA) de Lugo, y el 29 de julio tendrá lugar la última jornada en el Instituto de Investigación Sanitaria Galicia Sur (IISGaliciaSur) en el Hospital Álvaro Cunqueiro, Vigo.',

        {
          type: 'h2',
          content:
            '22 de julio, Encuentro de Presentación de Resultados de OneHealth DataSpace',
        },

        'El miércoles 22 de julio OneHealth DataSpace celebra en el CiMUS (Center for Research in Molecular Medicine and Chronic Diseases) de Santiago de Compostela su Encuentro de Presentación de Resultados; una jornada en la que el equipo del proyecto compartirá los principales avances del proyecto y se presentarán algunos de sus casos de uso. Durante la sesión se dará también a conocer el Espacio Nacional de Datos de Salud (ENDS) y el Espacio Europeo de Datos de Salud (EHDS), y se abordarán las oportunidades de futuro que abre esta iniciativa como antesala de la futura 1HealthAI Factory.',

        'El encuentro contará con la participación de representantes institucionales de GAIN, CiMUS y CESGA, con Manuel Brocos, de la Dirección General del Dato (SEDIA), que presentará el Espacio Nacional de Datos de Salud, y con Lucía Escapa Castro, jefa del Gabinete de la Secretaría General de Salud Digital, Información e Innovación del SNS del Ministerio de Sanidad, que presentará el Espacio Europeo de Datos de Salud. La jornada cerrará con una intervención sobre el papel de OneHealth DataSpace como punto de partida hacia la futura 1HealthAI Factory, la única infraestructura europea de inteligencia artificial concebida específicamente bajo el enfoque One Health.',

        {
          type: 'bold',
          content: 'Más que datos. Máis ca datos. More than data.',
        },
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
        { type: 'bold', content: '💬 Questions? Write to us at onehealth@cesga.es' },
      ],
    },
    {
      key: 'gobernanza-espacio-datos',
      title:
        'Governance in a data space: the “invisible” layer that makes everything work',
      date: '2025-12-15',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      excerpt:
        'Governance is the invisible layer that allows a data space to operate in a secure, fair, and reusable way.',
      description: [
        'When talking about data spaces, words like connectors, APIs, standards, or interoperability usually come up. All of that is important, but there is one piece that often remains in the background and actually holds everything together: governance.',

        'Governance is what prevents a data space from turning into a “WhatsApp group of datasets,” where no one knows what can be used, who is responsible if something goes wrong, or how compliance with conditions can be demonstrated.',

        {
          type: 'bold',
          content:
            'In the DATAlife multisector demonstrator, governance is designed to enable data sharing that is useful, secure, and fair, generating value in a One Health environment.',
        },

        {
          type: 'h2',
          content: 'So… what exactly is governance?',
        },

        'Think of governance as the rules of the game, but also as the referee and the scoreboard.',

        'The rules define what can be shared and under which conditions. The referee determines what happens in case of problems or non-compliance. The scoreboard shows whether the data space is working and delivering value.',

        'At the Demonstrator Center, a distinction is also made between governance (day-to-day rules and controls) and data governance, which corresponds to the strategic layer: objectives, risks, policies, and monitoring.',

        {
          type: 'h2',
          content: 'The three key questions governance answers',
        },

        {
          type: 'h3',
          content: '1) How is the data space organized?',
        },

        'Governance defines who makes decisions, how new participants join, what happens when someone leaves the space, and how conflicts are managed, all through clear and transparent processes.',

        {
          type: 'h3',
          content:
            '2) How is it ensured that everyone “speaks the same language”?',
        },

        'In a multisector data space, interoperability is not just about exchanging files, but about ensuring that data is understood, used correctly, and reusable.',

        'This is why work is carried out at the legal, organizational, semantic, and technical levels, using common formats and recognized vocabularies such as FHIR, OMOP, DICOM, ICD-10, SNOMED, or LOINC.',

        {
          type: 'h3',
          content: '3) What can be done with the data and what cannot?',
        },

        'This is where licenses, terms of use, traceability, data quality, privacy, and security come into play. Each entity retains control over its data within a common framework that prevents misunderstandings and ensures compliance.',

        {
          type: 'h2',
          content: 'Clear roles to avoid grey areas',
        },

        'A data space works better when each actor knows their responsibilities. At the Demonstrator Center, roles such as governing authority, space operator, provider, and data/service consumer are defined.',

        'This role definition reduces friction, saves time, and makes the system more scalable.',

        {
          type: 'h2',
          content: 'Observability: being able to prove it',
        },

        'It is not enough to say “we comply.” A trustworthy data space must be able to demonstrate compliance through logs, traces, and reports that allow auditing access, transfers, and data usage.',

        {
          type: 'h2',
          content: 'What do you gain from good governance?',
        },

        'Less uncertainty, greater legal and technical security, improved data reuse, and measurable impact are some of the direct benefits of well-designed governance.',

        {
          type: 'bold',
          content:
            'In short, governance is what allows a data space not only to exist, but to truly function.',
        },

        {
          type: 'h2',
          content: 'What comes next?',
        },

        'To join a data space like ours, it is essential to be clear about your role, the data or services you will provide or consume, and the applicable conditions. With this clarity, onboarding stops being a maze and becomes an orderly and predictable process.',
      ],
    },
    {
      key: 'ontologies-vocabularies',
      date: '2026-01-26',
      title:
        'Ontologies and vocabularies in data spaces: a simple guide from the DATAlife Demonstrator Center',
      excerpt:
        'In a data space, sharing is not enough: everyone must understand the information in the same way. This practical guide explains vocabularies and ontologies, common standards, and a straightforward path to align data with them.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        'In a data space, sharing information is not enough: it is essential to understand it in the same way. Two key tools help achieve this: vocabularies and ontologies. They allow different systems, organizations, and professionals to speak a shared language.',

        {
          type: 'h2',
          content:
            '➡️ Vocabularies and ontologies: two distinct building blocks',
        },

        { type: 'h4', content: 'What is a vocabulary?' },
        'A vocabulary is a structured set of terms and codes used to name concepts consistently. For example, a specific code for “PCR”, another for “SARS-CoV-2”, or for “influenza vaccine”. Its goal is to remove ambiguity and ensure that all parties use the same identifiers.',

        { type: 'h4', content: 'What is an ontology?' },
        'An ontology not only defines concepts, but also the relationships between them. It can express, for instance, that a “vaccine” belongs to a certain category, or that a “laboratory observation” is associated with a “patient”. In essence, it is a conceptual map describing how a knowledge domain is organized.',

        { type: 'h2', content: '➡️ Why speaking the same language matters' },

        { type: 'h4', content: 'Real interoperability' },
        'If each organization defines concepts differently, connecting data becomes extremely difficult. Shared vocabularies ensure that “patient”, “vaccine lot”, or “dispensing site” are interpreted consistently across systems.',

        { type: 'h4', content: 'More FAIR data' },
        'Semantic standards support data that is more findable (clear metadata), interoperable (compatible formats), and reusable (well-documented definitions and licenses).',

        { type: 'h4', content: 'Quality and governance' },
        'Using well-defined concepts and coherent relationships reduces errors, simplifies validation, and provides traceability for changes.',

        { type: 'h4', content: 'Scalability' },
        'A strong semantic foundation makes it possible to connect domains as diverse as health, social care, pharmacy, or the environment.',

        { type: 'h2', content: '➡️ Common standards in data spaces' },

        { type: 'h4', content: 'Data models and formats' },
        '• HL7 FHIR for structured clinical information.',
        '• OMOP CDM for analytics and data science.',
        '• RDF/OWL to build knowledge graphs.',
        '• DCAT / DCAT-AP to describe datasets in catalogs.',
        '• JSON-LD / Schema.org to add semantics on the web.',

        { type: 'h4', content: 'Vocabularies and terminologies' },
        '• SNOMED CT for clinical concepts.',
        '• LOINC for lab tests and observations.',
        '• ATC / RxNorm for medications.',
        '• ICD-10/11 for diagnoses.',

        { type: 'h4', content: 'Biomedical and omics ontologies' },
        '• OBO Foundry ontologies such as HPO, ChEBI, or OBI.',
        '• GA4GH-driven resources for genomic data.',

        { type: 'h2', content: '➡️ How data is aligned with these standards' },

        { type: 'h4', content: '1) Identify key concepts' },
        'For example: vaccine type, administration date, batch/lot, patient, health area…',

        { type: 'h4', content: '2) Link each concept to a standard code' },
        'Examples:',
        '• “PCR” → LOINC.',
        '• “Influenza vaccine” → SNOMED or ATC.',
        '• “Healthcare facility” → location-related concepts in FHIR.',

        { type: 'h4', content: '3) Document basic rules' },
        'Units, valid ranges, required fields, data types, constraints.',

        { type: 'h4', content: '4) Transform the data' },
        'Through mapping (ETL) processes that produce formats such as FHIR or OMOP from original sources.',

        { type: 'h4', content: '5) Manage equivalences' },
        'If different sources use different codes, you can create mapping tables or SKOS graphs.',

        { type: 'h4', content: '6) Maintain governance' },
        'Clear versioning, well-defined update processes, and understandable documentation.',

        { type: 'h2', content: '➡️ Recommended best practices' },
        '• Reuse standard vocabularies whenever possible.',
        '• Publish stable URIs for internal concepts.',
        '• Document with simple, up-to-date examples.',
        '• Version models and ontologies with clear criteria.',
        '• Include licenses and usage conditions for metadata.',

        { type: 'h2', content: '➡️ Common pitfalls' },
        '• Assuming exact equivalences when only approximate similarity exists.',
        '• Creating internal codes without accessible documentation.',
        '• Mixing vocabulary versions without stating it.',

        {
          type: 'quote',
          content:
            'The goal is clear: make interoperability smooth, understandable, and sustainable over time.',
        },
      ],
      featured: false,
    },
    {
      key: 'team-demonstrator-2026',
      date: '2026-02-20',
      title: 'The Demonstrator Center team',
      excerpt:
        'The CESGA Multisectoral One Health Data Space Demonstrator is supported by a multidisciplinary team that combines coordination, engineering and research profiles to bring data sharing and data valorization technologies into real-world scenarios.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        {
          type: 'h2',
          content: 'Meet the people behind the data space',
        },

        'The CESGA Multisectoral One Health Data Space Demonstrator is supported by a multidisciplinary team that combines coordination, engineering and research profiles to bring data sharing and data valorization technologies into real-world scenarios.',
        'Our goal is to accelerate digital transformation in areas such as biotechnology, agri-food, the forest–marine–industrial sector and health, integrating artificial intelligence, big data and high-performance computing (HPC) capabilities. We work so that the use cases of the DATAlife multisectoral demonstrator evolve from definition to validation and production deployment, fostering an interoperable, secure and scalable data space.',
        'The team activity is structured through project coordination led by Javier Cacheiro, together with the technical support and execution carried out by Pedro Ferreiro. Supporting technically but more focused on the research area are the rest of the team members. Providing expertise in simulation and computational chemistry are Miguel Carmena and Marta Castiñeira, and in advanced analytics and artificial intelligence, Ledicia Díaz and Lara Vázquez. In this way, we cover end-to-end use case validation, service deployment and the adoption of best practices to create a robust and impact-oriented data space.',

        { type: 'h2', content: 'Javier Cacheiro López' },
        {
          type: 'image_profile',
          src: JCacheiroImg,
          alt: 'Javier Cacheiro López',
        },
        'Javier Cacheiro López is Project Manager and responsible for coordinating the Big Data area at the Galicia Supercomputing Center (CESGA), where he promotes initiatives combining complex project management with a strong technical foundation in Big Data, high-performance computing (HPC) and artificial intelligence (AI). His profile integrates leadership of multidisciplinary teams, milestone planning and monitoring, and alignment of scientific and organizational needs with advanced technological solutions.',
        'He holds professional accreditation in project management from the Project Management Institute (PMI) and has been a Project Management Professional (PMP) since 2009. He obtained his PhD in Physics in 2003 and received Extraordinary Awards in both his degree and doctorate, reflecting an academic trajectory of excellence. He currently coordinates the creation of DATAlife (One Health), a strategic data space requiring integration of technical, scientific and governance components.',
        'Throughout his career he has participated in more than 20 European, national and regional projects, including initiatives such as EGEE, EGI-InSPIRE and TRAFAIR, performing coordination and technical responsibility roles. He is author of more than 70 scientific publications in international journals and conferences, demonstrating sustained research activity and proven ability to deliver results in highly demanding technological and collaborative environments.',

        { type: 'h2', content: 'Pedro Ferreiro Rega' },
        {
          type: 'image_profile',
          src: PFerreiroImg,
          alt: 'Pedro Ferreiro Rega',
        },
        'Pedro Ferreiro Rega holds a degree in Biotechnology from the Universidade de Santiago de Compostela (USC). He later completed a Master’s in Bioinformatics at the Universidad Internacional de Valencia (VIU).',
        'He joined the CESGA data space team in 2025, where he currently carries out his work. Previously, his research focused on the study of peripheral nervous system pathologies using bioinformatics analysis techniques, with particular interest in diabetic neuropathy. In his free time he enjoys reading and spending time with friends.',

        { type: 'h2', content: 'Lara María Vázquez González' },
        {
          type: 'image_profile',
          src: LVazquezImg,
          alt: 'Lara María Vázquez González',
        },
        'Lara Vázquez González holds a PhD in Information Technology Research from the Universidade de Santiago de Compostela (USC), where she also obtained a degree in Computer Engineering in 2019. She later completed a Master’s in Bioinformatics and Biostatistics at the Universitat Oberta de Catalunya (UOC) in 2020.',
        'In 2021 she received a predoctoral support grant from the Xunta de Galicia, which allowed her to develop her doctoral thesis in bioinformatics. Her research focused on the application of machine learning techniques to improve and accelerate the diagnosis of diseases of microbial origin, with special attention to periodontitis. She currently works at CESGA in the Demonstrator Center project. In her free time she enjoys reading, traveling and listening to music.',

        { type: 'h2', content: 'Miguel Carmena Bargueño' },
        {
          type: 'image_profile',
          src: MCarmenaImg,
          alt: 'Miguel Carmena Bargueño',
        },
        'Miguel Carmena Bargueño is a biochemist from UCLM and completed a Master’s in Bioinformatics at the University of Murcia and UPCT. He obtained his PhD in the BIO-HPC group at UCAM (2024). His thesis focused on the use of Molecular Dynamics simulations and Machine Learning in the context of drug discovery. During his thesis he completed a research stay in Vienna, where he trained in pharmacological modeling applications. He currently works at CESGA as a research technician in computational chemistry. In his free time he enjoys listening to music, reading graphic novels and playing board games.',

        { type: 'h2', content: 'Marta Castiñeira Reis' },
        {
          type: 'image_profile',
          src: MCastineiraImg,
          alt: 'Marta Castiñeira Reis',
        },
        'Marta Castiñeira Reis is a computational chemist specialized in mechanistic chemistry elucidation, catalysis and automation. She obtained her PhD in Theoretical Chemistry and Molecular Modeling at the University of Vigo (2019) and has developed an international career. She carried out a three-year postdoctoral stay at the University of Groningen, where she led the computational section of the S. R. Harutyunyan group focusing on enantioselective processes. At CiQUS (USC) she co-led a research line in astrochemistry focused on automated mechanism elucidation. She has accumulated more than 500 teaching hours, co-supervised 10 bachelor theses and several master theses. She currently works at CESGA in the Demonstrator Center project. Outside the professional field she enjoys nature, reading and animals.',

        { type: 'h2', content: 'Ledicia Díaz Lago' },
        { type: 'image_profile', src: LDiazImg, alt: 'Ledicia Díaz Lago' },
        'Ledicia Díaz Lago is a software-oriented physicist specialized in data science, modeling and applied machine learning. She graduated in Physics from the Universidade de Santiago de Compostela and completed a Master’s in Financial Technologies at Universidad Carlos III de Madrid, where she worked on deep reinforcement learning.',
        'She has developed her career between research and industry, with experience in predictive models, complex data analysis and advanced analytics in both academic and business environments. She currently works as a machine learning and data science research technician at CESGA, participating in projects related to data spaces, interoperability and technology transfer.',
      ],
    },
    {
      //NEW ARTICLE: IAGO
      key: 'taller-one-health-kit',
      date: '2026-03-26',
      title:
        'CESGA One Health Data Space drives integration in the Data Spaces Kit with a workshop for companies and institutions',
      excerpt:
        'The CESGA Multisectoral DATAspace Demonstrator Center held a practical training session aimed at answering questions and supporting companies and institutions in joining the One Health Data Space as a preliminary step before requesting the Data Spaces Kit.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        'On March 23, the CESGA Multisectoral DATAspace Demonstrator Center organized a training session for companies and institutions to answer questions and facilitate their integration into the One Health Data Space as a first step before requesting the Data Spaces Kit.',

        'The session brought together 33 participants, mostly companies and institutions interested in starting or advancing in the use of the One Health Data Space. During the session, a practical introduction to the necessary steps for integration was provided.',

        {
          type: 'h2',
          content: '➡️ Training focused on practical application',
        },

        'Secure and interoperable data sharing is one of the fundamental pillars of data spaces, although many organizations—especially SMEs and institutions—still encounter technical and operational barriers to joining.',

        'To address this need, DATAspace designed this session with a highly practical approach, explaining step by step how to integrate and actively participate in the One Health Data Space.',

        {
          type: 'h4',
          content: 'Connector deployment',
        },
        'The session explained the process for deploying the connector necessary to start operating within the data space.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=z72j1-uQCVo',
          href: 'https://www.youtube.com/watch?v=z72j1-uQCVo',
          external: true,
        },

        {
          type: 'h4',
          content: 'Uploading and managing data assets',
        },
        'It also showed how to upload, organize, and manage data assets within the exchange ecosystem.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=yshUdWjAsw8',
          href: 'https://www.youtube.com/watch?v=yshUdWjAsw8',
          external: true,
        },

        {
          type: 'h4',
          content: 'Declaring evidences within the data space',
        },
        'Another aspect covered was declaring the evidence required to operate correctly within the shared environment.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=CRtcBkdf0Wg',
          href: 'https://www.youtube.com/watch?v=CRtcBkdf0Wg',
          external: true,
        },

        'All of this allowed participants to progressively understand how to engage in the One Health Data Space and apply this process in real contexts.',

        {
          type: 'h2',
          content: '➡️ Next steps and available resources',
        },

        'CESGA One Health DATAspace will continue organizing new training sessions in the coming weeks to keep supporting companies and public and private organizations in their integration and development within the One Health Data Space.',

        {
          type: 'h2',
          content: '➡️ About the DATAspace One Health project',
        },

        'Driven by the Galicia Supercomputing Center, a public entity linked to the Spanish National Research Council and the Xunta de Galicia, the project aims to enable a data space that allows secure cooperation and value generation in the biosanitary ecosystem under the One Health approach.',

        'It is funded with resources from the Recovery, Transformation, and Resilience Plan (PRTR) through the Recovery and Resilience Mechanism (MRR) of the Ministry for Digital Transformation and Public Administration.',

        {
          type: 'h4',
          content: 'A strategic environment for the biosanitary ecosystem',
        },

        'The biosanitary sector constitutes a strategic pillar of the data economy, generating heterogeneous and high-value information—clinical, pharmaceutical, veterinary, agri-food, or environmental—that often remains fragmented across different systems.',

        {
          type: 'h4',
          content: 'A socio-technical pattern for data sharing',
        },

        'In this context, data spaces promoted by CESGA emerge as a socio-technical pattern enabling joint data exchange and usage through clear rules, roles, and responsibilities.',

        'This model combines technological mechanisms like identity, access control, traceability, security, and interoperability with organizational components such as governance, policies, agreements, and onboarding processes.',

        {
          type: 'quote',
          content:
            'A One Health Data Space can accelerate cooperation and value generation when quality data, computing capabilities, and artificial intelligence converge.',
        },

        {
          type: 'h2',
          content: '➡️ More information',
        },

        {
          type: 'link',
          content: '• One Health Data Space participant guide.',
          href: 'https://xdatashare.srv.cesga.es/assets/static/files/Guia-del-participante.pdf',
          external: true,
        },

        {
          type: 'link',
          content: '• Data Spaces Kit application guide.',
          href: 'https://dataspace.cesga.es/kit/guia_solicitud_KIT_CESGA.pdf',
          external: true,
        },
      ],
    },
    {
      key: 'onehealth-dataspace-consolidacion-2026',
      date: '2026-04-16',
      title:
        'The OneHealth DataSpace project of CESGA consolidates itself as a data-sharing initiative for global health',
      excerpt:
        'The OneHealth DataSpace has advanced in its consolidation process as a leading innovation initiative for global health, with the incorporation of more than 10 new entities in recent months.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        'The OneHealth DataSpace, focused on the One Health concept —a term coined by the World Health Organization (WHO) to describe the interrelationship between human, animal and environmental health— has advanced in its consolidation process as a leading innovation initiative for global health with the incorporation of more than 10 new entities in recent months.',

        'The OneHealth DataSpace initiative —funded by the Ministry for Digital Transformation and Public Administration through the Recovery, Transformation and Resilience Plan (PRTR), financed by NextGenerationEU funds— has facilitated access to the Data Spaces Kit of CRED (Data Spaces Reference Center) for the entities that have joined the project. This environment will be integrated into the future One Health 1HealthAI AI Factory of CESGA.',

        {
          type: 'h2',
          content: '22 entities, a real One Health ecosystem',
        },

        'OneHealth DataSpace has reached a total of 22 entities joined to the data space after the closing, on March 31, of the application period for the Data Spaces Kit of CRED. This collaboration framework allows companies, SMEs and institutions to share data securely and optimize its exploitation through advanced technologies.',

        'With an already defined base of participants, OneHealth DataSpace configures a real collaboration scenario around data, with a strong presence of the healthcare domain. Of the total 22 entities joined:',

        '• 81.8% belong to the human health sector',
        '• 13.6% generate environmental health data',
        '• 4.5% correspond to animal health',

        'In terms of activity, 14 of the 22 entities (63.6%) already provide data within the space, reflecting a relevant level of adoption in an early phase of the project.',

        {
          type: 'h3',
          content: 'Beyond data sharing: HPC, Big Data and Cloud',
        },

        'In addition to data sharing, OneHealth DataSpace provides organizations with an advanced technological environment that combines HPC (high-performance computing), Big Data and Cloud (cloud computing). This set of capabilities makes it possible to transform data into useful and actionable knowledge.',

        'More than data. More than data.',

        {
          type: 'h4',
          content: 'About the One Health 1HealthAI AI Factory',
        },

        'The 1Health AI Factory is the only infrastructure within the EuroHPC JU network of AI Factories specifically conceived to support research and innovation framed within the One Health strategy. Driven by CESGA and the Spanish National Research Council (CSIC), it will place Galicia and Spain at the forefront of the European technological ecosystem in global health, offering access to supercomputing, advanced AI tools, and training and support services for the business, academic and research sectors.',

        {
          type: 'h5',
          content: 'About CESGA',
        },

        'The CESGA Foundation (Galicia Supercomputing Center) is a non-profit organization dedicated to scientific research, technological development and innovation since 1993, supported by the Xunta de Galicia and the CSIC. It conducts research, manages an infrastructure integrated into the Spanish Supercomputing Network (RES), recognized as a Singular Scientific-Technical Infrastructure (ICTS) of the State, and provides advanced HPC, Big Data, Cloud and AI services to the scientific, educational and business communities.',
      ],
      featured: false,
    },
    {
      key: 'cumbre-economia-dato-gaiax',
      date: '2026-04-24',
      title: 'OneHealth DataSpace participates in the II Gaia-X Spain Data Economy Summit',
      excerpt:
        'The Galicia Supercomputing Center project shares in Toledo its experience in developing an operational data space within the One Health domain',
      image: GaiaXPonencia,
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        'The Galicia Supercomputing Center project shares in Toledo its experience in developing an operational data space within the One Health domain.',
        'The CESGA Data Space provides, free of charge, storage, processing, supercomputing, and analytics resources, all of which are highly valuable for organizations generating data in the One Health domain; a concept led by the WHO that integrates human, animal, and environmental health.',

        { type: 'h2', content: 'A key moment for the data economy in Europe' },
        'OneHealth DataSpace, an initiative promoted by the Galicia Supercomputing Center (CESGA), participated on April 21–22 in the II Gaia-X Spain Data Economy Summit, held at the El Greco Conference Center in Toledo.',
        'The event brought together companies, public administrations, and technology organizations at a crucial moment for the data ecosystem: the transition from pilot projects to operational, scalable, and sustainable data spaces. In this context, key challenges such as interoperability and value creation from data were highlighted.',

        { type: 'h2', content: 'Participation in Gaia-X: cross-sector collaboration and data sovereignty' },
        'Our colleague Alejo Santolino Simón, Legal Framework and Business Analysis Coordinator of OneHealth DataSpace, actively participated in the event program, contributing to the data economy sessions and socio-health discussions.',
        'During his presentation, the project was introduced under the title “The future of cross-sector collaboration: driving data sovereignty in the digital economy”, highlighting the role of data spaces as enablers of new cooperation models across sectors.',
        'The presentation showcased CESGA’s technological capabilities, including:',
        '• High Performance Computing (HPC) for analyzing complex scenarios',
        '• Cloud environments for service deployment and federated storage',
        '• Big Data technologies to transform data into knowledge',
        '',
        'These capabilities position CESGA as a technological operator capable of ensuring neutrality and data sovereignty in the development of the One Health ecosystem.',

        { type: 'h2', content: 'More than a data space' },
        'OneHealth DataSpace is much more than a data exchange platform. It is built on a supercomputing center that provides organizations with advanced capabilities for computing, processing, storage, and data exploitation.',
        'Thanks to this infrastructure, users can work with their data without worrying about underlying technical complexity, accessing the required resources transparently.',
        'The system is highly flexible and adapts to specific needs, whether through increased CPU usage —the “brain” managing general tasks and the operating system—, GPUs for massive parallel data processing, advanced storage, or other specialized capabilities.',

        { type: 'h2', content: 'A federated model for controlled data sharing' },
        'The project is based on a federated architecture in which data remains under the control of its owners and is shared under defined conditions.',
        'This approach, aligned with Gaia-X principles, supports the development of a data economy based on interoperability, collaboration, and value creation.',
        'In the case of OneHealth DataSpace, this model is applied to the One Health approach, integrating human, animal, and environmental health data to generate shared knowledge.',

        { type: 'h2', content: 'An already operational data space' },
        'One of the key elements presented was the development of a first operational version of the data space, the MVD, which brings together the essential capabilities for a secure and scalable federation.',
        'This environment includes features such as:',
        '• IAM management, federated identity and access',
        '• Governance, Data Sharing Agreement templates, and automated usage policies',
        '• Technical integration through EDC connectors and a sandbox environment',
        '• Observability, access logging, and consent traceability',

        { type: 'h2', content: 'Next step: the One Health AI Factory' },
        'Participation in the II Data Economy Summit also enabled connections with the next stage of the project.',
        'OneHealth DataSpace will continue through the future One Health AI Factory (1HealthAI), promoted by CESGA and the Spanish National Research Council (CSIC) within the EuroHPC-JU framework.',
        'This new infrastructure will advance the use of artificial intelligence applied to data and consolidate a global health innovation ecosystem under the One Health approach.',

        { type: 'h2', content: 'About OneHealth DataSpace' },
        'The OneHealth DataSpace project by CESGA is funded by the Spanish Ministry for Digital Transformation and Public Administration through the Recovery, Transformation and Resilience Plan (PRTR), financed by the European Union NextGenerationEU funds (exp. TSI-100120-2024-12).',

        { type: 'h2', content: 'About CESGA' },
        'The CESGA Foundation (Galicia Supercomputing Center) is a non-profit organization serving scientific research, technological development, and innovation since 1993, supported by the Xunta de Galicia and CSIC. It operates an infrastructure integrated into the Spanish Supercomputing Network (RES), recognized as a Unique Scientific and Technical Infrastructure (ICTS).',

        {
          type: 'bold',
          content: 'More than data.',
        },
      ],
    },
    {
      key: 'galicia-biodays-2026',
      date: '2026-05-08',
      title:
        'OneHealth DataSpace presents its evolution towards the future 1HealthAI Factory at Galicia Biodays 2026',
      excerpt:
        'The project’s Scientific Director, Javier Cacheiro, discusses in an interview with Faro de Vigo the role of the data space and the future European AI infrastructure in Galicia',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        'The project’s Scientific Director, Javier Cacheiro, discusses in an interview with Faro de Vigo the role of the data space and the future European AI infrastructure in Galicia',

        'OneHealth DataSpace participated in Galicia Biodays 2026, organized by BIOGA, an event that brought together companies, technology centers, research groups, organizations, and professionals from the biosanitary and biotechnology ecosystem.',

        'In this context, our Scientific Director, Javier Cacheiro, gave an interview to Faro de Vigo in which he addressed some of the main strategic pillars of OneHealth DataSpace and the project’s evolution towards the future 1HealthAI Factory.',

        { type: 'h2', content: 'One Health: data and computing' },

        'During the interview, Javier Cacheiro explained the One Health approach as a model that integrates human, animal, and environmental health from an interconnected perspective.',

        'One of the key aspects highlighted was the distinctive role of OneHealth DataSpace compared to other conventional data spaces.',

        '“The important thing is the additional capability that allows you to do everything within a single platform: access data and computing.”',

        'In this regard, the project not only facilitates the secure exchange of data between participating entities, but also relies on advanced data processing and analysis technologies.',

        'OneHealth DataSpace incorporates High Performance Computing (HPC), Big Data, and Cloud capabilities provided by CESGA, enabling the secure, interoperable, and scalable management of large volumes of information.',

        'The objective is to provide an integrated environment where data can be analyzed, processed, and transformed into solutions applicable to biosanitary challenges.',

        { type: 'h2', content: 'OneHealth DataSpace as a first step towards the 1HealthAI Factory' },

        'The interview also provided an opportunity to further explore the relationship between OneHealth DataSpace and the future 1HealthAI Factory.',

        'As Javier Cacheiro explained:',

        '“OneHealth DataSpace is the first step towards the 1HealthAI Factory.”',

        'The future infrastructure will be led by CESGA and funded by the European High Performance Computing Joint Undertaking (EuroHPC JU), the Ministry of Science, Innovation and Universities, and the Xunta de Galicia.',

        'It will become the only European artificial intelligence factory specifically designed under the One Health approach.',

        'This new infrastructure will strengthen computing and artificial intelligence capabilities applied to human, animal, and environmental health.',

        { type: 'h2', content: 'A growing project' },

        'OneHealth DataSpace continues to incorporate new entities and use cases related to health, research, and advanced data analysis.',

        'Participation in Galicia Biodays 2026 also strengthened the project’s connection with the One Health ecosystem and opened new collaboration opportunities within the biotechnology and biosanitary sectors.',

        { type: 'h2', content: 'Full interview' },

        {
          type: 'link',
          content: '🔗 Interview in Faro de Vigo',
          href: 'https://www.farodevigo.es/gran-vigo/2026/05/08/javier-cacheiro-director-cientifico-one-129964134.html',
          external: true,
        },
        {
          type: 'link',
          content: '🔗 Interview video',
          href: 'https://www.farodevigo.es/videos/gran-vigo/2026/05/08/javier-cacheiro-director-cientifico-one-129969476.html',
          external: true,
        },
        {
          type: 'bold',
          content: 'More than data.',
        },
      ],
    },
    {
      key: 'gift-premio-ia-salud-2026',
      date: '2026-05-22',
      title:
        'GIFT, a OneHealth DataSpace Use Case, receives the AI in Health Award for Best Unit',
      excerpt:
        'The CHUP Digestive Service team and its IDARA Research Group received two awards in Madrid at the AI BIC Awards',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },

        'The CHUP Digestive Service team and its IDARA Research Group received two awards in Madrid at the AI BIC Awards, organised by FUNDAMED, Gaceta Médica and the Chair of Innovation and Healthcare Management at Rey Juan Carlos University.',

        'The GIFT project (Gastroenterology Interface with Fair Treatment), integrated into OneHealth DataSpace, was recognised with the AI in Health Award for Best Unit for its contribution to the development of innovative artificial intelligence solutions applied to healthcare.',

        'The award was received on 21 May 2026 by Juan Turnes Vázquez, Principal Investigator of the IDARA Group, together with Eva Poveda López, Scientific Director of the Galicia Sur Health Research Institute (IIS Galicia Sur).',

        'In addition, the Digestive Service team of the Complexo Hospitalario Universitario de Pontevedra (CHUP) and its IDARA Research Group received a second award for the “Aicomta” project, recognised for its ability to improve clinical consultations.',

        { type: 'h2', content: 'GIFT and OneHealth DataSpace' },

        'GIFT is an artificial intelligence conversational assistant focused on gastrointestinal health.',

        'The tool helps healthcare professionals search for information through evidence-based and traceable responses validated by the CHUP Digestive Service.',

        'The project stands out for its role in clinical support and healthcare professional training, integrating advanced capabilities for analysis and intelligent access to information.',

        'The March 2026 issue of CESGA’s Díxitos magazine explored the role of this use case within the OneHealth DataSpace ecosystem.',

        { type: 'h2', content: 'Use cases linked to IIS Galicia Sur' },

        'At the same time, other use cases linked to IIS Galicia Sur continue to advance within OneHealth DataSpace.',

        'These include BiomeXplore, Brilliant and AiDataMed, initiatives focused on health, artificial intelligence and advanced data analytics.',

        'This ecosystem is part of the development of the future 1HealthAI Factory, the European infrastructure promoted from Galicia under the One Health approach.',

        'The future infrastructure will integrate advanced supercomputing, artificial intelligence and data analytics capabilities applied to human, animal and environmental health.',

        { type: 'h2', content: 'Training and innovation in AI applied to healthcare' },

        'In this context, the closing event of the initiative “Pontevedra, quen pasa? 6 expertos en saúde, 6 meses” will take place on 25 and 26 June, focused on training and innovation in artificial intelligence applied to healthcare.',

        'The event will feature the participation of Senén Barro, Scientific Director of CiTIUS and one of the leading figures in the field of generative artificial intelligence.',

        'Surgeon Julio Mayol, a reference in medical innovation and digital transformation in healthcare, will also participate.',

        {
          type: 'bold',
          content: 'More than data.',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-1healthai-factory',
      date: '2026-05-28',
      title:
        'OneHealth DataSpace presents results and opens the path to the 1HealthAI Factory',
      excerpt:
        'The final project meeting will bring together institutions, researchers, and organizations at CHUS to share results and progress from the One Health ecosystem',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'italic',
          content:
            'The CESGA data space focused on improving global health, OneHealth DataSpace, will hold its final meeting on June 17 at 9:30 a.m. at CHUS. During the event, it will present the results achieved over the past two years. Research groups working across human, animal, and environmental health will present use cases where the Data Space is proving to be a highly valuable initiative, contributing technological support for better outcomes and evidence generation.',
        },

        'On Wednesday, June 17, the closing event of the OneHealth DataSpace will take place at the Auditorium of the Santiago University Hospital Complex (CHUS). During this event, CESGA will present the results of the OneHealth DataSpace project, an initiative that serves as a precursor to the 1HealthAI Factory, an artificial intelligence factory aimed at improving global health, and a unique initiative in the EU. The meeting will bring together institutional representatives, participating organizations, and use cases to share the main achievements of the project and its evolution within the One Health ecosystem.',

        'The project is part of the European data space strategy and works toward creating a secure, interoperable, and governed environment for sharing and exploiting data related to human, animal, and environmental health, while respecting data sovereignty. All of this follows the One Health approach, “One single health.” The OneHealth DataSpace connects health, research, and industry entities in an environment supported by advanced HPC (High-Performance Computing), Big Data, Cloud, and Artificial Intelligence capabilities provided by CESGA.',

        'During the event, the project team and participating organizations will share results, lessons learned, and challenges identified throughout the project, as well as various initiatives developed within the One Health ecosystem. In addition, Antonio Alcolea, representative of the Ministry for Digital Transformation and Public Administration, will provide an overview of the progress of the Data Space Policy Promotion in Spain.',

        'Registration at:',
        {
          type: 'link',
          content:
            'dataspacedatalife.github.io/onehealth-dataspace-evento-final',
          href: 'https://dataspacedatalife.github.io/onehealth-dataspace-evento-final/',
          external: true,
        },
        {
          type: 'bold',
          content: 'More than data.',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-salud-global',
      date: '2026-06-04',
      title:
        'OneHealth DataSpace: CESGA’s Data Space Addressing the Challenge of Advancing Global Health',
      excerpt:
        'CESGA’s initiative combines data, collaboration, and supercomputing to drive research and innovation in human, animal, and environmental health under the One Health approach.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'italic',
          content:
            'OneHealth DataSpace is CESGA’s initiative aimed at facilitating scientific and technological collaboration to improve global health through secure data sharing and the use of advanced computing, artificial intelligence, and data analytics capabilities.',
        },

        'The Ebola crisis, geographically closer outbreaks such as hantavirus, and major pandemics such as COVID-19 all share one thing in common: an interconnected reality linking people, animals, and the environment in which they live. The World Health Organization (WHO) refers to this vision as One Health.',

        'In this context, the Galicia Supercomputing Center (CESGA) promotes OneHealth DataSpace, an initiative built upon one of Europe’s most advanced public technological infrastructures and designed to facilitate scientific and technological collaboration to improve global health under the One Health approach.',

        {
          type: 'h2',
          content: 'Data, Collaboration and Technology',
        },

        'How does Galician supercomputing contribute to this challenge? By combining three key elements: data, collaboration, and technology. The availability of high-quality information makes it possible to build solid scientific foundations for addressing complex challenges related to human, animal, and environmental health, while always ensuring data sovereignty and the privacy of personal health information.',

        'The ability to collaborate without compromising data security is one of today’s greatest technological challenges. OneHealth DataSpace (OHDS), CESGA’s collaborative ecosystem, was created precisely to facilitate cooperation among healthcare organizations, research institutions, and companies.',

        'Funded through the European NextGenerationEU programme by the State Secretariat for Digitalization and Artificial Intelligence of the Ministry for Digital Transformation and Public Administration, the project integrates data and computing within a single platform, providing participants with the tools needed to transform human, animal, and environmental health data into real-world solutions.',

        'All of this is achieved without compromising security or data sovereignty. In fact, within OneHealth DataSpace, data always remains under the control of its owners.',

        {
          type: 'h2',
          content: 'More Than Data',
        },

        'Traditionally, data spaces seek to solve the problem of how to share data. However, from a scientific perspective, obtaining data is only the beginning of the research process.',

        'To fully leverage data, we need an environment where it can be stored, analyzed, and processed. Only then is it possible to generate results that create value, whether for other research initiatives or directly for society.',

        'OneHealth DataSpace provides these services and makes Big Data, High-Performance Computing (HPC), and Cloud resources available to participants, all integrated directly within the data space.',

        'The goal is to enable data to be transformed into evidence, knowledge, and innovative solutions capable of addressing global health challenges.',

        {
          type: 'h2',
          content: 'The Ecosystem’s Pillars: Sovereignty and Supercomputing',
        },

        'OneHealth DataSpace also provides a trusted environment built upon three technological pillars.',

        '● Participants retain full control at all times over who can access their data and for what purpose. At the same time, privacy is guaranteed, allowing sensitive information to be shared within a secure environment.',

        '● Unlike other data spaces, OneHealth DataSpace is directly connected to CESGA’s computing and storage capabilities. This makes it possible to move from data discovery to analysis without leaving the secure ecosystem.',

        '● The platform incorporates interoperability and metadata enrichment mechanisms that ensure information is Findable, Accessible, Interoperable, and Reusable (FAIR), maximizing the impact of every project.',

        {
          type: 'h2',
          content: 'An Ecosystem Open to Participation',
        },

        'Participation in OneHealth DataSpace is open to institutions and companies linked to the One Health domain. The ecosystem currently includes 22 participating organizations and several use cases covering areas as diverse as gastrointestinal health, drug discovery, and the analysis of wind farms’ environmental impact.',

        'The project’s design incorporates a simplified onboarding process that encourages participation in both data processing activities and existing use cases, while also supporting the coordination of new collaborative projects among members.',

        'The objective is to bring together initiatives that, through collaboration or the use of OneHealth DataSpace services, contribute to improving global health.',

        {
          type: 'h2',
          content: 'The Gateway to the 1HealthAI Factory',
        },

        'OneHealth DataSpace serves as the essential foundation for the 1HealthAI Factory, the only European artificial intelligence factory dedicated exclusively to the One Health ecosystem.',

        'This positions CESGA as a European leader in artificial intelligence applied to global health within the EuroHPC Joint Undertaking network, a forward-looking infrastructure where data becomes the driving force behind a more integrated, intelligent, and sovereign approach to global health.',

        'The DATAlife Data Spaces Demonstration Center project, within which OneHealth DataSpace is integrated, is funded by the State Secretariat for Digitalization and Artificial Intelligence (SEDIA) of the Ministry for Digital Transformation and Public Administration, under the call for Data Space Demonstration Centers and Use Cases (Order TDF/1461/2023 of December 29).',

        'The project also receives funding from the European Union – NextGenerationEU through Spain’s Recovery, Transformation and Resilience Plan.',

        {
          type: 'bold',
          content: 'More than data.',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-43-casos-uso-2026',
      date: '2026-07-22',
      title:
        "CESGA's Data Space Now Reaches 43 Research Initiatives Under the One Health Approach",
      excerpt:
        "OneHealth DataSpace, CESGA's data space, is consolidating as an active ecosystem, with 36 member entities collaborating on a total of 43 use cases to achieve better outcomes for global health.",
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'bold',
          content:
            "OneHealth DataSpace, CESGA's data space, is consolidating as an active ecosystem, with 36 member entities collaborating on a total of 43 use cases to achieve better outcomes for global health.",
        },

        "OneHealth DataSpace, CESGA's data space, continues to grow and is establishing itself as a collaborative ecosystem to improve global health.",

        'The 43 use cases currently taking part in OneHealth DataSpace represent a significant qualitative leap compared with the 7 use cases the project started with, or the 22 member entities the CESGA data space had registered last April.',

        "In just a few months, OneHealth DataSpace has gone from being a project in its consolidation phase to becoming an active, solid ecosystem in which 36 member entities share knowledge, analyse it, process it and store it with a common goal: improving global health from an integrative approach that treats human, animal and environmental health as a whole.",

        'OneHealth DataSpace offers its participating entities advanced computing capabilities (HPC), Big Data analytics, high-performance storage and the exposure of results through ready-to-use applications and services, all under the One Health approach that integrates human, animal and environmental health.',

        { type: 'h2', content: 'A Growing Ecosystem' },

        'The organisations taking part in OneHealth DataSpace have diverse profiles, both public and private, linked to research, healthcare, technological innovation and knowledge generation under the One Health approach.',

        'OneHealth DataSpace provides these organisations with a secure, interoperable and governed digital infrastructure for sharing and making the most of data, integrated with HPC, Big Data, Cloud and Artificial Intelligence resources from the Galicia Supercomputing Center (CESGA).',

        { type: 'h2', content: 'The Project Extends Its Activity Until 31 August' },

        "Alongside this new growth phase, the project is extending its activity until 31 August 2026, allowing it to continue onboarding new member entities, consolidate the progress made so far, launch new initiatives, and strengthen outreach, training and knowledge-transfer actions.",

        "This will also make it possible to advance OneHealth DataSpace's evolution as the gateway to the future 1HealthAI Factory, the European infrastructure driven from Galicia for applying artificial intelligence to the One Health domain.",

        {
          type: 'h2',
          content:
            "Mini Meetings: Explaining How OneHealth DataSpace Responds to the Sector's Needs",
        },

        "As part of this new stage, CESGA's project has launched the OneHealth DataSpace Mini Meetings, an initiative designed to bring the data space closer to research groups and organisations interested in exploring new collaboration opportunities.",

        {
          type: 'bold',
          content:
            'Under the motto "Your data. Your control. Knowledge that transforms global health," each session combines a brief presentation of the project with a space for dialogue aimed at identifying needs and driving new collaborations within the One Health ecosystem.',
        },

        'The first of these meetings took place on 23 June in the Amphitheatre Hall of IDIS (Health Research Institute of Santiago), at the CHUS in Santiago de Compostela. In July it continued with further meetings, on 8 July at the Biomedical Research Institute of A Coruña (INIBIC) and on 9 July at the Global Health and Sustainable Development Research Institute (iTERRA) in Lugo, and on 29 July the final session will take place at the Galicia Sur Health Research Institute (IIS Galicia Sur) at the Álvaro Cunqueiro Hospital in Vigo.',

        {
          type: 'h2',
          content: '22 July: OneHealth DataSpace Results Presentation Meeting',
        },

        'On Wednesday 22 July, OneHealth DataSpace will hold its Results Presentation Meeting at CiMUS (Center for Research in Molecular Medicine and Chronic Diseases) in Santiago de Compostela; a session in which the project team will share the project\'s main achievements and present some of its use cases. The session will also introduce the National Health Data Space (ENDS) and the European Health Data Space (EHDS), and will address the future opportunities opened up by this initiative as a gateway to the future 1HealthAI Factory.',

        "The meeting will feature institutional representatives from GAIN, CiMUS and CESGA, together with Manuel Brocos, from the General Directorate for Data (SEDIA), who will present the National Health Data Space, and Lucía Escapa Castro, Head of the Cabinet of the General Secretariat for Digital Health, Information and Innovation of Spain's National Health System (Ministry of Health), who will present the European Health Data Space. The session will close with a talk on OneHealth DataSpace's role as a starting point towards the future 1HealthAI Factory, the only European artificial intelligence infrastructure conceived specifically under the One Health approach.",

        {
          type: 'bold',
          content: 'Más que datos. Máis ca datos. More than data.',
        },
      ],
    },

  ],


  gl: [
    {
      key: 'initial-post-2025',
      date: '2025-11-05',
      title:
        'Do dato ao impacto: así avanza o Centro Demostrador Multisectorial DATAlife',
      excerpt:
        'Nos últimos meses demos pasos firmes para aterrar os espazos de datos no ecosistema galego, conectando necesidades reais con tecnoloxía, gobernanza e boas prácticas.',
      image: ArchitectureImg,
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        { type: 'h1', content: 'Do dato ao impacto' },
        'Nos últimos meses demos pasos firmes para aterrar os espazos de datos no ecosistema galego, conectando necesidades reais con tecnoloxía, gobernanza e boas prácticas. A continuación, contámosche que fixemos, que aprendemos e como sumarte a unha iniciativa que está cambiando o xeito no que compartimos e aproveitamos a información.',
        { type: 'h2', content: 'Que fixemos?' },
        {
          type: 'bold',
          content: '18 de xuño · Presentación pública do Centro Demostrador',
        },
        'Celebramos a presentación oficial do Centro Demostrador multisectorial DATAlife, con foco en como un espazo de datos impulsa a investigación e a innovación baixo o paraugas One Health. Houbo relatorios de persoas expertas, casos de uso e unha chamada clara á colaboración.',
        'Tras as charlas da mañá, puidemos gozar dunha sesión colaborativa na que participamos tanto o Centro Demostrador como os casos de uso, guiados por asesores do Centro de Referencia de Espazos de Datos (CRED). Foi unha sesión moi produtiva!',
        {
          type: 'image',
          src: DinamicaCRED,
          alt: 'Participantes da dinámica colaborativa',
          caption:
            'Equipo do Centro Demostrador e casos de uso durante a dinámica colaborativa do evento inicial co CRED',
        },
        {
          type: 'bold',
          content:
            '2 de outubro · Obradoiro técnico con SQS: FarmaciaVAX + D-Spacer',
        },
        'Organizamos un obradoiro práctico onde mostramos, de extremo a extremo, como se materializa un espazo de datos en saúde coa plataforma D-Spacer (SQS). Exploramos como conectarse ao espazo de datos, como intercambiar información mantendo a soberanía, así como operar de forma segura entre organizacións.',
        {
          type: 'link',
          content:
            '▶️ Gravación: Obradoiro de espazo de datos FarmaciaVAX coa plataforma D-Spacer de SQS',
          href: 'https://www.youtube.com/watch?v=50Ahpz-1VPI',
          external: true,
        },
        {
          type: 'bold',
          content:
            '31 de outubro · Obradoiro de presentación de XDataShare (MVD)',
        },
        'Máis adiante, ese mesmo mes, organizamos un segundo obradoiro onde mostramos como traballar nun espazo de datos usando a plataforma XDataShare baseada en Eclipse Dataspace Components (EDC) a través do noso caso de uso sintético (FarmaciaVAX).',
        'Concretamente, tivemos unha introdución a XDataShare na que se presentou a plataforma de intercambio de datos, os seus principios de interoperabilidade e seguridade, os roles implicados e a arquitectura básica: catálogo, control de acceso, trazabilidade e auditoría.',
        'A continuación, describiuse o caso de uso FarmaciaVAX, introduciuse o contexto e obxectivos do caso, actores participantes, fontes de datos, modelo de gobernanza e cumprimento normativo. Detallouse o fluxo de datos de extremo a extremo. Ademais, fixose un percorrido guiado polo proceso de alta: rexistro institucional, verificación de identidade e asignación de roles.',
        {
          type: 'link',
          content:
            '▶️ Gravación: Obradoiro de espazo de datos FarmaciaVAX coa plataforma XDataShare (MVD)',
          href: 'https://www.youtube.com/watch?v=u7zTyU795n8',
          external: true,
        },
        { type: 'h2', content: 'O noso catálogo' },
        'O espazo de datos DATAlife combina interoperabilidade, gobernanza, seguridade e operación sobre infraestruturas de alto rendemento. Na web atoparás o noso catálogo así como información útil sobre o noso espazo de datos.',
        {
          type: 'link',
          content: '▶️ Consulta o catálogo',
          href: '/catalog',
        },
        { type: 'h2', content: 'Casos de uso actuais' },
        { type: 'bold', content: 'Brilliant' },
        'Observatorio de sarcopenia con IA aplicada a RM lumbar (repositorios públicos) e variables demográficas simuladas. Entrega datasets estruturados e interoperables para detección temperá e análise poboacional, con servizos reutilizables orientados a monitorización, diagnóstico asistido e explotación de datos clínicos anonimizados. Posible uso de datos hospitalarios externos.',
        { type: 'bold', content: 'CeliaSpace' },
        'Conxunto de datos procedentes de conversas entre persoas maiores e a asistente virtual Serenia (app e WhatsApp), enfocado no acompañamento e benestar emocional. Tras anonimización, compártese con entidades como Serenia Solutions S.L. e i4Life (Datiacare) para desenvolvemento e adestramento de algoritmos de avaliación de saúde.',
        { type: 'bold', content: 'Datiacare' },
        'Plataforma para seguimento domiciliario de persoas maiores mediante sensores + IA. Analiza actividade cotiá para detectar anomalías e xerar alertas. Modelo mixto B2C/B2B/B2G (familias, centros e administracións). Achega valor económico, social, científico e ambiental, con forte enfoque en ética e privacidade (RGPD, DPIA) e visión de integración en nós europeos.',
        { type: 'bold', content: 'AIDataMed' },
        'Xeración de datos sintéticos en gastroenteroloxía con modelos de IA adestrados sobre información clínica, sociodemográfica, nutricional e ambiental anonimizada e validada por expertos. Corrixe sesgos e mellora representatividade. Implementación en OMOP CDM, aliñada con IDSA/Gaia-X, despregada en CESGA e baixo principios FAIR.',
        {
          type: 'bold',
          content: 'GIFT (Gastroenterology Interface with Fair Treatment)',
        },
        'Asistente conversacional para gastroenteroloxía e hepatoloxía con evidencia científica e referencias actualizadas. Apoia a toma de decisións clínicas e a xestión, acelerando trámites e fomentando a investigación con altos estándares de calidade e fiabilidade.',
        { type: 'bold', content: 'BiomeXplore' },
        'Plataforma interoperable para análise de microbiota a partir de datos sintéticos (p.ex. SEQ2MGS + metadatos simulados). Ofrece repositorio, APIs, pipelines, IA, visualización e benchmarking. Nó reutilizable e escalable que promove compartición responsable e cumprimento FAIR. Posible integración de datos ambientais.',
        { type: 'bold', content: 'Salusbench' },
        'Plataforma de minería de procesos hospitalarios con apoio de LLMs. Reconstrúe fluxos reais a partir de datos anonimizados, xera indicadores e facilita benchmarking, simulación de cambios e detección de pescozos de botella. Colabora con hospitais (públicos/privados) e aplica marcos RGPD e UNE 0087:2025. Modelo de negocio por subscrición + servizos; prevé mecanismos de retorno para provedores de datos.',
        { type: 'h2', content: 'Divulgación: por que o contamos e como' },
        'Desde o equipo do Centro Demostrador puxemos en marcha unha liña de divulgación para explicar os conceptos clave dos espazos de datos cun enfoque claro, útil e ameno... Mantente atento/a porque proximamente iniciaremos esta liña!',

        { type: 'h2', content: 'E agora que?' },
        'Isto é só o comezo. Nas próximas semanas publicaremos novos materiais, fichas detalladas de casos de uso e datas de próximas sesións. Atento/a ás nosas novidades!',

        { type: 'h2', content: 'Como participar' },
        'Se queres explorar a demo ou preparar a túa organización para conectarse a un espazo de datos, contáctanos e permanece atento/a á nosa web.',
      ],
    },

    {
      key: 'dataspace-glossary-2025',
      date: '2025-11-18',
      title: 'Espazo de datos: 12 definicións que che aforran reunións 🚀',
      excerpt:
        'Se estás a montar ou conectarte a un espazo de datos, aliñar vocabulario desde o principio evita friccións. Aquí tes un glosario esencial 📘.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        { type: 'h1', content: 'Glosario esencial' },

        'Se estás a montar ou conectarte a un espazo de datos, aliñar vocabulario desde o principio evita friccións e acelera decisións. Aquí tes un glosario esencial 📘:',

        { type: 'bold', content: '1) Espazo de datos' },
        'Ecosistema onde distintas organizacións comparten e usan datos baixo regras comúns de gobernanza, seguridade, interoperabilidade e confianza verificable (acordos, auditorías, trazabilidade).',

        { type: 'bold', content: '2) Caso de uso' },
        'Iniciativa liderada por unha ou máis entidades que emprega o espazo de datos para resolver un reto concreto mediante o uso de datos compartidos. Exemplos: vixilancia epidemiolóxica, optimización de rutas loxísticas, avaliación de resultados en saúde.',

        { type: 'bold', content: '3) Produto de datos' },
        'Segundo UNE 0087:2025, un produto é unha “unidade que inclúe datos máis metadatos, políticas, servizos e elementos de soporte”. Na práctica: unha capa de valor sobre un conxunto de datos do espazo para que o consumo sexa controlado, documentado e útil. Exemplo: un portal de benchmarking hospitalario que expón indicadores normalizados e actualizados.',

        { type: 'bold', content: '4) Catálogo de datos' },
        'Inventario navegable con datos, produtos e/ou servizos de datos con metadatos estandarizados (quen, que, periodicidade, calidade, licenzas, custo e como acceder).',

        { type: 'bold', content: '5) Provedor de datos' },
        'Participante que pon a disposición datos, produtos e/ou servizos. Se os datos son xerados por el mesmo, asume ademais o rol de produtor (responsable da orixe e da calidade).',

        { type: 'bold', content: '6) Consumidor de datos' },
        'Participante que emprega datos, produtos e/ou servizos cun propósito declarado e baixo contrato/políticas. Pode ser unha entidade, unha persoa ou dispositivos.',

        { type: 'bold', content: '7) Conector' },
        'Compoñente técnico que permite a interoperabilidade e o intercambio seguro. Próximamente haberá unha guía práctica para escoller e despregar conectores.',

        { type: 'bold', content: '8) Gobernanza' },
        'Implementación práctica do goberno do dato no espazo: roles, normas e procesos (xestión de accesos, resolución de incidencias, métricas, auditorías e mellora continua).',

        { type: 'bold', content: '9) Políticas de acceso e uso' },
        'Condicións lexibles por persoas e máquinas que regulan o uso dos datos: propósito, minimización, retención, redistribución, anonimización/pseudonimización, seguridade e cumprimento normativo.',

        { type: 'bold', content: '10) Interoperabilidade semántica' },
        'O “dicionario común” que asegura que termos como “paciente”, “centro” ou “data” signifiquen o mesmo entre organizacións: ontoloxías, vocabularios, esquemas e mapeos. A interoperabilidade é un tema amplo que se tratará en detalle nun próximo artigo.',

        {
          type: 'bold',
          content: '11) Rastrexabilidade e rexistro de consentimentos',
        },
        'Evidencias de quen accedeu a que, cando, para que e con que base legal/consentimento; inclúe rexistros verificables, versións e mecanismos de rendición de contas.',

        { type: 'bold', content: '12) Contrato de adhesión' },
        'Marco legal que define responsabilidades, garantías, sancións, propiedade intelectual, seguridade, política de saída (offboarding) e continuidade operativa.',

        {
          type: 'h2',
          content: 'Consellos prácticos (para comezar con bo pé)',
        },
        '• Caso de uso primeiro: obxectivo, métricas e valor agardado.',
        '• Produto de datos mínimo viable: que expones, a quen e como.',
        '• Políticas e roles antes que tecnoloxía: despois aliña conectores, catálogos e APIs con esas decisións.',
      ],
      featured: false,
    },

    {
      key: 'mvd-access-2025',
      date: '2025-12-02',
      title: 'Acceso ao MVD do noso Espazo de Datos',
      excerpt:
        '¡Segundo gran fito! O MVD xa está operativo para o noso Espazo de Datos en One Health.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        {
          type: 'bold',
          content:
            '¡Segundo gran fito! O MVD xa está operativo para o noso Espazo de Datos en One Health.',
        },

        'Esta versión inicial permite validar de extremo a extremo os fluxos de intercambio seguro de datos, probar os servizos comúns e exercitar os primeiros casos de uso piloto con datos en contorno de probas e, cando proceda, con datos reais debidamente protexidos.',

        { type: 'h2', content: 'Que é o MVD?' },
        'O MVD (Minimum Viable Dataspace) é a primeira versión operativa do Espazo de Datos que reúne o conxunto mínimo de capacidades necesarias para poñer en marcha a federación: identidade e acceso, descubrimento de datos, gobernanza básica, trazabilidade e conectividade entre provedores e consumidores. Serve para aprender rápido, medir impacto e axustar o deseño antes do escalado.',

        { type: 'h2', content: 'Que inclúe esta fase (capas e servizos)' },
        '• Xestión de identidade e acceso federado: autenticación, autorización por políticas e roles.',
        '• Acordos e gobernanza: políticas de uso.',
        '• Conectores EDC.',
        '• Soporte a casos de uso piloto, segundo demanda.',

        { type: 'h2', content: 'Como adherirte' },
        'Segue o noso proceso de adhesión cos seguintes pasos:',

        { type: 'h3', content: 'Fase de solicitude e adhesión' },

        { type: 'bold', content: '1️⃣ Infórmate' },
        'Descarga a Guía do Participante para coñecer en detalle como funciona o Espazo de Datos, os requisitos técnicos e legais, e os beneficios de unirte. Acompañámoste en cada paso.',

        { type: 'bold', content: '2️⃣ Solicita a túa adhesión' },
        'Enche o formulario de mostra de interese e o noso equipo revisará a túa solicitude e contactará contigo para os seguintes pasos.',

        { type: 'h3', content: 'Fase de integración no Espazo de Datos' },

        { type: 'bold', content: '3️⃣ Integración técnica' },
        'Conecta os teus sistemas e prepara os teus datos segundo as políticas de interoperabilidade, calidade e seguridade do Espazo de Datos. Estaremos ao teu lado durante todo o proceso.',

        { type: 'bold', content: '4️⃣ Participa e medra' },
        'Unha vez formes parte do Espazo, poderás intercambiar datos, participar en casos de uso e colaborar con outros participantes do ecosistema. Seguiremos acompañándote en cada etapa.',

        { type: 'h2', content: 'Recursos útiles' },
        {
          type: 'link',
          content: '▶️ Proceso de adhesión',
          href: 'https://dataspace.cesga.es/es/how',
          external: false,
        },
        {
          type: 'link',
          content: '▶️ Portal do MVD',
          href: 'https://xdatashare.srv.cesga.es/portal',
          external: true,
        },
        {
          type: 'link',
          content: '▶️ Titorial guiado do MVD (Obradoiro FarmaciaVAX)',
          href: 'https://www.youtube.com/watch?v=u7zTyU795n8',
          external: true,
        },
        {
          type: 'link',
          content: '▶️ Obradoiro de espazo de datos sobre Conectores EDC',
          href: 'https://www.youtube.com/watch?v=WGBCGCz8vHc',
          external: true,
        },
        { type: 'bold', content: '💬 Dúbidas? Escríbenos a onehealth@cesga.es' },
      ],
    },
    {
      key: 'gobernanza-espacio-datos',
      title:
        'Gobernanza nun espazo de datos: a parte “invisible” que fai que todo funcione',
      date: '2025-12-15',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      excerpt:
        'A gobernanza é a capa invisible que permite que un espazo de datos funcione de forma segura, xusta e reutilizable.',
      description: [
        'Cando se fala de espazos de datos, case sempre aparecen palabras como conectores, APIs, estándares ou interoperabilidade. Todo iso é importante, pero hai unha peza que adoita quedar en segundo plano e que, en realidade, o sostén todo: a gobernanza.',

        'A gobernanza é o que evita que o espazo de datos se converta nun “grupo de WhatsApp de datasets” onde ninguén sabe que se pode usar, quen responde se algo falla ou como se demostra que se respectaron as condicións.',

        {
          type: 'bold',
          content:
            'No demostrador multisectorial DATAlife, a gobernanza está pensada para compartir datos de forma útil, segura e xusta, xerando valor nun entorno One Health.',
        },

        {
          type: 'h2',
          content: 'Entón… que é exactamente a gobernanza?',
        },

        'Pensa na gobernanza como as regras do xogo, pero tamén como o árbitro e o marcador.',

        'As regras definen que se pode compartir e baixo que condicións. O árbitro establece que ocorre se hai un problema ou un incumprimento. O marcador permite medir se o espazo está funcionando e achegando valor.',

        'No Centro Demostrador distínguese ademais entre gobernanza (as regras e controis do día a día) e goberno do dato, que corresponde á capa estratéxica: obxectivos, riscos, políticas e seguimento.',

        {
          type: 'h2',
          content: 'As tres grandes preguntas que responde a gobernanza',
        },

        {
          type: 'h3',
          content: '1) Como se organiza o espazo?',
        },

        'A gobernanza define quen toma decisións, como se incorporan novos participantes, que ocorre cando alguén abandona o espazo e como se xestionan os conflitos, todo iso mediante procesos claros e transparentes.',

        {
          type: 'h3',
          content: '2) Como se garante que todos falan o mesmo idioma?',
        },

        'Nun espazo multisectorial, a interoperabilidade non é só intercambiar arquivos, senón asegurar que os datos se entenden, se usan correctamente e se poden reutilizar.',

        'Por iso trabállase a nivel legal, organizativo, semántico e técnico, usando formatos comúns e vocabularios recoñecidos como FHIR, OMOP, DICOM, CIE-10, SNOMED ou LOINC.',

        {
          type: 'h3',
          content: '3) Que se pode facer cos datos e que non?',
        },

        'Aquí entran en xogo as licenzas, as condicións de uso, a trazabilidade, a calidade dos datos e a privacidade. Cada entidade mantén o control dos seus datos dentro dun marco común que evita malentendidos e asegura o cumprimento.',

        {
          type: 'h2',
          content: 'Roles claros para evitar zonas grises',
        },

        'Un espazo de datos funciona mellor cando cada actor sabe que lle corresponde. No Centro Demostrador defínense roles como autoridade de goberno, operador do espazo, provedor e consumidor de datos/servizos.',

        'Esta definición reduce friccións, aforra tempo e fai o sistema máis escalable.',

        {
          type: 'h2',
          content: 'Observabilidade: que se poida demostrar',
        },

        'Non chega con dicir que se cumpre. Un espazo confiable debe poder demostralo mediante rexistros, trazas e informes que permitan auditar accesos, transferencias e usos dos datos.',

        {
          type: 'h2',
          content: 'Que se gaña cunha boa gobernanza?',
        },

        'Menos incerteza, maior seguridade xurídica e técnica, mellor reutilización dos datos e un impacto medible son algúns dos beneficios directos dunha gobernanza ben deseñada.',

        {
          type: 'bold',
          content:
            'En resumo, a gobernanza é o que permite que un espazo de datos non só exista, senón que funcione de verdade.',
        },

        {
          type: 'h2',
          content: 'Que vén despois?',
        },

        'Para incorporarse a un espazo como o noso é clave ter claro o rol, os datos ou servizos que se achegan ou consumen e as condicións aplicables. Con iso, a adhesión deixa de ser un labirinto e convértese nun proceso ordenado e predicible.',
      ],
    },
    {
      key: 'ontologies-vocabularies',
      date: '2026-01-26',
      title:
        'Ontoloxías e vocabularios en espazos de datos: unha guía sinxela desde o Centro Demostrador DATAlife',
      excerpt:
        'Para que un espazo de datos funcione, non abonda con compartir: hai que entender o compartido da mesma maneira. Explicámosche, de forma práctica, que son os vocabularios e as ontoloxías, que estándares se usan e como aliñar datos con eles.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        'Nun espazo de datos non abonda con compartir información: é fundamental entendela da mesma maneira. Para logralo utilízanse dúas ferramentas clave: vocabularios e ontoloxías, que permiten que distintos sistemas, organizacións e profesionais falen unha linguaxe común.',

        {
          type: 'h2',
          content: '➡️ Vocabularios e ontoloxías: dúas pezas distintas',
        },

        { type: 'h4', content: 'Que é un vocabulario?' },
        'Un vocabulario é un conxunto estruturado de termos e códigos que se utiliza para nomear conceptos de forma uniforme. Por exemplo, un código específico para “PCR”, outro para “SARS-CoV-2” ou para “vacina da gripe”. O seu obxectivo é eliminar ambigüidades e garantir que todas as partes utilizan as mesmas denominacións.',

        { type: 'h4', content: 'Que é unha ontoloxía?' },
        'Unha ontoloxía non só define conceptos, senón tamén as relacións entre eles. Permite expresar, por exemplo, que unha “vacina” pertence a unha categoría concreta, ou que unha “observación de laboratorio” está asociada a un “paciente”. É, en esencia, un mapa conceptual que describe como se organiza un dominio de coñecemento.',

        {
          type: 'h2',
          content: '➡️ Por que importa falar o mesmo idioma',
        },

        { type: 'h4', content: 'Interoperabilidade real' },
        'Se cada entidade define os conceptos de maneira diferente, conectar datos é extremadamente difícil. Os vocabularios comúns garanten que “paciente”, “lote de vacina” ou “centro dispensador” se interpreten igual en todos os sistemas.',

        { type: 'h4', content: 'Datos máis FAIR' },
        'Os estándares semánticos favorecen datos máis localizables (grazas a metadatos claros), interoperables (grazas a formatos compatibles) e reutilizables (grazas a definicións e licenzas ben documentadas).',

        { type: 'h4', content: 'Calidade e gobernanza' },
        'Usar conceptos ben definidos e relacións coherentes reduce erros, facilita a validación e achega trazabilidade a cada modificación.',

        { type: 'h4', content: 'Escalabilidade' },
        'Unha base semántica sólida permite conectar dominios tan diversos como a saúde, o ámbito sociosanitario, a farmacia ou o medio ambiente.',

        {
          type: 'h2',
          content: '➡️ Estándares habituais en espazos de datos',
        },

        { type: 'h4', content: 'Modelos de datos e formatos' },
        '• HL7 FHIR para información clínica estruturada.',
        '• OMOP CDM para análise e ciencia de datos.',
        '• RDF/OWL para construír grafos de coñecemento.',
        '• DCAT / DCAT-AP para describir datasets en catálogos.',
        '• JSON-LD / Schema.org para engadir semántica na web.',

        { type: 'h4', content: 'Vocabularios e terminoloxías' },
        '• SNOMED CT para conceptos clínicos.',
        '• LOINC para laboratorio e observacións.',
        '• ATC / RXNorm para medicamentos.',
        '• ICD-10/11 para diagnósticos.',

        { type: 'h4', content: 'Ontoloxías biomédicas e ómicas' },
        '• Ontoloxías de OBO Foundry como HPO, CHEBI ou OBI.',
        '• Recursos impulsados por GA4GH para datos xenómicos.',

        {
          type: 'h2',
          content: '➡️ Como se aliñan os datos con estes estándares',
        },

        { type: 'h4', content: '1) Identificar os conceptos clave' },
        'Por exemplo: tipo de vacina, data de administración, lote, paciente, área sanitaria…',

        {
          type: 'h4',
          content: '2) Vincular cada concepto cun código estándar',
        },
        'Exemplos:',
        '• “PCR” → LOINC.',
        '• “Vacina fronte á gripe” → SNOMED ou ATC.',
        '• “Centro sanitario” → conceptos de localización en FHIR.',

        { type: 'h4', content: '3) Documentar regras básicas' },
        'Unidades, rangos válidos, obrigatoriedade, tipos de dato, restricións.',

        { type: 'h4', content: '4) Transformar os datos' },
        'A través de procesos de mapeo (ETL) que xeran formatos como FHIR ou OMOP a partir de fontes orixinais.',

        { type: 'h4', content: '5) Xestionar equivalencias' },
        'Se distintas fontes usan códigos diferentes, créanse táboas de correspondencia ou grafos SKOS.',

        { type: 'h4', content: '6) Manter gobernanza' },
        'Versións claras, procesos de actualización ben definidos e documentación comprensible.',

        {
          type: 'h2',
          content: '➡️ Boas prácticas recomendadas',
        },
        '• Reutilizar vocabularios estándar sempre que sexa posible.',
        '• Publicar URIs estables para conceptos internos.',
        '• Documentar con exemplos sinxelos e actualizados.',
        '• Versionar modelos e ontoloxías con criterios claros.',
        '• Incluír licenzas e condicións de uso dos metadatos.',

        {
          type: 'h2',
          content: '➡️ Erros frecuentes',
        },
        '• Asumir equivalencias exactas cando só existe unha similitude aproximada.',
        '• Crear códigos internos sen documentación accesible.',
        '• Mesturar versións de vocabularios sen indicalo.',

        {
          type: 'quote',
          content:
            'A meta é clara: facilitar que a interoperabilidade suceda de forma fluída, comprensible e sostible no tempo.',
        },
      ],
      featured: false,
    },
    {
      key: 'team-demonstrator-2026',
      date: '2026-02-20',
      title: 'O equipo do Centro Demostrador',
      excerpt:
        'O Centro Demostrador de Espazo de Datos Multisectorial One Health do CESGA apóiase nun equipo multidisciplinar que combina coordinación, enxeñaría e perfís investigadores para trasladar tecnoloxías de compartición e valorización do dato a escenarios reais.',
      author_name: 'Marta Castiñeira',
      author_image: MCastineiraImg,
      description: [
        {
          type: 'h2',
          content: 'Coñece quen está detrás do espazo de datos',
        },

        'O Centro Demostrador de Espazo de Datos Multisectorial One Health do CESGA apóiase nun equipo multidisciplinar que combina coordinación, enxeñaría e perfís investigadores para trasladar tecnoloxías de compartición e valorización do dato a escenarios reais.',

        'O noso obxectivo é acelerar a transformación dixital en ámbitos como a biotecnoloxía, o agroalimentario, o sector forestal–marino–industrial e a saúde, integrando capacidades de intelixencia artificial, big data e computación de alto rendemento (HPC). Traballamos para que os casos de uso do centro demostrador multisectorial DATAlife evolucionen desde a definición ata a validación e a posta en produción, fomentando un espazo de datos interoperable, seguro e escalable.',

        'A actividade do equipo articúlase a través da coordinación do proxecto, liderada por Javier Cacheiro, xunto co soporte e a execución técnica de Pedro Ferreiro. Axudando no soporte técnico pero máis centrados na área investigadora, están o resto dos integrantes do equipo. Achegando experiencia en simulación e química computacional atopamos a Miguel Carmena e a Marta Castiñeira, e en analítica avanzada e intelixencia artificial atopamos a Ledicia Díaz e Lara Vázquez. Deste xeito, estamos cubrindo de extremo a extremo a validación de casos de uso, o despregamento de servizos e a adopción de boas prácticas para crear un espazo de datos robusto e orientado a impacto.',

        {
          type: 'h2',
          content: 'Javier Cacheiro López',
        },
        {
          type: 'image_profile',
          src: JCacheiroImg,
          alt: 'Javier Cacheiro López',
        },
        'Javier Cacheiro López é Project Manager e responsable da coordinación da área de Big Data no Centro de Supercomputación de Galicia (CESGA), onde impulsa iniciativas que combinan xestión de proxectos complexos cunha sólida base técnica en Big Data, computación de altas prestacións (HPC) e intelixencia artificial (IA). O seu perfil integra liderado de equipos multidisciplinares, planificación e seguimento de fitos, e aliñamento de necesidades científicas e organizativas con solucións tecnolóxicas avanzadas.',
        'Conta con acreditación profesional en dirección de proxectos polo Project Management Institute (PMI) e é Project Management Professional (PMP) desde 2009. É Doutor en Física (2003) e obtivo Premio Extraordinario tanto na Licenciatura como no Doutoramento, reflexo dunha traxectoria académica de excelencia. Na actualidade coordina a creación do DATAlife (One Health), un espazo de datos estratéxico que require integración de compoñentes técnicos, científicos e de gobernanza.',
        'Ao longo da súa carreira participou en máis de 20 proxectos europeos, nacionais e rexionais, incluíndo iniciativas como EGEE, EGI-InSPIRE e TRAFAIR, desempeñando funcións de coordinación e responsabilidade técnica. É autor de máis de 70 publicacións científicas en revistas e congresos internacionais, o que evidencia unha actividade investigadora sostida e unha capacidade contrastada para orientar resultados en contornos de alta esixencia tecnolóxica e colaboración internacional.',

        {
          type: 'h2',
          content: 'Pedro Ferreiro Rega',
        },
        {
          type: 'image_profile',
          src: PFerreiroImg,
          alt: 'Pedro Ferreiro Rega',
        },
        'Pedro Ferreiro Rega é graduado en Biotecnoloxía pola Universidade de Santiago de Compostela (USC). Posteriormente, completou o máster en Bioinformática na Universidade Internacional de Valencia (VIU).',
        'Graduado en Biotecnoloxía pola Universidade de Santiago de Compostela (USC) e Máster en Bioinformática pola Universidade Internacional de Valencia (VIU). En 2025 incorporouse ao equipo de espazo de datos do CESGA, onde desenvolve a súa actividade actualmente. Con anterioridade, o seu traballo investigador centrouse no estudo de patoloxías do sistema nervioso periférico mediante técnicas de análise bioinformática, con especial interese na neuropatía diabética. No seu tempo de lecer gústalle ler e compartir tempo cos seus amigos.',

        {
          type: 'h2',
          content: 'Lara María Vázquez González',
        },
        {
          type: 'image_profile',
          src: LVazquezImg,
          alt: 'Lara María Vázquez González',
        },
        'Lara Vázquez González é doutora en Investigación en Tecnoloxías da Información pola Universidade de Santiago de Compostela (USC), onde tamén obtivo o Grao en Enxeñaría Informática en 2019. Posteriormente, completou o máster en Bioinformática e Bioestatística na Universitat Oberta de Catalunya (UOC) en 2020.',
        'En 2021 recibiu a Axuda de apoio á etapa predoutoral da Xunta de Galicia, que lle permitiu desenvolver a súa tese doutoral no ámbito da bioinformática. A súa investigación centrouse na aplicación de técnicas de aprendizaxe automática para mellorar e axilizar o diagnóstico de enfermidades de orixe microbiana, con especial atención á periodontite. Actualmente traballa no CESGA no proxecto do Centro Demostrador. No seu tempo libre encántalle ler, viaxar e escoitar música.',

        {
          type: 'h2',
          content: 'Miguel Carmena Bargueño',
        },
        {
          type: 'image_profile',
          src: MCarmenaImg,
          alt: 'Miguel Carmena Bargueño',
        },
        'Miguel Carmena Bargueño é bioquímico pola UCLM, realizou o Máster en Bioinformática pola Universidade de Murcia e a UPCT. Obtivo a súa tese doutoral no grupo BIO-HPC da UCAM (2024), centrada no uso de simulacións de dinámica molecular e machine learning no contexto do descubrimento de fármacos. Durante o doutoramento realizou unha estadía en Viena, onde se formou sobre aplicacións e uso do modelado farmacolóxico. Actualmente traballa no CESGA como técnico investigador de química computacional. No seu tempo libre gústalle escoitar música, ler novelas gráficas e xogar a xogos de mesa.',

        {
          type: 'h2',
          content: 'Marta Castiñeira Reis',
        },
        {
          type: 'image_profile',
          src: MCastineiraImg,
          alt: 'Marta Castiñeira Reis',
        },
        'Marta Castiñeira Reis é química computacional especializada na integración de química mecanística, catálise e automatización. Doutorouse en Química Teórica e Modelización Molecular na Universidade de Vigo (2019) e desenvolveu unha traxectoria internacional. Realizou un posdoutoramento de tres anos na Universidade de Groningen, onde liderou a parte computacional do grupo de S. R. Harutyunyan, con foco en procesos enantioselectivos. No CiQUS (USC) co-liderou unha liña en astroquímica orientada á elucidación automática de mecanismos. Suma máis de 500 horas de docencia, 10 TFG codirixidos e varios TFM. Actualmente traballa no CESGA no proxecto do Centro Demostrador. Fóra do ámbito profesional, goza da natureza, da lectura e dos animais.',

        {
          type: 'h2',
          content: 'Ledicia Díaz Lago',
        },
        {
          type: 'image_profile',
          src: LDiazImg,
          alt: 'Ledicia Díaz Lago',
        },
        'Ledicia Díaz Lago é física orientada ao software, especializada en ciencia de datos, modelización e machine learning aplicado. Licenciouse en Física pola Universidade de Santiago de Compostela e cursou o Máster en Tecnoloxías do Sector Financeiro na Universidade Carlos III de Madrid, onde traballou en aprendizaxe por reforzo profundo.',
        'Desenvolveu a súa traxectoria entre a investigación e a industria, con experiencia en modelos preditivos, análise de datos complexos e analítica avanzada, tanto en contornos académicos como empresariais. Actualmente traballa como técnica investigadora en machine learning e ciencia de datos no CESGA, participando en proxectos relacionados con espazos de datos, interoperabilidade e transferencia tecnolóxica.',
      ],
    },
    {
      key: 'taller-one-health-kit',
      date: '2026-03-26',
      title:
        'O Espazo de Datos One Health do CESGA impulsa a integración no Kit de Espazos de Datos cun obradoiro dirixido a empresas e institucións',
      excerpt:
        'O Centro Demostrador Multisectorial DATAspace do CESGA celebrou unha sesión formativa práctica dirixida a resolver dúbidas e acompañar a empresas e institucións na súa incorporación ao Espazo de Datos One Health como paso previo á solicitude do Kit de Espazos de Datos.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        'O Centro Demostrador Multisectorial DATAspace do CESGA organizou o pasado 23 de marzo unha sesión formativa orientada a empresas e institucións para resolver dúbidas e facilitar a súa incorporación ao Espazo de Datos One Health como primeiro paso antes de solicitar o Kit de Espazos de Datos.',

        'A xornada reuniu a 33 participantes, na súa maioría empresas e institucións interesadas en iniciarse ou avanzar no uso do Espazo de Datos One Health. Durante a sesión ofreceuse unha introdución práctica aos pasos necesarios para a súa integración.',

        {
          type: 'h2',
          content: '➡️ Formación orientada á aplicación práctica',
        },

        'A compartición de datos segura e interoperable é un dos piares fundamentais dos espazos de datos, aínda que moitas organizacións —especialmente pemes e institucións— seguen a atopar barreiras técnicas e operativas para incorporarse.',

        'Para dar resposta a esta necesidade, DATAspace deseñou esta sesión cun enfoque eminentemente práctico, explicando paso a paso como integrarse e participar activamente no Espazo de Datos One Health.',

        {
          type: 'h4',
          content: 'Desprega do conector',
        },
        'Durante a sesión explicouse o proceso de despregue do conector necesario para comezar a operar dentro do espazo de datos.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=z72j1-uQCVo',
          href: 'https://www.youtube.com/watch?v=z72j1-uQCVo',
          external: true,
        },

        {
          type: 'h4',
          content: 'Subida e xestión de activos de datos',
        },
        'Tamén se amosou como cargar, organizar e xestionar activos de datos dentro do ecosistema de intercambio.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=yshUdWjAsw8',
          href: 'https://www.youtube.com/watch?v=yshUdWjAsw8',
          external: true,
        },

        {
          type: 'h4',
          content: 'Declaración de evidencias no espazo de datos',
        },
        'Outro dos aspectos abordados foi a declaración das evidencias necesarias para operar correctamente dentro do entorno compartido.',
        {
          type: 'link',
          content: 'https://www.youtube.com/watch?v=CRtcBkdf0Wg',
          href: 'https://www.youtube.com/watch?v=CRtcBkdf0Wg',
          external: true,
        },

        'Todo isto permitiu ás persoas asistentes comprender de forma progresiva como participar no Espazo de Datos One Health e aplicar este proceso en contextos reais.',

        {
          type: 'h2',
          content: '➡️ Próximos pasos e recursos dispoñibles',
        },

        'O DATAspace One Health do CESGA continuará organizando novas sesións formativas nas próximas semanas co obxectivo de seguir acompañando a empresas e organizacións públicas e privadas no seu proceso de incorporación e desenvolvemento dentro do Espazo de Datos One Health.',

        {
          type: 'h2',
          content: '➡️ Sobre o proxecto DATAspace One Health',
        },

        'Impulsado polo Centro de Supercomputación de Galicia, entidade pública vinculada ao Consello Superior de Investigacións Científicas e á Xunta de Galicia, o proxecto ten como obxectivo habilitar un espazo de datos que permita a cooperación segura e a xeración de valor no ecosistema biosanitario baixo o enfoque One Health.',

        'Está financiado con fondos do Plan de Recuperación, Transformación e Resiliencia (PRTR) a través do Mecanismo de Recuperación e Resiliencia (MRR) do Ministerio para a Transformación Dixital e da Función Pública.',

        {
          type: 'h4',
          content: 'Un entorno estratéxico para o ecosistema biosanitario',
        },

        'O ámbito biosanitario constitúe un piar estratéxico da economía do dato, xerando información heteroxénea e de alto valor —clínica, farmacéutica, veterinaria, agroalimentaria ou ambiental— que en moitos casos permanece fragmentada en distintos sistemas.',

        {
          type: 'h4',
          content: 'Un patrón socio-técnico para compartir datos',
        },

        'Neste contexto, os espazos de datos promovidos polo CESGA emerxen como un patrón socio-técnico que habilita o intercambio e uso conxunto de datos mediante regras, roles e responsabilidades claras.',

        'Este modelo combina mecanismos tecnolóxicos como identidade, control de acceso, trazabilidade, seguridade e interoperabilidade con compoñentes organizativos como gobernanza, políticas, acordos e procesos de adhesión.',

        {
          type: 'quote',
          content:
            'Un Espazo de Datos One Health pode acelerar a cooperación e a xeración de valor cando conflúen datos de calidade, capacidades de cómputo e intelixencia artificial.',
        },

        {
          type: 'h2',
          content: '➡️ Máis información',
        },

        {
          type: 'link',
          content: '• Guía do participante do Espazo de Datos One Health.',
          href: 'https://xdatashare.srv.cesga.es/assets/static/files/Guia-del-participante.pdf',
          external: true,
        },

        {
          type: 'link',
          content: '• Guía do Kit de solicitude de Espazos de Datos.',
          href: 'https://dataspace.cesga.es/kit/guia_solicitud_KIT_CESGA.pdf',
          external: true,
        },
      ],
    },
    {
      key: 'onehealth-dataspace-consolidacion-2026',
      date: '2026-04-16',
      title:
        'O proxecto OneHealth DataSpace do CESGA consolídase como iniciativa de intercambio de datos en favor da saúde global',
      excerpt:
        'O Espazo de Datos OneHealth DataSpace avanzou no seu proceso de consolidación como iniciativa punteira de innovación en favor da saúde global coa adhesión de máis de 10 novas entidades nos últimos meses.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        'O Espazo de Datos OneHealth DataSpace, centrado no concepto One Health —termo en inglés acuñado pola Organización Mundial da Saúde (OMS) para describir a interrelación entre a saúde humana, animal e medioambiental—, avanzou no seu proceso de consolidación como iniciativa punteira de innovación en favor da saúde global coa adhesión de máis de 10 novas entidades nos últimos meses.',

        'A iniciativa OneHealth DataSpace —financiada polo Ministerio para a Transformación Dixital e da Función Pública a través do Plan de Recuperación, Transformación e Resiliencia (PRTR), con cargo aos fondos europeos NextGenerationEU— facilitou o acceso ao Kit de Espazos de Datos do CRED (Centro de Referencia de Espazos de Datos) ás entidades adheridas ao proxecto. Este entorno integrarase na futura Factoría de IA One Health 1HealthAI do CESGA.',

        {
          type: 'h2',
          content: '22 entidades, un ecosistema One Health real',
        },

        'OneHealth DataSpace acadou un total de 22 entidades adheridas ao espazo de datos tras o peche, o pasado 31 de marzo, do prazo de solicitude do Kit de Espazos de Datos do CRED. Este marco de colaboración permite a empresas, pemes e institucións compartir datos de forma segura e optimizar a súa explotación mediante tecnoloxías avanzadas.',

        'Cunha base xa definida de participantes, OneHealth DataSpace configura un escenario real de colaboración arredor do dato, cunha forte presenza do ámbito sanitario. Do total de 22 entidades adheridas:',

        '• O 81,8% pertence ao sector da saúde humana',
        '• O 13,6% que xera datos de saúde medioambiental',
        '• O 4,5% corresponde á saúde animal',

        'En termos de actividade, 14 das 22 entidades (63,6%) xa ofrecen datos dentro do espazo, o que reflicte un nivel relevante de adopción nunha fase temperá do proxecto.',

        {
          type: 'h3',
          content: 'Máis alá de compartir datos: HPC, Big Data e Cloud',
        },

        'Ademais da compartición de datos, OneHealth DataSpace proporciona ás organizacións un entorno tecnolóxico avanzado que combina HPC (computación de alto rendemento), Big Data e Cloud (computación na nube). Este conxunto de capacidades permite transformar os datos en coñecemento útil e aplicable.',

        'Máis que datos. More than data.',

        {
          type: 'h4',
          content: 'Sobre a Factoría de IA One Health 1HealthAI',
        },

        'A 1Health AI Factory é a única infraestrutura da rede de Factorías de IA de EuroHPC JU concibida especificamente para dar soporte á investigación e innovación enmarcadas na estratexia One Health. Impulsada polo CESGA e o Consello Superior de Investigacións Científicas (CSIC), situará Galicia e España na vangarda europea do ecosistema tecnolóxico en saúde global, ofrecendo acceso a supercomputación, ferramentas avanzadas de IA, e servizos de formación e acompañamento ao tecido empresarial, académico e investigador.',

        {
          type: 'h5',
          content: 'Sobre o CESGA',
        },

        'A Fundación CESGA (Centro de Supercomputación de Galicia) é unha organización sen ánimo de lucro ao servizo da investigación científica, o desenvolvemento tecnolóxico e a innovación desde 1993, participada pola Xunta de Galicia e o CSIC. Executa investigación, xestiona unha infraestrutura integrada na Rede Española de Supercomputación (RES), recoñecida como Instalación Científico-Técnica Singular (ICTS) do Estado, e proporciona servizos avanzados de HPC, Big Data, Cloud e IA á comunidade científica, educativa e empresarial.',
      ],
      featured: false,
    },
    {
      key: 'cumbre-economia-dato-gaiax',
      date: '2026-04-24',
      title: 'OneHealth DataSpace participa na II Cumbre da Economía do Dato Gaia-X España',
      excerpt:
        'O proxecto do Centro de Supercomputación de Galicia comparte en Toledo a súa experiencia no desenvolvemento dun espazo de datos operativo no ámbito One Health',
      image: GaiaXPonencia,
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        'O proxecto do Centro de Supercomputación de Galicia comparte en Toledo a súa experiencia no desenvolvemento dun espazo de datos operativo no ámbito One Health.',
        'O Data Space do CESGA achega de forma gratuíta recursos de almacenamento, procesamento, supercomputación e análise, todos eles de gran valor para as entidades que xeran datos no ámbito One Health (Unha soa Saúde), concepto liderado pola OMS que integra saúde humana, animal e ambiental.',

        { type: 'h2', content: 'Un momento clave para a economía do dato en Europa' },
        'OneHealth DataSpace, iniciativa impulsada polo Centro de Supercomputación de Galicia (CESGA), participou os días 21 e 22 de abril na II Cumbre da Economía do Dato de Gaia-X España, celebrada no Palacio de Congresos El Greco de Toledo.',
        'O encontro reuniu empresas, administracións e entidades tecnolóxicas nun momento clave para o ecosistema do dato: a transición desde proxectos piloto cara a espazos de datos operativos, escalables e sostibles. Neste contexto, puxéronse sobre a mesa retos clave como a interoperabilidade ou a xeración de valor a partir do dato.',

        { type: 'h2', content: 'Participación en Gaia-X: colaboración intersectorial e soberanía do dato' },
        'O noso compañeiro Alejo Santolino Simón, Coordinador de Marco Legal e Análise de Negocio de OneHealth DataSpace, participou activamente no programa do evento, intervindo nos bloques de economía do dato e no ámbito sociosanitario.',
        'Durante a súa intervención, o proxecto presentouse baixo o título “O futuro da colaboración intersectorial: impulsando a soberanía do dato na economía dixital”, destacando o papel dos espazos de datos como habilitadores de novos modelos de cooperación entre sectores.',
        'A intervención permitiu poñer en valor as capacidades tecnolóxicas do CESGA, entre as que destacan:',
        '• Supercomputación (HPC) para a análise de escenarios complexos',
        '• Contornas Cloud para o despregamento de servizos e almacenamento federado',
        '• Big Data para transformar datos en coñecemento',
        '',
        'Este conxunto de capacidades posiciona ao CESGA como un operador tecnolóxico capaz de garantir neutralidade e soberanía do dato no desenvolvemento do ecosistema One Health.',

        { type: 'h2', content: 'Máis que un espazo de datos' },
        'OneHealth DataSpace é moito máis ca un espazo de intercambio de datos. Apóiase nun centro de supercomputación que pon á disposición das entidades capacidades avanzadas de computación, procesamento, almacenamento e explotación da información.',
        'Grazas a esta infraestrutura, os usuarios poden traballar cos seus datos sen preocuparse pola complexidade técnica subxacente, accedendo de forma transparente aos recursos necesarios en cada caso.',
        'O sistema é altamente flexible e adáptase ás necesidades específicas de cada reto, xa sexa mediante un maior uso de CPU —o “cerebro” que xestiona as tarefas xerais e o sistema operativo—, GPU para o procesamento masivo e paralelo de grandes volumes de datos, almacenamento avanzado ou outras capacidades especializadas.',

        { type: 'h2', content: 'Un modelo federado para compartir datos con control' },
        'O proxecto baséase nunha arquitectura federada, na que os datos permanecen baixo o control dos seus propietarios e compártense baixo condicións definidas.',
        'Esta perspectiva, aliñada cos principios de Gaia-X, permite avanzar cara a un modelo de economía do dato baseado na interoperabilidade, a colaboración e a xeración de valor.',
        'No caso de OneHealth DataSpace, este modelo aplícase ao enfoque One Health, integrando datos de saúde humana, animal e ambiental para xerar coñecemento compartido.',

        { type: 'h2', content: 'Un espazo de datos xa operativo' },
        'Un dos elementos clave presentados foi o desenvolvemento dunha primeira versión operativa do espazo de datos, o MVD, que reúne as capacidades esenciais para unha federación segura e escalable.',
        'Este contorno inclúe capacidades como:',
        '• Xestión IAM, identidade e acceso federado',
        '• Gobernanza, plantillas de Data Sharing Agreement e políticas de uso automatizadas',
        '• Integración técnica mediante conectores EDC e contorno sandbox',
        '• Observabilidade, rexistro de accesos e trazabilidade de consentimentos',

        { type: 'h2', content: 'Próximo paso: a Factoría de IA One Health' },
        'A participación na II Cumbre da Economía do Dato tamén permitiu conectar coa seguinte evolución do proxecto.',
        'OneHealth DataSpace terá continuidade na futura Factoría de IA One Health (1HealthAI), impulsada polo CESGA e o Consello Superior de Investigacións Científicas (CSIC) no marco de EuroHPC-JU.',
        'Esta nova infraestrutura permitirá avanzar no uso da intelixencia artificial aplicada ao dato e consolidar un ecosistema de innovación en saúde global baixo o enfoque One Health.',

        { type: 'h2', content: 'Sobre OneHealth DataSpace' },
        'O proxecto OneHealth DataSpace do CESGA está financiado polo Ministerio para a Transformación Dixital e da Función Pública a través do Plan de Recuperación, Transformación e Resiliencia (PRTR), con cargo aos fondos europeos NextGenerationEU (exp. TSI-100120-2024-12).',

        { type: 'h2', content: 'Sobre o CESGA' },
        'A Fundación CESGA (Centro de Supercomputación de Galicia) é unha organización sen ánimo de lucro ao servizo da investigación científica, o desenvolvemento tecnolóxico e a innovación desde 1993, participada pola Xunta de Galicia e o CSIC. Xestiona unha infraestrutura integrada na Rede Española de Supercomputación (RES), recoñecida como Instalación Científico-Técnica Singular (ICTS).',

        {
          type: 'bold',
          content: 'Máis que datos.',
        },
      ],
    },
    {
      key: 'galicia-biodays-2026',
      date: '2026-05-08',
      title:
        'OneHealth DataSpace presenta en Galicia Biodays 2026 a súa evolución cara á futura 1HealthAI Factory',
      excerpt:
        'O Director Científico do proxecto, Javier Cacheiro, analiza nunha entrevista para Faro de Vigo o papel do espazo de datos e da futura infraestrutura europea de IA en Galicia',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        'O Director Científico do proxecto, Javier Cacheiro, analiza nunha entrevista para Faro de Vigo o papel do espazo de datos e da futura infraestrutura europea de IA en Galicia',

        'OneHealth DataSpace participou nos Galicia Biodays 2026, organizados por BIOGA, nun encontro que reuniu empresas, centros tecnolóxicos, grupos de investigación, entidades e profesionais do ecosistema biosanitario e biotecnolóxico.',

        'Neste escenario, o noso Director Científico, Javier Cacheiro, concedeu unha entrevista a Faro de Vigo na que abordou algúns dos principais eixos estratéxicos de OneHealth DataSpace e o desenvolvemento do proxecto cara á futura 1HealthAI Factory.',

        { type: 'h2', content: 'One Health: datos e computación' },

        'Durante a entrevista, Javier Cacheiro explicou o enfoque One Health como un modelo que integra saúde humana, animal e medioambiental desde unha perspectiva interconectada.',

        'Un dos aspectos centrais destacados foi o papel diferencial de OneHealth DataSpace fronte a outros espazos de datos convencionais.',

        '“O importante é a capacidade adicional para que nunha soa plataforma poidas facelo todo: obter datos e computación.”',

        'Neste sentido, o proxecto non só facilita o intercambio seguro de datos entre entidades participantes, senón que se apoia en tecnoloxías avanzadas de procesamento e análise de datos.',

        'OneHealth DataSpace incorpora capacidades de supercomputación (HPC), Big Data e Cloud proporcionadas polo CESGA, permitindo traballar con grandes volumes de información de forma segura, interoperable e escalable.',

        'O obxectivo é ofrecer un contorno integrado onde os datos poidan analizarse, procesarse e transformarse en solucións aplicables a retos do ámbito biosanitario.',

        { type: 'h2', content: 'OneHealth DataSpace como antesala da 1HealthAI Factory' },

        'A entrevista tamén permitiu afondar na relación entre OneHealth DataSpace e a futura 1HealthAI Factory.',

        'Tal e como explicou Javier Cacheiro:',

        '“OneHealth DataSpace é o primeiro paso cara á 1HealthAI Factory.”',

        'A futura infraestrutura estará impulsada polo CESGA e contará con financiamento do European High Performance Computing Joint Undertaking (EuroHPC JU), o Ministerio de Ciencia, Innovación e Universidades e a Xunta de Galicia.',

        'Converterase así na única factoría europea de intelixencia artificial deseñada especificamente baixo o enfoque One Health.',

        'Esta nova infraestrutura permitirá reforzar as capacidades de computación e intelixencia artificial aplicadas ao ámbito da saúde humana, animal e medioambiental.',

        { type: 'h2', content: 'Un proxecto en expansión' },

        'Actualmente, OneHealth DataSpace continúa incorporando novas entidades e casos de uso vinculados á saúde, á investigación e á análise avanzada de datos.',

        'A participación en Galicia Biodays 2026 tamén permitiu reforzar a conexión do proxecto co ecosistema One Health, ademais de abrir novas oportunidades de colaboración no ámbito biotecnolóxico e biosanitario.',

        { type: 'h2', content: 'Entrevista completa' },

        {
          type: 'link',
          content: '🔗 Entrevista en Faro de Vigo',
          href: 'https://www.farodevigo.es/gran-vigo/2026/05/08/javier-cacheiro-director-cientifico-one-129964134.html',
          external: true,
        },
        {
          type: 'link',
          content: '🔗 Vídeo da entrevista',
          href: 'https://www.farodevigo.es/videos/gran-vigo/2026/05/08/javier-cacheiro-director-cientifico-one-129969476.html',
          external: true,
        },
        {
          type: 'bold',
          content: 'Máis que datos.',
        },
      ],
    },
    {
      key: 'gift-premio-ia-salud-2026',
      date: '2026-05-22',
      title:
        'GIFT, Caso de Uso de OneHealth DataSpace, recibe o Premio IA en Saúde á Mellor Unidade',
      excerpt:
        'O equipo do Servizo Dixestivo do CHUP e o seu Grupo de Investigación IDARA recollen en Madrid dous galardóns nos Premios IA BIC',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },

        'O equipo do Servizo Dixestivo do CHUP e o seu Grupo de Investigación IDARA recolleron en Madrid dous galardóns nos Premios IA BIC, organizados por FUNDAMED, Gaceta Médica e a Cátedra de Innovación e Xestión Sanitaria da Universidade Rey Juan Carlos.',

        'O proxecto GIFT (Gastroenterology Interface with Fair Treatment), integrado en OneHealth DataSpace, foi recoñecido co Premio IA en Saúde á Mellor Unidade pola súa contribución ao desenvolvemento de solucións innovadoras baseadas en intelixencia artificial aplicada ao ámbito sanitario.',

        'O recoñecemento foi recollido o 21 de maio de 2026 por Juan Turnes Vázquez, Investigador Principal do Grupo IDARA, xunto con Eva Poveda López, Directora Científica do Instituto de Investigación Sanitaria Galicia Sur (IIS Galicia Sur).',

        'Ademais, o equipo do Servizo de Dixestivo do Complexo Hospitalario Universitario de Pontevedra (CHUP) e o seu Grupo de Investigación IDARA recibiron un segundo galardón polo proxecto “Aicomta”, destacado pola súa capacidade para mellorar as consultas clínicas.',

        { type: 'h2', content: 'GIFT e OneHealth DataSpace' },

        'GIFT é un asistente conversacional de intelixencia artificial orientado ao ámbito da saúde gastrointestinal.',

        'A ferramenta facilita aos profesionais sanitarios a busca de información mediante respostas fundamentadas e trazables, validadas polo Servizo de Dixestivo do CHUP.',

        'O proxecto destaca especialmente polo seu papel no apoio clínico e na formación de profesionais sanitarios, integrando capacidades avanzadas de análise e acceso intelixente á información.',

        'No número de marzo de 2026 da revista Díxitos do CESGA abordouse o papel deste caso de uso dentro do ecosistema de OneHealth DataSpace.',

        { type: 'h2', content: 'Casos de uso vinculados ao IIS Galicia Sur' },

        'Paralelamente, outros casos de uso vinculados ao IIS Galicia Sur continúan avanzando dentro de OneHealth DataSpace.',

        'Entre eles atópanse BiomeXplore, Brilliant e AiDataMed, iniciativas centradas en ámbitos relacionados coa saúde, a intelixencia artificial e a análise avanzada de datos.',

        'Este ecosistema forma parte do desenvolvemento da futura 1HealthAI Factory, a infraestrutura europea impulsada desde Galicia baixo o enfoque One Health.',

        'A futura infraestrutura integrará capacidades avanzadas de supercomputación, intelixencia artificial e análise de datos aplicadas á saúde humana, animal e medioambiental.',

        { type: 'h2', content: 'Formación e innovación en IA aplicada á saúde' },

        'Nesta mesma liña, os próximos 25 e 26 de xuño celebrarase o peche da iniciativa “Pontevedra, quen pasa? 6 expertos en saúde, 6 meses”, centrada en formación e innovación en intelixencia artificial aplicada á saúde.',

        'O encontro contará coa participación de Senén Barro, Director Científico do CiTIUS e unha das figuras máis destacadas do ámbito da intelixencia artificial xerativa.',

        'Tamén participará o cirurxián Julio Mayol, referente en innovación médica e transformación dixital en saúde.',

        {
          type: 'bold',
          content: 'Máis que datos. More than data.',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-1healthai-factory',
      date: '2026-05-28',
      title:
        'OneHealth DataSpace presenta resultados e abre camiño á 1HealthAI Factory',
      excerpt:
        'O encontro final do proxecto reunirá no CHUS a entidades, investigadores e institucións para compartir resultados e avances do ecosistema One Health',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'italic',
          content:
            'O espazo de datos do CESGA enfocado a mellorar a saúde global, OneHealth DataSpace, celebra o 17 de xuño ás 9:30 no CHUS o seu encontro final. Nel exporanse os resultados acadados durante estes dous anos de traxectoria. Grupos de investigación con vinculacións entre saúde humana, animal e ambiental presentarán os casos de uso nos que o Espazo de Datos está a resultar unha iniciativa de gran valor pola súa achega tecnolóxica para a consecución de mellores resultados e evidencias.',
        },

        'O vindeiro mércores 17 de xuño terá lugar no Salón de Actos do Complexo Hospitalario Universitario de Santiago (CHUS) o evento de peche do OneHealth DataSpace, no que o CESGA dará conta dos resultados do proxecto OneHealth DataSpace, unha iniciativa, antesala da 1HealthAI Factory, a factoría de intelixencia artificial orientada a mellorar a saúde global, única na UE. O encontro reunirá representantes institucionais, entidades participantes e casos de uso para compartir os principais avances do proxecto e a súa evolución dentro do ecosistema One Health.',

        'O proxecto forma parte da estratexia europea de espazos de datos e traballa na creación dun contorno seguro, interoperable e gobernado para compartir e explotar datos vinculados á saúde humana, animal e ambiental, respectando a soberanía do dato; todo isto baixo o enfoque One Health, “Unha soa saúde”. O OneHealth DataSpace conecta entidades de saúde, investigación e empresa nun contorno apoiado por capacidades avanzadas de HPC (computación de alto rendemento), Big Data, Cloud e Intelixencia Artificial proporcionadas polo CESGA.',

        'Durante a xornada, o equipo do proxecto e as entidades participantes nos seus servizos compartirán resultados, aprendizaxes e retos identificados ao longo do proxecto, ademais de distintas iniciativas desenvolvidas dentro do ecosistema One Health. Así mesmo, Antonio Alcolea, responsable do Ministerio para a Transformación Dixital e da Función Pública, fará un balance sobre o avance dos resultados da Política de Impulso aos Espazos de Datos en España.',

        'Inscrición en:',
        {
          type: 'link',
          content:
            'dataspacedatalife.github.io/onehealth-dataspace-evento-final',
          href: 'https://dataspacedatalife.github.io/onehealth-dataspace-evento-final/',
          external: true,
        },
        {
          type: 'bold',
          content: 'Máis que datos.',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-salud-global',
      date: '2026-06-04',
      title:
        'OneHealth DataSpace, o espazo de datos do CESGA ante o reto de impulsar a saúde global',
      excerpt:
        'A iniciativa do CESGA combina datos, colaboración e supercomputación para impulsar a investigación e a innovación en saúde humana, animal e ambiental baixo o enfoque One Health.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'italic',
          content:
            'OneHealth DataSpace é a iniciativa do CESGA orientada a facilitar a colaboración científica e tecnolóxica para mellorar a saúde global mediante o intercambio seguro de datos e o uso de capacidades avanzadas de computación, intelixencia artificial e análise de datos.',
        },

        'A crise do ébola, outras máis próximas xeograficamente como a do hantavirus, ou pandemias de grande impacto como a COVID-19 teñen algo en común: unha realidade interconectada entre as persoas, os animais e o medio no que habitan. A Organización Mundial da Saúde (OMS) denomina esta visión One Health —Unha soa saúde—.',

        'Neste contexto, o Centro de Supercomputación de Galicia (CESGA) impulsa OneHealth DataSpace, unha iniciativa construída sobre unha das infraestruturas tecnolóxicas públicas máis avanzadas de Europa e orientada a facilitar a colaboración científica e tecnolóxica para mellorar a saúde global baixo o enfoque One Health.',

        {
          type: 'h2',
          content: 'Datos, colaboración e tecnoloxía',
        },

        'Como contribúe a supercomputación galega a este desafío? Combinando tres elementos: datos, colaboración e tecnoloxía. A dispoñibilidade de información de calidade permite construír bases científicas sólidas para abordar retos complexos relacionados coa saúde humana, animal e ambiental, garantindo sempre a soberanía da información e a privacidade dos datos de saúde das persoas.',

        'A capacidade de colaborar sen comprometer a seguridade dos datos constitúe un dos grandes desafíos tecnolóxicos actuais. OneHealth DataSpace (OHDS), ecosistema colaborativo do CESGA, nace precisamente para facilitar esa colaboración entre entidades de saúde, investigación e empresa.',

        'Financiado con fondos europeos NextGenerationEU pola Secretaría de Estado de Dixitalización e Intelixencia Artificial do Ministerio para a Transformación Dixital e da Función Pública, o proxecto integra datos e computación nunha única plataforma, proporcionando aos seus participantes as ferramentas necesarias para transformar datos de saúde humana, animal e ambiental en solucións reais.',

        'Todo isto sen comprometer a seguridade nin a soberanía da información. De feito, en OneHealth DataSpace os datos permanecen baixo o control dos seus propietarios.',

        {
          type: 'h2',
          content: 'Máis ca datos',
        },

        'Tradicionalmente, os espazos de datos tratan de resolver o problema de como compartir datos. Porén, desde o punto de vista científico, sabemos que obter datos é só o inicio da investigación.',

        'Para poder aproveitalos necesitamos un contorno onde almacenalos, analizalos e procesalos. Só despois deste proceso é posible obter resultados que acheguen valor, xa sexa a outras investigacións e iniciativas ou directamente á sociedade.',

        'OneHealth DataSpace ofrece estes servizos e pon á disposición dos participantes recursos de Big Data, computación de altas prestacións (HPC) e Cloud, integrados directamente no espazo de datos.',

        'O obxectivo é facilitar que os datos poidan transformarse en evidencias, coñecemento e novas solucións para afrontar os retos da saúde global.',

        {
          type: 'h2',
          content: 'Piares do ecosistema: soberanía e supercomputación',
        },

        'OneHealth DataSpace achega ademais un contorno de confianza sustentado en tres piares tecnolóxicos.',

        '● Os participantes manteñen en todo momento o control sobre quen accede aos seus datos e con que finalidade. Así mesmo, garántese a privacidade da información, permitindo compartir datos sensibles nun contorno seguro.',

        '● A diferenza doutros espazos de datos, OneHealth DataSpace está conectado directamente coas capacidades de computación e almacenamento do CESGA. Isto permite pasar do descubrimento dos datos á súa análise sen abandonar o ecosistema seguro.',

        '● A plataforma incorpora mecanismos de interoperabilidade e enriquecemento de metadatos que garanten que a información sexa localizable, accesible, interoperable e reutilizable (FAIR), maximizando o impacto de cada proxecto.',

        {
          type: 'h2',
          content: 'Un ecosistema aberto á participación',
        },

        'A participación en OneHealth DataSpace está aberta a institucións e empresas vinculadas ao ámbito One Health. Actualmente integra 22 entidades adheridas e distintos casos de uso relacionados con ámbitos tan diversos como a saúde gastrointestinal, a procura de novos fármacos ou a análise do impacto dos parques eólicos sobre o medio ambiente.',

        'O deseño do proxecto incorpora un proceso de adhesión simplificado que fomenta a participación tanto no procesamento de datos como na incorporación a casos de uso xa existentes ou na coordinación de novos proxectos colaborativos con outros membros.',

        'Trátase de reunir iniciativas que, mediante a colaboración ou o uso dos servizos ofrecidos por OneHealth DataSpace, contribúan a mellorar a saúde global.',

        {
          type: 'h2',
          content: 'A antesala da 1HealthAI Factory',
        },

        'OneHealth DataSpace constitúe a antesala necesaria da 1HealthAI Factory, a única factoría europea de intelixencia artificial dedicada en exclusiva ao ecosistema One Health.',

        'Isto sitúa ao CESGA como referente europeo en intelixencia artificial aplicada á saúde global dentro da rede EuroHPC Joint Undertaking, unha infraestrutura con visión de futuro na que o dato se converte no motor dunha saúde global máis integrada, intelixente e soberana.',

        'O proxecto do Centro Demostrador de Espazos de Datos DATAlife, no que se integra OneHealth DataSpace, está financiado pola Secretaría de Estado de Dixitalización e Intelixencia Artificial (SEDIA) do Ministerio para a Transformación Dixital e da Función Pública, no marco da convocatoria de Centros Demostradores e Casos de Uso de Espazos de Datos (Orde TDF/1461/2023, do 29 de decembro).',

        'Ademais, conta con financiamento da Unión Europea – NextGenerationEU a través do Plan de Recuperación, Transformación e Resiliencia.',

        {
          type: 'bold',
          content: 'Máis ca datos.',
        },
      ],
    },
    {
      key: 'onehealth-dataspace-43-casos-uso-2026',
      date: '2026-07-22',
      title:
        'O Espazo de Datos do CESGA suma xa 43 iniciativas de investigación baixo o enfoque One Health',
      excerpt:
        'OneHealth DataSpace, o espazo de datos do CESGA, consolídase como un ecosistema activo, con 36 entidades adheridas que colaboran nun total de 43 casos de uso para acadar mellores resultados en favor da saúde global.',
      author_name: 'Iago Sequeiros',
      author_image: ISequeirosImg,
      description: [
        { type: 'h1', content: '' },
        {
          type: 'bold',
          content:
            'OneHealth DataSpace, o espazo de datos do CESGA, consolídase como un ecosistema activo, con 36 entidades adheridas que colaboran nun total de 43 casos de uso para acadar mellores resultados en favor da saúde global.',
        },

        'OneHealth DataSpace, o espazo de datos do CESGA, continúa medrando e afiánzase como ecosistema de colaboración para mellorar a saúde global.',

        'Os 43 casos de uso que participan actualmente en OneHealth DataSpace supoñen un salto cualitativo importante se temos en conta os 7 casos de uso cos que arrincou o proxecto, ou as 22 entidades adheridas que rexistraba o espazo de datos do CESGA en abril deste ano.',

        'En poucos meses, OneHealth DataSpace pasou de ser un proxecto en fase de consolidación a converterse nun ecosistema activo e sólido, no que 36 entidades adheridas comparten coñecementos, os analizan, procesan e almacenan cun fin común: a mellora da saúde global desde un enfoque integrador que toma a saúde humana, animal e medioambiental como un todo.',

        'O OneHealth DataSpace ofrece ás súas entidades participantes capacidades avanzadas de computación (HPC), análise con tecnoloxías Big Data, almacenamento de alto rendemento e a exposición dos resultados en aplicacións e servizos listos para o seu uso. Todo isto, baixo o enfoque One Health (Unha soa saúde) que integra saúde humana, animal e medioambiental.',

        { type: 'h2', content: 'Un ecosistema en crecemento' },

        'As entidades participantes do OneHealth DataSpace representan perfís diversos, tanto públicos como privados, vinculados á investigación, a asistencia sanitaria, a innovación tecnolóxica e a xeración de coñecemento baixo o enfoque One Health.',

        'OneHealth DataSpace proporciona a estas organizacións unha infraestrutura dixital segura, interoperable e gobernada para compartir e aproveitar datos, integrada con recursos de HPC, Big Data, Cloud e Intelixencia Artificial do Centro de Supercomputación de Galicia (CESGA).',

        { type: 'h2', content: 'O proxecto amplía a súa actividade ata o 31 de agosto' },

        'En paralelo a esta nova fase de crecemento, o proxecto estende a súa actividade ata o 31 de agosto de 2026, o que lle permitirá continuar incorporando entidades adheridas, consolidar o avanzado e impulsar novas iniciativas, así como reforzar as accións de difusión, formación e transferencia de coñecemento.',

        'Así mesmo, facilitará avanzar na evolución de OneHealth DataSpace como antesala da futura 1HealthAI Factory, a infraestrutura europea impulsada desde Galicia para a aplicación da intelixencia artificial ao ámbito One Health.',

        {
          type: 'h2',
          content:
            'Mini Encontros: explicamos como responde OneHealth DataSpace ás necesidades do sector',
        },

        'Como parte desta nova etapa, o proxecto do CESGA puxo en marcha os Mini Encontros OneHealth DataSpace, unha iniciativa orientada a achegar o espazo de datos a grupos de investigación e entidades interesadas en explorar novas oportunidades de colaboración.',

        {
          type: 'bold',
          content:
            'Baixo o lema «Os teus datos. O teu control. Coñecemento que transforma a saúde global», cada sesión combina unha breve presentación do proxecto cun espazo de diálogo orientado a identificar necesidades e impulsar novas colaboracións dentro do ecosistema One Health.',
        },

        'O primeiro destes encontros celebrouse o 23 de xuño na Sala Anfiteatro do IDIS (Instituto de Investigación Sanitaria de Santiago), no CHUS de Santiago de Compostela. En xullo continuou con novos encontros, o 8 de xullo no Instituto de Investigación Biomédica da Coruña (INIBIC) e o 9 de xullo no Instituto de Investigación en Saúde Global e Desenvolvemento Sostible (iTERRA) de Lugo, e o 29 de xullo terá lugar a última xornada no Instituto de Investigación Sanitaria Galicia Sur (IISGaliciaSur) no Hospital Álvaro Cunqueiro, Vigo.',

        {
          type: 'h2',
          content:
            '22 de xullo, Encontro de Presentación de Resultados de OneHealth DataSpace',
        },

        'O mércores 22 de xullo OneHealth DataSpace celebra no CiMUS (Center for Research in Molecular Medicine and Chronic Diseases) de Santiago de Compostela o seu Encontro de Presentación de Resultados; unha xornada na que o equipo do proxecto compartirá os principais avances do proxecto e presentaranse algúns dos seus casos de uso. Durante a sesión darase tamén a coñecer o Espazo Nacional de Datos de Saúde (ENDS) e o Espazo Europeo de Datos de Saúde (EHDS), e abordaranse as oportunidades de futuro que abre esta iniciativa como antesala da futura 1HealthAI Factory.',

        'O encontro contará coa participación de representantes institucionais de GAIN, CiMUS e CESGA, con Manuel Brocos, da Dirección Xeral do Dato (SEDIA), que presentará o Espazo Nacional de Datos de Saúde, e con Lucía Escapa Castro, xefa do Gabinete da Secretaría Xeral de Saúde Dixital, Información e Innovación do SNS do Ministerio de Sanidade, que presentará o Espazo Europeo de Datos de Saúde. A xornada pechará cunha intervención sobre o papel de OneHealth DataSpace como punto de partida cara á futura 1HealthAI Factory, a única infraestrutura europea de intelixencia artificial concibida especificamente baixo o enfoque One Health.',

        {
          type: 'bold',
          content: 'Más que datos. Máis ca datos. More than data.',
        },
      ],
    },

  ],
};
