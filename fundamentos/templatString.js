const nome = 'Rebeca'

const concatenao = 'Ola ' + nome + '!'
const tamplate = `
    Ola
    ${nome}!
`
console.log(concatenao, tamplate);

//Expesoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}`);