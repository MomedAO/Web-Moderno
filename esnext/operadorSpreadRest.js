// operador rest (juntar)/ spread (espalhar)
// usar rest com parametro de funcao

// usar spread com objecto
const funcionario = { nome: "Momed", salario: 1000.00 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ["Joao", "Pedro", "Gloria"]
const grupoFinal = ["Maria", ...grupoA, "Momed"]
console.log(grupoFinal)