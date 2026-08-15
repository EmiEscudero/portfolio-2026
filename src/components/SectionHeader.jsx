function SectionHeader({ section }) {
  return (
    <header className="section-heading">
      <p className="section-kicker">
        <span>{section.index}</span>
        <span aria-hidden="true">/</span>
        <span>{section.eyebrow}</span>
      </p>
      <div className="section-heading-row">
        <h2>{section.title}</h2>
        {section.description && <p>{section.description}</p>}
      </div>
    </header>
  )
}

export default SectionHeader
