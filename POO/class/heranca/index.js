class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) return

        this.ligado = true
    }
    desligar() {
        if(!this.ligado) return

        this.ligado = false
    }
}

// EXTENDENDO A HERANÇA 
class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new SmartPhone('Iphone', 'Vermelho', '12 Pro')
s1.ligar()
console.log(s1)