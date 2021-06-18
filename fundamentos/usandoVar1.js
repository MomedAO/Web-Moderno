//Evitar variavel global

// usando var

{
    {
        {
            {
                var sera = 'Sera?'
            }
        }
    }
}
// se for usar var, melhor usar dentro de um escopo de funcao
console.log(sera)
function teste() {
    var local = 123
    console.log(local) 
}

teste()
