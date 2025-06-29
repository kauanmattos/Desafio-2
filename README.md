# Desafio 2 - Validador de Produto

Este é um projeto simples criado durante meu curso de JavaScript. A aplicação permite ao usuário cadastrar um produto, e com base no valor informado, o sistema irá aprovar ou negar automaticamente a entrada do produto.

## 💡 Como funciona?

Ao abrir a página, o usuário será solicitado a inserir o valor de um produto. Com base nesse valor:

- Se o valor for **maior ou igual a $20**, o produto será **"Approved"** (Aprovado).
- Se o valor for **menor que $20**, o produto será **"Denied"** (Negado).

O resultado é exibido diretamente na tela, em tempo real.

## 🧪 Tecnologias utilizadas

- HTML5
- JavaScript puro (Vanilla JS)
- CSS (opcional, apenas se desejar estilizar)

## 🚀 Como usar?

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Digite o valor do produto quando solicitado.
4. Veja o resultado sendo exibido logo abaixo do título da página.

## 🧠 Lógica do JavaScript

```javascript
let productValue = Number(prompt('Enter the product value'));

if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'Approved';
} else {
    document.getElementById('result').innerHTML = 'Denied';
}
