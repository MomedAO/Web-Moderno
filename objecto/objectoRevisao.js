const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario:
    {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutor: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }
    ],
    calcularValorDeSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutor
delete carro.proprietario.endereco
delete carro.calcularValorDeSeguro
console.log(carro)