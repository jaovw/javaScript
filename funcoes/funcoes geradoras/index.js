/* LEAZZY EVALUATION */
function* geradora1() {
    yield 'valor 1'
    yield 'valor 2'
    yield 'valor 3'
}

const g1 = geradora1();
/*
console.log(g1);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
*/

function* geradora2() {
    let i = 0

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4() {
    yield* geradora3();

    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
 for(let valor of g4) {
     console.log(valor);
 }

 function* geradora5() {
     yield  () =>{
        console.log('Vim do Y1')
     }
/*  UTILIZANDO RUTURN FINALIZA E IGNORA TO CONTEÚDO ABAIXO
     return () =>{
         console.log('Vim do RETURN')
     }
*/
     yield  () =>{
        console.log('Vim do Y2')
     }
 }

 const g5 = geradora5();

 const fg1 = g5.next().value
 const fg2 = g5.next().value

fg1();
fg2();
 console.log(fg1,fg2)
 

