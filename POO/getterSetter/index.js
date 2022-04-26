const _velocidade = Symbol() // GERA UM ID ALEATORIO
class Carro{
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor){
        if(typeof valor !== 'number') {
            throw new Error('Valor invalido')
        }
        if(valor >= 100 || valor <= 0 ) {
            throw new Error('Fora do limite')
        }
        this[_velocidade] = valor
    }
    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade] ++
    }

    freiar() {
        if(this[_velocidade] <= 0) return
        this[_velocidade] --
    }
}

const c1 = new Carro('Fusca')

c1.velocidade = 99
console.log(c1.velocidade)

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }
    set nomeCompleto(valor){
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('João', 'Victor')
p1.nomeCompleto = 'João Victor Woncce'
console.log(p1.sobrenome)