/* EM APENAS FUNÇÕES COM FUNCTION () - > ARGUMENTS | 'OCULTOS' */
function funcao () {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
funcao(1.2,2,1);

function soma (a=1,b=2, c=4) {
    console.log(a + b + c)
}
soma(9,undefined,1) /* Única maneira de forçar o valor padrão do parâmetro */


/* ATRAVÉS DESESTRUTURAÇÃO */

function pessoa ({nome, idade}){
    console.log(nome, idade);
}
pessoa({nome:'joao', idade:22})

function valores ([valor1,valor2,valor3]) {
    console.log(valor1,valor2,valor3);
}
valores([1,'Joao',3])

/* ============================================ */

function conta(operador, acumulador, ... numeros) { // ... rest operator, sempre sendo o último  
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }
    console.log(acumulador);
}
conta('/',265,1,3,11,69)

const conta2 = (... args) =>{
    console.log(args);
}
conta2(1,2,3,4,5)