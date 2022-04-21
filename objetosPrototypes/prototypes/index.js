/* MODELO OU MOLDE PARA SER UTILIZADO MAIS DE UMA VEZ */

function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
} 


const pessoa1 = new Pessoa('Joao','Victor')

console.log(pessoa1)