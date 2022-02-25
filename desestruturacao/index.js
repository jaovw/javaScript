//  ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
/*==========================  .. rest, ...spread  =============================*/
const numeros = [11,222,3333,444444,555,6666,777,888,999];
const [primeiroNum, segundoNum, ... resto] = numeros

console.log(primeiroNum, segundoNum)
console.log(resto)
// PARA CASO QUEIRA PULAR VALORES 
const [um, ,tres, ,cinco, ,sete, ,nove] = numeros
console.log(um,tres,cinco,sete,nove)

const numeros1 = [[1,2,3],[4,5,6],[7,8,9]]
const [lista1,lista2,lista3] = numeros1
console.log(lista2[1])