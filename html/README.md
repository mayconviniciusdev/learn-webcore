>📚 **Guia sobre HTML5!**
>
>Este diretório `/html` contém materiais, exemplos e explicações sobre **HTML5**.

### 🌐 O que é HTML?
---
- HyperText Markup Language é a linguagem de marcação usada para criar e estruturar a base de uma página web. Tudo o que aparece na tela começa com o HTML, que organiza conteúdos como textos, imagens, links, tabelas, formulários e diversos outros elementos da página.
- Para inserir comentários no HTML, use a seguinte sintaxe: `<!-- Este é um comentário -->`

### 🏷️ O que é TAG?
---
**Tag** é um marcador usado no HTML para definir e estruturar elementos da página, como textos, imagens, links, etc. As tags geralmente vêm em pares, uma de abertura (`<tag>`) e outra de fechamento (`</tag>`), envolvendo o conteúdo que elas controlam. Algumas tags são auto fechadas, como: `<img/>`.

#### **TAG - Semânticas=**
- `<header>`: cabeçalho da página ou seção.
- `<footer>`: rodapé da página ou seção.
- `<main>`: conteúdo principal da página.
- `<section>`: seção genérica de conteúdo.
- `<article>`: conteúdo independente (post, notícia).
- `<aside>`: conteúdo complementar (barra lateral).
- `<nav>`: navegação de links.
- `<address>`: informação de contato.
- `<details>`: área expansível de detalhes.
- `<summary>`: cabeçalho de `<details>`.
- `<dialog>`: caixa de diálogo/modal.

#### **TAG de estrutura=**
- `<html>`: elemento raiz que engloba todo o documento HTML.
- `<head>`: contém metadados e configurações do documento (não aparece na página).
- `<body>`: contém todo o conteúdo visível.
- `<base>`: define a URL base para todos os links e recursos relativos.
- `<link>`: conecta arquivos externos (CSS, ícones, etc.).
- `<meta>`: define metadados (charset, autor, viewport, SEO).
- `<style>`: contém a estilização do HTML.
- `<title>`: define o título exibido na aba do navegador.

#### **TAG de texto=**
- `<h1>` a `<h6>`: cabeçalhos (títulos e subtítulos), do mais importante ao menos importante.
- `<p>`: parágrafo de texto.
- `<hr>`: linha horizontal (separa conteúdos).
- `<br>`: quebra de linha.
- `<pre>`: texto pré-formatado (mantém espaços e quebras).
- `<blockquote>`: citação em bloco.
- `<ol>`: lista ordenada (numerada).
- `<ul>`: lista não ordenada (com marcadores).
- `<li>`: item de lista (funciona dentro de `<ol>` ou `<ul>`).
- `<dl>`: lista de definição.
- `<dt>`: termo da definição.
- `<dd>`: descrição de um termo.
- `<figure>`: agrupa conteúdo visual (imagem, gráfico).
- `<figcaption>`: legenda para `<figure>`.
- `<div>`: container genérico de bloco.
- `<span>`: container genérico inline.

#### **TAG – Formatação de texto=**
- `<a>`: link para outra página, âncora ou recurso.
- `<em>`: ênfase (normalmente itálico).
- `<strong>`: ênfase forte (normalmente negrito).
- `<small>`: texto menor.
- `<mark>`: texto marcado (destacado).
- `<abbr>`: abreviação com significado (tooltip com `title`).
- `<dfn>`: definição de termo.
- `<time>`: data ou hora, podendo ter atributo `datetime`.
- `<code>`: trecho de código.
- `<var>`: variável.
- `<samp>`: saída de um programa.
- `<kbd>`: entrada do teclado.
- `<sub>`: texto subscrito (abaixo).
- `<sup>`: texto sobrescrito (acima).
- `<i>`: texto em itálico (ou com ênfase alternativa).
- `<b>`: texto em negrito.
- `<u>`: texto sublinhado.
- `<s>`: texto tachado (riscado).
- `<q>`: citação curta (inline).
- `<cite>`: referência a uma obra ou autor.
- `<data>`: associa conteúdo a um valor de dados.
- `<bdi>`: isola texto para não herdar direção (RTL/LTR).
- `<bdo>`: sobrescreve direção do texto.
- `<wbr>`: sugere ponto de quebra de linha.

#### **TAG de multimídia=**
- `<img>`: exibe imagens.
- `<audio>`: reproduz áudio.
- `<video>`: reproduz vídeo.
- `<source>`: define arquivos de mídia para `<audio>` ou `<video>`.
- `<track>`: legendas para vídeos.
- `<map>`: define mapa de imagem com áreas clicáveis.
- `<area>`: define uma área clicável em `<map>`.
- `<canvas>`: área para desenho com JavaScript.
- `<svg>`: gráficos vetoriais escaláveis.

#### **TAG de conteúdo incorporado=**
- `<iframe>`:insere outra página HTML.
- `<embed>`: insere conteúdo externo (como PDF).
- `<object>`: insere objetos externos (mídia, apps).
- `<param>`: define parâmetros para `<object>`.
- `<picture>`: container para imagens responsivas.

#### **TAG de tabelas=**
- `<table>`: cria uma tabela.
- `<caption>`: legenda/título da tabela.
- `<thead>`: cabeçalho da tabela.
- `<tbody>`: corpo da tabela.
- `<tfoot>`: rodapé da tabela.
- `<tr>`: linha da tabela.
- `<th>`: célula de cabeçalho.
- `<td>`: célula de dados.
- `<col>`: define coluna na tabela.
- `<colgroup>`: agrupa colunas.

#### **TAG de formulários=**
- `<form>`: container para formulário.
- `<label>`: rótulo para campo de formulário.
- `<input>`: campo de entrada de dados.
- `<button>`: botão clicável.
- `<select>`: lista suspensa.
- `<optgroup>`: agrupa opções dentro de `<select>`.
- `<option>`: opção de lista suspensa.
- `<textarea>`: área de texto multilinha.
- `<fieldset>`: agrupa campos relacionados.
- `<legend>`: título para `<fieldset>`.
- `<datalist>`: lista de sugestões para `<input>`.
- `<output>`: exibe resultado de cálculo.
- `<meter>`: medidor (ex.: progresso, nível).
- `<progress>`: barra de progresso.

#### **TAG - Scripts=**
- `<script>`: código JavaScript.
- `<noscript>`: conteúdo alternativo se o JS estiver desativado.
- `<template>`: modelo de conteúdo oculto para uso com JS.
- `<slot>`: ponto de inserção de conteúdo em Web Components.

### 🏷️ O que são atributos no HTML?
---
Atributos são informações adicionais que você coloca dentro das tags HTML para configurar ou modificar o comportamento e a aparência de um elemento. Eles sempre aparecem dentro da tag de abertura. Abaixo, alguns atributos listados: 

- `accept`: define os tipos de arquivos aceitos em um `<input type="file">`.
- `accept-charset`: especifica o conjunto de caracteres para um formulário.
- `accesskey`: define uma tecla de atalho para focar ou ativar o elemento.
- `action`: URL para onde os dados do formulário são enviados (`<form>`).
- `align`: (obsoleto), mas define alinhamento de elementos como imagens e tabelas.
- `alt`: texto alternativo para imagens.
- `async`: indica que um script deve ser executado de forma assíncrona (`<script>`).
- `autocomplete`: ativa ou desativa preenchimento automático em formulários.
- `autofocus`: foca automaticamente o elemento ao carregar a página.
- `autoplay`: reproduz automaticamente áudio ou vídeo ao carregar.
- `charset`: define o conjunto de caracteres do documento ou script.
- `checked`: indica que uma caixa de seleção ou botão rádio está selecionado por padrão.
- `cite`: URL de uma fonte ou referência para citações.
- `class`: classes CSS atribuídas ao elemento.
- `cols`: define o número de colunas em uma área de texto `<textarea>`.
- `colspan`: quantidade de colunas que uma célula da tabela deve ocupar.
- `content`: define o conteúdo para metadados (`<meta>`).
- `contenteditable`: permite que o conteúdo do elemento seja editável pelo usuário.
- `controls`: exibe controles para áudio e vídeo.
- `coords`: define as coordenadas para áreas clicáveis em imagens (`<area>`).
- `data-*`: atributos personalizados para armazenar dados privados para scripts.
- `datetime`: data e hora em formato válido para elementos `<time>`.
- `default`: define um item padrão em elementos como `<track>`.
- `defer`: indica que o script deve ser executado após o carregamento da página (`<script>`).
- `dir`: define a direção do texto: `ltr` (esquerda para direita) ou `rtl` (direita para esquerda).
- `dirname`: envia a direção do texto do campo em formulários.
- `disabled`: desabilita o elemento, impedindo interação.
- `download`: indica que o link deve baixar o arquivo em vez de abrir.
- `draggable`: indica se o elemento pode ser arrastado.
- `dropzone`: indica o tipo de operação permitida para soltura de arquivos.
- `enctype`: especifica o tipo de codificação usado ao enviar o formulário.
- `for`: associa um `<label>` a um elemento de formulário pelo ID.
- `form`: associa o elemento a um formulário específico pelo ID.
- `formaction`: define a URL para envio do formulário para um botão ou input específico.
- `formenctype`: define o tipo de codificação para um botão ou input específico.
- `formmethod`: define o método HTTP (GET, POST) para envio de formulário específico.
- `formnovalidate`: indica que um formulário não deve ser validado ao ser enviado.
- `formtarget`: define onde abrir o resultado do envio do formulário.
- `height`: define a altura de elementos como `<img>`, `<video>`, `<canvas>`.
- `hidden`: oculta o elemento da página.
- `high`: valor alto para elementos `<meter>`.
- `href`: URL de destino para links e recursos externos.
- `hreflang`: define o idioma do recurso referenciado por um link.
- `http-equiv`: simula cabeçalhos HTTP para metadados.
- `id`: identificador único do elemento.
- `inputmode`: sugere o tipo de teclado para dispositivos móveis.
- `ismap`: indica que a imagem é um mapa clicável do lado do servidor.
- `kind`: define o tipo de texto em legendas e faixas de mídia (`<track>`).
- `label`: rótulo para opções dentro de listas ou faixas de mídia.
- `lang`: define o idioma do conteúdo do elemento.
- `list`: associa um `<input>` a uma `<datalist>`.
- `loop`: faz um áudio ou vídeo repetir automaticamente.
- `low`: valor baixo para elementos `<meter>`.
- `max`: valor máximo para campos numéricos ou de data.
- `maxlength`: número máximo de caracteres para campos de texto.
- `media`: especifica o tipo de mídia para links ou estilos (`screen`, `print`, etc.).
- `method`: método HTTP para envio de formulários (`GET`, `POST`).
- `min`: valor mínimo para campos numéricos ou de data.
- `multiple`: permite seleção múltipla em campos `<select>` ou upload de arquivos.
- `muted`: silencia áudio ou vídeo por padrão.
- `name`: nome do elemento, usado em formulários.
- `novalidate`: desativa a validação de formulário ao enviar.
- `open`: indica que um elemento `<details>` está aberto.
- `optimum`: valor ótimo para elementos `<meter>`.
- `pattern`: expressão regular para validar o valor de um campo de formulário.
- `placeholder`: texto de dica exibido dentro de campos de formulário.
- `poster`: imagem exibida antes do vídeo iniciar.
- `preload`: instruções para pré-carregamento de mídia (`auto`, `metadata`, `none`).
- `readonly`: torna um campo de formulário somente leitura.
- `rel`: relação entre o documento atual e o recurso linkado.
- `required`: indica que o campo deve ser preenchido antes do envio do formulário.
- `reversed`: inverte a ordem dos itens em uma lista ordenada.
- `rows`: número de linhas visíveis em um `<textarea>`.
- `rowspan`: número de linhas que uma célula de tabela deve ocupar.
- `sandbox`: aplica restrições de segurança para `<iframe>`.
- `scope`: define a qual grupo uma célula de tabela pertence (`row`, `col`, etc.).
- `selected`: indica que uma opção em `<select>` está pré-selecionada.
- `shape`: forma da área clicável em mapas de imagem.
- `size`: número de opções visíveis em `<select>` ou largura de campos de texto.
- `sizes`: define os tamanhos possíveis para imagens responsivas.
- `span`: quantidade de colunas que uma célula de tabela deve abranger.
- `spellcheck`: ativa ou desativa a verificação ortográfica.
- `src`: caminho para recurso externo (imagem, script, áudio, vídeo).
- `srcdoc`: conteúdo HTML inline para um `<iframe>`.
- `srclang`: define o idioma da legenda ou faixa de mídia.
- `start`: define o número inicial para listas ordenadas.
- `step`: intervalo permitido para valores numéricos ou data.
- `style`: aplica estilos CSS inline ao elemento.
- `tabindex`: controla a ordem de tabulação para navegação via teclado.
- `target`: onde abrir o link ou formulário (`_blank`, `_self`, `_parent`, `_top`).
- `title`: texto que aparece como tooltip ao passar o mouse.
- `translate`: indica se o conteúdo deve ser traduzido.
- `type`: tipo do elemento, especialmente em `<input>`, `<button>`, `<script>`.
- `usemap`: associa uma imagem a um mapa clicável.
- `value`: valor do elemento, especialmente em formulários.
- `width`: define a largura de elementos como imagens e vídeos.
- `wrap`: define como o texto deve ser quebrado em `<textarea>`.

### 📏 O que é indentação?
---
Indentação é o ato de aplicar espaços ou tabulações no início de linhas do código para organizar visualmente a estrutura do documento. No HTML, a indentação é usada para facilitar a leitura e compreensão do código, mostrar a hierarquia entre elementos (quem está dentro de quem) e ajudar na manutenção e depuração do código.