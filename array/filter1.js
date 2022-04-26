const produto = [
  { nom: 'Notebook', preco: 2499, fragil: true },
  { nom: 'iPad Pro', preco: 4199, fragil: true },
  { nom: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nom: 'Copo de Plastico', preco: 18.99, fragil: true }
]

console.log(produto.filter(function (p) {
  return false
}))

const caro = prod => prod.preco >= 500
const fragil = prod => prod.fragil

console.log(produto.filter(caro).filter(fragil))