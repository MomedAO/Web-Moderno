const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bandoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(bandoDeDados.getProdutos())//converte para JSON
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bandoDeDados.getProduto(req.params.id))
})

//add object
app.post('/produtos', (req, res, next) => {
  const produto = bandoDeDados.salvaProdutos({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)//JSON
})

//replace object
app.put('/produtos/:id', (req, res, next) => {
  const produto = bandoDeDados.salvaProdutos({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)//JSON
})

//delete object
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bandoDeDados.excluirProduto(req.params.id)
  res.send(produto)//JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
})