const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

const converteEmObjecto = novoObjeto => JSON.parse(novoObjeto)
const levarPreco = novoPreco => novoPreco.preco

const paraObjecto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const imprimirResultado = carrinho.map(converteEmObjecto).map(levarPreco).sort()
console.log(imprimirResultado)

const resultado = carrinho.map(paraObjecto).map(apenasPreco)
console.log(resultado)