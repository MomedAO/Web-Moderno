Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
Array.prototype.forEach3 = function (chamadaDeFuncao) {
  for (let i = 0; i < this.length; i++)
    chamadaDeFuncao(this[i], i, this)
}

const aprovados = ['Agatha', 'Aldo', 'Danil', 'Raquel']

aprovados.forEach3(function (nome, indice, Array) {
  console.log(`${indice + 1}) ${nome}`)
})