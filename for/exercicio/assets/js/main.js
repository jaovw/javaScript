const elementos = [
    {tag: 'h1', texto: 'Título a partir do JS'},
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'section', texto: 'Frase 03'},
    {tag: 'footer', texto: 'Frase 04'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i ++){

    //console.log(elementos[i].tag)
    let {tag, texto }= elementos[i];
    let elemento = document.createElement(tag);
    elemento.innerHTML = texto;
    elemento.innerText = texto
    div.appendChild(elemento);
    /* 
        USANDO PELO NODE
    let textoCriado = document.createTextNode(texto);
    elemento.appendChild(textoCriado)
    div.appendChild(elemento);
    */
}

container.appendChild(div);