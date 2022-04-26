// MIXING

const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    
}
const beber  = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
    
}

// const pessoaPrototype = {...falar, ...beber, ...comer} PODENDO UTILIZAR O SPREAD OPERATOR - FAZENDO UMA CÓPIA
const pessoaPrototype = Object.assign({}, falar,comer,beber)

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Joao','V')
const p2 = criaPessoa('Ana','P')

p2.falar()
p1.comer()
p2.beber()