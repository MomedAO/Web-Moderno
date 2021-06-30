//funcao literal
function calcularSalario(numHoras, valorHora){
    console.log('Salario igual a R$ ' + valorHora * numHoras)
}
calcularSalario(150, 40.5)

//funcao arrow
let calcSalario = (nHoras, vHoras) => console.log('Salario igual a R$ ' + vHoras * nHoras)
calcSalario(150, 40.5)