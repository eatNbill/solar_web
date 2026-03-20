import { useEffect } from 'react'
import { CERTIFICATIONS, STATS, SITE } from '../data/siteData'
import PageHero from '../components/PageHero'
import QuickBar from '../components/QuickBar'
import CtaBanner from '../components/CtaBanner'

const VALUES = [
  { icon: '🎯', title: 'Quality First', desc: 'Only Tier-1, BIS-certified panels. No shortcuts, ever.' },
  { icon: '🤝', title: 'Honest Pricing', desc: 'Transparent quotes. No hidden charges. No false promises.' },
  { icon: '🌿', title: 'Go Green', desc: 'Every system reduces carbon emissions. Cleaner India, together.' },
  { icon: '⚡', title: 'Lifetime Support', desc: 'We\'re with you from day 1 to year 25 and beyond.' },
]

function StatsCounter() {
  useEffect(() => {
    let done = false
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done) {
        done = true
        document.querySelectorAll('.s-num').forEach(el => {
          const target = +el.dataset.target
          let c = 0; const step = target / 60
          const t = setInterval(() => {
            c = Math.min(c + step, target)
            el.textContent = Math.floor(c)
            if (c >= target) clearInterval(t)
          }, 22)
        })
      }
    }, { threshold: 0.4 })
    const el = document.querySelector('.stats')
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stats">
      {STATS.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-num-wrap">
            <span className="s-num" data-target={s.num}>0</span>
            <span className="s-unit">{s.unit}</span>
          </div>
          <div className="s-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <PageHero tag="🌞 About Us" title={`12 Years Powering\nGujarat with Solar`} sub="From a small team to 500+ installations — we make solar simple, affordable, and reliable." />
      <QuickBar />

      {/* Story */}
      <section className="section">
        <div className="about-story-grid">
          <div className="about-img-wrap reveal">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" alt="SolarEdge Pro Team at Work" loading="lazy" />
          </div>
          <div className="reveal">
            <div className="tag">Our Story</div>
            <h2 className="section-title">Started Small. Grown Strong.</h2>
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              Founded in 2012 in Surat, we started with 3 engineers and a dream of making solar energy accessible to every Indian family. Today we're Gujarat's most trusted solar EPC company with 500+ happy customers.
            </p>
            <p className="section-sub" style={{ marginBottom: '1.25rem' }}>
              We are MNRE-empaneled, DISCOM-approved, and handle everything from site survey to subsidy paperwork to lifetime maintenance.
            </p>
            <div className="about-points">
              {['MNRE Empaneled EPC Company','Certified Installation Team','Tier-1 Solar Panel Partners','Lifetime After-Sales Support','PM Surya Ghar Yojana Partner'].map(p => (
                <div className="apoint" key={p}>✅ {p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Values */}
      <section className="section section-off">
        <div className="section-head center reveal">
          <div className="tag">What We Stand For</div>
          <h2 className="section-title">Our Values</h2>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div className="val-card reveal" key={i}>
              <div className="val-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-dark">
        <div className="section-head center reveal">
          <div className="tag on-dark">Trusted & Verified</div>
          <h2 className="section-title light">Our Certifications & Partners</h2>
        </div>
        <div className="cert-grid">
          {CERTIFICATIONS.map((c, i) => (
            <div className="cert-item reveal" key={i}>
              <div className="c-ico">{c.ico}</div>
              <strong>{c.title}</strong>
              <span>{c.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner title="Let's Work Together!" sub="Free site visit · Custom quote · No obligation" />
    </>
  )
}
