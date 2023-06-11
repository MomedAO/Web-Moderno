/**
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 * Plano Aumento
 * A 10%
 * B 15%
 * C 20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

const calcular_salario = (plano, salario) => {
  switch (plano) {
    case 'A':
    case 'a':
      return salario += salario * 0.10
      break
    case 'B':
    case 'b':
      return salario += salario * 0.15
      break
    case 'C':
    case 'c':
      return salario += salario * 0.20
      break
    default:
      return 'Plano invalido'
  }
}

console.log(calcular_salario('a', 20000))
console.log(calcular_salario('b', 20000))
console.log(calcular_salario('c', 20000))
console.log(calcular_salario('d', 20000))