function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Aprovado com ' + nota);
  }
}
soBoaNoticia(10)
soBoaNoticia(6)
soBoaNoticia(8)

const good_news = nota => nota >= 7 ? `Aprovado com ${nota}` : `Reprovado com ${nota}`
console.log(good_news(20))