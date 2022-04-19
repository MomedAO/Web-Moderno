function MeuObjecto() { }
console.log(MeuObjecto.prototype)

const obj1 = new MeuObjecto
const obj2 = new MeuObjecto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjecto.prototype === obj1.__proto__)

MeuObjecto.prototype.nome = 'Anonimo'
MeuObjecto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome e' ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjecto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo
console.log((new MeuObjecto).__proto__ === MeuObjecto.prototype)
console.log(MeuObjecto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)