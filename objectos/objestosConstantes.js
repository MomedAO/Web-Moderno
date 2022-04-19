//
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa = { nome: 'Ana' }
//

Object.freeze(pessoa) //torna o objeto uma constante

pessoa.nome = 'Maria'
pessoa.endereco = ' Rua Abc'
delete pessoa.nome

console.log(pessoa.nome, pessoa.endereco);
console.log(pessoa);

const PessoaConstante = Object.freeze({ nome: 'Joao' })
PessoaConstante.nome = 'Maria'
console.log(PessoaConstante);