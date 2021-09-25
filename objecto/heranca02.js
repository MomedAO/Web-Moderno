//cadeia de prototype
Object.prototype.attr0 = 0
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtusl: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this/this.velAtusl + delta <= this.velMax){
            this.velAtusl += delta
        } else {
            this.velAtusl = this.velMax
        }
    },
    status(){
        return `${this.velAtusl}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    volMax: 324//shedowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari)