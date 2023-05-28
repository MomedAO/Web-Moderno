/** 
 * 01) Crie uma função que dado dois valores (passados como parâmetros) 
 * mostre no console a soma, subtração, multiplicação e divisão desses valores.
 * */

const valores = (num1, num2) => {
  console.log(`Soma de ${num1} + ${num2} = ${num1 + num2}`)
  console.log(`Subtracao de ${num1} - ${num2} = ${num1 - num2}`)
  console.log(`Multiplicacao de ${num1} * ${num2} = ${num1 * num2}`)
  console.log(`Divisao de ${num1} / ${num2} =  ${num1 / num2}`)
}
valores(4, 3)