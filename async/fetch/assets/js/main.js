//  MLHORIA PARA XMLHTTPREQUEST
//  FATCH() -> RETORNA POR PADRÃO UMA PROMISE

/*
fetch('page1.html').then(resposta => {
    if(resposta.status !== 200) throw new Error('ERROOU')
    return resposta.text()      //  .TEXT() RETORNA UMA PROMISE
}).then(html => console.log(html))
.catch(e => console.error(e))
================================================================ */

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)

        if(response.status !== 200) throw new Error('ERROUUUU')
        const html = await response.text()
        carregaResultado(html)

    } catch (e) {
        console.error(e)
    }
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}
