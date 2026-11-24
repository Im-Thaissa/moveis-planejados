import { depoimentos } from '../data.js'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="secao secao--clara">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">Clientes</p>
          <h2>Quem já transformou a casa com a gente</h2>
        </header>
        <div className="depoimentos">
          {depoimentos.map((d) => (
            <blockquote key={d.nome} className="depoimento">
              <div className="estrelas" aria-label="5 estrelas">★★★★★</div>
              <p>“{d.texto}”</p>
              <cite>{d.nome}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
