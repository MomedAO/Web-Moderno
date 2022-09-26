const pessoa = {
  nome: 'Momed',
  idade: (24 + ' anos'),
  endereco: {
    cidade: 'Nampula',
    bairo: 'Natikiri',
    especifico: 'Salao Nazira'
  }
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: id, endereco: { cidade: c, bairo: b, especifico: e } } = pessoa;
console.log(n, 'tem', id + ', vive ao lado do', e, 'no bairo de', b, 'cidade de', c);

const cursos = {
  nomeCurso: 'Informatica',
  duracao: (4 + 'anos'),
  enderecoCurso: {
    cidadeCurso: 'Quelimane',
    bairoCurso: 'Murropue',
    especificoCurso: 'Universidade Licungo'
  }
};

const { nomeCurso, duracao } = cursos;
console.log('Estou fazendo o curso de', nomeCurso, 'que tem a duraco de', duracao);

const { nomeCurso: nC, duracaoC: { cidadeCurso: cC, bairoCurso: bC, especificoCurso: eC } } = cursos;
