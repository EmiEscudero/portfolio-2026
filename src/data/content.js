const linkedinUrl = 'https://www.linkedin.com/in/emiliano-escudero'
const githubUrl = 'https://github.com/EmiEscudero'
const youtubeUrl = 'https://www.youtube.com/@Emiliano-Escudero'
const x_Url = 'https://x.com/MikeEmilianoES/with_replies'
const twitchUrl = 'https://www.twitch.tv/mikeemiliano__'
const duolingoUrl = 'https://www.duolingo.com/profile/EmiEscudero'

const sharedSocials = [
  { id: 'linkedin', label: 'LinkedIn', href: linkedinUrl },
  { id: 'github', label: 'GitHub', href: githubUrl },
  { id: 'youtube', label: 'YouTube', href: youtubeUrl },
  { id: 'x', label: 'X', href: x_Url },
  { id: 'twitch', label: 'Twitch', href: twitchUrl },
  { id: 'duolingo', label: 'Duolingo', href: duolingoUrl },
]

const sharedProfile = {
  name: 'Miguel Emiliano Escudero Saavedra',
  shortName: 'Emiliano Escudero',
  nameLines: ['Miguel Emiliano', 'Escudero Saavedra'],
  location: 'Mexico',
  email: 'escudero.emiliano.u@gmail.com',
  linkedin: linkedinUrl,
  socials: sharedSocials,
}

const sharedStacks = {
  energyChatbot: [
    { id: 'python', label: 'Python' },
    { id: 'llama-3', label: 'Llama 3' },
    { id: 'ollama', label: 'Ollama' },
    { id: 'sql-server', label: 'SQL Server' },
    { id: 'streamlit', label: 'Streamlit' },
    { id: 'prompt-engineering', label: 'Prompt Engineering' },
  ],
  energyChatbotEs: [
    { id: 'python', label: 'Python' },
    { id: 'llama-3', label: 'Llama 3' },
    { id: 'ollama', label: 'Ollama' },
    { id: 'sql-server', label: 'SQL Server' },
    { id: 'streamlit', label: 'Streamlit' },
    { id: 'prompt-engineering', label: 'Ingeniería de prompts' },
  ],
  portfolio: [
    { id: 'react', label: 'React' },
    { id: 'vite', label: 'Vite' },
    { id: 'html-css', label: 'HTML/CSS' },
    { id: 'vercel', label: 'Vercel' },
  ],
}

const sharedSkillItems = {
  dataMl: [
    { id: 'python', label: 'Python' },
    { id: 'scikit-learn', label: 'scikit-learn' },
    { id: 'pyspark', label: 'PySpark' },
    { id: 'databricks', label: 'Databricks' },
    { id: 'hadoop', label: 'Hadoop' },
    { id: 'cnns', label: 'CNNs' },
    { id: 'nlp', label: 'NLP' },
  ],
  dataStorage: [
    { id: 'sql', label: 'SQL' },
    { id: 'nosql', label: 'NoSQL' },
    { id: 'sql-server', label: 'SQL Server' },
  ],
  llm: [
    { id: 'ollama', label: 'Ollama' },
    { id: 'llama-3', label: 'Llama 3' },
    { id: 'prompt-engineering', label: 'Prompt Engineering' },
    { id: 'streamlit', label: 'Streamlit' },
  ],
  llmEs: [
    { id: 'ollama', label: 'Ollama' },
    { id: 'llama-3', label: 'Llama 3' },
    { id: 'prompt-engineering', label: 'Ingeniería de prompts' },
    { id: 'streamlit', label: 'Streamlit' },
  ],
  web: [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'react', label: 'React' },
    { id: 'html-css', label: 'HTML/CSS' },
    { id: 'java', label: 'Java' },
  ],
}

const sharedMatrixRainWords = [
  'PYTHON',
  'SQL',
  'NOSQL',
  'LLAMA 3',
  'OLLAMA',
  'STREAMLIT',
  'REACT',
  'VITE',
  'VERCEL',
  'PYSPARK',
  'HADOOP',
  'DATABRICKS',
  'SCIKIT-LEARN',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'JAVA',
  'HTML/CSS',
  'DATA',
  'ML',
  'LLM',
  'GENAI',
  'NLP',
  'CNNS',
  'PIPELINES',
  'PROMPTS',
  'LOCAL-FIRST',
  'CLOUD-READY',
  'ANALYTICS',
]

export const portfolioContent = {
  en: {
    matrixRainWords: sharedMatrixRainWords,
    meta: {
      title: 'Emiliano Escudero — Data & AI Portfolio',
      description:
        'Portfolio of Emiliano Escudero, a Computer Systems Engineer building data science, machine learning, and LLM solutions.',
    },
    controls: {
      skipLink: 'Skip to content',
      navigationLabel: 'Primary navigation',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      languageToSpanish: 'Switch language to Spanish',
      languageToEnglish: 'Switch language to English',
      themeToDark: 'Switch to dark theme',
      themeToLight: 'Switch to light theme',
      english: 'EN',
      spanish: 'ES',
      light: 'Light',
      dark: 'Dark',
    },
    profile: {
      ...sharedProfile,
      title: 'Computer Systems Engineer',
      tagline:
        'I turn complex data into practical products—from machine learning pipelines to locally deployed language models.',
      availability: 'Available for new opportunities',
    },
    hero: {
      eyebrow: 'Data & Applied AI',
      projectsAction: 'Explore my work',
      panelLabel: 'Profile snapshot',
      panelFile: 'emiliano.config',
      panelComment: '// turning data into useful systems',
      panelFooter: 'local-first · cloud-ready',
      signals: [
        { id: 'status', label: 'status', value: 'open to work', active: true },
        { id: 'focus', label: 'focus', value: 'data · ml · genAI' },
        { id: 'base', label: 'base', value: 'Mexico' },
      ],
      scrollLabel: 'Scroll to explore',
    },
    sections: {
      about: {
        index: '01',
        eyebrow: 'About',
        title: 'Turning complex data into useful systems.',
      },
      experience: {
        index: '02',
        eyebrow: 'Experience',
        title: 'Research transformed into a working product.',
        description: 'Hands-on work across local LLMs, data engineering, and user-facing analytics.',
      },
      projects: {
        index: '03',
        eyebrow: 'Selected work',
        title: 'Ideas transformed into working systems.',
        description: 'A focused selection of projects across applied AI, data, and the web.',
      },
      skills: {
        index: '04',
        eyebrow: 'Toolkit',
        title: 'A practical stack for data and AI.',
        description: 'Technologies I use today and the web tools I am actively expanding into.',
      },
      education: {
        index: '05',
        eyebrow: 'Education',
        title: 'The foundation behind the work.',
        description: 'Formal training in computer systems, data science, and workplace readiness.',
        certificationsTitle: 'Certifications & continued learning',
      },
      contact: {
        index: '06',
        eyebrow: "Let's connect",
        title: 'Have a challenge worth solving?',
      },
    },
    about: [
      "I'm a Computer Systems Engineer from Zacatepec, Mexico, focused on data science and applied machine learning. I build systems that turn raw data into something useful: convolutional neural networks for image classification, SQL and NoSQL pipelines for structured data, and large language models running locally or in the cloud.",
      "At INEEL, I researched and deployed Llama 3 through Ollama, then connected it to real energy-sector data instead of a demo dataset. I'm currently looking for new opportunities while broadening my range across JavaScript, React, Java, and TypeScript.",
    ],
    experience: [
      {
        id: 'ineel-research-intern',
        role: 'Research Intern',
        org: 'Instituto Nacional de Electricidad y Energías Limpias (INEEL)',
        location: 'Cuernavaca, MOR',
        dates: 'March 2025 – June 2025',
        bullets: [
          'Researched Spanish-capable LLMs for local execution; selected Llama 3 and ran it with Ollama.',
          'Consolidated historical energy-sector CSV data from multiple sources into a single SQL Server database.',
          "Applied NLP and prompt engineering to align Llama 3's responses with the energy sector's business context.",
          'Built a Streamlit chatbot that answers questions against SQL Server data, returning text responses alongside tables and charts.',
        ],
      },
    ],
    projects: [
      {
        id: 'energy-data-chatbot',
        number: '01',
        name: 'Energy Data Chatbot',
        description:
          'A Streamlit application built during my INEEL internship. It takes a plain-language question, queries a SQL Server database of energy-sector data, and returns an answer with tables and charts. Llama 3 runs locally through Ollama with prompts tailored to the energy sector.',
        stack: sharedStacks.energyChatbot,
      },
      {
        id: 'portfolio',
        number: '02',
        name: 'This Portfolio',
        description:
          'A single-page experience built with Vite and React, deployed on Vercel. Content stays separate from presentation, making the interface easy to evolve without tangling copy and layout.',
        stack: sharedStacks.portfolio,
        repository: {
          label: 'View on GitHub',
          ariaLabel: 'View this project on GitHub — opens in a new tab',
          href: `${githubUrl}/portfolio-2026`,
        },
      },
    ],
    skills: [
      {
        id: 'data-ml',
        category: 'Data & ML',
        items: sharedSkillItems.dataMl,
      },
      {
        id: 'data-storage',
        category: 'Data Storage',
        items: sharedSkillItems.dataStorage,
      },
      {
        id: 'llm-tooling',
        category: 'LLM Tooling',
        items: sharedSkillItems.llm,
      },
      {
        id: 'web',
        category: 'Web · In progress',
        items: sharedSkillItems.web,
      },
    ],
    education: [
      {
        id: 'data-science-specialization',
        program: 'Specialization in Data Science for Decision-Making',
        school: 'Instituto Tecnológico de Zacatepec',
        dates: 'January 2024 – December 2025',
      },
      {
        id: 'computer-systems-engineering',
        program: 'Computer Systems Engineering',
        school: 'Instituto Tecnológico de Zacatepec',
        dates: 'January 2020 – June 2025',
      },
      {
        id: 'inroads-readiness',
        program: 'Employment Readiness Badge · Workplace Skills',
        school: 'INROADS México',
        dates: '2026',
      },
      {
        id: 'technical-baccalaureate',
        program: 'Technological Baccalaureate · Programming',
        school: 'CBTis No. 194',
        dates: 'August 2017 – July 2020',
      },
    ],
    certifications: [
      { id: 'telecom-x', name: 'Telecom X Challenge: Customer Churn Analysis — Part 2' },
      { id: 'learning', name: 'Learning How to Learn: Techniques for Self-Development' },
      {
        id: 'ai-data-science',
        name: 'AI Applied to Data Science: Using AI to Build Data Visualizations',
      },
      {
        id: 'python-data-science',
        name: 'Python for Data Science: Functions, Data Structures, and Exceptions',
      },
      { id: 'voxy', name: 'Voxy Proficiency Achievement Certificate — Low Advanced' },
    ],
    contact: {
      body: 'I am open to roles in data science, machine learning, and LLM/GenAI engineering. If my experience fits what you are building, I would be glad to hear about it.',
      emailAction: 'Send an email',
      copyEmailAction: 'Copy email address',
      copyEmailSuccess: 'Email address copied',
      copyEmailError: 'The email address could not be copied. Please select and copy it manually.',
      socialTitle: 'Social media',
      socialUnavailable: 'Profile link pending',
      opensNewTab: 'opens in a new tab',
    },
    footer: {
      note: 'Designed and built with React, curiosity, and a lot of green.',
      backToTop: 'Back to top',
      easterEggLabel: 'Twenty One Pilots fan',
    },
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#education', label: 'Education' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  es: {
    matrixRainWords: sharedMatrixRainWords,
    meta: {
      title: 'Emiliano Escudero — Portafolio de Datos e IA',
      description:
        'Portafolio de Emiliano Escudero, Ingeniero en Sistemas Computacionales enfocado en ciencia de datos, machine learning y soluciones con LLM.',
    },
    controls: {
      skipLink: 'Saltar al contenido',
      navigationLabel: 'Navegación principal',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación',
      languageToSpanish: 'Cambiar idioma a español',
      languageToEnglish: 'Cambiar idioma a inglés',
      themeToDark: 'Cambiar al tema oscuro',
      themeToLight: 'Cambiar al tema claro',
      english: 'EN',
      spanish: 'ES',
      light: 'Claro',
      dark: 'Oscuro',
    },
    profile: {
      ...sharedProfile,
      title: 'Ingeniero en Sistemas Computacionales',
      tagline:
        'Convierto datos complejos en productos prácticos: desde pipelines de machine learning hasta modelos de lenguaje desplegados localmente.',
      availability: 'Disponible para nuevas oportunidades',
    },
    hero: {
      eyebrow: 'Datos e IA aplicada',
      projectsAction: 'Explora mi trabajo',
      panelLabel: 'Resumen del perfil',
      panelFile: 'emiliano.config',
      panelComment: '// convirtiendo datos en sistemas útiles',
      panelFooter: 'local-first · listo para la nube',
      signals: [
        { id: 'status', label: 'estado', value: 'buscando oportunidades', active: true },
        { id: 'focus', label: 'enfoque', value: 'datos · ML · IA generativa' },
        { id: 'base', label: 'ubicación', value: 'México' },
      ],
      scrollLabel: 'Desliza para explorar',
    },
    sections: {
      about: {
        index: '01',
        eyebrow: 'Acerca de mí',
        title: 'Convierto datos complejos en sistemas útiles.',
      },
      experience: {
        index: '02',
        eyebrow: 'Experiencia',
        title: 'Investigación convertida en un producto funcional.',
        description: 'Trabajo práctico con LLM locales, ingeniería de datos y analítica para usuarios.',
      },
      projects: {
        index: '03',
        eyebrow: 'Trabajo seleccionado',
        title: 'Ideas transformadas en sistemas funcionales.',
        description: 'Una selección enfocada de proyectos de IA aplicada, datos y desarrollo web.',
      },
      skills: {
        index: '04',
        eyebrow: 'Herramientas',
        title: 'Un stack práctico para datos e IA.',
        description: 'Tecnologías que utilizo actualmente y herramientas web que sigo desarrollando.',
      },
      education: {
        index: '05',
        eyebrow: 'Formación',
        title: 'La base detrás de mi trabajo.',
        description: 'Formación en sistemas computacionales, ciencia de datos y preparación profesional.',
        certificationsTitle: 'Certificaciones y aprendizaje continuo',
      },
      contact: {
        index: '06',
        eyebrow: 'Conectemos',
        title: '¿Tienes un reto que valga la pena resolver?',
      },
    },
    about: [
      'Soy Ingeniero en Sistemas Computacionales de Zacatepec, México, enfocado en ciencia de datos y machine learning aplicado. Construyo sistemas que convierten datos sin procesar en soluciones útiles: redes neuronales convolucionales para clasificación de imágenes, pipelines SQL y NoSQL para datos estructurados, y modelos de lenguaje ejecutados localmente o en la nube.',
      'En el INEEL investigué y desplegué Llama 3 con Ollama, y después lo conecté a datos reales del sector energético en lugar de usar un conjunto de demostración. Actualmente busco nuevas oportunidades mientras amplío mi experiencia en JavaScript, React, Java y TypeScript.',
    ],
    experience: [
      {
        id: 'ineel-research-intern',
        role: 'Residente de investigación',
        org: 'Instituto Nacional de Electricidad y Energías Limpias (INEEL)',
        location: 'Cuernavaca, MOR',
        dates: 'Marzo de 2025 – Junio de 2025',
        bullets: [
          'Investigué LLM con capacidad en español para ejecución local; seleccioné Llama 3 y lo ejecuté con Ollama.',
          'Consolidé datos históricos del sector energético desde múltiples archivos CSV en una sola base de datos de SQL Server.',
          'Apliqué NLP e ingeniería de prompts para alinear las respuestas de Llama 3 con el contexto de negocio del sector energético.',
          'Desarrollé un chatbot en Streamlit que consulta datos de SQL Server y devuelve respuestas de texto junto con tablas y gráficas.',
        ],
      },
    ],
    projects: [
      {
        id: 'energy-data-chatbot',
        number: '01',
        name: 'Chatbot de Datos Energéticos',
        description:
          'Una aplicación en Streamlit desarrollada durante mi estancia en el INEEL. Recibe preguntas en lenguaje natural, consulta una base de datos de SQL Server del sector energético y devuelve una respuesta con tablas y gráficas. Llama 3 se ejecuta localmente con Ollama y prompts adaptados al sector.',
        stack: sharedStacks.energyChatbotEs,
      },
      {
        id: 'portfolio',
        number: '02',
        name: 'Este Portafolio',
        description:
          'Una experiencia de una sola página construida con Vite y React, desplegada en Vercel. El contenido está separado de la presentación para que la interfaz pueda evolucionar sin mezclar el contenido y el diseño.',
        stack: sharedStacks.portfolio,
        repository: {
          label: 'Ver en GitHub',
          ariaLabel: 'Ver este proyecto en GitHub — se abre en una pestaña nueva',
          href: `${githubUrl}/portfolio-2026`,
        },
      },
    ],
    skills: [
      {
        id: 'data-ml',
        category: 'Datos y ML',
        items: sharedSkillItems.dataMl,
      },
      {
        id: 'data-storage',
        category: 'Almacenamiento de datos',
        items: sharedSkillItems.dataStorage,
      },
      {
        id: 'llm-tooling',
        category: 'Herramientas para LLM',
        items: sharedSkillItems.llmEs,
      },
      {
        id: 'web',
        category: 'Web · En progreso',
        items: sharedSkillItems.web,
      },
    ],
    education: [
      {
        id: 'data-science-specialization',
        program: 'Especialidad en Ciencia de Datos para la Toma de Decisiones',
        school: 'Instituto Tecnológico de Zacatepec',
        dates: 'Enero de 2024 – Diciembre de 2025',
      },
      {
        id: 'computer-systems-engineering',
        program: 'Ingeniería en Sistemas Computacionales',
        school: 'Instituto Tecnológico de Zacatepec',
        dates: 'Enero de 2020 – Junio de 2025',
      },
      {
        id: 'inroads-readiness',
        program: 'Insignia de Preparación para el Empleo · Habilidades Laborales',
        school: 'INROADS México',
        dates: '2026',
      },
      {
        id: 'technical-baccalaureate',
        program: 'Bachillerato Tecnológico · Programación',
        school: 'CBTis No. 194',
        dates: 'Agosto de 2017 – Julio de 2020',
      },
    ],
    certifications: [
      { id: 'telecom-x', name: 'Challenge Telecom X: análisis de evasión de clientes — Parte 2' },
      { id: 'learning', name: 'Aprender a aprender: técnicas para tu autodesarrollo' },
      {
        id: 'ai-data-science',
        name: 'IA aplicada a la ciencia de datos: uso de IA en la construcción de visualizaciones',
      },
      {
        id: 'python-data-science',
        name: 'Python para Data Science: funciones, estructuras de datos y excepciones',
      },
      { id: 'voxy', name: 'Certificado de dominio Voxy — Nivel avanzado bajo' },
    ],
    contact: {
      body: 'Estoy abierto a oportunidades en ciencia de datos, machine learning e ingeniería de LLM o IA generativa. Si mi experiencia encaja con lo que estás construyendo, me encantará conocer el proyecto.',
      emailAction: 'Enviar un correo',
      copyEmailAction: 'Copiar dirección de correo',
      copyEmailSuccess: 'Dirección de correo copiada',
      copyEmailError: 'No se pudo copiar la dirección. Selecciónala y cópiala manualmente.',
      socialTitle: 'Redes sociales',
      socialUnavailable: 'Enlace de perfil pendiente',
      opensNewTab: 'se abre en una pestaña nueva',
    },
    footer: {
      note: 'Diseñado y construido con React, curiosidad y mucho verde.',
      backToTop: 'Volver arriba',
      easterEggLabel: 'Fan de Twenty One Pilots',
    },
    navLinks: [
      { href: '#about', label: 'Perfil' },
      { href: '#experience', label: 'Experiencia' },
      { href: '#projects', label: 'Proyectos' },
      { href: '#skills', label: 'Habilidades' },
      { href: '#education', label: 'Formación' },
      { href: '#contact', label: 'Contacto' },
    ],
  },
}
