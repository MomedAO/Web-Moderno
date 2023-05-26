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
console.log(`No quintal de ${e}, no bairo de ${b}, na cidede de ${c}, vive ${n}, que tem ${id} de idade`)

const cursos = {
  nomeCurso: 'Informatica',
  duracao: (4 + ' anos'),
  enderecoCurso: {
    cidadeCurso: 'Quelimane',
    bairoCurso: 'Murropue',
    especificoCurso: 'Universidade Licungo'
  }
};

const { nomeCurso, duracao } = cursos;
console.log('Estou fazendo o curso de', nomeCurso, 'que tem a duraco de', duracao);

const { nomeCurso: nC, duracao: d, enderecoCurso: { cidadeCurso: cC, bairoCurso: bC, especificoCurso: eC } } = cursos;
console.log(`No curso de ${nC}, lecionado no campus de ${bC}, da ${eC}, cidade de ${cC}, tem um estudante de nome ${n}, que frequentou o curso por ${d}`)