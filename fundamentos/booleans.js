let isActivo = false;
console.log(isActivo);

isActivo = true;
console.log(isActivo);

isActivo = 1;
console.log(!!isActivo);

console.log('Os tipos que sao verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActivo = true));

console.log('Os tipos que sao falcos...');
console.log(!!0);
console.log(!!'');
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!(isActivo = false));

console.log('Para finalizar...');
console.log(!!('' || null || 0 || ' '));

const nome = 'Momed'
console.log(nome || 'Desconhecido');