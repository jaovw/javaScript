const pessoas = [
    {id:3, nome: 'João'},
    {id:2, nome: 'Maria'},
    {id:1, nome: 'Kleber'}
]

/*
METODO TRAZENDO POSSIVEIS COMPLICAÇÕES, CAHEVE ID COMO STRING E ORDEM RECRIADA

const novasPessoas = {}

for (const {id, nome} of pessoas) {
    novasPessoas[id] = {id, nome}
}
*/

// COM MAP É NECESSÁRIO UTILIZAR SET() PARA SETAR OS VALORES E GET() PARA OBTER OS VALORES
const novasPessoas = new Map()

for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ... pessoa})
}

console.log(novasPessoas)