const nome = ['João', 'Lucas', 'Pedro', 'Maria']

for(let  i = 0; i < nome.length; i++){
    console.log(nome[i])
};

console.log('-=-=-=-=-=-=-=-=-=-=-')

for(let index in nome){
    console.log(index)
}

console.log('-=-=-=-=-=-=-=-=-=-=-')

for(let index in nome){
    console.log(nome[index])
}

console.log('-=-=-=-=-=-=-=-=-=-=-')

for(let valor of nome){
    console.log(valor)
}

console.log('-=-=-=-=-=-=-=-=-=-=-')

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

// nome.forEach(element =>{
//     console.log(element)
// })

/*
 * FOR CLÁSSICO - GERALMENTE COM INTERÁVEIS (QUE POSSUEM INDÍCE = ARRAY OU STRINGS) 
 * FOR IN - RETORNA O ÍNIDICE OU CHAVE (STRING, ARRAY OU OBJETOS)
 * FOR OF - RETORNA O VALOR EM SÍ (ITERÁVCEIS, ARRAYS OU STRINGS)
 */