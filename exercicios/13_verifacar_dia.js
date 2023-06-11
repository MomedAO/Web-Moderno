/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

const verificar_dia_util = dia => {
  switch (dia) {
    case 1:
      return "Fim de semana"
      break
    case 2:
      return "Dia útil"
      break
    case 3:
      return "Dia útil"
      break
    case 4:
      return "Dia útil"
      break
    case 5:
      return "Dia útil"
      break
    case 6:
      return "Dia útil"
      break
    case 7:
      return "Final de semana"
      break
    default:
      return "Dia inválido"
  }
}

console.log(verificar_dia_util(3))
console.log(verificar_dia_util(6))
console.log(verificar_dia_util(10))
console.log(verificar_dia_util(7))