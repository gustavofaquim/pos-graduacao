

const numeros = [1,2,3,4,5,6,7,8,9,10]


let nums = numeros.reduce((total,num) => total + num)
console.log('Soma total: ' + nums)


// Somando Pares
const regraPar = n => n % 2 == 0
const regraSoma = (total, num) => total + num

let numPares = numeros
                .filter(regraPar)
                .reduce(regraSoma)

console.log('Soma Par: ' + numPares)

// Somando Ímpares
const regraImpar = n => n % 2 != 0

let numImpar = numeros.filter(regraImpar).reduce(regraSoma)
console.log('Soma ímpares: ' + numImpar)