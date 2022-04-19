// notacao literal

const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, ' & ', typeof new Object);
const obj2 = new Object
console.log(obj2);

// Funcao construtora
function Produto(nome, preco, desconto) {
  this.nome = nome
  this.getPrdutoComDesconto = () => {
    return preco * (1 - desconto)
  }
}

const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Notebook', 2998.99, 0.25)
console.log(prod1.getPrdutoComDesconto(), prod2.getPrdutoComDesconto());

// Funcao factory e' uma funcao que retorna um objecto
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

// uma funcao que retorna Objecto....
const fromJSON = JSON.parse('{"informacao": "Sou um JSON"}')
console.log(fromJSON.informacao);