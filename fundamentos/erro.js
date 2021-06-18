function imptimirNomeGritado (obj){
    try{
        console.log(obj.name.toUpercase() + '!!!')
    }catch (e){
        tratarErroElancar(e)
    }
}

const obj = {nome: 'Roberto'}
imptimirNomeGritado(obj)