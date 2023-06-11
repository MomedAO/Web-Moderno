/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 */

const calcular_factorial = numero => {
  let fatorial = 1
  let i = 2

  while (i <= numero) {
    fatorial = fatorial * i
    i++
  }
  return `Factorial de ${numero} = ${fatorial}`
}

console.log(calcular_factorial(1))
console.log(calcular_factorial(2))
console.log(calcular_factorial(3))