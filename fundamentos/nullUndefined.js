//Entendendo o Null & Undefined
let valor//nao inicializada
console.log(valor)//Deu undefined

valor = null
console.log(valor)// valor vaiu ser igual a null
// nao tenta acessar o que esta nul porque vai dar console
const produto = {}
console.log(produto.preco)// o resultado e' undefined

produto.preco = 3.50
console.log(produto)

produto.preco = undefined// Evite atribuir undefined para uma variavel
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null// sem preco

console.log(!!produto.preco)
console.log(produto)