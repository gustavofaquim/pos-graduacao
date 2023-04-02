

const valores = [100, 100, 70, 100, 50, 50, "marlon", 70, "marlon"]


let valoresRepetidos = valores.reduce((array, valor) => {
    console.log(array[valor])
    array[valor] ? (array[valor] = array[valor] + 1) : array[valor] = 1
    return array
}, {})

console.log(valoresRepetidos)

