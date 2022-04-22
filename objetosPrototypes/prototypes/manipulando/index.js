const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = new Object
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objB.chaveA)
console.log(objC.chaveA)

/* =========================================== */

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - ((percentual / 100) * this.preco)
}
 
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + ((percentual / 100) * this.preco)
}

const p1 = new Produto('camiseta', 50)

const p2 = {
    nome: 'tenis',
    preco: 20
}
/* NAO RECOMENDADO LINKAR O OBJ EM OUTRO PARA O USO DO PROTOTYPE CRIADO */
// Object.setPrototypeOf(p2, p1)

Object.setPrototypeOf(p2, Produto.prototype)

//CRIANDO UM OBJETO E JA SETANDO O PROTOTYPE DE CARA 

const p3 = Object.create(Produto.prototype)

// PODENDO CRIAR AS CHAVES OU CONFIGURA-LAS

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 55
    },
    tamanho: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 10
    }
})

p1.desconto(9)
p2.aumento(100)
p4.desconto(20)
console.log(p1, p2, p3, p4)