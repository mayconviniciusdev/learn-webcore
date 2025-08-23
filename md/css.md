### 🎨 O que é CSS?
---
**Cascading Style Sheets** é a *linguagem de estilos* responsável por definir a aparência visual do HTML. Com o CSS, é possível controlar cores, fontes, tamanhos, espaçamentos, posicionamento e até animações simples.

### 📌 Formas de usar CSS no HTML:
---
Existem **3 formas de aplicar** *CSS* em uma página HTML:
1. **Inline**, adicionando o estilo diretamente na *tag de abertura*, usando o atributo `style`, com a sintaxe: `style="color: blue;"`.
2. **Interno**, todo o CSS fica dentro da própria página HTML (no `<head>`) e dentro da tag `<style>`. 
    - Exemplo: 
    ````
    <head>
     <style>
       p { color: blue; }
     </style>
   </head>
3. **Externo**, todo o CSS é escrito em um arquivo separado e vinculado ao HTML (no `<head>`) usando a tag `<link>` e com isso, você pode estilizar elementos usando atributos como `class` ou `id` nas tags HTML. Sua sintaxe para linkar o CSS externo é: `<link rel="stylesheet" href="caminho/style.css">`

### 💬 Conceitos Fundamentais e Comentários no CSS:
---
- Para inserir comentários no CSS, utilize: `/* Este é um comentário em CSS */`
- Conceito de Herança: algumas propriedades do CSS (não todas) são herdadas dos elementos-pai para os filhos automaticamente e podem ser controladas com:
  - inherit → força herdar do pai.
  - initial → volta ao valor padrão.
  - unset → remove qualquer herança.

- Conceito de Especificidade: quando múltiplas regras afetam o mesmo elemento, o navegador escolhe a mais específica e a ordem de prioridade (do mais forte para o mais fraco), é:
  1. estilos inline.
  2. IDs.
  3. classes, atributos e pseudo-classes.
  4. elementos e pseudo-elementos.

- Conceito de Cascata: quando duas ou mais regras têm a mesma especificidade, o navegador aplica a que foi escrita por último, ou seja: a mais específica vence a menos específica e em caso de empate, vale a última regra no código.