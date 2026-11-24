export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#inicio" className="logo">Atelier<span>Madeira</span></a>
          <p>Móveis planejados com design, precisão e garantia.</p>
        </div>
        <nav>
          <a href="#ambientes">Ambientes</a>
          <a href="#projetos">Projetos</a>
          <a href="#processo">Como funciona</a>
          <a href="#orcamento">Orçamento</a>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} Atelier Madeira. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
