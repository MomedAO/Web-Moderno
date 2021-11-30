const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um elemento
console.log(pilotos)

pilotos.shift()//Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hammilton')//adiciona um elemento na primeira posicao
console.log(pilotos)

// splice - adiciona ou remove elementos

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)