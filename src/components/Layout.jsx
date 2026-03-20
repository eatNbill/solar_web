import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE } from '../data/siteData'

const SVG = {
  fb: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  ig: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  wa: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
  yt: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#060F1E"/></svg>,
}

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0) }, [location.pathname])

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <span className="topbar-left">📍 {SITE.city}</span>
        <div className="topbar-right">
          <a href={`tel:${SITE.phone}`}>📞 {SITE.phoneDisplay}</a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="topbar-wa">💬 WhatsApp</a>
        </div>
      </div>

      {/* HEADER */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="logo">☀️ {SITE.name.split(' ')[0]}<span className="logo-accent">{SITE.name.slice(SITE.name.indexOf(' '))}</span></Link>
        <nav className="nav-desktop">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} className={location.pathname === l.to ? 'active' : ''}>{l.label}</Link>
          ))}
        </nav>
        <Link to="/contact" className="btn-quote-hdr">Get Free Quote</Link>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </header>

      {/* MOBILE NAV */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(l => (
          <Link key={l.to} to={l.to} className={location.pathname === l.to ? 'active' : ''}>{l.label}</Link>
        ))}
        <div className="mobile-nav-cta">
          <a href={`tel:${SITE.phone}`} className="mnc-call">📞 Call Now</a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="mnc-wa">💬 WhatsApp</a>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">☀️ {SITE.name.split(' ')[0]}<span>{SITE.name.slice(SITE.name.indexOf(' '))}</span></div>
            <p className="footer-desc">India's trusted solar energy partner. Clean, affordable solar since 2012.</p>
            <div className="footer-socials">
              <a href={SITE.facebook} className="fsoc">{SVG.fb}</a>
              <a href={SITE.instagram} className="fsoc">{SVG.ig}</a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="fsoc">{SVG.wa}</a>
              <a href={SITE.youtube} className="fsoc">{SVG.yt}</a>
            </div>
          </div>
          <div className="footer-links-grid">
            <div className="fl-col">
              <h4>Pages</h4>
              {NAV_LINKS.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            </div>
            <div className="fl-col">
              <h4>Services</h4>
              {['Residential Solar','Commercial Solar','Solar Water Pump','Battery Storage','AMC & Maintenance'].map(s => (
                <Link key={s} to="/services">{s}</Link>
              ))}
            </div>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="fct">📍 {SITE.address}</div>
            <div className="fct">📞 <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></div>
            <div className="fct">💬 <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Now</a></div>
            <div className="fct">✉️ <a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            <div className="footer-map">
              <iframe src={SITE.mapEmbed} allowFullScreen loading="lazy" title="Location" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 {SITE.name}. All Rights Reserved. | Made with ☀️ in Gujarat</div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="float-actions">
        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="float-btn float-wa-btn" title="WhatsApp">💬</a>
        <a href={`tel:${SITE.phone}`} className="float-btn float-call-btn" title="Call">📞</a>
      </div>
    </>
  )
}
