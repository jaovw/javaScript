// MÉTODOS ÚTEIS

// A MELHOR FORMA DE COPIAR OS DADOS DE UM OBJ PARA O OUTRO 

const produto = {nome:'produto 1',preco:1}
const outroProduto = {...produto, material: 'madeira'} // UTILIZANDO O METODO SPREAD E PODENDO ADD NOVOS ATRIBUTOS

const maisProduto = Object.assign({}, produto, {vendedor: 'nome vendedor'}) //UTILIZANDO ASSIGN

outroProduto.nome = 'produto 2'
outroProduto.preco = 3

console.log(produto)
console.log(outroProduto)
console.log(maisProduto)

// Object.keys() MOSTRA AS CHAVES DO OBJETO
// Object.freeze(nome_obj) NÃO DEIXA MODIFICAR

// RETORNA A DESCRIÇÃO DAS PROPRIEDADES (PROPERTIES)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// DIFERENTE DO KEYS() METODO QUE MOSTRA OS VALORES
console.log(Object.values(produto))
// MOSTRA UM ARRAY COM OS VALORES EM ARRAY
console.log(Object.entries(produto))

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}