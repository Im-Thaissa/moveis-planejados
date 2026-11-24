import { diferenciais } from '../data.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__texto">
          <p className="eyebrow">Móveis planejados sob medida</p>
          <h1>Cada centímetro da sua casa, pensado para você.</h1>
          <p className="hero__sub">
            Projetamos, fabricamos e instalamos móveis que unem design, durabilidade e
            aproveitamento total do espaço.
          </p>
          <div className="hero__acoes">
            <a href="#orcamento" className="btn">Solicitar orçamento grátis</a>
            <a href="#projetos" className="btn btn--contorno">Ver projetos</a>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="numeros">
          {diferenciais.map((d) => (
            <li key={d.label}>
              <strong>{d.numero}</strong>
              <span>{d.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
