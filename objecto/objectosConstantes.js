const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)//nao aceita modificacoes depois de ser congelado

pessoa.nome = 'Maria'
pessoa.end = 'Rua Frankstean'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nom: 'Joao'})
console.log(pessoaConstante)