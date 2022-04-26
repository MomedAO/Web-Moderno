Array.prototype.filter2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produto = [
  { nom: 'Notebook', preco: 2499, fragil: true },
  { nom: 'iPad Pro', preco: 4199, fragil: true },
  { nom: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nom: 'Copo de Plastico', preco: 18.99, fragil: true }
]

const caro = prod => prod.preco >= 500
const fragil = prod => prod.fragil

console.log(produto.filter2(caro).filter2(fragil))