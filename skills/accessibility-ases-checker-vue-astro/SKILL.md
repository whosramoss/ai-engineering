---
name: accessibility-ases-checker-vue-astro
description: >
  Avalia arquivos de componentes frontend (.astro, .vue, .html) contra os critérios de acessibilidade do eMAG (Modelo de Acessibilidade em Governo Eletrônico) e WCAG. 
  Use esta skill SEMPRE que o usuário quiser avaliar, auditar ou checar acessibilidade de arquivos do seu projeto, mencionar "acessibilidade", "a11y", "eMAG", "WCAG",
  ou pedir para verificar se um site/componente está acessível. Também acione quando o usuário referenciar arquivos .astro, .vue ou .html pedindo revisão, auditoria ou análise.
---

# Accessibility Ases Checker — eMAG/WCAG

Avalia arquivos `.astro`, `.vue` e `.html` de um projeto contra os critérios de acessibilidade definidos em `references/criterios.md`.

## Fluxo de execução

1. **Identificar os arquivos** — O usuário pode fornecer um ou mais caminhos de arquivo. Leia cada arquivo com a ferramenta `view` ou `bash_tool` (cat).
2. **Carregar as regras** — Leia `references/criterios.md` para ter todas as regras em contexto.
3. **Analisar o HTML renderizado** — Para cada arquivo, extraia o markup HTML relevante (template section em `.vue`, markup em `.astro`, corpo do `.html`).
4. **Aplicar todos os critérios** — Percorra cada recomendação e critério da referência. Para cada critério, determine:
   - ✅ **Conforme** — o critério é satisfeito
   - ❌ **Erro** — violação encontrada (type: Erro)
   - ⚠️ **Aviso** — possível problema (type: Aviso)
   - ➖ **Não aplicável** — o critério não se aplica ao arquivo analisado
5. **Gerar o relatório** — Siga o template em `references/report-template.md`.
6. **Salvar o arquivo** — Salve como `relatorio-acessibilidade-<nome-do-arquivo>.md` em `/mnt/user-data/outputs/` e apresente ao usuário com `present_files`.

## Regras de análise por tipo de arquivo

### Arquivos `.vue`

- Analise a seção `<template>` como HTML
- Verifique `<style>` interno (critério 1.1.4)
- Verifique `<script>` interno (critério 1.1.6)
- Atributos dinâmicos (`:alt`, `:aria-label`) são considerados presentes — marque como ⚠️ Aviso indicando que o valor dinâmico deve ser validado em runtime

### Arquivos `.astro`

- Analise o markup abaixo do frontmatter (`---`) como HTML
- `<style>` e `<script>` internos do Astro contam como CSS/JS interno
- Props dinâmicas (`{alt}`) seguem a mesma lógica de atributos dinâmicos do Vue

### Múltiplos arquivos

- Gere uma seção separada por arquivo no relatório
- Adicione um **Resumo Consolidado** no final com totais de Erros e Avisos por arquivo

## Critérios que requerem análise externa (marcar como ⚠️ Verificação Manual)

Alguns critérios não podem ser verificados estaticamente no código-fonte:

- **1.1.1 / 1.1.2** — Validação W3C (requer ferramenta externa)
- **4.1.2** — Contraste de cores (requer cálculo com valores CSS resolvidos)
- **3.5.14** — Links quebrados (requer requisição HTTP)
- **2.6.3** — GIFs animados (requer inspecionar o arquivo de imagem)
- **5.1.1 / 5.2.1 / 5.3.1 / 5.4.1** — Presença de vídeo/áudio (verificar src)

## Importante

- Seja preciso: cite o trecho exato do código que causou o problema.
- Não invente violações. Se o critério não puder ser verificado estaticamente, marque como ⚠️ Verificação Manual.
- Atributos ARIA e roles adicionados corretamente devem ser reconhecidos como conformes.
- Considere o contexto do componente: um componente de botão sem `<html lang>` não viola 3.1.1, pois não é um documento completo — marque como ➖ Não aplicável.
