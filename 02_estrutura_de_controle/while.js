function getInteirAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getInteirAleatorio(-1, 10)
  console.log(`opcao escolhida ${opcao}`);
}