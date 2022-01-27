const pessoa = {
  nome: 'Momed',
  idade: (24 + ' anos'),
  endereco: {
    cidade: 'Nampula',
    bairo: 'Natikire',
    especifico: 'Salao Nazira'
  }
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: id, endereco: { cidade: c, bairo: b, especifico: e } } = pessoa;
console.log(n, 'tem', id + ', vive ao lado do', e, 'no bairo de', b, 'cidade de', c);