//Desafio Funcao construtora

/**
 * function Pessoa(nome) {
    let nomeAtual = nome
    
    this.falar = function (nome) {
        console.log(`My name is ${nome}`)
    }
    
    this.getNomeAtual = function () {
        return nomeAtual
    }
}

let novaPessoa = new Pessoa()
novaPessoa.falar('Fernando')
*/

// funcao construtora com uso de funcao arrow 
/**
 * function Pessoa(nome) {
    let nomeAtual = nome

    this.falar = (nome) => console.log(`My name is ${nome}`)

    this.getNomeAtual = () => nomeAtual
}

let novaPessoa = new Pessoa()

novaPessoa.falar('Fernando')
novaPessoa.falar('Momed')
*/

//Maneira simples de fazer uma fincao contrutora

function Pessoa (nome){
    this.nome = nome
    
    this.falar = function() {
        console.log(`My name is ${this.nome}`)
    }
}

const p1 = new Pessoa('Jhon')
p1.falar()
