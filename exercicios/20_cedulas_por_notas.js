/**
 * 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. * 
 */

const calcular_minimo_cedulas = valor_do_saque => {
  let cont100 = 0
  let cont50 = 0
  let cont10 = 0
  let cont5 = 0
  let cont1 = 0

  let sobra_do_saque = valor_do_saque
  let quantidade_de_cedulas = []
  let resultado = ''

  while (sobra_do_saque != 0) {
    if ((sobra_do_saque >= 100) && (sobra_do_saque - 100 >= 0)) {
      cont100++
      sobra_do_saque = sobra_do_saque - 100
    } else if ((sobra_do_saque >= 50) && (sobra_do_saque - 50 >= 0)) {
      cont50++
      sobra_do_saque = sobra_do_saque - 50
    } else if ((sobra_do_saque >= 10) && (sobra_do_saque - 10 >= 0)) {
      cont10++
      sobra_do_saque = sobra_do_saque - 10
    } else if ((sobra_do_saque >= 5) && (sobra_do_saque - 5 >= 0)) {
      cont5++
      sobra_do_saque = sobra_do_saque - 5
    } else {
      while (sobra_do_saque > 0) {
        cont1++
        sobra_do_saque = sobra_do_saque - 1
      }
    }
  }
  quantidade_de_cedulas = [cont100, cont50, cont10, cont5, cont1]
  for (let i = 0; i < quantidade_de_cedulas.length; i++) {
    if (quantidade_de_cedulas[i] > 0) {
      let valor_da_cedula
      switch (i) {
        case 0:
          valor_da_cedula = 100
          break
        case 1:
          valor_da_cedula = 50
          break
        case 2:
          valor_da_cedula = 10
          break
        case 3:
          valor_da_cedula = 5
          break
        case 4:
          valor_da_cedula = 1
      }
      resultado += `${quantidade_de_cedulas[i]} nota(s) de R$ ${valor_da_cedula}.\n`
    }
  }
  return resultado
}

console.log(calcular_minimo_cedulas(18))