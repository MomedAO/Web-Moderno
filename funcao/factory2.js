function criarProduto (nome, preco) {
    return{
        nome,
        preco,
        disconto: 0.1
    }
}

const produto1 = criarProduto('Notebook', 2199.49)
console.log(produto1.nome + ' ' + produto1.preco)
