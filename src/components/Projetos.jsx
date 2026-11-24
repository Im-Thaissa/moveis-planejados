import { useEffect, useState } from 'react'
import { projetos } from '../data.js'

const categorias = ['Todos', ...new Set(projetos.map((p) => p.categoria))]

export default function Projetos() {
  const [filtro, setFiltro] = useState('Todos')
  const [selecionado, setSelecionado] = useState(null)
  const lista = filtro === 'Todos' ? projetos : projetos.filter((p) => p.categoria === filtro)

  useEffect(() => {
    if (!selecionado) return
    const onKey = (e) => e.key === 'Escape' && setSelecionado(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selecionado])

  return (
    <section id="projetos" className="secao secao--escura">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">Portfólio</p>
          <h2>Projetos entregues</h2>
        </header>
        <div className="filtros" role="tablist">
          {categorias.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filtro === c}
              className={`filtro ${filtro === c ? 'filtro--ativo' : ''}`}
              onClick={() => setFiltro(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="galeria">
          {lista.map((p) => (
            <button key={p.titulo} className="galeria__item" onClick={() => setSelecionado(p)}>
              <img src={p.imagem} alt={p.titulo} loading="lazy" />
              <span className="galeria__legenda">
                <small>{p.categoria}</small>
                {p.titulo}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selecionado && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelecionado(null)}>
          <figure className="modal__conteudo" onClick={(e) => e.stopPropagation()}>
            <img src={selecionado.imagem} alt={selecionado.titulo} />
            <figcaption>{selecionado.titulo}</figcaption>
            <button className="modal__fechar" aria-label="Fechar" onClick={() => setSelecionado(null)}>×</button>
          </figure>
        </div>
      )}
    </section>
  )
}
