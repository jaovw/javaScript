const data = new Date();
const diaSemana = data.getDay();
// let diaSemanaTexto
// console.log(diaSemana)

/*
switch(diaSemana){
case 0:
    diaSemanaTexto = 'Domingo';
    break;
case 1:
    diaSemanaTexto = 'Segunda';
    break;
case 2:
    diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = 'Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break;
case 5:
    diaSemanaTexto = 'Sexta';
    break;
case 6:
    diaSemanaTexto = 'Sábado';
    break;
default:
    diaSemanaTexto = 'INVÁLIDO';
}

console.log(diaSemanaTexto)
*/
function getDay(diaSemana){
    let diaSemanaTexto
    switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = 'INVÁLIDO';
    }
}

const diaSemanaTexto = getDay(diaSemana);
console.log(diaSemanaTexto);
// let d = new Date();
// let yesterday = 1 + d.getFullYear().toString().substr(2, 2) + (d.getMonth() + 1).toString().padStart(2, 0) + (d.getDate() - 1).toString().padStart(2, 0);
// let today = d.getFullYear().toString().substr(2, 2) + (d.getMonth() + 1).toString().padStart(2, 0) + (d.getDate()).toString().padStart(2, 0);
// console.log(yesterday, today)