// MÉTPDPS ESTÁTICOS
// MÉTODOS QUE CONSEGUIMOS INSTANCIAR SEM UTILIZAR O NEW

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    // MÉTODOS DE INSTANCIA
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 1
    }

    // MÉTODO ESTÁTICO
    static trocaPilha() {
        console.log('Trocando pilha ...')
    }
}

// INSTANCIANDO A CLASSE CRIANDO UM NOVO OBJETO, USANDO NEW O CONSTRUCTOR É CHAMADO ASSIM TENDO ACESSO AOS DADOS
const controle = new ControleRemoto('LG')

controle.aumentarVolume()
controle.aumentarVolume()
console.log(controle)

// REFERENTE A CLASE SEM ACESSO AO DADOS DA INSTANCIA 
ControleRemoto.trocaPilha()