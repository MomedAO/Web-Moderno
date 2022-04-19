// Colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Momed',
    idade: 25,
    endereco: {
      avenida: '1 de Junho',
      numero: 1345
    },
  },
  contutores: [{
    nome: 'Wilson',
    idade: 22
  }, {
    nome: 'Hilario',
    idade: 42
  }],
  calcularValorSeguro: function () {
    //...
  }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['avenida'] = 'Av Gigante'
console.log(carro);

delete carro.contutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro);
console.log(carro.contutores);