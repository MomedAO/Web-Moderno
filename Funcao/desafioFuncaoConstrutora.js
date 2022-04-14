//Desafio funcao construtora
function Pessoa(nome) {
  this.nome = nome
  this.falar = () => console.log(`Oi! Meu nome e' ${this.nome}`);
}

const p1 = new Pessoa('Momed2')
p1.falar()