# Bolso Coletivo — documentação da Atividade A2

**Disciplina:** Desenvolvimento Front-end para Web · UNICID · Prof. Paulo Fratta
**Equipe:** Bolso Coletivo
**Site:** https://pequenosvalores.site/
**Repositório:** https://github.com/CamiloEduardo1904/FrontEndA2

## Tema

Educação financeira para quem vive com pouco: como economizar, organizar o orçamento e se proteger de
dívidas, juros abusivos, apostas e golpes. Tema de **impacto social** ligado aos ODS 1 (Erradicação
da pobreza), 10 (Redução das desigualdades) e 12 (Consumo e produção responsáveis), com
**acessibilidade para pessoas com deficiência** como prioridade.

## Objetivos

- **Geral:** oferecer conteúdo financeiro gratuito, simples e acessível para estudantes e famílias de
  baixa renda.
- **Específicos:**
  1. Publicar 10 páginas interligadas, validadas no W3C sem erros.
  2. Oferecer 3 simuladores que mostrem o efeito de pequenos gastos, da dívida no cartão e da reserva.
  3. Manter um noticiário de finanças pessoais atualizado automaticamente todo dia.
  4. Atingir acessibilidade WCAG 2.1 AA (teclado, leitor de tela, contraste, legendas e transcrições).
  5. Manter o site leve: imagens em WebP abaixo de 300 KB e nenhum framework ou rastreador.

## Páginas

| Nº | Arquivo | Conteúdo |
|----|---------|----------|
| 1 | `index.html` | Resumo do tema, carrossel, simulador rápido, menu principal |
| 2 | `sobre.html` | História, missão, visão, valores, equipe e selo de autoria |
| 3 | `projetos.html` | Quatro projetos de impacto social |
| 4 | `impacto.html` | Dados, tabelas, gráfico e matérias de origem |
| 5 | `acessibilidade.html` | Medidas de inclusão para PCD e direitos |
| 6 | `galeria.html` | 8 imagens com legendas e fontes |
| 7 | `midia.html` | `<video controls poster>` com legendas, `<audio controls>` e `<iframe>` |
| 8 | `noticias.html` | Notícias do dia, atualizadas automaticamente |
| 9 | `contato.html` | Dados fictícios, formulário validado e membros da equipe |
| 10 | `orcamento_hospedagem.html` | Onde o site está publicado, por quê, e comparação de preços de hospedagem e domínio (link no rodapé) |
| + | `tema.html`, `aprofundamento.html`, `simuladores.html` | Conteúdo educativo e ferramentas |

## Estrutura de pastas

```
FrontEndA2/
├── public/                 site publicado na Railway (Staticfile → root: public)
│   ├── index.html  sobre.html  projetos.html  impacto.html  acessibilidade.html
│   ├── galeria.html  midia.html  noticias.html  contato.html  orcamento_hospedagem.html
│   ├── tema.html  aprofundamento.html  simuladores.html
│   ├── style.css   folha de estilo única
│   ├── js/         menu, leitura por áudio, carrossel, simuladores, barras, notícias, contato
│   ├── img/        galeria/, projetos/, pôster do vídeo, imagem do Sobre, favicon
│   ├── assets/     video/ (MP4 + legendas VTT), audio/ (MP3 + leitura/)
│   └── dados/      noticias.json (gerado pelo robô)
├── scripts/        atualizar_noticias.py · gerar_audios.py
├── .github/        workflows: notícias, áudios e proteção da main
└── docs/           esta documentação
```

## Divisão de funções

> **A preencher pela equipe** antes da entrega.

| Integrante | Responsabilidades |
|------------|-------------------|
| Camilo Eduardo | |
| Carlos Eduardo | |
| Gabriel Evaristo | |
| Gabriel Oneil | |
| João Vitor | |
| Yago Dos Santos | |

## Documentos desta pasta

- [`escopo.md`](escopo.md) — escopo do projeto
- [`diario-de-bordo.md`](diario-de-bordo.md) — decisões, aprendizados e dificuldades
- [`orcamento-hospedagem.md`](orcamento-hospedagem.md) — hospedagem e domínio
- [`evidencias-testes.md`](evidencias-testes.md) — validação, navegação e acessibilidade
- [`melhorias-mvp.md`](melhorias-mvp.md) — o que mudou desde a 1ª entrega, com prints de antes e depois
- Uso de IA: seção "Uso de IA" do [`diario-de-bordo.md`](diario-de-bordo.md) e [`plano-contexto.md`](plano-contexto.md)
