/* MAP SEMPRE TERA O MESMO VALOR DE POSIÇÃO DO ARRAY ORIGINAL */
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const numerosDobro = numeros.map(valor => valor * 2)

//console.log(numerosDobro)

/* MAP COM OBJETOS ================================ */

const pessoas = [
    {nome:'Joao', idade:22},
    {nome:'Lucas', idade:62},
    {nome:'Maria', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:55}
]

// RETORNANDO APENAS O NOME, CONSEQUENTEMENTE EM STRING
const pessoasNome = pessoas.map(obj => obj.nome)
// RETORNANDO APENAS A -> CHAVE IDADE DO OBJETO 
const pessoasIdade = pessoas.map(obj => ({idade: obj.idade}))
// ADICIONANDO UMA CAHVE ID EM CADA OBJETO
const pessoasId = pessoas.map((obj,i) => ({id: i + 1, nome: obj.nome, idade: obj.idade}))

const pessoasId2 = pessoas.map((obj, i) => {
    obj.id = i + 1
    return obj
})

/* AO UTILIZAR O MAP VOCÊ ESTÁ TRABALHANDO COM REFERENCIA, ENTÃO ESTARÁ MUDANDO EM AMBOS LUGARES */
/* CASO NECESSITE MUDAR APENAS A 'CÓPIA' */

const pessoasId3 = pessoas.map((obj, i) => {
    const novoObj = { ...obj}
    novoObj.id = i +1
    return novoObj
})

//console.log(pessoasNome)
//console.log(pessoasIdade)
console.log(pessoasId)
console.log(pessoasId2)
console.log(pessoasId3)
//console.log(pessoas)