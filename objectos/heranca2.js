// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //cuidado
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velActual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velActual + delta <= this.velMax) {
      this.velActual += delta
    } else {
      this.velActual = this.velMax
    }
  },
  status() {
    return `${this.velActual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shedoying
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())