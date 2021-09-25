//Usando a notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto (nome, preco, desconto){
    this.nome = nome
    this.getProduComDesconto = () => {
        return preco * (1 - desconto)
    }
}
console.log('---------')

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('NoteBook', 2998.99, 0.25)

console.log(p1.getProduComDesconto())
console.log(p1.getProduComDesconto())

//funcao factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - this.faltas)
        }
    }
}

console.log('---------')
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())
console.log('---------')

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma funcao famoza que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSN"}')
console.log(fromJSON)