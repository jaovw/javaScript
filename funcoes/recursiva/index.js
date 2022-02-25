/* UMA FUNÇÃO QUE SE CHAMA NOVAMENTE - CUIDANDO COM O MÁXIMO PARA NÃO SE TORNAR UM LOOP */
function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max)
    recursiva(max);
}

recursiva(1);