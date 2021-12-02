/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/
function mult(num1, num2){
    return Math.imul(num1, num2)
}
console.log(mult(5, 5))
console.log(mult(0, 7))

const multiplicar = (num1, num2) => Math.imul(num1, num2)

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))