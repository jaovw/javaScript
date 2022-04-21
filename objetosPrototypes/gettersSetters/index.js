function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco

    let esoquePrivado = estoque // CASO QUEIRA PROTEGER ALGUM DADO PARA NÃO SER ALTERADO, DEPENDENDO DA SITUAÇÃO
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => esoquePrivado,
        set: (valor) => {
            if(typeof valor !== 'number') {
                throw new TypeError('Valor invalido')
            }
            esoquePrivado = valor
        }
    })
}

const p1 = new Produto('Lampada', 13)
p1.estoque = '1'
console.log(p1)
