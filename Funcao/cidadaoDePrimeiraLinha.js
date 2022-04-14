// funcao na forma literal
function fun1() { };

function jogador(nomeCub, nomeJogador, posicao, funcao) {
  console.log(nomeJogador, "do", nomeCub, posicao, funcao)
}
console.log('====Funcao literal');
jogador('Barcelona', 'Messi', 'Avancado lateral esquerdo', 'Golear')

// Armazenar funcao numa vriavel
const fun2 = function () { };

const f2 = function jogador(nomeCub, nomeJogador, posicao, funcao) {
  return {
    nomeJogador, nomeCub, posicao, funcao
  }
}
console.log('====Funcao em uma variavel')
console.log(jogador('Barcelona', 'Messi', 'Avancado lateral esquerdo', 'Golear'));

// Armazenar funcao em um objecto
const obj = {}
obj.falar = function () { return 'Opa!' };
console.log(obj.falar());
const novoObj = {
  falar: function (nome, idade, peso) {
    return {
      nome, idade, peso
    }
  }
}
console.log('====Funcao em um objecto');
console.log(novoObj.falar('Momed', 24, 60));

// passar funcao como parametro
function run(fun) {
  fun()
}
run(function () { console.log('Executando...'); });

console.log('====Funcao como parametro');

// Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4)