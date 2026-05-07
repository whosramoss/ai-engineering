# Critérios de Avaliação de Acessibilidade — eMAG

## Recomendação 1.1 - Respeitar os padrões Web

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.1.1 Não foram respeitados os Padrões Web HTML | Erro | Verificar erros de validação HTML (W3C). Em análise estática: tags não fechadas, atributos inválidos, aninhamento incorreto. |
| 1.1.2 Não foram respeitados os Padrões Web CSS | Erro | Verificar erros de validação CSS (W3C). Em análise estática: propriedades inválidas, valores incorretos. |
| 1.1.3 Presença de CSS in-line | Aviso | Verificar a presença do atributo `style` nos elementos HTML. |
| 1.1.4 Presença de CSS interno | Aviso | Verificar a presença da tag `<style>` no código. |
| 1.1.5 Presença de javascript in-line | Aviso | Verificar atributos de eventos: onload, onunload, onblur, onchange, onfocus, onsearch, onselect, onsubmit, onkeydown, onkeypress, onkeyup, onclick, ondblclick, onmousedown, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, oncopy, oncut, onpaste, onabort. |
| 1.1.6 Presença de javascript interno | Aviso | Verificar a presença de código dentro da tag `<script>`. |
| 1.1.7 Avisos de Padrões Web HTML | Aviso | Avisos do validador W3C HTML (análise estática: atributos deprecated, uso de tags obsoletas como `<font>`, `<center>`, `<b>`, `<i>`). |
| 1.1.8 Avisos de Padrões Web CSS | Aviso | Avisos do validador W3C CSS (análise estática: prefixos vendor desnecessários, propriedades deprecated). |

## Recomendação 1.2 - Organizar o código HTML de forma lógica e semântica

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.2.2 Tags HTML sem atributo e conteúdo de texto | Aviso | Verificar tags com abertura e fechamento sem conteúdo, ex: `<a></a>`, `<div></div>`. |
| 1.2.3 Tags semânticas sem conteúdo de texto | Erro | Verificar `<h1>`–`<h6>`, `<a>`, `<p>`, `<label>` com abertura e fechamento sem conteúdo de texto. |

## Recomendação 1.3 - Utilizar corretamente os níveis de cabeçalho

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.3.1 Níveis de título ausentes | Erro | Verificar ausência total de `<h1>`–`<h6>` em páginas/documentos completos. |
| 1.3.2 Hierarquia de títulos incorreta | Erro | Verificar falta de ordem sequencial dos headings. Ex: `<h3>` sem `<h2>` anterior. |
| 1.3.4 Somente nível H1 utilizado | Aviso | Verificar se há apenas `<h1>` sem outros níveis de cabeçalho para organizar o conteúdo. |
| 1.3.6 Mais de um H1 na página | Erro | Verificar uso repetido de `<h1>`. |

## Recomendação 1.4 - Ordenar de forma lógica e intuitiva a leitura e tabulação

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.4.1 Bloco de conteúdo após bloco de menu no HTML | Aviso | Verificar se o código do menu aparece antes do código do conteúdo principal no HTML. |
| 1.4.3 Presença do atributo tabindex | Aviso | Verificar presença do atributo `tabindex` nos elementos. |
| 1.4.6 Valor de tabindex inválido | Aviso | Verificar `tabindex` com valor menor que -1 ou maior que 32767. |

## Recomendação 1.5 - Fornecer âncoras para ir direto a um bloco de conteúdo

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.5.1 Ausência de âncoras de navegação | Erro | Verificar ausência de links com `href` começando com `#`. |
| 1.5.2 Âncoras sem destino correspondente | Erro | Verificar links com `href="#algo"` onde o `id="algo"` não existe na página. |
| 1.5.4 Ausência de atalhos (accesskey) | Erro | Verificar ausência do atributo `accesskey` na página. |
| 1.5.9 Primeiro link não é âncora para conteúdo | Erro | Verificar se o primeiro link da página é uma âncora (`href="#"`) apontando para o conteúdo principal. |
| 1.5.11 Atributo accesskey repetido | Erro | Verificar duplicação de valores no atributo `accesskey` na mesma página. |

## Recomendação 1.6 - Não utilizar tabelas para diagramação

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.6.1 Uso de tabelas | Aviso | Verificar presença da tag `<table>`. Se não houver `<th>`, `<thead>` ou `<caption>`, provavelmente é layout. |
| 1.6.2 Formulário dentro de tabela | Erro | Verificar presença de `<form>` dentro de `<table>`. |

## Recomendação 1.7 - Separar links adjacentes

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.7.1 Links adjacentes sem separação | Erro | Verificar links sequenciais sem separação explícita (caracteres especiais, listas, etc.) — apenas espaço em branco entre eles não é suficiente. |

## Recomendação 1.8 - Dividir as áreas de informação

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.8.3 Ausência de divisão de áreas HTML5 | Aviso | Verificar ausência das tags semânticas: `<header>`, `<footer>`, `<section>`, `<aside>`, `<nav>`, `<article>`. Aplicável apenas a documentos/páginas completas. |

## Recomendação 1.9 - Não abrir novas instâncias sem solicitação do usuário

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.9.1 Link que abre nova aba | Aviso | Verificar presença de `target="_blank"` em links sem aviso ao usuário. |

## Recomendação 2.1 - Disponibilizar todas as funções via teclado

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.1.2 Funcionalidade só por mouse | Erro | Verificar presença de `onmousedown`, `onmouseup`, `onmouseover`, `onmouseout` sem equivalente de teclado (`onkeydown`, `onkeyup`, `onkeypress`, `onfocus`). |
| 2.1.6 Uso de ondblclick | Aviso | Verificar presença do evento `ondblclick`. |
| 2.1.8 Eventos em elementos não interativos | Erro | Verificar eventos de interação em elementos estáticos como `<div>`, `<span>`, `<p>`, `<h1>`–`<h6>` sem `role` ou `tabindex`. |

## Recomendação 2.2 - Garantir que objetos programáveis sejam acessíveis

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.2.1 Script sem noscript | Erro | Verificar presença de `<script>` sem `<noscript>` correspondente. |
| 2.2.2 Elemento object sem alternativa | Erro | Verificar `<object>` sem conteúdo de texto alternativo entre as tags. |
| 2.2.3 Elemento embed sem alternativa | Aviso | Verificar `<embed>` sem conteúdo de texto alternativo. |
| 2.2.4 Elemento applet sem alternativa | Aviso | Verificar `<applet>` sem conteúdo de texto alternativo. |
| 2.2.6 Script sem noscript | Aviso | Verificar `<script>` sem `<noscript>` na página (aviso complementar ao erro 2.2.1). |

## Recomendação 2.3 - Não criar páginas com atualização automática periódica

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.3.1 Atualização automática | Aviso | Verificar `<meta http-equiv="refresh">` ou funções JS `setTimeout`/`setInterval` que recarregam a página. |

## Recomendação 2.4 - Não utilizar redirecionamento automático

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.4.1 Redirecionamento automático | Erro | Verificar `<meta http-equiv="refresh" content="...url...">` ou `window.location` em scripts. |

## Recomendação 2.6 - Não incluir situações com intermitência de tela

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.6.1 Elemento blink | Erro | Verificar presença de `<blink>`. |
| 2.6.2 Elemento marquee | Erro | Verificar presença de `<marquee>`. |
| 2.6.3 Imagem GIF animada | Aviso | Verificar `<img src="*.gif">` — marcar para verificação manual se o GIF é animado. |

## Recomendação 3.1 - Identificar o idioma principal da página

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.1.1 Ausência do atributo lang | Erro | Verificar ausência do atributo `lang` no elemento `<html>`. Aplicável apenas a documentos completos. |
| 3.1.3 xmlns/xml:lang sem lang | Aviso | Verificar presença de `xmlns` e `xml:lang` sem o atributo `lang`. |

## Recomendação 3.2 - Informar mudança de idioma no conteúdo

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.2.1 Atributo lang em elementos internos | Aviso | Verificar presença do atributo `lang` em elementos que não sejam `<html>`, indicando mudança de idioma. Isso é positivo — o aviso é para confirmar que o valor está correto. |

## Recomendação 3.3 - Oferecer título descritivo à página

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.3.1 Ausência ou title em branco | Erro | Verificar ausência de `<title>` ou `<title>` sem conteúdo. Aplicável a documentos/páginas completas. |

## Recomendação 3.5 - Descrever links clara e sucintamente

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.5.2 Link com texto em formato de URL | Aviso | Verificar `<a>` cujo texto visível parece uma URL (começa com http, www, etc.). |
| 3.5.3 Links vazios | Erro | Verificar `<a>` sem texto descritivo e sem imagem com alt. |
| 3.5.4 Link com descrição só no title | Erro | Verificar `<a title="...">` sem texto descritivo no conteúdo do elemento. |
| 3.5.5 Link com imagem sem alt | Erro | Verificar `<a><img></a>` onde `<img>` não tem `alt` descritivo. |
| 3.5.6 Links genéricos (clique aqui, leia mais) | Erro | Verificar texto de links com: 'clique aqui', 'leia mais', 'veja aqui', 'veja mais', 'clique', 'acesse aqui', 'clique para acessar', 'aqui'. |
| 3.5.10 Links diferentes para o mesmo destino | Aviso | Verificar `<a>` com textos diferentes mas `href` idênticos. |
| 3.5.11 Links iguais para destinos diferentes | Erro | Verificar `<a>` com texto idêntico mas `href` diferentes. |
| 3.5.12 Link lido duas vezes (title = texto) | Erro | Verificar `<a>` onde o atributo `title` é idêntico ao texto do link. |
| 3.5.13 Texto do link muito longo | Aviso | Verificar `<a>` com texto acima de 2000 caracteres. |
| 3.5.14 Links para páginas indisponíveis | Erro | Verificar links quebrados — marcar para verificação manual (requer requisição HTTP). |
| 3.5.15 Links com protocolo suspeito | Aviso | Verificar `href` com protocolos incomuns (file://, ftp://) ou URLs mal formatadas. |

## Recomendação 3.6 - Fornecer alternativa em texto para imagens

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.6.1 Imagem sem atributo alt | Erro | Verificar `<img>` sem o atributo `alt`. |
| 3.6.2 Imagem com alt vazio (não decorativa) | Erro | Verificar `<img alt="">` em imagens que parecem ter conteúdo informativo. |
| 3.6.3 Alt com nome do arquivo | Erro | Verificar `alt` cujo valor é igual ao nome do arquivo da imagem (ex: `alt="foto.jpg"`). |
| 3.6.4 Alt com expressões genéricas | Erro | Verificar `alt` contendo: 'figura', 'imagem', 'image', 'img', 'alt', 'foto', 'photo'. |
| 3.6.7 Imagens iguais com alt diferente | Aviso | Verificar `<img>` com mesmo `src` mas `alt` diferente entre si. |
| 3.6.8 Alt e title idênticos | Erro | Verificar `<img>` onde `alt` e `title` têm o mesmo conteúdo. |

## Recomendação 3.7 - Utilizar mapas de imagem de forma acessível

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.7.1 Mapa de imagem sem alternativa | Erro | Verificar `<img usemap>` sem `alt` descritivo, ou `<area>` sem `alt` descritivo. |

## Recomendação 3.9 - Em tabelas, utilizar títulos e resumos

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.9.1 Tabela sem título e resumo | Aviso | Verificar `<table>` sem atributo `summary` e sem elemento `<caption>`. |

## Recomendação 3.10 - Associar células de dados às células de cabeçalho

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.10.1 Tabela sem células associadas | Erro | Verificar `<table>` sem `<thead>`/`<tbody>`, ou `<td>`/`<th>` sem atributos `id`, `headers`, `scope` ou `axis`. |

## Recomendação 3.11 - Garantir a leitura e compreensão das informações

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.11.2 Parágrafos justificados via atributo | Erro | Verificar `<p align="justify">`. |
| 3.11.3 Textos justificados via CSS | Erro | Verificar `text-align: justify` em estilos inline, internos ou em arquivos CSS referenciados. |

## Recomendação 3.12 - Explicação de siglas e abreviaturas

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.12.1 Siglas sem explicação | Erro | Verificar `<abbr>` ou `<acronym>` sem atributo `title`. |

## Recomendação 4.1 - Oferecer contraste mínimo

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 4.1.2 Contraste inferior a 4,5:1 | Aviso | Verificar propriedades `color`, `background`, `background-color`, `bgcolor` — marcar para verificação manual pois o cálculo precisa dos valores resolvidos de CSS. |

## Recomendação 4.4 - Foco visualmente evidente

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 4.4.1 Ausência de estilo de foco | Erro | Verificar uso de `outline: none` ou `outline: 0` sem alternativa de estilo de foco nos seletores CSS. |

## Recomendação 5.1 - Alternativa para vídeo

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.1.1 Vídeo sem alternativa textual | Aviso | Verificar `<embed>` ou `<video>` com `src` de vídeo — verificar se há legenda (`<track kind="captions">`) ou transcrição próxima. |

## Recomendação 5.2 - Alternativa para áudio

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.2.1 Áudio sem transcrição | Aviso | Verificar `<embed>` ou `<audio>` — verificar se há transcrição textual próxima. |

## Recomendação 5.3 - Audiodescrição para vídeo

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.3.1 Vídeo sem audiodescrição | Aviso | Verificar `<embed>` ou `<video>` — verificar se há `<track kind="descriptions">` ou audiodescrição referenciada. |

## Recomendação 5.4 - Controle de áudio

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.4.1 Áudio sem controles | Aviso | Verificar `<audio>` ou `<embed>` de áudio sem atributo `controls` ou mecanismo de controle visível. |

## Recomendação 6.1 - Alternativa em texto para botões de imagem

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.1.1 Botão sem descrição | Erro | Verificar `<input type="image">` sem `alt`, ou `<input type="button/reset/submit">` sem `value`. |

## Recomendação 6.2 - Associar etiquetas aos campos

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.2.1 Campo sem label associado | Erro | Verificar `<input>`, `<select>`, `<textarea>` sem `<label for="id">` correspondente ou sem estar dentro de um `<label>`. Exceção: `type="hidden"`. |

## Recomendação 6.3 - Lógica de navegação em formulários

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.3.1 Tabindex em formulário | Aviso | Verificar uso de `tabindex` dentro de `<form>`. |

## Recomendação 6.4 - Não provocar alteração automática no contexto

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.4.1 Eventos automáticos em formulário | Aviso | Verificar uso de `onchange`, `onblur` em elementos de formulário que causam mudança de contexto (navegação, submit automático). |
| 6.4.2 Eventos complexos em formulário | Aviso | Verificar `ondblclick`, `ondrag` e similares dentro de `<form>` sem aviso ao usuário. |

## Recomendação 6.7 - Agrupar campos de formulário

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.7.1 Formulário sem fieldset | Aviso | Verificar `<form>` sem `<fieldset>` em formulários com múltiplos grupos de campos. |
| 6.7.2 Select sem optgroup | Aviso | Verificar `<select>` com muitas opções sem `<optgroup>` para agrupamento. |