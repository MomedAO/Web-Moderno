class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Oi! Meu nome e' ${this.nome}`);
  }
}

const p1 = new Pessoa('Momed')
p1.falar()

const pessoa = nome => {
  return {
    falar: () => console.log(`Ola! Meu nome e' ${nome}`)
  }
}

const p2 = pessoa('Marcos')
p2.falar()