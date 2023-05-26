const [value_a, value_b, value_c, value_d] = [12, 23, 55, 62]
const sum = value_a + value_b + value_c
const sub = value_d - value_b
const split = value_c / value_a
const mult = value_b * value_c
const rest = value_a % value_d

console.log(
  `
  ${value_a} + ${value_b} + ${value_c} = ${sum}
  ${value_d} - ${value_b} = ${sub}
  ${value_c} / ${value_a} = ${split}
  ${value_b} + ${value_c} = ${mult}
  ${value_a} + ${value_d} = ${rest}
  `
)