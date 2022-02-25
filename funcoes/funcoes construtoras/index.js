/*  CONSTRUCTOR FUNCTIONS  */
/*  UTILIZANDO A PRIMEIRA LETRA MAIUSCULA E POSTERIORMENTE 'NEW' PARA A CRIAÇÃO */

function Pessoa(nome, sobrenome) {
    // atributos/metodos privados 
    const ID = 1
    const metodoInterno = () => {

    }

    // atributos/metodos publicos 
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () =>{
        console.log(`O nome do obj ${nome} ${sobrenome}.`)
    }
}

const p1 = new Pessoa('João', 'Victor')
// NEW -> cria um objeto vazio fazendo o this apontar para esse objeto vazio (p1)
console.log(p1.sobrenome)
p1.metodo()