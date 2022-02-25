function max(n1,n2){
    return n1 > n2 ? n1 : n2
}
console.log(max(1000,2))

// UTILIZANDO ARROWFUNCTION

const maxx = (n1,n2) =>{
    return n1 > n2 ? n1 : n2
}
console.log(maxx(1324,16848))

// MELHORANDO, CASO A ARROW TENHA APENAS UM RETURN PODEMOS DEIXAR TUDO EM UMA LINHA

const maxxx =(x,y) => x>y ? x : y
console.log(maxxx(959623,16846))