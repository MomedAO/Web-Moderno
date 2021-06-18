//Funcao define um bloco de codigo nomeado
//recebe parametros de entrada
//Uma funcao pode nao redtornar nada e receber algo



//funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 12, 3, 2)
imprimirSoma()

//funcao com retorno

function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(3))
console.log(soma())//porque o primeiro parametro nao foi tratado