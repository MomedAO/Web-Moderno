/**
 * 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
 * possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
 * comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
 * que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
 * “Não trabalhamos com este tipo de automóvel aqui”.
 */

const comprar_carro = carro => {
  switch (carro) {
    case 'hatch':
      return `Compra efectuada com sucesso`
      break
    case 'sedan':
    case 'motocicleta':
    case 'caminhoneta':
      return 'Tem certeza que não prefere este modelo?'
      break
    default:
      return 'Não trabalhamos com esti tipo de automovel'
  }
}

console.log(comprar_carro('hatch'))
console.log(comprar_carro('caminhoneta'))
console.log(comprar_carro('sedan'))
console.log(comprar_carro('porch'))
