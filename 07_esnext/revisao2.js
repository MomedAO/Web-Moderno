// Arrow funtion

const soma = (a, b) => a + b
console.log(soma(3, 2))

// Arrow fuction (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// valor padrao
function log(texto = "Node") {
  console.log(texto)
}

log()
log("sou mais forte")// e' mais forte que o valor padrao
log(undefined)
log(null)//substitui o valor padrao

// operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n);
  return total
}

console.log(total(2, 3, 4, 5))