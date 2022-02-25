/* A HABILIDADE QUE A FUNÇÃO TEM EM ACESSAR O SEU ESOPO LÉXICO  */
function retornaNome(nome) {
    return function () {
        return nome
    }
}

const funcao1 = retornaNome('Luis')
const funcao2 = retornaNome('Joao')

console.dir(funcao1)
console.dir(funcao1)

console.log(funcao1(), funcao2())