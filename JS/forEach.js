
const funcionarios = [
    {nome: 'Pedro', idade: 32},
    {nome: 'José', idade: 55},
    {nome: 'Ana', idade: 18},
    {nome: 'Rosa', idade: 30}
]

funcionarios.forEach((valor,indice) => console.log(`${indice} => ${valor.nome}`))
