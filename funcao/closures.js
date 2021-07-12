/**
 * Closures e' o escopo criado quando a funcao e declarada
 * Essa escopo perminte a funcao acessar e manipular a variavel externa a funcao
 */

//contexto lexico em accao 

const x = 'Global'
function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())