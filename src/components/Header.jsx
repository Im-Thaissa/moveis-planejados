import { useEffect, useState } from 'react'

const links = [
  ['#ambientes', 'Ambientes'],
  ['#projetos', 'Projetos'],
  ['#processo', 'Como funciona'],
  ['#depoimentos', 'Clientes'],
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${rolou || aberto ? 'header--solido' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="logo">Atelier<span>Madeira</span></a>
        <button
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav ${aberto ? 'nav--aberto' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setAberto(false)}>{label}</a>
          ))}
          <a href="#orcamento" className="btn btn--pequeno" onClick={() => setAberto(false)}>Orçamento</a>
        </nav>
      </div>
    </header>
  )
}
