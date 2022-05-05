/* Promisse.all  Promise.race  Promisse.resolve  Promisse.reject */

function rand(min,max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max-min) + min)
}

function con(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') {
            reject(new Error('404'))
            return // PARA NÃO CONTINUAR 
        }
        
        setTimeout(() =>{
            resolve(msg)
        }, tempo)
    })
}

const promises = [ 'Valor 1',
                    con('Promisse 01', 1000),
                    con('Promisse 02', 500),
                    con('Promisse 03', 3000),
                    'Ultimo Valor'
                ]

//  RETORNA TODAS AS PROMISES COM O RESULTADO ORDENADO POR ÍNDICE
/*
Promise.all(promises).then((valor) => {
    console.log(valor)
}).catch((e) => {
    console.log(e)
})
*/

//  RETORNA A PRIMEIRA A SER RESOLVIDA
/*
Promise.race(promises).then((valor) => {
    console.log(valor)
})
*/

function pagina() {
    const cahce = false

    if(cahce) {
        return Promise.resolve('Página em cache.')
    } else {
        return con('Baixando dados da Página', 5000)
    }
}

pagina().then(dados => {
    console.log(dados)
}).catch(e => console.log(e))