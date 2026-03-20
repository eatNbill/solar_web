export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  if (index === null) return null
  const item = items[index]
  return (
    <div className="lightbox-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="lb-wrap">
        <button className="lb-close" onClick={onClose}>✕</button>
        <button className="lb-prev" onClick={onPrev}>&#8249;</button>
        <img src={item.src.replace('w=600','w=1200').replace('w=900','w=1200')} alt={item.cap} />
        <button className="lb-next" onClick={onNext}>&#8250;</button>
        <p className="lb-caption">{item.cap}</p>
      </div>
    </div>
  )
}
