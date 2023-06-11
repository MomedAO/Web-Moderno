/**
 * 11) As regras para o cálculo dos anos bissextos são as seguintes:
 * De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
 * mensagem e retornando true ou false.*/

const calcular_ano_bissexto = ano => {
  let ano_bissexto = false

  if (ano % 4 == 0 && ano != 0) {
    if (ano % 100 == 0) {
      if (ano % 400 == 0) {
        ano_bissexto = true
      } else {
        ano_bissexto = false
      }
    } else {
      ano_bissexto = true
    }
  } else {
    ano_bissexto = false
  }

  if (ano_bissexto == true) {
    return `O ano ${ano} é ano bissexto`
  } else {
    return `O ano ${ano} não é ano bissexto`
  }
}

console.log(calcular_ano_bissexto(100))
console.log(calcular_ano_bissexto(400))