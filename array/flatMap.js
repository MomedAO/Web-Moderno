const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDoTurma = turma => turma.alunos.map(getNotaDoAluno)
const nota1 = escola.map(getNotaDoTurma)

console.log(nota1)

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotaDoTurma)
console.log(nota2)