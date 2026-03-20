import { useState, useEffect } from 'react'
import { GALLERY } from '../data/siteData'
import PageHero from '../components/PageHero'
import QuickBar from '../components/QuickBar'
import CtaBanner from '../components/CtaBanner'
import Lightbox from '../components/Lightbox'

const CATS = [
  { key: 'all', label: 'All' },
  { key: 'residential', label: '🏠 Residential' },
  { key: 'commercial', label: '🏭 Commercial' },
  { key: 'industrial', label: '🏗️ Industrial' },
  { key: 'pump', label: '💧 Solar Pump' },
]

export default function Projects() {
  const [cat, setCat] = useState('all')
  const [lbIdx, setLbIdx] = useState(null)

  const filtered = cat === 'all' ? GALLERY : GALLERY.filter(g => g.cat === cat)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [cat])

  return (
    <>
      <PageHero tag="📸 Our Work" title="Completed Projects" sub="500+ solar installations across Gujarat — homes, factories, and farms" />
      <QuickBar />

      <section className="section section-off">
        <div className="filter-bar">
          {CATS.map(c => (
            <button key={c.key} className={`filter-btn${cat === c.key ? ' active' : ''}`} onClick={() => { setCat(c.key); setLbIdx(null) }}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {filtered.map((g, i) => (
            <div key={i} className="gal-item reveal" onClick={() => setLbIdx(i)}>
              <img src={g.src} alt={g.cap} loading="lazy" />
              <div className="gal-over"><span>{g.cap}</span></div>
              <button className="gal-zoom" onClick={e => { e.stopPropagation(); setLbIdx(i) }}>🔍</button>
            </div>
          ))}
        </div>
      </section>

      {lbIdx !== null && (
        <Lightbox items={filtered} index={lbIdx} onClose={() => setLbIdx(null)}
          onPrev={() => setLbIdx(i => (i - 1 + filtered.length) % filtered.length)}
          onNext={() => setLbIdx(i => (i + 1) % filtered.length)}
        />
      )}

      <CtaBanner title="Want a Similar System?" sub="Get a FREE site visit and custom quote" />
    </>
  )
}
