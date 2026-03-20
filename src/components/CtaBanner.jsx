import { Link } from 'react-router-dom'
import { SITE } from '../data/siteData'
export default function CtaBanner({ title = "Ready to Switch to Solar?", sub = "Free site visit · Custom quote · No obligation" }) {
  return (
    <section className="cta-banner">
      <h2>{title}</h2>
      <p>{sub}</p>
      <div className="cta-btns">
        <a href={`tel:${SITE.phone}`} className="btn-cta btn-cta-dark">📞 Call Now</a>
        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="btn-cta btn-cta-wa">💬 WhatsApp</a>
        <Link to="/contact" className="btn-cta btn-cta-white">Get Free Quote</Link>
      </div>
    </section>
  )
}
