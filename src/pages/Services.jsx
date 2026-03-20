import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS_DETAIL, BRANDS } from '../data/siteData'
import PageHero from '../components/PageHero'
import QuickBar from '../components/QuickBar'
import CtaBanner from '../components/CtaBanner'

export default function Services() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <PageHero tag="🔧 Services" title="Products & Services" sub="Complete solar solutions for homes, businesses, and farms across Gujarat" />
      <QuickBar />

      <section className="section">
        {PRODUCTS_DETAIL.map((p, i) => (
          <div key={i}>
            <div className={`product-block reveal`} style={p.reverse ? { direction: 'rtl' } : {}}>
              <div className="prod-img" style={{ direction: 'ltr' }}>
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="prod-info" style={{ direction: 'ltr' }}>
                <span className="prod-tag">{p.tag}</span>
                <h2 className="prod-title">{p.icon} {p.title}</h2>
                <p className="prod-desc">{p.desc}</p>
                <div className="prod-features">
                  {p.features.map((f, j) => <div className="pf" key={j}>{f}</div>)}
                </div>
                <Link to="/contact" className="btn-primary">Get Free Quote →</Link>
              </div>
            </div>
            {i < PRODUCTS_DETAIL.length - 1 && (
              <div style={{ height: 1, background: 'var(--border)', margin: '2rem 0' }} />
            )}
          </div>
        ))}
      </section>

      {/* Brands */}
      <section className="section section-off">
        <div className="section-head center reveal">
          <div className="tag">Our Partners</div>
          <h2 className="section-title">Brands We Trust</h2>
          <p className="section-sub">Only Tier-1, BIS-certified, ALMM-listed panels and inverters</p>
        </div>
        <div className="brands-wrap reveal">
          {BRANDS.map((b, i) => <span className="brand-tag" key={i}>{b}</span>)}
        </div>
      </section>

      <CtaBanner title="Not Sure What You Need?" sub="Our experts will guide you to the perfect solution" />
    </>
  )
}
