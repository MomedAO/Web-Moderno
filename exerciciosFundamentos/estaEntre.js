//funcao literal
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    
    if (numero >= minimo && numero <= maximo && inclusivo == true) {
        console.log(true)
    } else if (numero > minimo && numero < maximo) {
        console.log(true)
    } else {
        console.log(false)
    }
}
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true