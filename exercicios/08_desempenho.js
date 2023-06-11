/**
 * 08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, 
 * ele mantém registro de todas as pontuações feitas por jogo. Após cada jogo ele anota o novo
 * valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista 
 * string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá 
 * comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu 
 * recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * Exemplo:
 * String: “10 20 20 8 25 3 0 30 1”
 * Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior 
 * pontuação aconteceu no sétimo jogo.)
 * */


const lista_de_pontuacoes = [10, 20, 20, 8, 25, 3, 0, 30, 1]

const comparar_pontuacoes = lista_de_pontos => {
  let recordes_batidos = 0
  let maior_pontuacao = lista_de_pontos[0]
  let menor_pontuacao = lista_de_pontos[0]
  let qual_foi_o_pior_jogo = lista_de_pontos.length + 1

  for (let i = 0; i < lista_de_pontos.length; i++) {
    if (maior_pontuacao > lista_de_pontos[i]) {
      maior_pontuacao = lista_de_pontos[i]
      recordes_batidos++
    } else if (menor_pontuacao < lista_de_pontos[i]) {
      menor_pontuacao < lista_de_pontos[i]
      qual_foi_o_pior_jogo = i
    }
  }
  console.log([recordes_batidos, qual_foi_o_pior_jogo])
}

comparar_pontuacoes(lista_de_pontuacoes)
