function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho2 && trabalho2
    const comprarTv30 = trabalho1 != trabalho2
    const materialSaudavel = !comprarSorvete//Operador unario

    return {comprarSorvete, comprarTv50, comprarTv30, materialSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))