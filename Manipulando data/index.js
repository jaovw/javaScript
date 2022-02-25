// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60* 60* 24 * 1000;
// const data = new Date(tresHoras + umDia);

const data = new Date(2021,0) // MES COMEÇANDO DO 0-11 
const data1 = new Date() //'2019-01-01T18:30'
// console.log(data.toString())
// console.log(data1.toString())

// console.log('dia', data1.getDate())
// console.log('mes', data1.getMonth() + 1)
// console.log('ano', data1.getFullYear())
// console.log('hora', data1.getHours())
// console.log('minuto', data1.getMinutes())
// console.log('segundo', data1.getSeconds())
// console.log('mileSegundos', data1.getMilliseconds())
// console.log('dia da semana', data1.getDay())

// console.log(Date.now())

function zeroEsquerda(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data){;
    const dia =  zeroEsquerda(data.getDate());
    const mes= zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora =  zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());

    return  `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
}
const dataAtual = formataData(data1);

console.log(dataAtual);
