//Armazenando uma funcao em uma vaeiavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 5))

//returno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 3))

const imprimir2 = a => console.log(a)
imprimir2('Que legal')