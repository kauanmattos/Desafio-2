// document.getElementById('result') = buscamos o elemento pela perm_identity

// .innerHTML = propriedade usada para obter ou definir o conteúdo HTML de um elemento

// 'Approved' = nomeamos como aprovado 

let productValue = Number (prompt('Enter the product value'))

if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'Approved'
} 
else {
    document.getElementById('result').innerHTML = 'Denied'
}