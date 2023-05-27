// let e const

{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a)

// template sting
const produto = "iPed"
console.log(`${produto} e' caro`)

// Destructuring
const [l, e, ...tras] = "Momed"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: "Momed", idade: 26 }
console.log(i, nome)