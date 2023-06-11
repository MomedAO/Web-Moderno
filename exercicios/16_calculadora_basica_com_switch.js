/**
 * 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
 * como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 * numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
 * 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

const calculadora_basica = (x, operacao, y) => {
  switch (operacao) {
    case '+':
      return x + y
      break
    case '-':
      return x - y
      break
    case '*':
      return x * y
      break
    case '/':
      return x / y
      break
    default:
      return 'Invalido'
  }
}

console.log(calculadora_basica(5, '+', 8))
console.log(calculadora_basica(5, '-', 8))
console.log(calculadora_basica(5, '*', 8))
console.log(calculadora_basica(5, '/', 8))