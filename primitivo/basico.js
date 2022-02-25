/*
let n1 = Number(window.prompt('Digite um numero:'))
let n2 = Number(window.prompt('Digite outro numero:'))

console.log(`A soma entre os numeros é ${n1 +n2}`)

let a = 'A'
let b = 'B'
let c = 'C'
const array =  [b,c,a]

console.log(array)
*/

// MANIPULANDO STRINGS
/*
let doc = document.getElementById("nome")
const nome = window.prompt('Informe seu nome:')

doc.innerHTML += `Seu nome é ${nome}<br/>`
doc.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
doc.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
doc.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf('a')}<br />`;
doc.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('a')}<br />`;
doc.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
doc.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
doc.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
doc.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
*/
// MANIPULANDO NUMEROS E METODO MATH
/*
const numero = Number('joao')//Number(Math.random() * (1,100))

console.log(`Seu numero da vez é: ${numero}`)
console.log(`O numero é inteiro? ${Number.isInteger(numero)}`)
console.log(`O numero é NaN? ${Number.isNaN(numero)}`)
console.log(`Raiz Quadrada: ${numero ** 0.5}`)
console.log(`Arredondado para baixo: ${Math.floor(numero)}`)
console.log(`Arredondado para cima: ${Math.ceil(numero)}`)
console.log(`Fixado: ${Number(numero).toFixed(2)}`)
*/

// ARRAY 

const alunos = ['maria','joao','lucas']
//alunos[0] = 'pedro'
alunos.pop() // remiove o ultimo indice 
alunos.push('henrique') // adicionando no final 
console.log(alunos)
alunos.pop()
alunos.unshift('carla') // adicona no indice 0 
console.log(alunos.length)
console.log(alunos)
const salvo = alunos.shift() // remove o primeiro indice 
console.log(salvo)
console.log(alunos)

alunos.push('carla')
alunos.push('eduardo')
console.log(alunos.slice(0, alunos.length))