import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SLIDES, STATS, SERVICES, WHY_US, STEPS, GALLERY, REVIEWS, FAQS, SITE } from '../data/siteData'
import QuickBar from '../components/QuickBar'
import CtaBanner from '../components/CtaBanner'
import Lightbox from '../components/Lightbox'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function HeroSlider() {
  const [cur, setCur] = useState(0)
  const timerRef = useRef()

  const go = n => setCur(p => (n + SLIDES.length) % SLIDES.length)
  const startAuto = () => { timerRef.current = setInterval(() => setCur(p => (p + 1) % SLIDES.length), 5000) }
  const stopAuto  = () => clearInterval(timerRef.current)

  useEffect(() => { startAuto(); return stopAuto }, [])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const s = SLIDES[cur]

  return (
    <section className="hero" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      {SLIDES.map((sl, i) => (
        <div key={i} className={`slide${i === cur ? ' active' : ''}`} style={{ backgroundImage: `url('${sl.img}')` }} />
      ))}
      <div className="slide-content">
        <div className="slide-tag">{s.tag}</div>
        <h1>{s.title}<br /><em>{s.em}</em></h1>
        <p>{s.sub}</p>
        <div className="hero-btns">
          <Link to={s.ctaHref} className="btn-hp btn-hp-primary">{s.cta} →</Link>
          <a href={`tel:${SITE.phone}`} className="btn-hp btn-hp-ghost">📞 Call Now</a>
        </div>
      </div>
      <button className="slide-ctrl slide-prev" onClick={() => go(cur - 1)}>&#8249;</button>
      <button className="slide-ctrl slide-next" onClick={() => go(cur + 1)}>&#8250;</button>
      <div className="slide-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`dot${i === cur ? ' active' : ''}`} onClick={() => setCur(i)} />
        ))}
      </div>
    </section>
  )
}

function StatsCounter() {
  const [vals, setVals] = useState(STATS.map(() => 0))
  const ref = useRef()
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        STATS.forEach((s, i) => {
          let c = 0; const step = s.num / 60
          const t = setInterval(() => {
            c = Math.min(c + step, s.num)
            setVals(v => { const nv = [...v]; nv[i] = Math.floor(c); return nv })
            if (c >= s.num) clearInterval(t)
          }, 22)
        })
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stats" ref={ref}>
      {STATS.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-num-wrap">
            <span className="s-num">{vals[i]}</span>
            <span className="s-unit">{s.unit}</span>
          </div>
          <div className="s-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function SavingsCalc() {
  const [bill, setBill] = useState(5000)
  const fmt = v => '₹' + v.toLocaleString('en-IN')
  const monthly = Math.round(bill * 0.8)
  return (
    <div className="calc-wrap reveal">
      <span className="calc-slider-label">Your current monthly electricity bill</span>
      <input type="range" min="1000" max="20000" value={bill} step="500" onChange={e => setBill(+e.target.value)} />
      <div className="calc-display">{fmt(bill)}/month</div>
      <div className="calc-results">
        <div className="cr"><span className="cr-lbl">Monthly Savings</span><span className="cr-val">{fmt(monthly)}</span></div>
        <div className="cr"><span className="cr-lbl">Yearly Savings</span><span className="cr-val">{fmt(monthly * 12)}</span></div>
        <div className="cr"><span className="cr-lbl">25-Year Total</span><span className="cr-val">{fmt(monthly * 12 * 25)}</span></div>
      </div>
      <Link to="/contact" style={{ display: 'block', background: 'var(--sun)', color: 'var(--navy)', textAlign: 'center', padding: '.95rem', borderRadius: '50px', fontWeight: 800, fontSize: '.92rem', textDecoration: 'none' }}>
        Get Exact Quote →
      </Link>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item reveal${open ? ' open' : ''}`}>
      <button className="faq-btn" onClick={() => setOpen(o => !o)}>
        {q} <span className="faq-ico">+</span>
      </button>
      {open && <div className="faq-ans">{a}</div>}
    </div>
  )
}

export default function Home() {
  useReveal()
  const [lbIdx, setLbIdx] = useState(null)
  const homeGallery = GALLERY.slice(0, 5)

  return (
    <>
      <HeroSlider />
      <QuickBar />

      {/* Identity */}
      <section className="identity">
        <div className="identity-inner reveal">
          <div className="tag">☀️ Solar Experts Since 2012</div>
          <h2>Gujarat's Most Trusted Solar Installation Company</h2>
          <p>We install solar panels for homes, businesses & farms — making clean energy simple, affordable, and hassle-free. Subsidies handled. Lifetime support included.</p>
        </div>
      </section>

      <StatsCounter />

      {/* Services */}
      <section className="section section-off">
        <div className="section-head reveal">
          <div className="tag">What We Do</div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">Complete solar solutions — from installation to maintenance</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Link to={s.href} className="svc-card reveal" key={i}>
              <span className="svc-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="section section-dark">
        <div className="section-head reveal">
          <div className="tag on-dark">Why Us</div>
          <h2 className="section-title light">Why Customers Choose {SITE.name}</h2>
        </div>
        <div className="why-grid">
          {WHY_US.map((w, i) => (
            <div className="why-item reveal" key={i}>
              <div className="why-icon">{w.icon}</div>
              <div><h3>{w.title}</h3><p>{w.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="section-head reveal">
          <div className="tag">Our Process</div>
          <h2 className="section-title">We're With You Every Step</h2>
          <p className="section-sub">From first call to lifetime support — we handle everything</p>
        </div>
        <div className="steps-wrap">
          {STEPS.map((s, i) => (
            <div className="step-item reveal" key={i}>
              <div className="step-no">{s.no}</div>
              <div className="step-body"><h3>{s.title}</h3><p>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Savings Calc */}
      <section className="section section-off">
        <div className="section-head reveal">
          <div className="tag">💰 Savings</div>
          <h2 className="section-title">How Much Will You Save?</h2>
          <p className="section-sub">Move the slider to estimate your savings with solar</p>
        </div>
        <SavingsCalc />
      </section>

      {/* Projects Preview */}
      <section className="section">
        <div className="section-head reveal">
          <div className="tag">Our Work</div>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-sub">500+ installations across Gujarat</p>
        </div>
        <div className="gallery-grid">
          {homeGallery.map((g, i) => (
            <div key={i} className={`gal-item reveal${g.span2 ? ' span2' : ''}`} onClick={() => setLbIdx(i)}>
              <img src={g.src} alt={g.cap} loading="lazy" />
              <div className="gal-over"><span>{g.cap}</span></div>
              <button className="gal-zoom" onClick={e => { e.stopPropagation(); setLbIdx(i) }}>🔍</button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }} className="reveal">
          <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: 'var(--navy)', color: 'white', padding: '.9rem 1.8rem', borderRadius: '50px', fontWeight: 700, fontSize: '.9rem', textDecoration: 'none' }}>View All Projects →</Link>
        </div>
      </section>

      {lbIdx !== null && (
        <Lightbox items={homeGallery} index={lbIdx} onClose={() => setLbIdx(null)} onPrev={() => setLbIdx(i => (i - 1 + homeGallery.length) % homeGallery.length)} onNext={() => setLbIdx(i => (i + 1) % homeGallery.length)} />
      )}

      {/* Reviews */}
      <section className="section section-off">
        <div className="section-head reveal">
          <div className="tag">⭐ Reviews</div>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        <div className="reviews-track">
          {REVIEWS.map((r, i) => (
            <div className="rv-card reveal" key={i}>
              <div className="rv-stars">★★★★★</div>
              <p className="rv-text">{r.text}</p>
              <div className="rv-author">
                <div className="rv-av">{r.initials}</div>
                <div><div className="rv-name">{r.name}</div><div className="rv-detail">{r.detail}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-head center reveal">
          <div className="tag">FAQs</div>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
