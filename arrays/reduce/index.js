// MAIS USADA PARA REDUZIR O ARRAY PARA 1 ELEMENTO
// =================== NÃO UTILIZAR PARA FAZER COISAS QUE MAP E FILTER FAZEM ===================
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const total = numeros.reduce(function(acumulador, valor, indice, array){
    //console.log(acumulador)
    acumulador += valor
    return acumulador 
}, 0)

//console.log(total)

// SEMELHANTE AO FILTER
const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0){
        acumulador.push(valor)
    }
    return acumulador
},[])

//console.log(pares)

// SEMELHANTE AO MAP
const dobro = numeros.reduce((a,valor)=>{
    a.push(valor * 2)
    return a
},[])

//console.log(dobro)

// UTILIZANDO OBJETOS

const pessoas = [
    {nome:'Joao', idade:22},
    {nome:'Lucas', idade:62},
    {nome:'Maria', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:55}
]

const pessoaVelha = pessoas.reduce((a, valor) => {
    //console.log(a, valor)
    if(a.idade > valor.idade) return a
    return valor
})

console.log(pessoaVelha)