// tagged tamplates - processa o tamplate dentro de uma funcao
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return "Momed"
}

const aluno = "Momed"
const situacao = "Aprovado"

console.log(tag`${aluno} esta ${situacao}`)