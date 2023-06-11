/**
 * 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 
 * 3 e retorne true ou false.
 */

const verificar_divisibilidade_por_3 = numero => {
  if (numero == 0) {
    return undefined
  } else {
    if (numero % 3 == 0) {
      return true
    } else {
      return false
    }
  }
}

console.log(verificar_divisibilidade_por_3(3))
console.log(verificar_divisibilidade_por_3(9))
console.log(verificar_divisibilidade_por_3(21))
console.log(verificar_divisibilidade_por_3(30))