const linkedinUrl = 'https://www.linkedin.com/in/emiliano-escudero'
const githubUrl = 'https://github.com/EmiEscudero'
const youtubeUrl = 'https://www.youtube.com/@Emiliano-Escudero'
const x_Url = 'https://x.com/MikeEmilianoES/with_replies'
const twitchUrl = 'https://www.twitch.tv/mikeemiliano__'
const duolingoUrl = 'https://www.duolingo.com/profile/EmiEscudero'

const sharedPortraits = [
  {
    id: 'profile-pic-1',
    src: '/images/profile/profile-pic1.png',
    position: '50% 50%',
  },
  {
    id: 'matrix-pic',
    src: '/images/profile/matrix-pic.png',
    position: '50% 50%',
  },
]

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
  email: 'emiliano.escudero.ai@gmail.com',
  linkedin: linkedinUrl,
  portraits: sharedPortraits,
  socials: sharedSocials,
}

const sharedStacks = {
  aamia: [
    { id: 'python', label: 'Python' },
    { id: 'streamlit', label: 'Streamlit' },
    { id: 'rag', label: 'RAG · BM25' },
    { id: 'ollama', label: 'Ollama' },
    { id: 'docker', label: 'Docker' },
  ],
  honeyguard: [
    { id: 'python', label: 'Python' },
    { id: 'pandas', label: 'pandas' },
    { id: 'scikit-learn', label: 'scikit-learn' },
    { id: 'tf-idf', label: 'TF-IDF' },
    { id: 'git', label: 'Git' },
    { id: 'github', label: 'GitHub' },
  ],
  telecomAnalysis: [
    { id: 'python', label: 'Python' },
    { id: 'pandas', label: 'pandas' },
    { id: 'matplotlib', label: 'Matplotlib' },
    { id: 'seaborn', label: 'Seaborn' },
    { id: 'colab', label: 'Google Colab' },
  ],
  telecomPrediction: [
    { id: 'python', label: 'Python' },
    { id: 'pandas', label: 'pandas' },
    { id: 'scikit-learn', label: 'scikit-learn' },
    { id: 'matplotlib', label: 'Matplotlib' },
    { id: 'colab', label: 'Google Colab' },
  ],
  touristPlaces: [
    { id: 'python', label: 'Python' },
    { id: 'pytorch', label: 'PyTorch' },
    { id: 'torchvision', label: 'torchvision' },
    { id: 'efficientnet', label: 'EfficientNet-B0' },
    { id: 'streamlit', label: 'Streamlit' },
  ],
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
    { id: 'pandas', label: 'pandas' },
    { id: 'scikit-learn', label: 'scikit-learn' },
    { id: 'pytorch', label: 'PyTorch' },
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
    { id: 'mysql', label: 'MySQL' },
    { id: 'postgresql', label: 'PostgreSQL' },
    { id: 'mongodb', label: 'MongoDB' },
    { id: 'neo4j', label: 'Neo4j' },
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
      portraitLabel: 'Portrait of Emiliano Escudero',
      portraitControlsLabel: 'Choose a profile picture',
      portraitPauseLabel: 'Pause profile picture rotation',
      portraitResumeLabel: 'Resume profile picture rotation',
      portraitSelectLabel: 'Show profile picture',
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
        description: 'Research and development across local LLMs, computer vision, and database applications.',
      },
      projects: {
        index: '03',
        eyebrow: 'Selected work',
        title: 'Ideas transformed into working systems.',
        description: 'A focused selection of projects across applied AI, data, and the web.',
        contributionLabel: 'My contribution',
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
        description: 'A computer systems degree, data science programs, and continued learning in AI.',
        certificationsTitle: 'Certifications & continued learning',
        credentialNewTab: 'View credential — opens in a new tab',
      },
      contact: {
        index: '06',
        eyebrow: "Let's connect",
        title: 'Have a challenge worth solving?',
      },
    },
    about: [
      "I'm a Computer Systems Engineer from Mexico, focused on data science and applied machine learning. I build systems that turn raw data into something useful: convolutional neural networks for image classification, SQL and NoSQL pipelines for structured data, and large language models running locally or in the cloud.",
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
      {
        id: 'cbtis-database-administrator',
        role: 'Database Administrator',
        org: 'CBTis No. 223',
        location: 'Zacatepec, Mexico',
        dates: 'August 2024 – December 2024',
        bullets: [
          'Developed a web system to manage student community service and internship records, using MySQL and QuestPDF for document generation.',
          'Automated administrative document workflows and wrote a user manual covering the system’s features.',
        ],
      },
      {
        id: 'cenidet-research',
        role: 'Data Science Research Project',
        org: 'CENIDET Science and Technology Summer Program',
        location: 'Remote',
        dates: 'June 2024 – July 2024',
        bullets: [
          'Developed a PyTorch model to classify tourist destinations from photographs, with image preprocessing and data augmentation using torchvision.',
          'Presented the project at the first CENIDET Science and Technology Summer congress.',
        ],
      },
    ],
    projects: [
      {
        id: 'aamia',
        number: '01',
        name: 'AAMIA · Eldercare Document Assistant',
        context: 'Applied AI · Alura challenge',
        description:
          'A Spanish-language assistant that searches eldercare PDFs and answers with document and page citations. I built page-level ingestion, BM25 retrieval, and a Streamlit interface with temporary PDF uploads; it works in extractive mode or with an optional LLM provider.',
        stack: sharedStacks.aamia,
        repository: {
          label: 'View on GitHub',
          ariaLabel: 'View AAMIA on GitHub — opens in a new tab',
          href: `${githubUrl}/Challenge_AluraAgente-AAMIA`,
        },
        links: [
          {
            label: 'Try the app',
            ariaLabel: 'Open the AAMIA app — opens in a new tab',
            href: 'https://challenge-alura-gente-aamia.streamlit.app/',
          },
        ],
      },
      {
        id: 'honeyguard',
        number: '02',
        name: 'HoneyGuard · Technical Knowledge Organizer',
        context: 'Team project · Data Scientist',
        description:
          'Built with Team 25, tejONEs, for the ONE G9 hackathon. HoneyGuard organizes technical documents through classification, summaries, keywords, and related-content search.',
        contribution:
          'Prepared a balanced dataset of 1,400 resources across seven categories, built shared text-cleaning functions and a TF-IDF extractive summarizer, and added tests and integration documentation. Collaborated through Git branches, pull requests, and merge planning.',
        stack: sharedStacks.honeyguard,
        repository: {
          label: 'Team repository',
          ariaLabel: 'View the HoneyGuard team repository on GitHub — opens in a new tab',
          href: 'https://github.com/No-Country-simulation/G9-LATAM-Team-25',
        },
        links: [
          {
            label: 'View the demo',
            ariaLabel: 'Open the HoneyGuard demo — opens in a new tab',
            href: 'https://honeyguard-organizer.lovable.app/',
          },
        ],
      },
      {
        id: 'telecom-x-analysis',
        number: '03',
        name: 'Telecom X · Customer Churn Analysis',
        context: 'Data analysis · ONE G9',
        description:
          'Cleaned and normalized customer data from JSON, then explored churn using pandas, Matplotlib, and Seaborn. The notebook compares contracts, payment methods, tenure, charges, and support services to identify patterns that could inform retention strategies.',
        stack: sharedStacks.telecomAnalysis,
        repository: {
          label: 'View on GitHub',
          ariaLabel: 'View Telecom X customer churn analysis on GitHub — opens in a new tab',
          href: `${githubUrl}/challenge-telecom-x`,
        },
      },
      {
        id: 'telecom-x-prediction',
        number: '04',
        name: 'Telecom X · Churn Prediction',
        context: 'Machine learning · ONE G9',
        description:
          'Extended the churn analysis with feature preparation and a comparison of Logistic Regression and Random Forest. On the held-out test set, Logistic Regression achieved 80.3% accuracy and 0.605 F1; confusion matrices and recall show where the models still miss customers who leave.',
        stack: sharedStacks.telecomPrediction,
        repository: {
          label: 'View on GitHub',
          ariaLabel: 'View Telecom X churn prediction on GitHub — opens in a new tab',
          href: `${githubUrl}/challenge-telecom-x-parte2`,
        },
      },
      {
        id: 'tourist-place-recognition',
        number: '05',
        name: 'Tourist Place Recognition in Mexico',
        context: 'Computer vision · Research project revival',
        description:
          'Revisited my 2024 CNN project with EfficientNet-B0 transfer learning, image deduplication, and a bilingual Streamlit interface. The exploratory pilot covers 164 destinations, with 31.6% top-1 and 54.5% top-5 accuracy on 209 test photos; the app displays ranked matches and uncertain predictions.',
        stack: sharedStacks.touristPlaces,
        repository: {
          label: 'View on GitHub',
          ariaLabel: 'View tourist place recognition on GitHub — opens in a new tab',
          href: `${githubUrl}/ia-lugares-turisticos`,
        },
        links: [
          {
            label: 'Latest implementation',
            ariaLabel: 'View the tourist place recognition release branch — opens in a new tab',
            href: `${githubUrl}/ia-lugares-turisticos/tree/release/streamlit-clean`,
          },
        ],
      },
      {
        id: 'energy-data-chatbot',
        number: '06',
        name: 'Energy Data Chatbot',
        description:
          'A Streamlit application built during my INEEL internship. It takes a plain-language question, queries a SQL Server database of energy-sector data, and returns an answer with tables and charts. Llama 3 runs locally through Ollama with prompts tailored to the energy sector.',
        stack: sharedStacks.energyChatbot,
      },
      {
        id: 'portfolio',
        number: '07',
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
        id: 'gci-world',
        program: 'GCI World 2026 April · Data Science',
        school: 'Matsuo–Iwasawa Laboratory, The University of Tokyo · Online course',
        dates: 'April 2026 – July 2026',
      },
      {
        id: 'one-data-science',
        program: 'ONE Tech Foundation G9 · Data Science',
        school: 'Oracle & Alura Latam',
        dates: '2026',
      },
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
      { id: 'gci-world-completion', name: 'GCI World 2026 · Certificate of completion, August 2026' },
      {
        id: 'generative-ai',
        name: 'Exploring the Potential of Generative AI · Alura Latam',
        href: 'https://app.aluracursos.com/certificate/bc256522-af33-48af-b432-141b22177299',
      },
      {
        id: 'prompt-engineering',
        name: 'Prompt Engineering: Effective Prompts for Generative AI · Alura Latam',
        href: 'https://app.aluracursos.com/certificate/1fb90ad1-b3b3-4f71-bdf4-778b7631ae44',
      },
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
      {
        id: 'voxy',
        name: 'Voxy Proficiency Achievement Certificate — Low Advanced',
        href: 'https://app.voxy.com/certificates/proficiency-test/67350a0d89a0a4bbbf0b2d78/',
      },
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
      portraitLabel: 'Retrato de Emiliano Escudero',
      portraitControlsLabel: 'Elegir una foto de perfil',
      portraitPauseLabel: 'Pausar el cambio de fotos de perfil',
      portraitResumeLabel: 'Reanudar el cambio de fotos de perfil',
      portraitSelectLabel: 'Mostrar foto de perfil',
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
        description: 'Investigación y desarrollo con LLM locales, visión por computadora y aplicaciones de bases de datos.',
      },
      projects: {
        index: '03',
        eyebrow: 'Trabajo seleccionado',
        title: 'Ideas transformadas en sistemas funcionales.',
        description: 'Una selección enfocada de proyectos de IA aplicada, datos y desarrollo web.',
        contributionLabel: 'Mi contribución',
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
        description: 'Ingeniería en sistemas, programas de ciencia de datos y aprendizaje continuo en IA.',
        certificationsTitle: 'Certificaciones y aprendizaje continuo',
        credentialNewTab: 'Ver certificado — se abre en una pestaña nueva',
      },
      contact: {
        index: '06',
        eyebrow: 'Conectemos',
        title: '¿Tienes un reto que valga la pena resolver?',
      },
    },
    about: [
      'Soy Ingeniero en Sistemas Computacionales de México, enfocado en ciencia de datos y machine learning aplicado. Construyo sistemas que convierten datos sin procesar en soluciones útiles: redes neuronales convolucionales para clasificación de imágenes, pipelines SQL y NoSQL para datos estructurados, y modelos de lenguaje ejecutados localmente o en la nube.',
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
      {
        id: 'cbtis-database-administrator',
        role: 'Administrador de bases de datos',
        org: 'CBTis No. 223',
        location: 'Zacatepec, México',
        dates: 'Agosto de 2024 – Diciembre de 2024',
        bullets: [
          'Desarrollé un sistema web para gestionar registros de servicio social y prácticas profesionales, con MySQL y generación de documentos mediante QuestPDF.',
          'Automaticé flujos de documentos administrativos y redacté un manual de usuario con las funciones del sistema.',
        ],
      },
      {
        id: 'cenidet-research',
        role: 'Proyecto de investigación en ciencia de datos',
        org: 'Verano de Ciencia y Tecnología del CENIDET',
        location: 'Remoto',
        dates: 'Junio de 2024 – Julio de 2024',
        bullets: [
          'Desarrollé un modelo en PyTorch para clasificar destinos turísticos a partir de fotografías, con preprocesamiento y aumento de datos mediante torchvision.',
          'Presenté el proyecto en el primer congreso del Verano de Ciencia y Tecnología del CENIDET.',
        ],
      },
    ],
    projects: [
      {
        id: 'aamia',
        number: '01',
        name: 'AAMIA · Apoyo al Adulto Mayor IA',
        context: 'IA aplicada · Challenge Alura',
        description:
          'Un asistente en español que consulta PDF sobre cuidado de personas mayores y responde con citas del documento y la página. Desarrollé la ingesta por página, la recuperación BM25 y una interfaz en Streamlit con carga temporal de PDF; funciona en modo extractivo o con un proveedor LLM opcional.',
        stack: sharedStacks.aamia,
        repository: {
          label: 'Ver en GitHub',
          ariaLabel: 'Ver AAMIA en GitHub — se abre en una pestaña nueva',
          href: `${githubUrl}/Challenge_AluraAgente-AAMIA`,
        },
        links: [
          {
            label: 'Probar la app',
            ariaLabel: 'Abrir la aplicación AAMIA — se abre en una pestaña nueva',
            href: 'https://challenge-alura-gente-aamia.streamlit.app/',
          },
        ],
      },
      {
        id: 'honeyguard',
        number: '02',
        name: 'HoneyGuard · Organizador de Conocimiento Técnico',
        context: 'Proyecto en equipo · Data Scientist',
        description:
          'Desarrollado con el Team 25, tejONEs, para el hackathon ONE G9. HoneyGuard organiza documentos técnicos mediante clasificación, resúmenes, palabras clave y búsqueda de contenido relacionado.',
        contribution:
          'Preparé un dataset balanceado de 1,400 recursos en siete categorías, desarrollé funciones compartidas de limpieza de texto y un resumidor extractivo con TF-IDF, y añadí pruebas y documentación de integración. Colaboré mediante ramas de Git, pull requests y planificación de merges.',
        stack: sharedStacks.honeyguard,
        repository: {
          label: 'Repositorio del equipo',
          ariaLabel: 'Ver el repositorio del equipo HoneyGuard en GitHub — se abre en una pestaña nueva',
          href: 'https://github.com/No-Country-simulation/G9-LATAM-Team-25',
        },
        links: [
          {
            label: 'Ver la demo',
            ariaLabel: 'Abrir la demo de HoneyGuard — se abre en una pestaña nueva',
            href: 'https://honeyguard-organizer.lovable.app/',
          },
        ],
      },
      {
        id: 'telecom-x-analysis',
        number: '03',
        name: 'Telecom X · Análisis de Evasión de Clientes',
        context: 'Análisis de datos · ONE G9',
        description:
          'Limpié y normalicé datos de clientes desde JSON y exploré la evasión con pandas, Matplotlib y Seaborn. El notebook compara contratos, métodos de pago, antigüedad, cargos y servicios de soporte para identificar patrones que puedan orientar estrategias de retención.',
        stack: sharedStacks.telecomAnalysis,
        repository: {
          label: 'Ver en GitHub',
          ariaLabel: 'Ver el análisis de evasión de Telecom X en GitHub — se abre en una pestaña nueva',
          href: `${githubUrl}/challenge-telecom-x`,
        },
      },
      {
        id: 'telecom-x-prediction',
        number: '04',
        name: 'Telecom X · Predicción de Evasión',
        context: 'Machine learning · ONE G9',
        description:
          'Extendí el análisis de evasión con preparación de variables y una comparación de Regresión Logística y Random Forest. En el conjunto de prueba, la Regresión Logística obtuvo 80.3% de exactitud y 0.605 de F1; las matrices de confusión y el recall muestran qué clientes que cancelan siguen sin detectarse.',
        stack: sharedStacks.telecomPrediction,
        repository: {
          label: 'Ver en GitHub',
          ariaLabel: 'Ver la predicción de evasión de Telecom X en GitHub — se abre en una pestaña nueva',
          href: `${githubUrl}/challenge-telecom-x-parte2`,
        },
      },
      {
        id: 'tourist-place-recognition',
        number: '05',
        name: 'Reconocimiento de Lugares Turísticos en México',
        context: 'Visión por computadora · Proyecto retomado',
        description:
          'Retomé mi proyecto de CNN de 2024 con aprendizaje por transferencia usando EfficientNet-B0, eliminación de imágenes duplicadas y una interfaz bilingüe en Streamlit. El piloto exploratorio abarca 164 destinos, con 31.6% de exactitud top-1 y 54.5% top-5 en 209 fotos de prueba; la app muestra candidatos ordenados y predicciones inciertas.',
        stack: sharedStacks.touristPlaces,
        repository: {
          label: 'Ver en GitHub',
          ariaLabel: 'Ver el reconocimiento de lugares turísticos en GitHub — se abre en una pestaña nueva',
          href: `${githubUrl}/ia-lugares-turisticos`,
        },
        links: [
          {
            label: 'Implementación actual',
            ariaLabel: 'Ver la rama de la versión actual del reconocimiento turístico — se abre en una pestaña nueva',
            href: `${githubUrl}/ia-lugares-turisticos/tree/release/streamlit-clean`,
          },
        ],
      },
      {
        id: 'energy-data-chatbot',
        number: '06',
        name: 'Chatbot de Datos Energéticos',
        description:
          'Una aplicación en Streamlit desarrollada durante mi estancia en el INEEL. Recibe preguntas en lenguaje natural, consulta una base de datos de SQL Server del sector energético y devuelve una respuesta con tablas y gráficas. Llama 3 se ejecuta localmente con Ollama y prompts adaptados al sector.',
        stack: sharedStacks.energyChatbotEs,
      },
      {
        id: 'portfolio',
        number: '07',
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
        id: 'gci-world',
        program: 'GCI World 2026 April · Ciencia de Datos',
        school: 'Laboratorio Matsuo–Iwasawa, Universidad de Tokio · Curso en línea',
        dates: 'Abril de 2026 – Julio de 2026',
      },
      {
        id: 'one-data-science',
        program: 'ONE Tech Foundation G9 · Ciencia de Datos',
        school: 'Oracle & Alura Latam',
        dates: '2026',
      },
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
      { id: 'gci-world-completion', name: 'GCI World 2026 · Certificado de finalización, agosto de 2026' },
      {
        id: 'generative-ai',
        name: 'IA: explorando el potencial de la Inteligencia Artificial Generativa · Alura Latam',
        href: 'https://app.aluracursos.com/certificate/bc256522-af33-48af-b432-141b22177299',
      },
      {
        id: 'prompt-engineering',
        name: 'Ingeniería de Prompt: creando prompts eficaces para la IA generativa · Alura Latam',
        href: 'https://app.aluracursos.com/certificate/1fb90ad1-b3b3-4f71-bdf4-778b7631ae44',
      },
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
      {
        id: 'voxy',
        name: 'Certificado de dominio Voxy — Nivel avanzado bajo',
        href: 'https://app.voxy.com/certificates/proficiency-test/67350a0d89a0a4bbbf0b2d78/',
      },
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
