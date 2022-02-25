const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

/* FUNÇÃO DE CALLBACK */

function callBackFilter(valor, indice, array) {
    //valor > 10 ? true : false
    /*
    SIMPLIFICANDO

    if(valor > 10){
        return true
    } else {
        return false
    }
    */
   return valor > 10;
}

/* FILTER() -> RECEBE UMA FUNÇÃO DE CALLBACK */
//const numerosFiltrados = numeros.filter(callBackFilter)

const numerosFiltrados = numeros.filter(function(valor){
    return valor >10
})

console.log(numerosFiltrados);
