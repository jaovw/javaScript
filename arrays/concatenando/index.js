const numeros1 = [1,2,3,4]
const numeros2 = [10,9,8]

const total = numeros1.concat(numeros2, 'Literal')
console.log(total);

// .. REST -> SPREAD

const total1 = [...numeros2, 'Literal', ...numeros1, ...[100,200]]
console.log(total1);