import { ambientes } from '../data.js'

export default function Ambientes() {
  return (
    <section id="ambientes" className="secao">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">O que fazemos</p>
          <h2>Ambientes completos, do projeto à montagem</h2>
        </header>
        <div className="grid-ambientes">
          {ambientes.map((a) => (
            <article key={a.titulo} className="card">
              <div className="card__foto">
                <img src={a.imagem} alt={a.titulo} loading="lazy" />
              </div>
              <div className="card__corpo">
                <h3>{a.titulo}</h3>
                <p>{a.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
