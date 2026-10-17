# Regras do site (`public/`) — HTML, CSS e acessibilidade

> O Claude Code carrega este arquivo automaticamente ao trabalhar em `public/`.
> Equivale às regras com `globs` do Cursor (html-semantico, css-estilo, acessibilidade).

## HTML semântico
- Estrutura obrigatória: `header`, `nav`, `main`, `footer` (nunca `div` no lugar desses).
- Um único `<h1>` por página; hierarquia de títulos sem pular níveis.
- Reaproveite o cabeçalho e o rodapé do `index.html` em todas as páginas.
- `lang="pt-br"` no `<html>`; `<meta charset="UTF-8">` e viewport no `<head>`.
- Toda `<img>` com `alt` descritivo (imagem decorativa: `alt=""`).
- Crie um `<nav>` reutilizável ligando as 10 páginas (ainda não existe no projeto).

Exemplo (seção acessível):
```html
<section aria-labelledby="t-armadilhas">
  <h2 id="t-armadilhas">Armadilhas que drenam o orçamento</h2>
  ...
</section>
```

## CSS (`public/style.css`)
- Um só arquivo: `public/style.css`. Sem CSS inline e sem frameworks.
- Mobile-first: estilos base no mobile e refine com `@media (min-width: …)`
  (o projeto já usa `@media (min-width: 900px)`).
- Classes em português, `kebab-case`. Padronize nomes fora do padrão (ex.: `.TextoDeInicio` → `.texto-inicio`).
- **Cores:** hoje estão fixas no código. Centralize na paleta em `:root` e use `var(--cor)`:
```css
:root {
  --azul-escuro: #003B5C;
  --azul-medio:  #005F8D;
  --azul-claro:  #7FC8E8;
  --fundo:       #E1F5FE;
  --texto:       #1D1F21;
}
```
- Mantenha o reset existente: `* { box-sizing: border-box; margin: 0; padding: 0; }`.

## Acessibilidade (WCAG AA)
- Contraste de texto AA; foco visível em links e botões (`:focus-visible`).
- Navegável por teclado, com ordem de leitura lógica.
- Tabelas de dados com `<thead>` e `<th>` (o `index.html` já faz isso).
- Associe cada `section` ao seu título com `aria-labelledby`.

## Erros a evitar
- Dois `<h1>` na mesma página (no `index.html`: manter o do `header` **ou** o do `article`).
- Texto de link genérico ("clique aqui").
- Remover o `alt` de imagens.
