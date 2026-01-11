> 📚 **Guia sobre JavaScript!**
>
> Este README apresenta os conceitos fundamentais do JavaScript, desde os primeiros passos até condicionais, manipulação básica de dados e boas práticas.

### 🌐 O que é JAVASCRIPT?
- **JavaScript (JS)** é uma linguagem de programação usada principalmente para criar interatividade em páginas web. Ele pode ser executado tanto no navegador quanto no servidor (com Node.js) e atualmente, é uma das linguagens mais utilizadas no desenvolvimento web.
- Existem duas formas comuns de exibir mensagens, são elas: `alert("Olá Mundo")` ou `console.log("Olá Mundo")`.
- Para inserir comentários em arquivos JS, é usando: `/* Comentário em múltiplas linhas */` ou `// Comentário em uma linha`.
---

### 🔹 Variáveis e Tipos de Dados
**Variáveis** são espaços na memória utilizados para armazenar valores que podem ser usados e alterados. Já os *Tipos de dados* definem o formato desses valores, sendo identificados automaticamente pelo JavaScript.

📦 ***Formas de declarar Variáveis=***
- `let` → escopo de bloco, pode ser alterada e é a forma mais recomendada.
- `var` → escopo de função, pode causar problemas de escopo (não recomendado).
- `const` → escopo de bloco, não pode ser reatribuída. Ideal para valores fixos.

🗂️ ***Tipos de Dados=***
- Number: `let idade = 25`.
- String: `let nome = 'Maycon Vinícius'`.
- Template Strings: ``let nomeIdade = `${nome} tem ${idade} anos`;``
- Boolean: `let logado = false`.
- Array: `let lista = ["item 1", "item 2"]`.
- Object: `let nomeCompleto = {nome: "Maycon", sobrenome: "Vinicius"}`.
---

### 🔹 O que são Estruturas Condicionais?
**Condicionais** são estruturas usadas para tomar decisões. Elas permitem que o código execute ações diferentes dependendo de uma condição ser verdadeira ou falsa. Em outras palavras, são comandos que dizem: **SE algo acontecer → faça isso, SENÃO → faça outra coisa**.

🧮 ***Operadores usados em condicionais=***
- `>` maior que
- `<` menor que
- `>=` maior ou igual
- `<=` menor ou igual
- `==` compara apenas o valor
- `===` compara valor e tipo (recomendado)
- `!=`  somente valor diferente
- `!==` valor ou tipo diferente
- `&&` todas as condições devem ser satisfeitas
- `||` pelo menos uma condição deve ser satisfeita
- `!` inverte o valor lógico

🚦 ***IF/ELSE, ELSE IF, SWITCH e Condicional Ternária=***

```js
O IF/ELSE são usados para executar um bloco de código caso uma condição seja verdadeira ou outra, seja falsa e o ELSE IF é usado quando precisamos testar mais de uma condição, uma após a outra, até encontrar a verdadeira.

  let idade = 16;
  if (idade >= 18) {console.log("Maior de idade");} 
  else if (idade >= 13) {console.log("Adolescente");} 
  else {console.log("Criança");}
```

```js
A CONDICIONAL TERNÁRIA é uma forma resumida de escrever um IF/ELSE em uma única linha.

  let idade = 18;
  let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";  
  console.log(resultado);
```

```js
O SWITCH é usado quando queremos comparar um único valor com várias possibilidades. Um adendo é o BREAK que impede que o código continue executando os próximos casos.

  let cor = "azul";
    switch (cor) 
    {
      case "vermelho":
        console.log("Cor vermelha");
        break;

      case "azul":
        console.log("Cor azul");
        break;

      case "verde":
        console.log("Cor verde");
        break;

      default:
        console.log("Cor não encontrada");
    }
```
---

### 🔹 O que é uma função?
Uma **função** é um bloco de código reutilizável que pode receber entradas (parâmetros), realizar um processamento e devolver uma saída (retorno).

```js
Função simples (sem parâmetros):

  function gravidade() {
    console.log("A gravidade é:");
    console.log("9.8");
  }
  
  gravidade();
```

```js
Função com parâmetros:

  function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
  }

  nomeCompleto("Maycon", "Vinícius");
```

```js
Função com retorno (return):

  function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
  }

  let resultado = nomeCompleto("Maycon", "Vinícius");
  console.log(resultado);
```

```js
Função com retorno condicional:

  function maiorIdade(idade) {
    if (idade >= 18) {return true;} 
    else {return false;}
  } 

  let idade = 16;
  let verificacao = maiorIdade(idade);

  if (verificacao) {console.log("Maior de idade");} 
  else {console.log("Menor de idade");}
```

```js
Arrow Function:

  const maiorIdade = idade => idade >= 18; ou 
  const maiorIdade = (idade) => {
    return idade >= 18;
  };

  let idade = 16;

  if (maiorIdade(idade)) {console.log("Maior de idade");} 
  else {console.log("Menor de idade");}
```
---

### 🔹 O que é um Array?
Um array é uma lista que armazena vários valores dentro de uma variável.

```js
Array Simples: 

  let frutas = ["Maçã", "Banana", "Uva"];
```

```js
Array Multidimensional: 

  let matriz = [[1, 2, 3], [4, 5, 6]];
  console.log(matriz[0][1]);
```

🛠️ ***Operações básicas com Arrays=***
- Adicionar no início: `lista.unshift("Z");`.
- Adicionar no final: `lista.push("D");`.
- Remover o último: `lista.pop();`.
- Remover o primeiro: `lista.shift();`.
- Ver o tamanho do array: `lista.length;`.
- Ordenar o array: `lista.sort();`.
- Inverter o array: `lista.reverse();`.
---

### 🧱 O que é um Objeto?
Um **objeto** é uma estrutura que permite armazenar propriedades e valores relacionados.

```js
Exemplo: 

  let pessoa = {
    nome: "Maycon",
    idade: 25,
    cidade: "São Paulo"
  };

  console.log(pessoa.nome);
  console.log(pessoa.idade);
```

```js
Função dentro de Objeto usando THIS:

  let pessoa = {
    nome: "Maycon",
    idade: 25,
    apresentar: function () {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
  };

  pessoa.apresentar();
```

```js
Função dentro de Objeto usando Arrow Function

  let pessoa = {
  nome: "Maycon",
  idade: 25,
  apresentar: () => {
    console.log('Maycon, 25 anos!');
  }
};

pessoa.apresentar();
```
---
### 🔁 Estruturas de Repetição (Loops)
Loops permitem executar um bloco de código várias vezes.

```js
Exemplo de Loop FOR:
  
  for (let i = 0; i < 5; i++) 
  {console.log(i);}
```

```js
Existem 3 formas de executar Loop FOR em Arrays:

  1. 
  let frutas = ["Maçã", "Banana", "Uva"];
  for (let i = 0; i < frutas.length; i++) 
  {console.log(frutas[i]);}

  2.
  let frutas = ["Maçã", "Banana", "Uva"];
  for (let fruta of frutas) 
  {console.log(fruta);}

  3. 
  let frutas = ["Maçã", "Banana", "Uva"];
  frutas.forEach(fruta => console.log(fruta));
```

```js
Exemplo de Loop WHILE:

  let contador = 0; 

  while (contador < 3) 
  {console.log(contador);
  contador++;}
```
---

### 🔎 Métodos de Interação com Arrays
Os métodos de **interação com arrays** são funções prontas do JavaScript que permitem percorrer, verificar, filtrar, transformar ou buscar informações dentro de um array sem precisar usar loops manuais.

```js
Exemplos: 

  let numeros = [10, 20, 30, 40]; 

  filter → filtra valores:
  let maiores = numeros.filter(n => n > 20);

  map → transforma valores:
  let dobrados = numeros.map(n => n * 2);

  find → encontra o primeiro valor:
  let encontrado = numeros.find(n => n > 25);

  every → todos atendem à condição?:
  numeros.every(n => n > 5);

  some → algum atende?:
  numeros.some(n => n > 35);

  includes → verifica se existe:
  numeros.includes(20);
```
---

### 🌐 O que é o DOM (Document Object Model)?
O DOM é a representação do HTML como objetos JavaScript e ele permite acessar, alterar e manipular elementos da página.

```js
Selecionando Elementos HTML:

  document.getElementsByClassName("classe");
  document.getElementsByTagName("p");
  document.getElementById("titulo");
  document.querySelector(".classe");
  document.querySelectorAll("p");
```

```js
Eventos de Clique:

  let botao = document.querySelector("button");

  botao.addEventListener("click", () => 
  {alert("Botão clicado!");});
```

```js
Manipulação de Elementos HTML:

  Inserindo conteúdo HTML diretamente dentro do elemento=
    div.innerHTML = "<strong>Texto alterado</strong>";

  Inserindo conteúdo antes e depois=
    div.before("Texto antes");
    div.after("Texto depois");

  Criando e adicionando elementos=
    let div = document.querySelector("div");
    let p = document.createElement("p");
    p.innerText = "Novo parágrafo";
    div.appendChild(p);

  Manipulando CSS com JavaScript=
    div.style.color = "red";
    div.classList.add("ativo");
    div.classList.remove("ativo");
```

```js
Eventos de Teclado:

  document.addEventListener("keydown", (event) => 
  {console.log(event.key);});
```