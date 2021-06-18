const escola = 'Cod3r'

console.log(escola.charAt(4))//Vai levar a letra que sta na posicao 4 comessando de zero
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3))//valor da tabela da Unicode (Ask)
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))//vai do indice 0 ate o indece 3 sem incluir o indice 3

console.log('Escola '.concat(escola).concat('!'))//concatenacao

console.log(escola.replace(3, 'e'))//subistitui o numero ou letra na posicao tres pela letra e

console.log('Ana, Maria, Pedro'.split(','));