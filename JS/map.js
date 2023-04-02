
const numeros = [1,2,3,4,5,6,7,8,9,10]


let num = numeros.map(function(element){
    return element * 2
})

console.log(num)

console.log('---------------------')
console.log('')

let num2 = numeros.map(valor => valor * 2)
console.log(num2)
console.log('---------------------')
console.log('')

const funcionarios = [
    {nome: 'Pedro', idade: 32},
    {nome: 'José', idade: 55},
    {nome: 'Ana', idade: 18},
    {nome: 'Rosa', idade: 30}
]

let nomes = funcionarios.map(func => func.nome)
console.log(nomes)
