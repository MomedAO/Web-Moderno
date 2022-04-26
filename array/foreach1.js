const aprovados = ['Agatha', 'Aldo', 'Danil', 'Raquel']

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(indice + 1, '=>', nome))

const exibirAprovados = aprovado => console.log(aprovado)
exibirAprovados(aprovados)
aprovados.forEach(exibirAprovados)

aprovados.forEach(revelarAprovados => console.log('=>', revelarAprovados))