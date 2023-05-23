function criarProduto(nome, preco, desconto = 0.15) {
  return {
    nome,
    preco: preco - desconto
  }
}

console.log(criarProduto('Adidas', 300, 30));