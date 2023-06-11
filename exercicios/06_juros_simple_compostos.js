/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros 
 * e tempo de aplicação. A primeira função retornará o montante da aplicação financeira 
 * sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime 
 * de juros compostos.
 */

const calcularJurosSimples = (capitalInicial, taxaDeJuros, numeroDeDias) => {
  if (taxaDeJuros >= 1) {
    taxaDeJuros = taxaDeJuros / 100
  }
  let montanteJurosSimples = capitalInicial + (capitalInicial * taxaDeJuros * numeroDeDias)
  console.log(`Regime de juros simples: R$ ${montanteJurosSimples.toFixed(2).replace(".", ",")}`)
}
calcularJurosSimples(1200, 20, 2)

const calcularJurosCompostos = (capitalInicial, taxaDeJuros, numeroDeDias) => {
  if (taxaDeJuros >= 1) {
    taxaDeJuros = taxaDeJuros / 100
  }
  let montanteJurosCompostos = capitalInicial * Math.pow(1 + taxaDeJuros, numeroDeDias)
  console.log(`Regimes de juros compostos: R$ ${montanteJurosCompostos.toFixed(2).replace(".", ",")}`)
}
calcularJurosCompostos(1200, 20, 2)
