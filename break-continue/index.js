const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros){

    if (numero === 2) {
        console.log('Pulei o número 2')
        continue;
    }
    console.log(numero)

    if (numero === 7){
        console.log('Cheguei no número 7, saindo...')
        break;
    }

}
/*
* UTILIZANDO WHILE
let i = 0;
while(i < numeros.length){
    let numero = numeros[i]

    if(numero === 2){
        console.log('Pulei o número 2')
        i ++; // INCREMENTAR A VARIAVÉL DE CONTROLE PARA EVITAR O LOOP INFINITO
        continue;
    }
    console.log(numero);
    if(numero === 7){
        console.log('Cheguei no número 7, saindo...')
        i ++; // INCREMENTAR A VARIAVÉL DE CONTROLE PARA EVITAR O LOOP INFINITO
        break;
    }
    i ++;

}
*/
/*
* UTILIZANDO DO WHILE
let i = 0;
do{
    let numero = numeros[i]

    if(numero === 2){
        console.log('Pulei o número 2')
        i ++; // INCREMENTAR A VARIAVÉL DE CONTROLE PARA EVITAR O LOOP INFINITO
        continue;
    }
    console.log(numero);
    if(numero === 7){
        console.log('Cheguei no número 7, saindo...')
        i ++; // INCREMENTAR A VARIAVÉL DE CONTROLE PARA EVITAR O LOOP INFINITO
        break;
    }
    i ++;

}while(i < numeros.length)
*/