import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ambientes from './components/Ambientes.jsx'
import Projetos from './components/Projetos.jsx'
import Processo from './components/Processo.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import Orcamento from './components/Orcamento.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ambientes />
        <Projetos />
        <Processo />
        <Depoimentos />
        <Orcamento />
      </main>
      <Footer />
    </>
  )
}
