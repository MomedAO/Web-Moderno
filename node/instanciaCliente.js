const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.incremento()
contadorA.incremento()
console.log(contadorA.valor, contadorB.valor);

contadorC.incremento()
contadorC.incremento()
console.log(contadorC.valor, contadorD.valor);