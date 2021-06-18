// A variavel numero = 1 sera sobescrita porque a segfunda tambem e' grobal
var numero = 1
{
    var numero = 2
    console.log('denrto = ', numero)
}
console.log('fora = ', numero)