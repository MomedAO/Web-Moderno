/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os
 * lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne
 * sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair
 * as condições matemáticas de existência de um triângulo).
 */

const tringulo = (lado1, lado2, lado3) => {
  if (lado1 == lado2 && lado3 == lado1 && lado2 == lado3)
    console.log("Triângulo equilatero (todos os lados iguais)")
  else if (lado1 == lado2 && lado3 != lado1 || lado2 == lado3 && lado2 != lado1 || lado3 == lado1 && lado2 != lado3)
    console.log("Triângulo Isósceles (dois lados iguais)")
  else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1)
    console.log("Triângulo Escaleno (todos lados diferentes)")
  else
    console.log("Não e' um triângulo")
}

tringulo(3, 3, 4)
tringulo(3, 3, 3)
tringulo(3, 2, 4)
tringulo(3, 2, 3)
tringulo(3, 4, 5)
