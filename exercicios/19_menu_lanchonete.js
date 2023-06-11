/**
 * 19) O cardápio de uma lanchonete é o seguinte:
 * Código Descrição do Produto Preço
 * 100 Cachorro Quente R$ 3,00
 * 200 Hambúrguer Simples R$ 4,00
 * 300 Cheeseburguer R$ 5,50
 * 400 Bauru R$ 7,50
 * 500 Refrigerante R$ 3,50
 * 600 Suco R$ 2,80
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente.
 */

const calcular_valor_do_pedido = (codigo, quantidade) => {
  let valor_do_lanche
  switch (codigo) {
    case 100:
      return `Total a pagar: R$ ${(valor_do_lanche = quantidade * 3).toFixed(2).replace('.', ',')}`
      break;
    case 200:
      return `Total a pagar: R$ ${(valor_do_lanche = quantidade * 4).toFixed(2).replace('.', ',')}`
      break
    case 300:
      return `Total a pagar: R$ ${(valor_do_lanche = quantidade * 5.50).toFixed(2).replace('.', ',')}`
      break
    case 400:
      return `Total a pagar: R$: ${(valor_do_lanche = quantidade * 7.50).toFixed(2).replace('.', ',')}`
      break
    case 500:
      return `Total a pagar: R$ ${(valor_do_lanche = quantidade * 3.50).toFixed(2).replace('.', ',')}`
      break
    case 600:
      return `Total a pagar: R$: ${(valor_do_lanche = quantidade * 2.80).toFixed(2).replace('.', ',')}`
      break
    default:
      return 'Produto não existente.'
      break;
  }
}
console.log(calcular_valor_do_pedido(300, 3))
console.log(calcular_valor_do_pedido(400, 3))
console.log(calcular_valor_do_pedido(500, 3))