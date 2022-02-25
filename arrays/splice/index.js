const nomes = ['Joao','Lucas','Ana','Maria','Carlos']

/* RETORNA UM ARRAY - POR PODER REMOVER MAIS ITENS */
const removidos = nomes.splice(4,1, 'Luiz')
console.log(nomes)
console.log(removidos)


const frutas = ['Maça','Uva','Banana','Limao','Abacaxi']
console.log(frutas);

// POP
frutas.splice(-1,1)
console.log(frutas);

// SHIFT
frutas.splice(0,1)

// PUSH
frutas.splice(nomes.length, 0, 'Henrique')
console.log(frutas);

// UNSHIFT
frutas.splice(0,0, 'Pedro', 'Julio')
console.log(frutas);