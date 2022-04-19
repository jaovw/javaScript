const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

/*
const total = numeros.filter((valor)=>{
    return valor % 2 === 0
}).map((valor)=> {
    return valor * 2
}).reduce((a, valor)=>{
    return a += valor
},0)
*/

const total = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor *2)
.reduce((a,valor) => a += valor)

console.log(total)