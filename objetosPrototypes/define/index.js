function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // MOSTRA A CHAVE
        value: estoque, // VALOR
        writable: false, // SOBRESCREVER
        configurable: true // MODIFICAR (APAGARR/ECONFIG)
    })
}

const p1 = new Produto('Camiseta', 20, 5)

console.log(p1)
console.log(Object.keys(p1))

function Produto1(nome, preco) {
    this.nome = nome
    this.preco = preco

    Object.defineProperties(this,{
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    })
}

const p2 = new Produto1('Tenis', 100, 1)
console.log(p2)