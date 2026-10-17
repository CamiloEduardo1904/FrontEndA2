# Bolso Coletivo

Site de **educação financeira** sobre como economizar e organizar o dinheiro vivendo com pouco —
voltado a pessoas de baixa renda e estudantes. Trabalho A2 da disciplina Desenvolvimento Front-end
para Web (UNICID).

> Repositório de aprendizado, em evolução.

 **Site no ar:** https://pequenosvalores.up.railway.app/

---

## Escopo do projeto (10 páginas)

| Página | Conteúdo |
|--------|----------|
| 1. Início (Home) | Frase de impacto para gerar cliques, título e imagem de choque. |
| 2. Conteúdo primário | Texto informativo de fácil entendimento. |
| 3–5. Conteúdo forte | Aprofundamento do conteúdo, explicando causas e algumas soluções. |
| 6. Tabelas e gráficos | Quanto cada pequeno gasto soma em 1 e 10 anos; dados de endividamento, assinaturas e apostas, com fontes. |
| 7. Acessibilidade | Recursos de acessibilidade do site e direitos relacionados. |
| 8. Matérias | Fontes de notícias confiáveis para comprovação de veracidade. |
| 9. Vídeo educativo | Vídeo para melhor entendimento e compreensão do tema. |
| 10. Autores e autoria | Nome e identificação dos integrantes e selo de autoria. |

## Escopo não funcional

A **acessibilidade** é essencial para garantir que o conteúdo possa ser utilizado pelo maior número
de pessoas possível, incluindo quem tem deficiências visuais, auditivas ou motoras. Por isso, usamos
`lang="pt-br"` para facilitar a interpretação do idioma por tecnologias assistivas.

## Tecnologias

- HTML5 e CSS3 puros (sem frameworks).
- Deploy estático na Railway (serve a pasta `public/` via `Staticfile`).

## Estrutura

```
public/        páginas .html, style.css e Assets/
docs/          plano de contexto e documentação
CLAUDE.md      regras do projeto para a IA   ·   public/CLAUDE.md  regras do site
Staticfile     configuração do deploy estático (root: public)
```

## Como rodar localmente

Como é um site estático, basta abrir `public/index.html` no navegador. Para servir via HTTP local
(opcional), dentro de `public/`:

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

## Fluxo de trabalho

`feature/*` → **develop** (Pull Request + aprovação) → **main** (PR `develop → main`).
Commits e branches nunca vão direto para `develop` ou `main`.

## Autores

- Camilo Eduardo
- Carlos Eduardo
- Gabriel Evaristo
- Gabriel Oneil
- João Vitor
- Yago Dos Santos
