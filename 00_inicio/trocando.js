// troca de valor entre variaveis
let value_a = 50
let value_b = 100
let value_c = value_a

value_a = value_b
value_b = value_c

console.log(value_a, value_b)
/*
  for B to assume the value of A it is necessary that there
  is a third variable C that will assume the value of A and
  only then B assumes the value of A referred to by C 
*/