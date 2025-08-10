### 🎨 O que é CSS?
---
**Cascading Style Sheets** é a *linguagem de estilos* responsável por definir a aparência visual do HTML. Com o CSS, é possível controlar cores, fontes, tamanhos, espaçamentos, posicionamento e até animações simples.

### 📌 Formas de usar CSS no HTML:
---
Existem **3 formas de aplicar** *CSS* em uma página HTML:
1. **Inline**, adicionando o estilo diretamente na *tag de abertura*, usando o atributo `style`, com a sintaxe: `style="color: blue;"`.
Interno
2. **Interno**, todo o CSS fica dentro da própria página HTML (no `<head>`) e dentro da tag `<style>`. 
    - Exemplo: 
    ````
    <head>
     <style>
       p { color: blue; }
     </style>
   </head>
3. **Externo**, todo o CSS é escrito em um arquivo separado e vinculado ao HTML (no `<head>`) usando a tag `<link>` e com isso, você pode estilizar elementos usando atributos como `class` ou `id` nas tags HTML. Sua sintaxe para linkar o CSS externo é: `<link rel="stylesheet" href="caminho/style.css">`

### 💬 Comentários no CSS:
---
Para inserir comentários no CSS, utilize: `/* Este é um comentário em CSS */`