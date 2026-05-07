# Template de Relatório de Acessibilidade

Use este template para gerar o relatório final. Substitua os placeholders pelos dados reais.

---

````markdown
# Relatório de Acessibilidade — {NOME_DO_ARQUIVO}

**Arquivo analisado:** `{CAMINHO_DO_ARQUIVO}`  
**Data da análise:** {DATA}  
**Padrão de referência:** eMAG / WCAG 2.1

---

## Resumo Executivo

| Métrica                          | Quantidade  |
| -------------------------------- | ----------- |
| ❌ Erros encontrados             | {N_ERROS}   |
| ⚠️ Avisos encontrados            | {N_AVISOS}  |
| 🔍 Verificação manual necessária | {N_MANUAIS} |
| ✅ Critérios conformes           | {N_OK}      |
| ➖ Não aplicáveis                | {N_NA}      |

> **Nível de conformidade estimado:** {CRITICO / MODERADO / BOM / EXCELENTE}
>
> - Crítico: 10+ erros
> - Moderado: 4–9 erros
> - Bom: 1–3 erros
> - Excelente: 0 erros

---

## Erros Encontrados ❌

### {ID_CRITERIO} — {NOME_CRITERIO}

**Recomendação:** {NUMERO_RECOMENDACAO} — {NOME_RECOMENDACAO}  
**Trecho do código:**

```html
{TRECHO_DO_CODIGO}
```
````

**Problema:** {DESCRICAO_DO_PROBLEMA}  
**Como corrigir:** {SUGESTAO_DE_CORRECAO}

---

## Avisos ⚠️

### {ID_CRITERIO} — {NOME_CRITERIO}

**Recomendação:** {NUMERO_RECOMENDACAO} — {NOME_RECOMENDACAO}  
**Trecho do código:**

```html
{TRECHO_DO_CODIGO}
```

**Problema:** {DESCRICAO_DO_PROBLEMA}  
**Recomendação:** {SUGESTAO}

---

## Verificações Manuais Necessárias 🔍

Estes itens não podem ser verificados estaticamente e requerem inspeção manual:

| Critério                 | O que verificar         | Ferramenta sugerida                           |
| ------------------------ | ----------------------- | --------------------------------------------- |
| 1.1.1 Validação HTML     | Erros de markup         | https://validator.w3.org/nu/                  |
| 1.1.2 Validação CSS      | Erros de CSS            | https://jigsaw.w3.org/css-validator/          |
| 4.1.2 Contraste de cores | Relação mínima de 4,5:1 | https://webaim.org/resources/contrastchecker/ |
| 3.5.14 Links quebrados   | URLs retornam 404/503   | Extensão de browser ou ferramenta de crawl    |
| {OUTROS_MANUAIS}         | {O_QUE_VERIFICAR}       | {FERRAMENTA}                                  |

---

## Itens Conformes ✅

{LISTA_DE_CRITERIOS_OK_COM_BREVE_JUSTIFICATIVA}

---

## Critérios Não Aplicáveis ➖

{LISTA_DE_CRITERIOS_NA_COM_MOTIVO}
(Ex: "3.3.1 Title da página — componente parcial, não é documento completo")

---

## Recomendações Prioritárias

Liste aqui os 3–5 itens mais críticos para corrigir primeiro, em ordem de impacto:

1. **{ITEM_MAIS_CRITICO}** — {MOTIVO}
2. ...

```

```
