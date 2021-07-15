class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`My name is ${this.nome}`)
    }
}

const p1 = new Pessoa('Jhon')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`I'm ${nome}`)
    }
}

const p2 = criarPessoa('Momed')
p2.falar()