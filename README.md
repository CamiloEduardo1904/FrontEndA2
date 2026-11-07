# Bolso Coletivo

Site de **educação financeira** em linguagem simples para quem vive com pouco — simuladores, guia
prático, dados com fonte e notícias do dia sobre dívidas, juros, golpes, benefícios e preços.
Trabalho A2 da disciplina Desenvolvimento Front-end para Web (UNICID).

> Repositório de aprendizado, em evolução.

**Site no ar:** https://pequenosvalores.up.railway.app/

---

## Páginas

| Página | Para quê |
|--------|----------|
| Início (`index.html`) | Visão geral, simulador rápido e últimas notícias |
| O tema (`tema.html`) | Conteúdo educativo e monte o seu orçamento |
| Aprofundamento (`aprofundamento.html`) | Armadilhas do orçamento e onde guardar o que sobra |
| Simuladores (`simuladores.html`) | Simule uma dívida no cartão e o tempo até a sua reserva |
| Impacto (`impacto.html`) | Dados, tabelas, gráfico e matérias de origem |
| Notícias do dia (`noticias.html`) | Manchetes de finanças pessoais, atualizadas toda manhã |
| Mídia (`midia.html`) | Vídeo com legendas e áudio com transcrição |
| Galeria (`galeria.html`) | Imagens com legendas e fontes |
| Projetos (`projetos.html`) | Simuladores, oficinas, notícias e conteúdo acessível |
| Acessibilidade (`acessibilidade.html`) | Recursos do site e direitos |
| Sobre (`sobre.html`) | História, missão, visão, valores e equipe |
| Contato (`contato.html`) | Formulário validado e dados de atendimento |

## Escopo não funcional

A **acessibilidade** é essencial para garantir que o conteúdo possa ser utilizado pelo maior número
de pessoas possível, incluindo quem tem deficiências visuais, auditivas ou motoras. Usamos
`lang="pt-br"`, HTML5 semântico, legendas/transcrição nas mídias e leitura por áudio dos textos.
Sem JavaScript, o conteúdo continua acessível.

## Tecnologias

- HTML5, CSS3 e JavaScript puros. Sem frameworks, sem dependências, sem build.
- Uma folha de estilo, `public/style.css`, mobile-first, com a paleta em variáveis no `:root`.
- JavaScript para o menu do celular, a leitura por áudio ao passar o mouse, o carrossel, os
  simuladores, as notícias e a animação das barras.
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

## Notícias automáticas

Todo dia o workflow [`noticias.yml`](.github/workflows/noticias.yml) roda
[`scripts/atualizar_noticias.py`](scripts/atualizar_noticias.py), que lê feeds RSS (Agência Brasil,
g1, InfoMoney e uma busca do Google Notícias), mantém só manchetes que casam com um tema (dívidas,
golpes, investir, renda, preços), remove repetidas, guarda os últimos 14 dias em
[`public/dados/noticias.json`](public/dados/noticias.json) e faz commit se houver novidade.
Só título, fonte, data e link são guardados.

Os textos das páginas e das notícias ganham áudio em voz neural via
[`scripts/gerar_audios.py`](scripts/gerar_audios.py)
([`audios.yml`](.github/workflows/audios.yml)), gravados em `public/assets/audio/leitura/`.

## Estrutura

```
public/                 páginas .html, style.css, js/, img/, assets/ (vídeo + áudio) e dados/
public/dados/noticias.json   notícias do dia (atualizado pelo robô)
scripts/                atualizar_noticias.py · gerar_audios.py
.github/workflows/      noticias.yml · audios.yml · guard-main-source.yml
docs/                   documentação da A2 (escopo, diário de bordo, orçamento, evidências)
CLAUDE.md               regras do projeto para a IA   ·   public/CLAUDE.md  regras do site
Staticfile              configuração do deploy estático (root: public)
```

## Como rodar localmente

```bash
git clone https://github.com/CamiloEduardo1904/FrontEndA2.git
cd FrontEndA2/public
python -m http.server 8000
# acesse http://localhost:8000
```

Para atualizar as notícias na sua máquina: `python scripts/atualizar_noticias.py` (a partir da raiz).

## Fluxo de trabalho

`feature/*` → **develop** (Pull Request + aprovação) → **main** (PR `develop → main`).
Commits e branches nunca vão direto para `develop` ou `main`.

## Autoria

Trabalho A2 da disciplina Desenvolvimento Front-end para Web (UNICID), feito em grupo.

Equipe:

- Camilo Eduardo
- Carlos Eduardo
- Gabriel Evaristo
- Gabriel Oneil
- João Vitor
- Yago Dos Santos

> Conteúdo educativo. Não é recomendação de investimento.
