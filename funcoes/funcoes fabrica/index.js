/* FACTORY FUNCTIONS - FUNÇÕES QUE RETORNAM OBJETOS*/
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto = 'falando sobre FF') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso, 
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        //GETTER
        get temp(){
            return this.peso / 2
        },
        //SETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    }
}

const p1 = criaPessoa('Joao', 'Victor', 1.7,80);

console.log(p1.imc())
console.log(p1.temp)

p1.nomeCompleto = 'Henrique Paulo'
console.log(p1.nomeCompleto)
console.log(p1.fala())