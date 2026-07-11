export const profile = {
  name: 'Miguel Emiliano Escudero Saavedra',
  title: 'Computer Systems Engineer',
  tagline: 'Data science and applied machine learning, from CNNs to local LLM deployments.',
  location: 'Mexico',
  email: 'escudero.emiliano.u@gmail.com',
  linkedin: 'https://www.linkedin.com/in/emiliano-escudero',
}

export const about = [
  "I'm a Computer Systems Engineer from Zacatepec, Mexico, working in data science and applied machine learning. I build systems that turn raw data into something usable: convolutional neural networks for image classification, SQL/NoSQL pipelines for structured data, and large language models running locally or in the cloud.",
  "At INEEL I researched and deployed Llama 3 through Ollama, then connected it to real energy-sector data instead of a demo dataset. I'm currently job-hunting and widening my range into JavaScript, React, Java, and TypeScript.",
]

export const experience = [
  {
    role: 'Research Intern',
    org: 'Instituto Nacional de Electricidad y Energías Limpias (INEEL)',
    location: 'Cuernavaca, MOR',
    dates: 'March 2025 – June 2025',
    bullets: [
      'Researched Spanish-capable LLMs for local execution; selected Llama 3 and ran it with Ollama.',
      'Consolidated historical energy-sector CSV data from multiple sources into a single SQL Server database.',
      "Applied NLP and prompt engineering to align Llama 3's responses with the energy sector's business context.",
      'Built a Streamlit chatbot that answers questions against the SQL Server data, returning text responses alongside tables and charts.',
    ],
  },
]

export const projects = [
  {
    name: 'Energy Data Chatbot',
    description:
      'A Streamlit application built during my INEEL internship. It takes a question in plain language, queries a SQL Server database of energy-sector data, and returns a text answer alongside tables and charts. The LLM behind it (Llama 3) runs locally through Ollama, prompted with context specific to the energy sector.',
    stack: ['Python', 'Llama 3', 'Ollama', 'SQL Server', 'Streamlit', 'Prompt Engineering'],
  },
  {
    name: 'This Portfolio',
    description:
      'A single-page site built with Vite and React, deployed on Vercel. Content lives in one data file, separate from the components that render it, so updating text never means touching layout code.',
    stack: ['React', 'Vite', 'HTML/CSS', 'Vercel'],
  },
]

export const skills = [
  {
    category: 'Data & ML',
    items: ['Python', 'scikit-learn', 'PySpark', 'Databricks', 'Hadoop', 'CNNs', 'NLP'],
  },
  {
    category: 'Data Storage',
    items: ['SQL', 'NoSQL', 'SQL Server'],
  },
  {
    category: 'LLM Tooling',
    items: ['Ollama', 'Llama 3', 'Prompt Engineering', 'Streamlit'],
  },
  {
    category: 'Web (in progress)',
    items: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Java'],
  },
]

export const education = [
  {
    program: 'Especialidad en Ciencia de Datos para la Toma de Decisiones',
    school: 'Instituto Tecnológico de Zacatepec',
    dates: 'January 2024 – December 2025',
  },
  {
    program: 'Ingeniería en Sistemas Computacionales',
    school: 'Instituto Tecnológico de Zacatepec',
    dates: 'January 2020 – June 2025',
  },
  {
    program: 'Employment Readiness Badge, Workplace Skills',
    school: 'INROADS México',
    dates: '2026',
  },
  {
    program: 'Technological Baccalaureate, Programming',
    school: 'Centro de Bachillerato Tecnológico Industrial y de Servicios No. 194',
    dates: 'August 2017 – July 2020',
  },
]

export const certifications = [
  'Challenge Telecom X: análisis de evasión de clientes – Parte 2',
  'Aprender a aprender: técnicas para tu autodesarrollo',
  'IA aplicada a la ciencia de datos: uso de la IA en la construcción de visualización de datos',
  'Python para Data Science: trabajar con funciones, estructuras de datos y excepciones',
  'Voxy Proficiency Achievement Certificate – Low Advanced',
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
