// Useu-se a funcao ternaria para fazer a convercao de anos em dias

const idadeEmAnosParaDias = idadeEmAnos => idadeEmAnos ? idadeEmAnos * 365 : 'idade invalida'
console.log(idadeEmAnosParaDias(25))
console.log(idadeEmAnosParaDias(70))