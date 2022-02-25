function relogio() {
    function getTime(segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: 'UTC' // ou 'GMT'
        })
    };

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;



    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos ++;
            relogio.innerHTML = getTime(segundos);
        },1000);
    }
    
    document.addEventListener('click', function (e) {
        const elemento = e.target;
    
        if(elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if(elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        };
        if(elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado')
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    
    })   
};
relogio();
    








/* EM QUESTÃO DE PERFORMACE AO TER MUITOS BOTÕES POSSA A SER UM PROBLEMA */
/*
iniciar.addEventListener('click', function (event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
})

pausar.addEventListener('click', function (event){
    relogio.classList.add('pausado');
    clearInterval(timer)
})

zerar.addEventListener('click', function (event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0
})
*/