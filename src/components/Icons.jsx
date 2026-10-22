import { FaLinkedinIn } from 'react-icons/fa6'
import {
  LuBrainCircuit,
  LuChartNoAxesCombined,
  LuCodeXml,
  LuDatabase,
  LuDatabaseZap,
  LuLanguages,
  LuScanSearch,
} from 'react-icons/lu'
import {
  SiApachehadoop,
  SiApachespark,
  SiDatabricks,
  SiDuolingo,
  SiDocker,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiMeta,
  SiOllama,
  SiOpenjdk,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTwitch,
  SiTypescript,
  SiVercel,
  SiVite,
  SiX,
  SiYoutube,
} from 'react-icons/si'

const technologyIcons = {
  python: SiPython,
  pandas: SiPandas,
  pytorch: SiPytorch,
  torchvision: LuScanSearch,
  efficientnet: LuBrainCircuit,
  matplotlib: LuChartNoAxesCombined,
  seaborn: LuChartNoAxesCombined,
  colab: SiGooglecolab,
  rag: LuScanSearch,
  'tf-idf': LuLanguages,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  'scikit-learn': SiScikitlearn,
  pyspark: SiApachespark,
  databricks: SiDatabricks,
  hadoop: SiApachehadoop,
  cnns: LuScanSearch,
  nlp: LuLanguages,
  sql: LuDatabase,
  nosql: LuDatabaseZap,
  'llama-3': SiMeta,
  ollama: SiOllama,
  'sql-server': LuDatabase,
  streamlit: SiStreamlit,
  'prompt-engineering': LuBrainCircuit,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  vite: SiVite,
  'html-css': SiHtml5,
  java: SiOpenjdk,
  vercel: SiVercel,
}

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: SiGithub,
  youtube: SiYoutube,
  x: SiX,
  twitch: SiTwitch,
  duolingo: SiDuolingo,
}

function DecorativeIcon({ icon: Icon, ...props }) {
  return <Icon aria-hidden="true" focusable="false" {...props} />
}

export function TechnologyIcon({ id }) {
  return <DecorativeIcon className="technology-icon" icon={technologyIcons[id] ?? LuCodeXml} />
}

export function SocialIcon({ id }) {
  return <DecorativeIcon className="social-icon" icon={socialIcons[id] ?? LuCodeXml} />
}
