/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
Exemplos:
*/

const inverso = valorNormal => {
    if (valorNormal === Boolean(valorNormal)){
        return !valorNormal
    } else if (valorNormal === Number(valorNormal)){
        return -1 * valorNormal
    } else if (valorNormal === String(valorNormal)){
        return Number(valorNormal) || Boolean(valorNormal)
    }
}

console.log(inverso(true))
console.log(inverso('0'))
console.log(inverso(-2000))
console.log(inverso('Programacao'))