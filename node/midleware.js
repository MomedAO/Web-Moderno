// middleware patter (chain of responsability)

const passo1 = (contexto, next) => {
  contexto.valor = 'mid1'
  next()
}
const passo2 = (contexto, next) => {
  contexto.valor2 = 'mid2'
  next()
}

const passo3 = contexto => contexto.valo3 = 'mid3'

const exec = (contexto, ...middleware) => {
  const execPasso = indice => {
    middleware && indice < middleware.length &&
      middleware[indice](exec, () => execPasso(indice + 1))
  }
  execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto);