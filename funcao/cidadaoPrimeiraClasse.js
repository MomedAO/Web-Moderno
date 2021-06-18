//Funcao em JS e' First-Class Object (Citizens)
//Higher-order function

// criar function de forma literal
function fun1(){}

//Armazenar uma fincao em uma variavel
const fun2 = function (){}

//Armazenar em um Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar uma funcao em um atriburo de funcao
const obj = {}
obj.falar = function () {return 'Opa!'}
console.log(obj.falar())

// Passar uma funcao como parametro de uma funcao
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//uma funcao pode retornar/conter uma funcao
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)