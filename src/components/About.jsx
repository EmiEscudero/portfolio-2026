import SectionHeader from './SectionHeader'

function About({ paragraphs, section }) {
  return (
    <section id="about" className="section section-about">
      <SectionHeader section={section} />
      <div className="about-layout">
        <span className="about-mark" aria-hidden="true">
          {'{'}
        </span>
        <div className="about-copy">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <span className="about-mark about-mark-end" aria-hidden="true">
          {'}'}
        </span>
      </div>
    </section>
  )
}

export default About
