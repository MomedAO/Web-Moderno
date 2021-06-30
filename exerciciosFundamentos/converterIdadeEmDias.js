//funcao literal
function idadeEmDias (idade){
    console.log(idade *= 365)
}
idadeEmDias(25)
idadeEmDias(70)
/*funcao com retormo
 * function idadeEmDias (idade){
    return idade *= 365
}
console.log(idadeEmDias(25))*/
console.log('')
//funcao arrow
let idadeEmDiasArrow = idadeArrow => console.log(idadeArrow *= 365)
idadeEmDiasArrow(25)
idadeEmDiasArrow(70)