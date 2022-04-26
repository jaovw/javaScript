/*
POLIMORFISMO
FAZER COM QUE UM MESMO MÉTODO SE COMPORTE DE FORMA DIFERENTE ENTRE CLASSES FILHAS DE UM MESMO PAI
*/

function Conta(agencia, conta, saldo) { // SuperClass
    this.agencia = agencia
    this.conta = conta 
    this.saldo = saldo

    
}

Conta.prototype.sacar = function(valor) {

    if(this.saldo < valor) {
        console.log('Saldo insuficiente.')
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
}

Conta.prototype.verSaldo = function(){
    console.log(`ag.:${this.agencia}/${this.conta} | Saldo: BRL ${this.saldo.toFixed(2)}`)
}

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente')
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const contaCorrente = new CC(11,22,0,100)
console.log(contaCorrente)
contaCorrente.sacar(90)
contaCorrente.verSaldo()

console.log('==================')

const contaPoupansa = new CP(33,44,0)
console.log(contaPoupansa)
contaPoupansa.sacar(101)
contaPoupansa.verSaldo()