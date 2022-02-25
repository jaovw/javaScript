const h1 = document.querySelector('.container h1');
const p = document.querySelector('.container p');
const data = new Date();

function zeroEsquerda(numero){
    return numero >= 10 ? numero : `0${numero}`;
}
/* ====================================== JEITO MAIS COMPLICADO*/

/*
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

function getMes(mes){
    let mesTexo
    switch (mes) {
        case 0:
            mesTexo = 'Janeiro';
            return mesTexo;
        case 1:
            mesTexo = 'Fevereiro';
            return mesTexo;
        case 2:
            mesTexo = 'Março';
            return mesTexo;
        case 3:
            mesTexo = 'Abril';
            return mesTexo;
        case 4:
            mesTexo = 'Maio';
            return mesTexo;
        case 5:
            mesTexo = 'Junho';
            return mesTexo;
        case 6:
            mesTexo = 'Julho';
            return mesTexo;
        case 7:
            mesTexo = 'Agosto';
            return mesTexo;
        case 8:
            mesTexo = 'Setembro';
            return mesTexo;
        case 9:
            mesTexo = 'Outubro';
            return mesTexo;
        case 10:
            mesTexo = 'Novembro';
            return mesTexo;
        case 11:
            mesTexo = 'Dezembro';
            return mesTexo;
    
        default:
            mesTexo = 'INVÁLIDO';
    }
}

function criaData(){
    const dia = getDay(data.getDay());
    const diaNum = zeroEsquerda(data.getDate());
    const mes = getMes(data.getMonth());
    const ano = data.getFullYear();

    
    return `${dia}, ${diaNum} de ${mes} de ${ano}`;
}

function criaHorario(){
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundos = data.getSeconds();

    return `${hora}:${minuto}:${segundos}`;
}
h1.innerHTML = criaData();
p.innerHTML = criaHorario();
*/

/*====================================== JEITO SIMPLIFICADO */
/*
const opcaoData = {
    dateStyle: 'full'
};
const opcaoHora = {
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR',opcaoData);
p.innerHTML = data.toLocaleTimeString('pt-BR',opcaoHora);
*/

/*====================================== AO INVÉS DE SWITCH */
// UTILIZANDO ARRAYS

function getDia(dia){
    const diaSemana = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feora', 'sabado'
    ];
    return diaSemana[dia];
}

function getMes(mes){
    const mesNum = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return mesNum[mes];
}

function criaData(){
    const dia = getDia(data.getDay());
    const diaNum = zeroEsquerda(data.getDate())
    const mes = getMes(data.getMonth())
    const ano = data.getFullYear()

    return `${dia}, ${diaNum} de ${mes} de ${ano}`
}

function criaHorario(){
    const hora = data.getHours()
    const minuto = data.getMinutes()

    return `${hora}:${minuto}`
}

h1.innerHTML = criaData()
p.innerHTML = criaHorario()
/*==============================================================================================================*/