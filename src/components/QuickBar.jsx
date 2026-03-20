import { Link } from 'react-router-dom'
import { SITE } from '../data/siteData'
export default function QuickBar() {
  return (
    <div className="quick-bar">
      <a href={`tel:${SITE.phone}`} className="qb-btn qb-call"><span className="qb-icon">📞</span>Call Now</a>
      <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="qb-btn qb-wa"><span className="qb-icon">💬</span>WhatsApp</a>
      <Link to="/contact" className="qb-btn qb-quote"><span className="qb-icon">📋</span>Get Quote</Link>
    </div>
  )
}
