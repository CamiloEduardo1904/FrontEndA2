# Cada Real

**Educação financeira em linguagem simples para quem vive com pouco.**

Simuladores, guia prático, dados com fonte e notícias do dia sobre dívidas, juros, golpes, benefícios
e preços — num site leve, acessível e sem anúncios.

### 👉 [Acessar o site](https://pequenosvalores.up.railway.app/)

[![Site no ar](https://img.shields.io/badge/site-no%20ar-005F8D)](https://pequenosvalores.up.railway.app/)
![HTML, CSS e JS puros](https://img.shields.io/badge/HTML%20%C2%B7%20CSS%20%C2%B7%20JS-puros-003B5C)
![WCAG 2.1 AA](https://img.shields.io/badge/acessibilidade-WCAG%202.1%20AA-7FC8E8)

---

## Comece a ler

| | Página | Para quê |
|---|--------|----------|
| 🏠 | [Início](https://pequenosvalores.up.railway.app/) | Visão geral, simulador rápido e últimas notícias |
| 👥 | [Sobre](https://pequenosvalores.up.railway.app/sobre.html) | História, missão, visão, valores e equipe |
| 🌱 | [Projetos](https://pequenosvalores.up.railway.app/projetos.html) | Simuladores, oficinas, notícias e conteúdo acessível |
| 📊 | [Impacto](https://pequenosvalores.up.railway.app/impacto.html) | Dados, tabelas, gráfico e matérias de origem |
| 🖼️ | [Galeria](https://pequenosvalores.up.railway.app/galeria.html) | Imagens com legendas e fontes |
| 🎬 | [Mídia](https://pequenosvalores.up.railway.app/midia.html) | Vídeo com legendas, áudio com transcrição e vídeo do Banco Central |
| 📰 | [Notícias do dia](https://pequenosvalores.up.railway.app/noticias.html) | Manchetes de finanças pessoais, atualizadas toda manhã |
| ♿ | [Acessibilidade](https://pequenosvalores.up.railway.app/acessibilidade.html) | Recursos do site e direitos |
| ✉️ | [Contato](https://pequenosvalores.up.railway.app/contato.html) | Formulário validado e dados de atendimento |
| 📖 | [O tema](https://pequenosvalores.up.railway.app/tema.html) · [Aprofundamento](https://pequenosvalores.up.railway.app/aprofundamento.html) · [Simuladores](https://pequenosvalores.up.railway.app/simuladores.html) | Conteúdo educativo e ferramentas |

A documentação da Atividade A2 (escopo, diário de bordo, orçamento e evidências de testes) está em
[`docs/`](docs/).

### Atalhos

- [Armadilhas que drenam o orçamento](https://pequenosvalores.up.railway.app/aprofundamento.html#armadilhas)
- [Onde guardar o pouco que sobra](https://pequenosvalores.up.railway.app/aprofundamento.html#guardar)
- [Monte o seu orçamento](https://pequenosvalores.up.railway.app/tema.html#orcamento)
- [Simule uma dívida no cartão](https://pequenosvalores.up.railway.app/simuladores.html#sim-cartao)
- [Quanto tempo até a sua reserva](https://pequenosvalores.up.railway.app/simuladores.html#sim-reserva)
- [Como checar uma informação](https://pequenosvalores.up.railway.app/impacto.html#t-checar)

---

## Leitura recomendada

Materiais gratuitos e as fontes dos números usados no site.

**Aprender**

- [Cidadania Financeira — Banco Central do Brasil](https://www.bcb.gov.br/cidadaniafinanceira): cursos e materiais gratuitos
- [Caderno de Educação Financeira — Gestão de Finanças Pessoais (PDF, Banco Central)](https://www.bcb.gov.br/pre/pef/port/caderno_cidadania_financeira.pdf)
- [Aprender Valor — educação financeira no gov.br](https://www.gov.br/pt-br/servicos/aprender-educacao-financeira-pessoal-no-aprender-valor)
- [Série "Eu e meu dinheiro" — Banco Central no YouTube](https://www.youtube.com/watch?v=A7XxxYZjQ4k)

**Fontes dos dados**

- Serasa — [10 anos do Mapa da Inadimplência](https://www.serasa.com.br/imprensa/10-anos-do-mapa-de-inadimplencia/) (2026)
- Mercado&Consumo — [CNC: endividamento das famílias sobe para 82%](https://mercadoeconsumo.com.br/06/08/2026/noticias/cnc-endividamento-das-familias-sobe-para-82-mas-inadimplencia-cai/) (06/08/2026)
- Times Brasil — [Juros do cartão rotativo sobem a 442,4% ao ano em junho](https://timesbrasil.com.br/brasil/juros-cartao-rotativo-4424-junho/) (30/07/2026)
- Canaltech — [Quase 50% dos brasileiros gastam mais de R$ 100 com assinaturas por mês](https://canaltech.com.br/mercado/quase-50-dos-brasileiros-gastam-mais-de-r-100-com-assinaturas-por-mes/) (2026)
- InfoMoney — [Beneficiários do Bolsa Família gastaram R$ 3 bi com bets em agosto, diz BC](https://www.infomoney.com.br/consumo/beneficiarios-do-bolsa-familia-gastaram-r-3-bi-com-bets-em-agosto-diz-bc/) (2024)
- Poder360 — [Beneficiários do Bolsa Família pagam até R$ 450 mi a bets, diz estudo](https://www.poder360.com.br/poder-sportsmkt/beneficiarios-do-bolsa-familia-pagam-ate-r-450-mi-a-bets-diz-estudo/) (2024)

**Acessibilidade e direitos**

- [Lei nº 13.146/2015 — Lei Brasileira de Inclusão](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)
- [eMAG — Modelo de Acessibilidade em Governo Eletrônico](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade)
- [WCAG 2.1 em português (W3C Brasil)](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/)
- [VLibras — tradução para Libras](https://www.vlibras.gov.br/)

---

## Como funciona

### Notícias automáticas

Todo dia às 7h (Brasília) o workflow [`noticias.yml`](.github/workflows/noticias.yml) roda
[`scripts/atualizar_noticias.py`](scripts/atualizar_noticias.py), que:

1. lê os feeds RSS da Agência Brasil, do g1, do InfoMoney e uma busca do Google Notícias;
2. mantém só manchetes de veículos conhecidos que casam com um tema (dívidas, golpes, investir,
   renda, preços) e descarta macroeconomia, empresas e exterior;
3. remove repetidas, guarda os últimos 14 dias em [`public/dados/noticias.json`](public/dados/noticias.json)
   e faz commit se houver novidade.

Para rodar na hora: aba **Actions** → **Atualizar notícias** → **Run workflow**. Só título, fonte,
data e link são guardados; o texto fica no site de cada veículo.

Os textos das páginas e das notícias ganham áudio em voz neural via
[`scripts/gerar_audios.py`](scripts/gerar_audios.py)
([`audios.yml`](.github/workflows/audios.yml)), gravados em `public/assets/audio/leitura/`.

### Tecnologias

- HTML5, CSS3 e JavaScript puros. Sem frameworks, sem dependências, sem build.
- Uma folha de estilo, [`public/style.css`](public/style.css), mobile-first, com a paleta em variáveis no `:root`.
- JavaScript para o menu do celular, a leitura por áudio ao passar o mouse (com áudios em voz
  neural e, para o texto que muda na hora, a voz mais natural do navegador), o carrossel, os
  simuladores, as notícias e a animação das barras. Sem JavaScript, o conteúdo continua acessível.
- Nenhum dado digitado nos simuladores sai do navegador. Sem cookies e sem rastreadores.
- Deploy estático na Railway (serve a pasta `public/` via `Staticfile`).

### Paleta

| Variável | Cor |
|----------|-----|
| `--azul-escuro` | `#003B5C` |
| `--azul-medio` | `#005F8D` |
| `--azul-claro` | `#7FC8E8` |
| `--azul-suave` | `#E1F5FE` |
| `--texto` | `#1D1F21` |

### Estrutura

```
public/
  index.html  tema.html  aprofundamento.html  simuladores.html  impacto.html  noticias.html
  midia.html  galeria.html  projetos.html  acessibilidade.html  sobre.html  contato.html
  style.css
  js/menu.js  js/carrossel.js  js/simuladores.js  js/barras.js  js/noticias.js  js/contato.js  js/leitura-hover.js
  img/  (galeria/, projetos/, pôster, favicon)
  assets/  (video/, audio/)
  dados/noticias.json
scripts/atualizar_noticias.py  scripts/gerar_audios.py
.github/workflows/noticias.yml  .github/workflows/audios.yml  .github/workflows/guard-main-source.yml
docs/  (documentação da A2)
Staticfile  (root: public)
```

---

## Rodar localmente

```bash
git clone https://github.com/CamiloEduardo1904/FrontEndA2.git
cd FrontEndA2/public
python -m http.server 8000
```

Acesse http://localhost:8000. Para atualizar as notícias na sua máquina (a partir da raiz):
`python scripts/atualizar_noticias.py`.

## Fluxo de trabalho

`feature/*` → **develop** (Pull Request + aprovação) → **main** (PR `develop → main`).
Commits e branches nunca vão direto para `develop` ou `main`.

## Origem e autores

O Cada Real junta dois projetos: o **Bolso Coletivo**, trabalho em grupo da disciplina
Desenvolvimento Front-end para Web (UNICID), e o **Cada Real**, projeto pessoal de
**Yago Dos Santos**. Do Bolso Coletivo vêm o texto de aprofundamento, o tema, a página de vídeo, o
carrossel e a paleta; do Cada Real, os simuladores, o noticiário diário, os dados atualizados e o
layout.

Equipe do Bolso Coletivo: Camilo Eduardo, Carlos Eduardo, Gabriel Evaristo, Gabriel Oneil, João
Vitor e Yago Dos Santos.

> Conteúdo educativo. Não é recomendação de investimento.
