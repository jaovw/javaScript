/*
fetch('pessoas.json').then(res => res.json())
.then(json => resultado(json))
*/
//  UTILIZANDO O AXIOS - NÃO RESTONAR PROMISES DE RESPOSTA
axios('pessoas.json').then(res => resultado(res.data))

function resultado(json) {

    const table = document.createElement('table')
    for(pessoa of json) {
        
        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.salario
        tr.appendChild(td3)

        table.appendChild(tr)
    }

    const res = document.querySelector('.resultado')
    res.appendChild(table)
}