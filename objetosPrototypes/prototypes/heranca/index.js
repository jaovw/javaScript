function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco) // LINKAR OS ATRIBUTOS DE CAMISETA COM PRODUTO --> HERDANDO 
    this.cor = cor 
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta // CORRIGINDO O ERRO DE NAO HAVER PROTOTYPE.CONSTRUCTOR

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco) //  HERDANDO 
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
        if(typeof valor !== 'number') {
            throw new TypeError('Valor invalido')
        }
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

// CONSTRUINDO OS OBJ
const camiseta = new Camiseta('Hurley', 8.5, 'Azul')
const produto = new Produto('Gen', 2)
const caneca = new Caneca('Stanley', 55, 'Termica')
// caneca.estoque = 'fff'
caneca.estoque = 5

camiseta.aumento(10)
caneca.desconto(10)

console.log(camiseta)
console.log(produto)
console.log(caneca)