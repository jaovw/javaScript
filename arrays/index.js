const nomes = ['Eduardo','Maria','João']
/* 
UTILIZANDO FUNCÇÃO CONTRUTOTA PARA A CRIAÇÃO DOS ARRAYS 
const nomes = new Array('Eduardo','Maria','João')
*/
nomes[2] = 'Gustavo';
/* removendo os itens sem remover o índice */
delete nomes[2];

console.log('removendo os itens sem remover o índice: ',nomes);
/* ============================================== */
const pessoas = ['pessoa1', 'pessoa2', 'pessoa3']
const novasPessoas = pessoas // AMBOS APONTAM PARA O MESMO LOCAL NA MEMÓRIA
// ENTÃO ALERANDO UM O OUTRO TAMBÉM SERÁ ALTERADO
novasPessoas.pop()

console.log('Após igualdade e alterado a sua "cópia": ',pessoas);

/* ============================================== */
const itens = ['item1', 'item2', 'item3']

const novosItens = [...itens]

novosItens.pop()

console.log('Array incial: ',itens);
console.log('Alterando a cópia do array utilizando : ',novosItens);

/* 
pop() REMOVE O ULTIMO ELEMENTO
shift() REMOVE O PRIMEIRO ELEMENTO E DESLOCA OS ÍNDICES
push() ADICIONA ELEMENTO NA ULTIMA POSIÇÃO
UNSHIFT() ADICIONA ELEMENTO NO INÍCIO E DESLOCA OS ÍNDICES
*/

/* =================== SLICE ==================== */

const numeros = [1, 2, 3, 4, 5]
const novosNumeros = numeros.slice(1,-2)

console.log('Utilizando Slcie: ',novosNumeros);

/* =================== SPLIT ==================== */

const fruta = 'Maça Banana Uva'
const frutas = fruta.split(' ')

console.log('Utilizando Slice: ',frutas);

/* =================== JOIN ==================== */

const nomes1 = ['Joao','Victor','Wonnce']
const nome1 = nomes1.join(' ')

console.log(nome1);