# Diário de bordo

Registro das principais decisões, aprendizados e dificuldades do projeto.

> A equipe pode completar com datas e relatos próprios de cada integrante.

## Linha do tempo

| Etapa | O que aconteceu |
|-------|-----------------|
| Início | Escolha do tema (educação financeira para baixa renda) e criação do repositório do grupo, com fluxo `feature → develop → main`. |
| Bolso Coletivo | Primeira versão: página inicial com carrossel, artigo de aprofundamento e páginas-base com cabeçalho e rodapé padronizados. |
| Conteúdo | Pesquisa de dados de 2026 (Serasa, CNC, Banco Central) e escrita das páginas O tema, Tabelas, Acessibilidade, Matérias, Vídeo e Autores. |
| Reformulação | Reconstrução do site com layout novo, simuladores e página de dados com gráfico. |
| Notícias | Criação do robô que coleta notícias de finanças pessoais todo dia (GitHub Actions + Python). |
| Junção | Unificação de todo o conteúdo em um único site. |
| A2 | Adequação ao enunciado: 10 páginas obrigatórias, formulário validado, galeria, mídia com vídeo/áudio/iframe, orçamento e esta documentação. |

## Decisões

- **HTML, CSS e JavaScript puros, sem framework nem build.** O site é pequeno e estático; frameworks
  adicionariam peso e complexidade sem benefício para o público.
- **Uma única folha de estilo com variáveis de cor no `:root`.** Garante a mesma paleta azul em todas
  as páginas e facilita ajustes de contraste.
- **Mobile-first.** Grande parte do público acessa pelo celular.
- **Simuladores no navegador.** Nenhum dado digitado sai do computador da pessoa (privacidade/LGPD).
- **Notícias automáticas guardando só título, fonte, data e link.** Respeita direitos autorais e mantém
  a página sempre atual sem trabalho manual.
- **Imagens geradas por IA a partir de roteiros da equipe**, revisadas uma a uma. Três tinham
  defeitos: duas foram corrigidas (retoque e corte) e uma teve a legenda ajustada para descrever
  corretamente a bengala vermelha e branca (pessoa surdocega).
- **Vídeo e áudio próprios** com narração em voz sintética, legendas (WebVTT) e transcrição, para
  atender pessoas surdas e quem não pode ouvir no momento.
- **Hospedagem estática na Railway** com o domínio próprio `pequenosvalores.site` (ver orçamento).

## Uso de IA

A equipe usa IA como apoio, com regras escritas no repositório: [`CLAUDE.md`](../CLAUDE.md) (regras gerais
e de Git), [`public/CLAUDE.md`](../public/CLAUDE.md) (HTML, CSS e acessibilidade) e o
[`plano-contexto.md`](plano-contexto.md). Entre as regras: sem frameworks, sem CSS inline, perguntar antes
de inventar conteúdo, nada de deploy sem pedir e nenhuma assinatura de IA em commits e PRs. Todo código
gerado entra por pull request e passa pela revisão de outro integrante.

| Data | Ferramenta | Prompt (resumo) | Resultado | Aceito | Corrigido ou recusado |
|------|------------|-----------------|-----------|--------|-----------------------|
| 17/10/2026 | Claude Code | Criar a estrutura de IA do projeto e as regras de comportamento do agente. | `CLAUDE.md`, `public/CLAUDE.md` e plano de contexto (commits `543642a` e `6664e2b`). | As regras de HTML, CSS, acessibilidade e Git. | Regra acrescentada depois: PR e commit sem assinatura de IA (`05c802b`). |
| — | Gerador de imagens | Roteiros escritos pela equipe para cada imagem da galeria e das páginas. | Imagens das páginas e da galeria. | As imagens sem defeito, depois de revisadas uma a uma. | Três tinham defeitos (objetos flutuando, pessoas duplicadas): duas foram retocadas ou cortadas e uma teve a legenda refeita. A linha de fonte das imagens foi retirada em `6f58b57`. |
| 13/11/2026 | Claude Code | “Leia todo o conteúdo do repositório, arrume tudo o que for necessário e peça PR.” | PR #31: documentação de 10 arquivos atualizada para a Railway e o domínio pequenosvalores.site. | Revisado e aceito pela equipe em 14/11/2026. | A IA apontou que o robô de notícias não consegue gravar na branch protegida; a correção depende de uma decisão da equipe. |
| 14/11/2026 | Claude Code | Completar o checklist da 2ª entrega: validação do formulário em JS com rascunho no `localStorage`, página de orçamento, melhorias do MVP e este registro. | PR com `contato.js` novo, `orcamento_hospedagem.html` e `melhorias-mvp.md`. | Aguardando revisão. | A IA não inventou a divisão de funções nem os pontos do professor: esses ficaram para a equipe preencher. |

> Cada integrante pode acrescentar aqui os prompts que usou, com o que foi aceito e o que foi corrigido.

## Aprendizados

- Semântica HTML5 e ARIA na prática: `aria-current`, `aria-live`, `aria-labelledby`, `role="region"`
  em tabelas com rolagem.
- Validação de formulário só com HTML5: `required`, `type="email"`, `pattern`, `min`/`max`.
- Uso de Git e GitHub em equipe: branches, pull requests, revisão e proteção da branch principal.
- Automação com GitHub Actions e publicação contínua na Railway.
- Importância de checar fontes: dados de apostas do Banco Central e de um estudo do setor divergem.

## Dificuldades

- **Menu com muitos itens:** com 10 páginas, o menu horizontal só cabe em telas largas; abaixo de
  1200 px ele vira um botão "Menu".
- **Tabelas no celular:** tabelas largas esticavam a página; resolvido com contêiner de rolagem.
- **Notícias fora do tema:** o primeiro filtro trazia dívida pública e notícias de empresas; foi
  criada uma lista de veículos confiáveis e de termos bloqueados.
- **Imagens de IA:** erros como objetos flutuando e pessoas duplicadas exigiram revisão cuidadosa.
- **Preços de hospedagem:** variam muito entre promoções e renovação; o orçamento registra a data da
  consulta.
