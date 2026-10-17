# Bolso Coletivo — guia do projeto para a IA

> Regra **sempre ativa** do projeto (equivale às "Project Rules").
> O Claude Code carrega este `CLAUDE.md` automaticamente em toda conversa neste repositório.
> Ao editar arquivos do site, o Claude também carrega `public/CLAUDE.md` (HTML, CSS e acessibilidade).

## 1. Objetivo
Site de **educação financeira** — *Bolso Coletivo* (Trabalho A2, UNICID). Tema: como economizar e
organizar o dinheiro vivendo com pouco, voltado a pessoas de baixa renda e estudantes. Este guia
padroniza **como o código é feito** para que todas as páginas fiquem consistentes.

Plano de contexto completo: @docs/plano-contexto.md

## 2. Contexto técnico
- **Stack:** HTML5 + CSS3 puros, sem frameworks e sem build. (Node.js + Express entram só na fase de deploy do assistente.)
- **Estrutura:**
  - `public/` — páginas do site (`index.html`, `sobre.html`, …), `public/style.css` e `public/Assets/`
  - `docs/` — plano de contexto e documentação
  - `CLAUDE.md` (raiz) — regras gerais · `public/CLAUDE.md` — regras do site
  - `.mcp.json` — servidores MCP (GitHub, Railway, Figma)
  - `.env` (fora do Git) — segredos; modelo em `.env.example`
- **Idioma:** conteúdo em pt-BR; `lang="pt-br"` no `<html>`.
- **Deploy:** Railway — https://pequenos-valores.up.railway.app/

## 3. Regras gerais (fazer / não fazer)
- Reaproveite cabeçalho, rodapé e o `public/style.css` existentes; mantenha o padrão visual do `index.html`.
- CSS só em `public/style.css`. **Não** use CSS inline nem bibliotecas externas.
- Nomes de classe em português e `kebab-case` (ex.: `.header-conteudo`, `.header-texto`).
- Não versione segredos. Tokens só em `.env` ou nas variáveis do Railway.
- Uma tarefa por vez, uma branch por tarefa; mostre o plano antes de editar vários arquivos.

## 4. Convenção de commits e branches
- Mensagens curtas, em português, padrão Conventional Commits: `tipo: resumo no imperativo`.
  Tipos: `feat`, `fix`, `style`, `docs`, `refactor`, `chore`. Ex.: `feat: cria pagina sobre.html com os autores`.
- Fluxo: feature → **develop** (PR + 1 aprovação de outra pessoa) → **main** (só via PR develop→main).
  **Nunca** commit direto em `develop` ou `main`.

## 5. Erros a evitar
- Criar páginas sem reaproveitar o layout do `index.html`.
- Usar `<div>` no lugar de `header`, `nav`, `main`, `footer`.
- Mais de um `<h1>` por página (o `index.html` atual tem dois — ao editar, corrija).
- `<img>` sem `alt` descritivo.
- Inventar tecnologia (React, Tailwind, etc.): o projeto é HTML/CSS puro.

## 6. Pergunte antes
Na dúvida sobre conteúdo, qual página, fonte de dados ou imagem, **pare e pergunte** em vez de inventar.

## 7. Meta-regras (manutenção deste guia)
- As regras moram em `CLAUDE.md` (geral) e `public/CLAUDE.md` (site). Mantenha-as curtas e com exemplos reais do projeto.
- Quando um mesmo padrão aparecer em 3+ arquivos, ou o mesmo erro/feedback se repetir, proponha atualizar o guia **mostrando a mudança antes de salvar**.
- Regra obsoleta deve ser removida, não acumulada.
