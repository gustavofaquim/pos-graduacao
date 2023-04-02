const numeros = [1,2,3,4,5,6,7]

let total = numeros.reduce(function(total,numero){
    return total + numero
}, 0)

console.log(total)


let total2 = numeros.reduce((total,numero) => total + numero)
console.log(total2)