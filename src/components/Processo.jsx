import { etapas } from '../data.js'

export default function Processo() {
  return (
    <section id="processo" className="secao">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">Como funciona</p>
          <h2>Do primeiro contato à chave na mão</h2>
        </header>
        <ol className="etapas">
          {etapas.map((e, i) => (
            <li key={e.titulo} className="etapa">
              <span className="etapa__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
