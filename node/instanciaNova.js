// uma factory retorna um novo objecto

const { valor, incremento } = require("./instanciaUnica")

module.exports = () => {
  return {
    valor: 1,
    incremento() {
      this.valor++
    }
  }
}