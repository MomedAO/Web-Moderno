const fs = require('fs')

const caminho = __dirname + '/arquivos.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivos.json')
console.log(config.db);

fs.readdir(__dirname, (err, arquivo) => {
  console.log('Conteudo da pasta');
  console.log(arquivo);
})