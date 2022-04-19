const pessoa = {
    nome: 'Joao',
    sobrenome: 'Victor'
}

console.log(pessoa.nome)

// ACESSANDO DINAMICAMENTE PARA CASOS ESPECÍFICOS, UTILIZANDO []
chave = 'sobrenome'
console.log(pessoa[chave]) 

// UTILIZANDO CONSTRUTOR PARA NOVOS OBJ

const pessoa1 =  new Object()

pessoa1.nome = 'Ana'
pessoa1.sobrenome = 'Paula'

delete pessoa1.sobrenome

console.log(pessoa1)

pessoa.falarNome = ()=> console.log(`${pessoa.nome} está falando`)

pessoa.falarNome()

// FACTORY FUNCTION

const criaPessoa = (nome, sobrenome) => {
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Arnaldo', 'Coelho')

console.log(p1)
console.log(p1.nomeCompleto)

// CONSTRUCTOR FUNCTION - NÃO USAR ARROW
function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this) // NADA IRA SER ALTERADO ANTES DISSO 
}

const pe1 = new Pessoa('Henrique', 'Moura')
//Object.freeze(pe1) //PARA TRAVAR A ALTERAÇÃO

pe1.nome = 'Pedro'
console.log(pe1)
