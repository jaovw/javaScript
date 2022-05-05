function rand(min=0,max=3) {
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

//  ASYNC PERMITE A UTILIZAÇÃO DO AWAIT DENTRO DE UMA FUNÇÃO PARA ESPERAR UMA PROMISE SER FINAIZADA

async function executa() {
    try {
        
        const f1 = await con('Frase 1', rand())
        console.log(f1)
        const f2 = await con(88, rand())
        console.log(f2)
        const f3 = await con('Frase 3', rand())
        console.log(f3)


    } catch (e) {
        console.log(e)
    }
}

executa()