function mostraHora() {
    let data  = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

const timer = setInterval(function(){ // UTILIZANDO FUNÇÃO ANÔNIMA PARA CHAMAR OUTRAS FUNÇÕES
    console.log(mostraHora())
},1000)

setTimeout((f) => {
    clearInterval(timer)
}, 3000);

setTimeout((f) => {
    console.log('Hello World!')
}, 5000);