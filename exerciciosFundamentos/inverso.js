//funcao literal
function inverso(valorOuNumero) {
    if (valorOuNumero === Number(valorOuNumero)) {
        console.log(valorOuNumero * (-1))
    } else if (valorOuNumero === Boolean(valorOuNumero)) {
        console.log(!valorOuNumero)
    } else if (valorOuNumero === String(valorOuNumero)) {
        console.log(Number(valorOuNumero) * (-1) || !Boolean(valorOuNumero))
    }
}
inverso(true)
inverso('6')
inverso(-2000)
inverso('programação')