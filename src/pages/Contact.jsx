import { useEffect } from 'react'
import { SITE } from '../data/siteData'
import PageHero from '../components/PageHero'
import QuickBar from '../components/QuickBar'
import InquiryForm from '../components/InquiryForm'

export default function Contact() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <PageHero tag="📞 Contact Us" title="Get Your Free Solar Quote" sub="Fill the form, call us, or WhatsApp — we respond within 2 hours!" />
      <QuickBar />

      <section className="section section-dark" id="inquiry">
        {/* Direct contact links */}
        <div className="contact-links">
          <a href={`tel:${SITE.phone}`} className="cl-item">
            <div className="cl-icon call">📞</div>
            <div><div className="cl-lbl">Call Us</div><div className="cl-val">{SITE.phoneDisplay}</div></div>
          </a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="cl-item">
            <div className="cl-icon wa">💬</div>
            <div><div className="cl-lbl">WhatsApp</div><div className="cl-val">Chat with Us Now</div></div>
          </a>
          <a href={`mailto:${SITE.email}`} className="cl-item">
            <div className="cl-icon mail">✉️</div>
            <div><div className="cl-lbl">Email</div><div className="cl-val">{SITE.email}</div></div>
          </a>
        </div>

        <InquiryForm />
      </section>

      {/* Map */}
      <section className="section">
        <div className="section-head center reveal">
          <div className="tag">📍 Location</div>
          <h2 className="section-title">Find Us</h2>
          <p className="section-sub">{SITE.address}</p>
        </div>
        <div className="full-map reveal">
          <iframe src={SITE.mapEmbed} allowFullScreen loading="lazy" title="Our Location" />
        </div>
      </section>

      {/* Hours */}
      <section className="section section-off">
        <div className="section-head center reveal">
          <div className="tag">🕐 Hours</div>
          <h2 className="section-title">Working Hours</h2>
        </div>
        <div style={{ maxWidth: 400, margin: '0 auto' }} className="reveal">
          <div className="hours-row"><span style={{ fontWeight: 600 }}>Monday – Saturday</span><span style={{ color: 'var(--slate)' }}>{SITE.hours.weekday}</span></div>
          <div className="hours-row"><span style={{ fontWeight: 600 }}>Sunday</span><span style={{ color: 'var(--slate)' }}>{SITE.hours.sunday}</span></div>
          <p style={{ marginTop: '1rem', fontSize: '.82rem', color: 'var(--muted)', textAlign: 'center' }}>WhatsApp available 24/7 — we reply quickly!</p>
        </div>
      </section>
    </>
  )
}
