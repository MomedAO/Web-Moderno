//Factory simples

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
console.log(criarPessoa().nome)
console.log(criarPessoa().sobrenome)
console.log(`${criarPessoa().nome} ${criarPessoa().sobrenome}`)