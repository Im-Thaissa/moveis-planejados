const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`

export const ambientes = [
  { titulo: 'Cozinhas', texto: 'Armários, ilhas e despensas que aproveitam cada centímetro, com ferragens de fechamento suave.', imagem: img('photo-1556911220-bff31c812dba') },
  { titulo: 'Dormitórios', texto: 'Guarda-roupas, cabeceiras e closets pensados para a sua rotina e o seu jeito de organizar.', imagem: img('photo-1505693416388-ac5ce068fe85') },
  { titulo: 'Salas', texto: 'Painéis de TV, estantes e aparadores que unem estilo, iluminação e funcionalidade.', imagem: img('photo-1616594039964-ae9021a400a0') },
  { titulo: 'Home Office', texto: 'Bancadas, nichos e gaveteiros ergonômicos para trabalhar com conforto e foco.', imagem: img('photo-1593062096033-9a26b09da705') },
  { titulo: 'Banheiros', texto: 'Gabinetes e espelheiras resistentes à umidade, com acabamento impecável.', imagem: img('photo-1552321554-5fefe8c9ef14') },
  { titulo: 'Áreas Gourmet', texto: 'Espaços para receber bem, com bancadas, adegas e armários integrados.', imagem: img('photo-1600585154340-be6161a56a0c') },
]

export const projetos = [
  { titulo: 'Cozinha integrada — Jardins', categoria: 'Cozinha', imagem: img('photo-1556911220-bff31c812dba') },
  { titulo: 'Suíte master — Moema', categoria: 'Dormitório', imagem: img('photo-1505693416388-ac5ce068fe85') },
  { titulo: 'Living contemporâneo — Pinheiros', categoria: 'Sala', imagem: img('photo-1618221195710-dd6b41faaea6') },
  { titulo: 'Escritório compacto — Vila Mariana', categoria: 'Home Office', imagem: img('photo-1593062096033-9a26b09da705') },
  { titulo: 'Sala de estar — Perdizes', categoria: 'Sala', imagem: img('photo-1616594039964-ae9021a400a0') },
  { titulo: 'Casa de campo — Atibaia', categoria: 'Cozinha', imagem: img('photo-1600210492486-724fe5c67fb0') },
]

export const etapas = [
  { titulo: 'Briefing', texto: 'Conversamos sobre suas necessidades, estilo e orçamento.' },
  { titulo: 'Medição', texto: 'Nossa equipe mede o ambiente com precisão milimétrica.' },
  { titulo: 'Projeto 3D', texto: 'Você visualiza cada detalhe antes da produção começar.' },
  { titulo: 'Fabricação', texto: 'Produção própria com MDF certificado e ferragens premium.' },
  { titulo: 'Montagem', texto: 'Instalação limpa, no prazo, com garantia de 5 anos.' },
]

export const diferenciais = [
  { numero: '18', label: 'anos de mercado' },
  { numero: '2.400+', label: 'ambientes entregues' },
  { numero: '5 anos', label: 'de garantia' },
  { numero: '98%', label: 'clientes satisfeitos' },
]

export const depoimentos = [
  { nome: 'Mariana S.', texto: 'A cozinha ficou exatamente como no projeto 3D. Montagem rápida e equipe muito cuidadosa.' },
  { nome: 'Ricardo T.', texto: 'Transformaram um quarto pequeno em um home office funcional. Cada gaveta tem seu propósito.' },
  { nome: 'Fernanda e Paulo', texto: 'Fizemos o apartamento inteiro com eles. Prazo cumprido e acabamento impecável.' },
]
