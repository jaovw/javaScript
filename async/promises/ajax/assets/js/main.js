// =============== UTILIZANDO CALLBACK
/*
const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true) // .OPEN() GET
    xhr.send()  // .SEND() CASO SEJA POST
    
    // CALLBACK
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.sucess(xhr.responseText)
        } else {
            obj.error(xhr.statusText);
        }
    })
}
======================================= */
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })

}


document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')

    //  QUANDO USADO CALLBACK
    /*
    const objeto = {
        method: 'GET',
        url: href,
        sucess(response) {
            carregaResultado(response)
        },
        error(errorText) {
            console.log(errorText)
        }
    }
    */

    const objeto = {
        method: 'GET',
        url: href
    }
    //  MÉTODO BASICO UTILIZANDO .THEN() E .CATCH()
    /*
    request(objeto).then(response => {
        carregaResultado(response)
    }).catch(e =>console.log(e))
    */
   
    try {
        const response = await request(objeto)
        carregaResultado(response)
    } catch (e) {
        console.log(e)
    }
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}