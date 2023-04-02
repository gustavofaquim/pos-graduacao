

const numbers = [1,2,3,4,5,6,7,8,9,10]

const regraPar = n => n % 2 == 0
const regraImpar = n => n % 2 != 0 

const pares = numbers.filter(regraPar)
const impares = numbers.filter(regraImpar)


console.log(pares)
console.log(impares)

console.log('-------------------------')

const funcionario = [
    {nome: 'Pedro', idade: 32},
    {nome: 'José', idade: 55},
    {nome: 'Ana', idade: 18},
    {nome: 'Rosa', idade: 30}
]

let pessoas = funcionario.filter(valor => valor.idade < 35 )

console.log(pessoas)

console.log('-------------------')

let pessoas2 = funcionario.filter(function(valor){
    return valor.idade < 35
})

console.log(pessoas2)