/**
 * 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
 * Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

const numero_por_extenso = numero => {
  switch (numero) {
    case 0:
      return 'Zero'
      break
    case 1:
      return 'Um'
      break
    case 2:
      return 'Dois'
      break
    case 3:
      return 'Tres'
      break
    case 4:
      return 'Quatro'
      break
    case 5:
      return 'Cinco'
      break
    case 6:
      return 'Seis'
      break
    case 7:
      return 'Sete'
      break
    case 8:
      return 'Oito'
      break
    case 9:
      return 'Nove'
      break
    case 10:
      return 'Dez'
      break
    default:
      return 'Fora do intervalo'
  }
}

console.log(numero_por_extenso(1))
console.log(numero_por_extenso(3))
console.log(numero_por_extenso(5))
console.log(numero_por_extenso(8))