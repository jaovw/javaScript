// FOR IN -> LÊ OS ÍNDICES OU CHAVES DO OBJETO
const frutas = ['Pera', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'João',
    sobrenome: 'Victor',
    idade: 21
};


/* 
    FOR CLÁSSICO
for(let i =0; i < frutas.length; i++){
    console.log(frutas[i])
}
*/
/*
    ACESSANDO O ÍNDICE DO ARRAY
for(let i in frutas){
    console.log(i)
}
*/

for(indice in frutas){
    console.log(frutas[indice])
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
};