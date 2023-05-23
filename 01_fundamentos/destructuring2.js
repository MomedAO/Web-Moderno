const [a] = [10];
console.log(a);

const [nome, idade, cidade, bairo, especifico] = ['Momed', '24 anos', 'Nampula', 'Natikiri', 'Salao Nazira'];
console.log(nome, idade, especifico, bairo, cidade);

const [, [, nota]] = [[8, 10], [9, 6, 8]];
console.log(nota);