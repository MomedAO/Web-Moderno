//o let so funciona dentro de um escopo
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// variaveis definidas com var tem escop de funcao e escopo global.
//variaveis definidade com LET tem escopo de funcao escopo global e escopo de bloco. 