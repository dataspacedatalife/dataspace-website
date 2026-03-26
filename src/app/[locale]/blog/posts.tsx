import type { StaticImageData } from 'next/image';
import type { Locale } from 'next-intl';
import DinamicaCRED from '../../../../public/blog/dinamicaEventoInicialCRED.png';
import ArchitectureImg from '../../../../public/logo_completo.jpg';
import JCacheiroImg from '../../../../public/team/jcacheiro.png';
import LDiazImg from '../../../../public/team/ldiaz.jpg';
import LVazquezImg from '../../../../public/team/lvazquez.jpg';
import MCarmenaImg from '../../../../public/team/mcarmena.jpg';
import MCastineiraImg from '../../../../public/team/mcastineira.jpg';
import PFerreiroImg from '../../../../public/team/pferreiro.jpg';
import Avatar from '../../../../public/team/avatar.png';

interface TextNodeBase {
  type: string;
  content?: React.ReactNode;
}

interface HeadingNode extends TextNodeBase {
  type: 'h1' | 'h2' | 'h3' | 'h4';
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
    { //NOVA NOTICIA: IAGO
      key: 'taller-one-health-kit',
      date: '2026-03-26',
      title:
        'El Espacio de Datos One Health del CESGA impulsa la integración en el Kit Espacios de Datos con un taller dirigido a empresas e instituciones ',
      excerpt:
        'El Centro Demostrador Multisectorial DATAspace de CESGA celebró una sesión formativa práctica dirigida a resolver dudas y acompañar a empresas e instituciones en su incorporación al Espacio de Datos One Health como paso previo a la solicitud del Kit Espacios de Datos.',
      author_name: 'Iago Sequeiros',
      author_image: Avatar,
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
          content:
            'https://www.youtube.com/watch?v=z72j1-uQCVo',
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
          content:
            'https://www.youtube.com/watch?v=yshUdWjAsw8',
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
          content:
            'https://www.youtube.com/watch?v=CRtcBkdf0Wg',
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
          content: 'Un patrón socio-técnico para compartir datos',
        },

        'En este contexto, los espacios de datos como el promovido por CESGA emergen como un patrón socio-técnico que habilita el intercambio y uso conjunto de datos mediante reglas, roles y responsabilidades claras.',

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
          content:
            '• Guía del participante del Espacio de Datos.',
          href: 'https://xdatashare.srv.cesga.es/assets/static/files/Guia-del-participante.pdf',
          external: true,
        },

        {
          type: 'link',
          content:
            '• Guía del Kit de solicitud del Espacio de Datos.',
          href: 'https://dataspace.cesga.es/kit/guia_solicitud_KIT_CESGA.pdf',
          external: true,
        },
      ],
      featured: false,
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
    { //NEW ARTICLE: IAGO
      key: 'taller-one-health-kit',
      date: '2026-03-26',
      title:
        'CESGA One Health Data Space drives integration in the Data Spaces Kit with a workshop for companies and institutions',
      excerpt:
        'The CESGA Multisectoral DATAspace Demonstrator Center held a practical training session aimed at answering questions and supporting companies and institutions in joining the One Health Data Space as a preliminary step before requesting the Data Spaces Kit.',
      author_name: 'Iago Sequeiros',
      author_image: Avatar,
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
  ],
};
