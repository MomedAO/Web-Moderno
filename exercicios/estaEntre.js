/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/
const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (numero == minimo && inclusivo == true || numero == maximo && inclusivo == true){
        console.log(true)
    } else {
        console.log(false)
    }
}

estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true


// nao tenho certeza da solucao disposta a cima,
// e' esperado que sejam satisfitas as condicoes acima dispostas.