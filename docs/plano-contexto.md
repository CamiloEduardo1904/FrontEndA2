# Plano de contexto — Bolso Coletivo

## 1. Nome do projeto
Bolso Coletivo — Trabalho A2, Desenvolvimento Front-end para Web (UNICID).

## 2. Visão geral
Site informativo de educação financeira sobre como economizar e organizar o dinheiro vivendo com
pouco. Conteúdo em formato de artigo, com exemplos práticos, tabelas e fontes.

## 3. Problema que resolve
Quem ganha pouco tende a pagar mais caro (juros do rotativo, parcelamento, golpes) e não encontra
conteúdo de educação financeira pensado para a sua realidade. O site reúne hábitos e estratégias
acessíveis para reduzir essa vulnerabilidade.

## 4. Público-alvo
Pessoas de baixa renda e estudantes; prioridade à acessibilidade (deficiências visuais, auditivas e motoras).

## 5. Objetivos
Informar com linguagem simples, mostrar o impacto dos pequenos gastos, apontar armadilhas e caminhos
para guardar dinheiro, e cumprir os critérios da A2.

## 6. Funcionalidades principais (10 páginas)
1. Início/Home — frase de impacto, título e imagem.
2. Conteúdo primário — texto informativo de fácil entendimento.
3–5. Conteúdo forte — aprofundamento: causas e soluções.
6. Tabelas e gráficos — quanto cada pequeno gasto soma em 1 e 10 anos; dados de endividamento, assinaturas e apostas, com fontes.
7. Acessibilidade — recursos de acessibilidade e direitos.
8. Matérias — fontes de notícias confiáveis.
9. Vídeo educativo.
10. Autores e autoria — integrantes e selo de autoria.
- Menu de navegação (`<nav>`) ligando todas as páginas.

## 7. Requisitos técnicos (stack)
HTML5 e CSS3 puros, sem frameworks. Site em `public/`, estilos em `public/style.css`. Versionamento
no GitHub (fluxo feature → develop → main). Deploy no Railway. Assistente de IA (fase posterior):
Node.js + Express.

## 8. Requisitos não funcionais
Acessibilidade WCAG AA; `lang="pt-br"`; mobile-first; imagens leves; sem dados pessoais reais (LGPD);
segredos fora do Git.

## 9. Estrutura de pastas
```
public/        páginas .html, style.css e Assets/
docs/          plano de contexto e documentação
CLAUDE.md      regras gerais da IA   ·   public/CLAUDE.md  regras do site
.mcp.json      MCP (GitHub, Railway, Figma)
.env.example   modelo de segredos (.env fica fora do Git)
```

## 10. Desejáveis (nice to have)
Modo alto contraste; gráficos nas tabelas da pág. 6; player de vídeo acessível (com legendas).

## 11. Critérios de sucesso / métricas
- 0 erros no validador W3C.
- Acessibilidade no Lighthouse ≥ 90.
- 10 páginas consistentes publicadas.
- Histórico de issues/PRs no GitHub.
- Site no ar no Railway: https://pequenos-valores.up.railway.app/

---
Tema alinhado aos ODS **1 — Erradicação da pobreza** e **10 — Redução das desigualdades**.
*(Confirmar o ODS oficial com a equipe/rubrica.)*
