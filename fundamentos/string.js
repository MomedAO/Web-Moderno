const escola = 'Cod3r';

console.log(escola.charAt(4));
console.log(escola.charCodeAt('3'));
console.log(escola.indexOf(3));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));//imprimi o que esta entre.

console.log('Escola '.concat(escola).concat('!'));//faz concatenacao
console.log(escola.replace(3, 'e'));//substitui um caracter

console.log('Ana, Maria, Pedro'.split(','));//converte uma string em array