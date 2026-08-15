import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioContent } from './data/content'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'
const THEME_STORAGE_KEY = 'portfolio-theme'

function readStoredValue(key, allowedValues) {
  try {
    const value = window.localStorage.getItem(key)
    return allowedValues.includes(value) ? value : null
  } catch {
    return null
  }
}

function getInitialLanguage() {
  const storedLanguage = readStoredValue(LANGUAGE_STORAGE_KEY, ['en', 'es'])
  if (storedLanguage) return storedLanguage

  const documentLanguage = document.documentElement.lang.toLowerCase()
  return documentLanguage.startsWith('es') || navigator.language.toLowerCase().startsWith('es')
    ? 'es'
    : 'en'
}

function getInitialTheme() {
  const storedTheme = readStoredValue(THEME_STORAGE_KEY, ['light', 'dark'])
  if (storedTheme) return storedTheme

  const documentTheme = document.documentElement.dataset.theme
  if (documentTheme === 'light' || documentTheme === 'dark') return documentTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [theme, setTheme] = useState(getInitialTheme)
  const content = portfolioContent[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.meta.title

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', content.meta.description)

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      // The preference still works for this visit when storage is unavailable.
    }
  }, [content.meta, language])

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    const themeColor = document.querySelector('meta[name="theme-color"]')
    themeColor?.setAttribute('content', theme === 'dark' ? '#030805' : '#f4faf3')

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // The preference still works for this visit when storage is unavailable.
    }
  }, [theme])

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.controls.skipLink}
      </a>
      <Nav
        controls={content.controls}
        language={language}
        navLinks={content.navLinks}
        onLanguageToggle={() => setLanguage((value) => (value === 'en' ? 'es' : 'en'))}
        onThemeToggle={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))}
        profile={content.profile}
        theme={theme}
      />
      <main id="main-content" tabIndex="-1">
        <Hero hero={content.hero} profile={content.profile} />
        <About paragraphs={content.about} section={content.sections.about} />
        <Experience items={content.experience} section={content.sections.experience} />
        <Projects items={content.projects} section={content.sections.projects} />
        <Skills items={content.skills} section={content.sections.skills} />
        <Education
          certifications={content.certifications}
          items={content.education}
          section={content.sections.education}
        />
        <Contact contact={content.contact} profile={content.profile} section={content.sections.contact} />
      </main>
      <Footer footer={content.footer} profile={content.profile} />
    </>
  )
}

export default App
