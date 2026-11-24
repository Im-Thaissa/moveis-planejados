# Atelier Madeira — Móveis Planejados

Site institucional de uma loja de móveis planejados, feito com **React** e **Vite**.

## Seções

- **Início** — apresentação da loja e números de destaque
- **Ambientes** — cozinhas, dormitórios, salas, home office, banheiros e áreas gourmet
- **Projetos** — galeria com filtro por categoria e visualização ampliada
- **Como funciona** — etapas do briefing à montagem
- **Clientes** — depoimentos
- **Orçamento** — formulário com validação

## Como rodar

Requer [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam na pasta `dist/`.

## Estrutura

```
src/
├── components/   # Header, Hero, Ambientes, Projetos, Processo, Depoimentos, Orcamento, Footer
├── data.js       # Textos e imagens dos ambientes, projetos e depoimentos
├── App.jsx
├── main.jsx
└── index.css
```

Imagens: [Unsplash](https://unsplash.com).
