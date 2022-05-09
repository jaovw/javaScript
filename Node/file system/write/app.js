const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'texte.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')


const pessoas = [
    {nome:'João'},
    {nome:'Maria'},
    {nome:'Lucas'},
    {nome:'Daniel'}
]

const json = JSON.stringify(pessoas,'',2)       // .JSON PARA STRING

// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho)
    render(dados)
}

function render(dados) {
    dados = JSON.parse(dados)       // .JSON PARA OBJ
    dados.forEach(val => console.log(val.nome))
}

leArquivo(caminhoArquivo)

// const dadosArquivos = leArquivo(caminhoArquivo).then(dados => console.log(dados))