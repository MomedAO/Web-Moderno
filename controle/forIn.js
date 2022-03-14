const notas = [7.6, 9.2, 8.1, 7.8, 6.9];

for (const i in notas) {
  console.log(`O aluno numero ${i} tem nota = ${notas[i]}`);
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64
}

for (const atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}