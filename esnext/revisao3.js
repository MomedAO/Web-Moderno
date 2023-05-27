//ES8 Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhoria na notacao de objecto
const nome = "Momed"
const pessoa = {
  nome,
  ola() {
    return "Ola pessoal!"
  }
}
console.log(pessoa.nome, pessoa.ola())

// Classe

class Animal { }
class Cachorro extends Animal {
  falar() {
    return "Au au!"
  }
}

console.log(new Cachorro().falar())