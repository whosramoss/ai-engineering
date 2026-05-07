# Critérios de Avaliação

As recomendações de acessibilidade foram desmembradas em critérios de avaliação. Para cada critério de avaliação das recomendações foram estabelecidos parâmetros de acordo com a sua natureza.

---

### Recomendação 1.1 - Respeitar os padrões Web

Os padrões Web são recomendações do W3C (World Wide Web Consortium), as quais são destinadas a orientar os desenvolvedores para o uso de boas práticas que tornam a web acessível para todos, permitindo assim que os desenvolvedores criem experiências ricas, alimentadas por um vasto armazenamento de dados, os quais estão disponíveis para qualquer dispositivo e compatíveis com atuais e futuros agentes de usuário (ex: navegadores).

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.1.1 Não foram respeitados os Padrões Web HTML | Erro | Verificar erros apresentados pelo webservice de validação HTML fornecido pelo W3C: https://validator.w3.org/nu/ |
| 1.1.2 Não foram respeitados os Padrões Web CSS | Erro | Verificar erros apresentados pelo webservice de validação CSS fornecido pelo W3C: https://jigsaw.w3.org/css-validator/ |
| 1.1.3 Presença de CSS(s) in-line | Aviso | Verificar a presença do atributo 'style' no código das páginas HTML. |
| 1.1.4 Presença de CSS(s) interno | Aviso | Verificar a presença da tag HTML `<style>` no código das páginas HTML. |
| 1.1.5 Presença de javascript(s) in-line | Aviso | Verificar a presença de código javascript dentro dos atributos de eventos no código HTML a serem avaliados: onload, onunload, onblur, onchange, onfocus, onsearch, onselect, onsubmit, onkeydown, onkeypress, onkeyup, onclick, ondblclick, onmousedown, onmousesemove, onmouseout, onmouseover, onmouseup, onmousewheel, oncopy, oncut, onpaste e onabort. |
| 1.1.6 Presença de javascript(s) interno | Aviso | Verificar a presença de código javascript dentro da tag `<script>`. |
| 1.1.7 Não foram respeitados os Padrões Web HTML | Aviso | Verificar avisos apresentados pelo webservice de validação HTML fornecido pelo W3C: https://validator.w3.org/nu/ |
| 1.1.8 Não foram respeitados os Padrões Web CSS | Aviso | Verificar avisos apresentados pelo webservice de validação CSS fornecido pelo W3C: https://jigsaw.w3.org/css-validator/ |

---

### Recomendação 1.2 - Organizar o código HTML de forma lógica e semântica

O código HTML deve ser organizado de forma lógica e semântica, ou seja, apresentando os elementos em uma ordem compreensível e correspondendo ao conteúdo desejado. Cada elemento HTML deve ser utilizado para o fim que ele foi criado.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.2.2 Presença de tags HTML sem atributo e conteúdo de texto | Aviso | Verificar a presença de tags HTML que apresentem inicio e fechamento, mas sem conteúdo de texto. Possível exemplo seria `<a></a>` ou `<div></div>`. |
| 1.2.3 Presença de tags HTML sem atributo e conteúdo de texto | Erro | Verificar a presença de tags HTML (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<a>`, `<p>`, `<label>`) que apresentem inicio e fechamento, mas sem conteúdo de texto. Possível exemplo seria `<a></a>` ou `<div></div>`. |

---

### Recomendação 1.3 - Utilizar corretamente os níveis de cabeçalho

Os níveis de cabeçalho (elementos HTML H1 a H6) devem ser utilizados de forma hierárquica, pois organizam a ordem de importância e subordinação dos conteúdos, facilitando a leitura e compreensão.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.3.1 Os níveis de título não foram utilizados | Erro | Verificar a ausência dos níveis de cabeçalho (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` e `<h6>`) nas páginas HTML. |
| 1.3.2 A hierarquia dos níveis de título está incorreta | Erro | Verificar a falta de ordem sequencial da presença de níveis de cabeçalho. Exemplo: a presença do nível `<h3>` depende do nível anterior `<h2>`. |
| 1.3.4 Foi utilizado somente o nível H1 | Aviso | Verificar a presença do nível da cabeçalho `<h1>` sem categorizar outros assuntos da página em níveis de cabeçalho. |
| 1.3.6 Presença de mais de 1 cabeçalho | Erro | Verificar a presença de níveis de cabeçalho `<h1>` sendo utilizados de forma repetida. |

---

### Recomendação 1.4 - Ordenar de forma lógica e intuitiva a leitura e tabulação

Deve-se criar o código HTML com uma sequência lógica de leitura para percorrer links, controles de formulários e objetos. Essa sequência é determinada pela ordem em que se encontra no código HTML.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.4.1 O bloco de conteúdo não está antes do bloco de menu no HTML | Aviso | Verificar se a presença do código da página que representa o menu está posicionado depois do código que representa o conteúdo da página HTML. |
| 1.4.3 Presença do atributo TABINDEX | Aviso | Verificar a presença de utilização do atributo 'tabindex' nas páginas HTML. |
| 1.4.6 Presença de número do tabindex menor do que 0 e maior 32767 | Aviso | Verificar a presença do conteúdo -1 do atributo 'tabindex' com o intuito de não influenciar a ordem do código da página, ou verificar se a presença de conteúdo do atributo 'tabindex' está superior a 32767 e inferior a 0. |

---

### Recomendação 1.5 - Fornecer âncoras para ir direto a um bloco de conteúdo

Devem ser fornecidas âncoras, disponíveis na barra de acessibilidade, que apontem para links relevantes presentes na mesma página. Assim, é possível ir ao bloco do conteúdo desejado. Os links devem ser colocados em lugares estratégicos da página, como no início e fim do conteúdo e início e fim do menu. É importante ressaltar que o primeiro link da página deve ser o: 'ir para o conteúdo'.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.5.1 Não foram encontradas âncoras que permitam saltar pelas diferentes seções da página | Erro | Verificar a ausência de links com conteúdo de atributo 'href' que comecem com '#'. |
| 1.5.2 Foram encontradas âncoras que permitem saltar pelas diferentes seções da página, porém algumas não possuem um destino correspondente | Erro | Verificar a presença de links com conteúdo de atributo 'href' que comecem com '#', porém não há o destino da âncora na página HTML. |
| 1.5.4 Não existem atalhos | Erro | Verificar a ausência de tags HTML com atributo 'accesskey' na página. |
| 1.5.9 O primeiro link é uma âncora para o conteúdo da página | Erro | Verificar a presença de link com conteúdo de atributo 'href' que comece com '#', e o destino da âncora seja um conteúdo específico da página HTML. |
| 1.5.11 Presença de atributo ACCESSKEY com conteúdo repetido | Erro | Verificar a presença do atributo 'accesskey' e conteúdo repetido em outros 'accesskeys' da página HTML. |

---

### Recomendação 1.6 - Não utilizar tabelas para diagramação

As tabelas devem ser utilizadas apenas para dados tabulares e não para efeitos de disposição dos elementos da página.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.6.1 Foram utilizadas tabelas | Aviso | Verificar a presença da tag `<table>` na página HTML. |
| 1.6.2 Há formulário construído dentro de tabela | Erro | Verificar a presença da tag `<form>` entre a tag `<table>`. |

---

### Recomendação 1.7 - Separar links adjacentes

Links adjacentes devem ser separados por mais do que simples espaços, para que não fiquem confusos, em especial para usuários que utilizam leitor de tela. Para isso, é recomendado o uso de listas, onde cada elemento dentro da lista é um link. As listas podem ser estilizadas visualmente com CSS para que os itens sejam mostrados da maneira desejada, como um ao lado do outro.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.7.1 Há links adjacentes sem nenhum tipo de separação ou separação por espaços em branco | Erro | Verificar a presença de links dispostos numa forma sequencial sem separação explícita (caracteres especiais) ou separação explícita por espaços em branco. |

---

### Recomendação 1.8 - Dividir as áreas de informação

Áreas de informação devem ser divididas em grupos fáceis de gerenciar. As divisões mais comuns são: 'topo', 'conteúdo', 'menu' e 'rodapé'. Nas páginas internas deve-se manter uma mesma divisão para que o usuário se familiarize mais rapidamente com a estrutura do sítio. É importante destacar, entretanto, que a página inicial pode ter uma divisão diferente das páginas internas, pois ela normalmente contém mais elementos.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.8.3 Ausência de divisão de áreas quando do uso do HTML 5 | Aviso | Verificar a ausência das tags: `<header>`, `<footer>`, `<section>`, `<aside>`, `<nav>` e `<article>`. |

---

### Recomendação 1.9 - Não abrir novas instâncias sem a solicitação do usuário

A decisão de utilizar-se de novas instâncias - por exemplo abas ou janelas - para acesso a páginas, serviços ou qualquer informação, deve ser de escolha do usuário.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 1.9.1 Há link que abre nova página ou aba | Aviso | Verificar a presença de links com atributo 'target' preenchido com '_blank'. |

---

### Recomendação 2.1 - Disponibilizar todas as funções da página via teclado

Todas as funções da página que utilizam linguagens de script (javascript) devem ser programadas, primeiramente, para o uso com o teclado. O foco não deverá estar bloqueado ou fixado em um elemento da página, para que o usuário possa mover-se pelo teclado por todos os elementos. Isso inclui movimentação em janelas modais (abertura de janela de dialogo que bloqueia qualquer interação com a janela principal).

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.1.2 Há funcionalidade que só funciona pelo mouse | Erro | Verificar a presença dos eventos (onmousedown, onmouseup, onmouseover, onmouseout) nas tags HTML e a ausência de evento para permitir a manipulação por teclado. |
| 2.1.6 Presença de evento DBLCLICK ou ONDBCLICK no elemento HTML | Aviso | Verificar a presença do evento 'ondblclick' nas tags HTML. |
| 2.1.8 Presença de eventos associados a elementos não interativos | Erro | Verificar a presença de eventos HTML associados a elementos estáticos da página HTML. Um exemplo é a presença de mudança de contexto no nível de cabeçalho. |

---

### Recomendação 2.2 - Garantir que os objetos programáveis sejam acessíveis

Deve-se garantir que scripts, conteúdos dinâmicos e outros elementos programáveis sejam acessíveis e que seja possível sua execução via navegação.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.2.1 Ausência de NOSCRIPT com presença SCRIPT | Erro | Verificar a ausência do elemento `<NOSCRIPT>` com presença de elemento `<SCRIPT>` na página. |
| 2.2.2 Presença de elemento OBJECT sem o conteúdo alternativo | Erro | Verificar a presença do elemento `<object>` sem texto entre os elementos. Exemplo: `<object> Digite aqui o texto alternativo </object>`. |
| 2.2.3 Presença de elemento EMBED na página HTML | Aviso | Verificar a presença do elemento `<embed>` sem texto entre os elementos. Exemplo: `<embed> Digite aqui o texto alternativo </embed>`. |
| 2.2.4 Presença de elemento APPLET na página HTML | Aviso | Verificar a presença do elemento `<applet>` sem texto entre os elementos. Exemplo: `<applet> Digite aqui o texto alternativo </applet>`. |
| 2.2.6 Presença de elemento SCRIPT sem o elemento NOSCRIPT | Aviso | Verificar a presença do elemento `<script>` sem o elemento `<noscript>` na página. |

---

### Recomendação 2.3 - Não criar páginas com atualização automática periódica

A atualização automática periódica tira do usuário a autonomia em relação à escolha (semelhante a abertura de novas instâncias em navegadores) e pode confundir e desorientar os usuários, especialmente usuários que utilizam leitores de tela.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.3.1 Página que se atualiza automaticamente | Aviso | Verificar a presença do elemento `<meta>` e o atributo 'http-equiv' com o conteúdo 'refresh' ou a presença das funções javascript: setTimeOut e setInterval com a função para carregar a mesma página. |

---

### Recomendação 2.4 - Não utilizar o redirecionamento automático de páginas

Não devem ser utilizadas marcações para redirecionar a uma nova página, porque tira do usuário a autonomia em relação à escolha (semelhante a abertura de novas instâncias em navegadores) e podem confundir e desorientar os usuários, especialmente usuários que utilizam leitores de tela.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.4.1 Há redirecionamento automático | Erro | Verificar a presença do elemento `<meta>` e atributo 'http-equiv' com conteúdo 'refresh' e atributo 'content' ou a presença do elemento `<script>` com a função 'window.location'. |

---

### Recomendação 2.6 - Não incluir situações com intermitência de tela

Não devem ser utilizados efeitos visuais piscantes, intermitentes ou cintilantes. Em pessoas com epilepsia fotosensitiva, o cintilar ou piscar podem desencadear um ataque epilético. A exigência dessa diretriz aplica-se também para a propaganda de terceiros inserida na página.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 2.6.1 Presença do elemento BLINK | Erro | Presença do elemento `<blink>` na página HTML. |
| 2.6.2 Presença do elemento MARQUEE | Erro | Presença do elemento `<marquee>` na página HTML. |
| 2.6.3 Presença do elemento IMG com arquivo GIF com intermitência de tela | Aviso | Presença do elemento `<img>` e atributo 'src' contendo arquivo com extensão 'gif' e o arquivo apresenta movimentação. |

---

### Recomendação 3.1 - Identificar o idioma principal da página

Deve-se identificar o principal idioma utilizado nos documentos e páginas HTML.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.1.1 Não há identificação do idioma principal da página | Erro | Verificar a ausência do atributo 'lang' no elemento `<html>`, quando o elemento `<doctype>` for do tipo Strict, Transitional, Frameset, linguagem HTML 5, ou verificar a não presença do atributo 'xml:lang', quando o elemento `<doctype>` for do tipo Strict, frameset, XHTML 1.1, transitional. |
| 3.1.3 Presença do elemento HTML, atributo XMLNS, atributo XML:LANG e a ausência do atributo LANG | Aviso | Verificar a presença dos atributos 'xmlns' e 'xml-lang' e a ausência do atributo 'lang'. |

---

### Recomendação 3.2 - Informar a mudança de idioma no conteúdo

Se algum elemento de uma página possuir conteúdo em um idioma diferente do principal, este deverá estar identificado.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.2.1 Presença de atributo LANG nos elementos da página, além da tag HTML | Aviso | Verificar a presença do atributo 'lang' nos elementos da página HTML, não considerando o elemento `<html>`. |

---

### Recomendação 3.3 - Oferecer um título descritivo e informativo à página

O título da página deve ser descritivo e informativo, devendo representar o conteúdo principal da página, já que essa informação será a primeira a ser lida pelo leitor de tela, quando o usuário acessar a página.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.3.1 Não há título para a página, ou está em branco | Erro | Verificar a ausência da tag `<title>` na página HTML, ou verificar a presença do tag `<title>` sem conteúdo de texto para a identificação da página. |

---

### Recomendação 3.5 - Descrever links clara e sucintamente

Deve-se identificar claramente o destino da cada link, informando, inclusive, se o link remete a outro sítio. Além disso, é preciso que o texto do link faça sentido mesmo quando isolado do contexto da página.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.5.2 Link com descrição no formato de URL | Aviso | Presença do elemento `<a>` e descrição do texto em formato de endereço da internet. Lembrar que não importará se o link do texto será igual ou não no atributo 'href'. |
| 3.5.3 Links vazios | Erro | Presença do elemento `<a>` e ausência de texto descritivo. |
| 3.5.4 Link com descrição somente do TITLE | Erro | Presença do elemento `<a>`, atributo 'title' com texto descritivo e ausência de texto descritivo na estrutura principal do link. |
| 3.5.5 Links que são imagens sem descrição | Erro | Presença do elemento `<a>` e dentro o elemento `<img>` sem conteúdo descritivo no atributo 'alt'. |
| 3.5.6 Links do tipo 'clique aqui', 'leia mais', etc | Erro | Presença do elemento `<a>` e de texto descritivo com as palavras exatas ou palavras começando no texto do inicio do link: 'clique aqui', 'leia mais', 'veja aqui', 'veja mais', 'veja aqui', 'clique', 'acesse aqui', 'clique para acessar', 'aqui'. |
| 3.5.10 Links com descrições diferentes que remetem ao mesmo local | Aviso | Presença de elementos `<a>` com textos descritivos diferentes, porém os conteúdos dos href's remetem para o mesmo link. |
| 3.5.11 Links com a mesma descrição que remetem a locais diferentes | Erro | Presença de elementos `<a>` com textos descritivos iguais, porém os conteúdos dos href's remetem para links diferentes. |
| 3.5.12 Links que são lidos duas ou mais vezes | Erro | Presença do elemento `<a>` com o mesmo conteúdo no atributo title e no texto descritivo. |
| 3.5.13 Links com descrição muito longa | Aviso | Presença do elemento `<a>` com conteúdo do texto descrito com quantidade de caracteres acima de 2000. |
| 3.5.14 Links que remetem a páginas indisponíveis/inexistentes | Erro | Presença do elemento `<a>` e o conteúdo do atributo 'href' direciona para páginas de erros: 404, 405, 503 e outros. |
| 3.5.15 Links que remetem a páginas indisponíveis/inexistentes | Aviso | Presença do elemento `<a>` e o conteúdo do atributo 'href' direciona para páginas que contenham os protocolos 'https, file e ftp' ou 'URL's' mal formatadas. |

---

### Recomendação 3.6 - Fornecer alternativa em texto para as imagens do sítio

Deve ser fornecida uma descrição para as imagens da página.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.6.1 Imagens sem a declaração do atributo ALT | Erro | Presença de elementos `<img>` e ausência do atributo 'alt'. |
| 3.6.2 Imagens com conteúdo sem descrição | Erro | Presença de elementos `<img>` e ausência de conteúdo descritivo do atributo 'alt'. |
| 3.6.3 Imagens com descrição igual ao nome do arquivo | Erro | Presença de elementos `<img>` e atributo 'alt' com conteúdo descrito com o nome do arquivo de referência da imagem. |
| 3.6.4 Imagens com descrições comuns | Erro | Presença de elementos `<img>` e atributo 'alt' com conteúdo descrito contendo expressões: 'figura', 'imagem', 'alt', conteúdo em branco e outros. |
| 3.6.7 Imagens diferentes com a mesma descrição | Aviso | Presença de elementos `<img>` com o mesmo atributo 'src', no entanto, o conteúdo do atributo 'alt' não é o mesmo de cada imagem. |
| 3.6.8 Imagens com dupla descrição | Erro | Presença de elementos `<img>` com o mesmo conteúdo descrito no atributo 'title' e no atributo 'alt'. |

---

### Recomendação 3.7 - Utilizar mapas de imagem de forma acessível

Um mapa de imagens é uma imagem dividida em áreas selecionáveis. Cada área é um link para outra página Web ou outra seção da página atual.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.7.1 Mapa de imagem sem descrição ou alternativa em texto | Erro | Presença do elemento `<img>` com atributo 'usemap' e ausência de conteúdo descritivo no atributo 'alt', ou presença do elemento `<area>` e ausência de conteúdo descritivo no atributo 'alt'. |

---

### Recomendação 3.9 - Em tabelas, utilizar títulos e resumos de forma apropriada

O título da tabela deve ser definido e localizado no primeiro elemento da tabela. Em casos de tabelas extensas, deve ser fornecido um resumo dos dados.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.9.1 Tabelas sem título e resumo | Aviso | Presença do elemento `<table>` e ausência do atributo 'summary' ou ausência do elemento `<caption>`. |

---

### Recomendação 3.10 - Associar células de dados às células de cabeçalho

Em tabelas de dados simples, o uso apropriado dos cabeçalhos e das colunas para as células de dados.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.10.1 Tabelas sem células associadas | Erro | Presença do elemento `<table>` e ausência dos elementos: `<thead>`, `<tbody>`, ou a presença do elemento `<table>` e ausência dos atributos: 'id', 'headers', 'scope', 'axis' nos elementos `<td>` e `<th>`. |

---

### Recomendação 3.11 - Garantir a leitura e compreensão das informações

O texto de um sítio deve ser de fácil leitura e compreensão, não exigindo do usuário um nível de instrução avançado. Quando o texto exigir uma capacidade de leitura mais avançada, devem ser disponibilizadas informações suplementares que expliquem ou ilustrem o conteúdo principal.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.11.2 Presença de parágrafos justificados | Erro | Presença de elementos `<p>` com conteúdo 'justify' no atributo 'align'. |
| 3.11.3 Presença de textos justificados através de folhas de estilo | Erro | Presença de elementos `<p>` e propriedade CSS text-align com conteúdo 'justify'. Deverá ser avaliado o CSS externo, interno e in-line. |

---

### Recomendação 3.12 - Disponibilizar uma explicação para siglas, abreviaturas e palavras incomuns

Recomenda-se que na primeira ocorrência de siglas, abreviaturas ou palavras incomuns (ambíguas, desconhecidas ou utilizadas de forma muito específica), deve ser disponibilizada sua explicação ou forma completa.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 3.12.1 Siglas marcadas e sem explicação | Erro | Presença dos elementos `<abbr>` ou `<acronym>` e ausência do atributo 'title' para descrever a sigla. |

---

### Recomendação 4.1 - Oferecer contraste mínimo entre plano de fundo e primeiro plano

As cores do plano de fundo e do primeiro plano deverão ser suficientemente contrastantes para que possam ser visualizadas, também, por pessoas com baixa visão, com cromodeficiências ou que utilizam monitores de vídeo monocromático.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 4.1.2 Foram localizados combinações de cor cuja relação de contraste é inferior 4,5:1 | Aviso | Verificar em cada elemento HTML a presença das propriedades color, background, background-color e bgcolor, e realizar cálculo de luminosidade para determinar relação é inferior 4,5:1. |

---

### Recomendação 4.4 - Possibilitar que o elemento com foco seja visualmente evidente

A área que recebe o foco pelo teclado deve ser claramente marcada, devendo a área de seleção ser passível de ser clicada.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 4.4.1 Ausência de destaque do foco do elemento ativo | Erro | Verificar a ausência de destaque nos elementos HTML. Para verificação, analisar a ausência de utilização da propriedade 'border' dentro dos seletores CSS. |

---

### Recomendação 5.1 - Fornecer alternativa para vídeo

Deve haver uma alternativa sonora ou textual para vídeos que não incluem faixas de áudio.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.1.1 Presença de vídeo na página | Aviso | Presença do elemento `<embed>` ou `<video>` com atributos 'src' direcionados para arquivo de vídeo ou local de execução de vídeo. |

---

### Recomendação 5.2 - Fornecer alternativa para áudio

Áudio gravado deve possuir uma transcrição descritiva. Além de essencial para pessoas com deficiência auditiva, a alternativa em texto também é importante para usuários que não possuem equipamento de som, que desejam apenas realizar a leitura do material ou não dispõem de tempo para ouvir um arquivo multimídia. Neste caso, também é desejável a alternativa em Libras.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.2.1 Presença de áudio na página | Aviso | Presença do elemento `<embed>` ou `<audio>` com atributos 'src' direcionados para arquivo de audio ou local de execução de áudio. |

---

### Recomendação 5.3 - Oferecer audiodescrição para vídeo pré-gravado

Vídeos que transmitem conteúdo visual que não está disponível na faixa de áudio devem possuir uma audiodescrição. A audiodescrição consiste na descrição clara e objetiva de todas as informações apresentadas de forma visual e que não fazem parte dos diálogos. Essas descrições são apresentadas nos espaços entre os diálogos e nas pausas entre as informações sonoras.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.3.1 Presença de vídeo na página | Aviso | Presença do elemento `<embed>` ou `<video>` com atributos 'src' direcionados para arquivo de vídeo ou local de execução de vídeo. |

---

### Recomendação 5.4 - Fornecer controle de áudio para som

Deve ser fornecido um mecanismo para parar, pausar, silenciar ou ajustar o volume de qualquer som que se reproduza na página.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 5.4.1 Presença de áudio na página | Aviso | Presença do elemento `<embed>` ou `<audio>` com atributos 'src' direcionados para arquivo de áudio ou local de execução de áudio. |

---

### Recomendação 6.1 - Fornecer alternativa em texto para os botões de imagem de formulários

Ao serem utilizados botões do tipo imagem, que servem para o mesmo propósito do botão 'submit', deve ser fornecida uma descrição textual para o botão. Para outros tipos de botões é necessário substituir o botão pela imagem que se deseja utilizar através do CSS e aplicar o texto descrito no atributo 'value'.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.1.1 Botão sem descrição | Erro | Presença do elemento `<input>` com o conteúdo do atributo 'type' igual a 'image' e ausência de conteúdo no atributo 'alt' ou ausência do 'alt'. Presença do elemento `<input>` com os conteúdos: 'button', 'reset', ou 'submit' e ausência de conteúdo no atributo 'value' ou ausência do atributo 'value'. |

---

### Recomendação 6.2 - Associar etiquetas aos seus campos

As etiquetas de texto devem estar associadas aos seus campos correspondentes no formulário.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.2.1 Campo sem label associado | Erro | Presença do elemento `<input>` e ausência de elemento `<label>` com atributo 'for' referenciado ao atributo 'id' do `<input>`, ou presença de elemento `<input>` sem estar dentro de elemento `<label>`. |

---

### Recomendação 6.3 - Estabelecer uma lógica de navegação

Os elementos do formulário devem ser distribuídos corretamente através do código HTML, criando, assim, uma sequência lógica de navegação.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.3.1 Presença do elemento FORM e atributo TABINDEX | Aviso | Presença do elemento `<form>` e atributo 'tabindex' nos elementos dentro do `<form>`. |

---

### Recomendação 6.4 - Não provocar automaticamente alteração no contexto

A área que recebe o foco pelo teclado deve ser claramente marcada, devendo a área de seleção ser passível de ser clicada.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.4.1 Presença de eventos automáticos (onchange, onblur, etc) | Aviso | Presença do elemento `<form>` e nos seus elementos internos a utilização de eventos que causam mudança de contexto. |
| 6.4.2 Presença de eventos complexos (ondblclick, ondrag, etc) | Aviso | Presença do elemento `<form>` e nos seus elementos internos a utilização de eventos complexos sem aviso. |

---

### Recomendação 6.7 - Agrupar campos de formulário

É recomendado que os campos com informações relacionadas sejam agrupadas utilizando elementos com esta finalidade na própria linguagem HTML, principalmente em formulários longos. O agrupamento deverá ser feito de maneira lógica, explicitando claramente o propósito ou natureza dos agrupamentos.

| Critério | Tipo | Como avaliar |
|----------|------|--------------|
| 6.7.1 Existência de formulário e inexistência de agrupamento de campos | Aviso | Verificar a presença do elemento `<form>` e ausência do elemento `<fieldset>`. |
| 6.7.2 Uso de campo de seleção sem agrupamento | Aviso | Verificar a presença do elemento `<form>` e dentro desse o elemento `<select>` e ausência do elemento `<optgroup>`. |