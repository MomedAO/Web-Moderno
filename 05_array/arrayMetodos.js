const pilotos = ['Veltel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
pilotos.pop()// remove a ultima posicao no vector
console.log(pilotos)

pilotos.push('Verstappen')// adiciona uma podicao no vector
console.log(pilotos)

pilotos.shift()// remove a primeira possicao do vector
console.log(pilotos)

pilotos.unshift('Hamilto')// adiciona uma posicao na frente do vector
console.log(pilotos)

//

// Apartir da possicao 2 do vector pilotos, o metodo splice vai adicionar o Bottas e o Massa
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//
pilotos.splice(3, 1)
console.log(pilotos)

// o metodo slice traz um vector reduzidido com a quantidade que voce quer expor.
const algunsPilotos1 = pilotos.slice(3)
console.log('Onde?', algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

