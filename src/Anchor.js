function Link ({ href, text, className, color = '' }) {
  return <a href={href} className={className} style={{ color: color }} >{text}</a>
}
export default Link