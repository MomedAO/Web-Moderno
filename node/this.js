console.log(this === global);
console.log(this === module);

console.log(this === exports);
console.log(this === module.exports);

function logThis() {
  console.log('Detro da funcao');
  console.log(this === exports);
  console.log(this === module.exports);
  console.log(this === global);
}

logThis()

const a = fun => {
  console.log('Outra funcao');
  console.log(this === global);
  console.log(this === exports);
  console.log(this === module.exports);
}

a()