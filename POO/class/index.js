class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new Pessoa('João', 'V')
const p2 = new Pessoa('Pedro', 'A')

p2.falar()