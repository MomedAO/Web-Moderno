console.log(typeof Array)// function
console.log(typeof Array())// object
console.log(typeof new Array)// object
console.log(typeof [])//object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
console.log('Vai dar certo:', aprovados.length, '- Posicoes')

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log('=>', aprovados[3])// undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length, aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()// o metodo sort(), organiza o vetor de forma alfabetica
console.log('Quero ver', aprovados)

delete aprovados[1]// o metodo delete apaga o valor de uma posicao em um vector e nao a possicao
console.log(aprovados[1], aprovados[1] = 'Marcos')
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// o metodo splice(numeroDepoisDe, quantidadeAApagar) elimina o numero cetado de posicoes
aprovados.splice(1, 1)
console.log(aprovados)