function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1
const max = 50
let rand = random(min,max);
//let rand = 10

//  PRIMEIRO ELE CHECA SE A CONDIÇÃO É TRUE E DEPOIS EXECUTA O BLOCO DE CÓDIGO
while (rand !== 10){
    rand = random(min,max)
    console.log(rand)
}

console.log('-------------------')

// PRIMEIRO ELE EXECUTA O BLOCO 'DO' E EM SEGUIDA FINALIZA COM A CONDIÇÃO 
do {
    rand = random(min,max)
    console.log(rand)
} while(rand !== 10);