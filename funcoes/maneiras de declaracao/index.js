/* DECLARAÇÃO DE FUNÇÃO (FUNCTION HOISTING) */
function hello () {
    console.log('Hello');
}
hello();
/* ======================================== */
/* 
FIST-CLASS OBJECTS 
FUNCTION EXPRESSION
*/
const dado = function () {
    console.log('Fist Class');
};
//dado();
function executa (funcao) {
    console.log('Vou executar a seguinte função: ');
    funcao();
}

executa(dado)
/* ======================================== */
/* ARROW FUNCTION */
const arrowFunction = ()=> {
    console.log('Sou uma Arrow')
}
/* ======================================== */
/* DENTRO DE UM OBJETO */
const obj = {
    funcaoClassica: function () {
        console.log('Através de um obj');
    },
    funcaoNova () {
        console.log('Através de um obj2');
    }
}
obj.funcaoClassica()
obj.funcaoNova()

/* ======================================== */