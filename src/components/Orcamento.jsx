import { useState } from 'react'
import { ambientes } from '../data.js'

const inicial = { nome: '', email: '', telefone: '', ambiente: '', mensagem: '' }

export default function Orcamento() {
  const [form, setForm] = useState(inicial)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  const alterar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validar = () => {
    const novo = {}
    if (form.nome.trim().length < 2) novo.nome = 'Informe seu nome.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) novo.email = 'E-mail inválido.'
    if (form.telefone.replace(/\D/g, '').length < 10) novo.telefone = 'Informe o telefone com DDD.'
    if (!form.ambiente) novo.ambiente = 'Escolha um ambiente.'
    return novo
  }

  const enviar = (e) => {
    e.preventDefault()
    const novo = validar()
    setErros(novo)
    if (Object.keys(novo).length === 0) {
      setEnviado(true)
      setForm(inicial)
    }
  }

  return (
    <section id="orcamento" className="secao secao--orcamento">
      <div className="container orcamento">
        <div className="orcamento__texto">
          <p className="eyebrow">Orçamento sem compromisso</p>
          <h2>Vamos planejar o seu ambiente?</h2>
          <p>
            Preencha o formulário e um de nossos projetistas entra em contato em até 24 horas
            para agendar a visita técnica gratuita.
          </p>
          <ul className="contato-lista">
            <li><strong>Showroom:</strong> Av. das Araucárias, 1200 — São Paulo/SP</li>
            <li><strong>Telefone:</strong> (11) 4000-1234</li>
            <li><strong>Horário:</strong> seg. a sáb., 9h às 18h</li>
          </ul>
        </div>

        {enviado ? (
          <div className="form form--sucesso" role="status">
            <h3>Pedido recebido!</h3>
            <p>Obrigado pelo contato. Em breve retornaremos para agendar sua visita.</p>
            <button className="btn btn--cheio" onClick={() => setEnviado(false)}>Enviar outro pedido</button>
          </div>
        ) : (
          <form className="form" onSubmit={enviar} noValidate>
            <Campo label="Nome" erro={erros.nome}>
              <input name="nome" value={form.nome} onChange={alterar} autoComplete="name" />
            </Campo>
            <Campo label="E-mail" erro={erros.email}>
              <input name="email" type="email" value={form.email} onChange={alterar} autoComplete="email" />
            </Campo>
            <Campo label="Telefone" erro={erros.telefone}>
              <input name="telefone" type="tel" value={form.telefone} onChange={alterar} placeholder="(11) 90000-0000" autoComplete="tel" />
            </Campo>
            <Campo label="Ambiente" erro={erros.ambiente}>
              <select name="ambiente" value={form.ambiente} onChange={alterar}>
                <option value="">Selecione…</option>
                {ambientes.map((a) => <option key={a.titulo}>{a.titulo}</option>)}
                <option>Casa completa</option>
              </select>
            </Campo>
            <Campo label="Conte um pouco sobre o projeto (opcional)">
              <textarea name="mensagem" rows="4" value={form.mensagem} onChange={alterar} />
            </Campo>
            <button type="submit" className="btn btn--cheio">Quero meu orçamento</button>
          </form>
        )}
      </div>
    </section>
  )
}

function Campo({ label, erro, children }) {
  return (
    <label className={`campo ${erro ? 'campo--erro' : ''}`}>
      <span>{label}</span>
      {children}
      {erro && <small>{erro}</small>}
    </label>
  )
}
