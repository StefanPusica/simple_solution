import './SectionText.css'

function SectionText({text, styleName}) {
  return (
    <p className={styleName === '' ? 'section-text' : styleName}>{text}</p>
  )
}

export default SectionText