export default function PageHero({ tag, title, sub }) {
  return (
    <section className="page-hero">
      {tag && <div className="tag on-dark">{tag}</div>}
      <h1>{title}</h1>
      {sub && <p>{sub}</p>}
    </section>
  )
}
