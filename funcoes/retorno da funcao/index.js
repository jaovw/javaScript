/* RETURN - TERMINA A FUNÇÃO */

function falaFrase (comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
let f = falaFrase('Olá')
let r = f('Mundob')
console.log(r)



// function duplica(n){
//     return n * 2;
// } 
/* ================================ */

function criaMultiplicador(multiplicador) {

    return function (n) {
        return n * multiplicador;
    };
    
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))