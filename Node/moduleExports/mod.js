const nome = 'Joao'
const sorenome = 'Victor'

const fala = () => {
    console.log(nome, sorenome)
}
//  PODEMOS EXPORTAR FUNCOES DIRETO 
// module.exports = function(x,y) {
//     return x * y
// }

//   CLASSES
module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome
    }

    latir(){
        console.log(`${this.nome} esta latindo`)
    }
}