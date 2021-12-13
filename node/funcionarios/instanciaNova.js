//uma factore retorna um novo valor
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}