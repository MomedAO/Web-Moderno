/**
 * 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores. 
 * */

const restoDaDivisao = (x, y) => {
  console.log(`Divisao de ${x} por ${y} = ${x / y}`)
  console.log(`Resto da divisao de ${x} por ${y} = ${x % y}`)
}
restoDaDivisao(9, 3)