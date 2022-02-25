function enviar(){
   
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    /*  JEITO ANTIGO
        nome.onsubmit = function (evento){
        evento.preventDefault()
        alert(1)
        console.log('Enviado com sucesso!')
    }; */
        const pessoas = []
    // JEITO MODERNO 
    function recebeDados(evento){
        evento.preventDefault()
        const nome = formulario.querySelector('.nome')
        const sobrenome = formulario.querySelector('.sobrenome')
        const peso = formulario.querySelector('.peso')
        const altura = formulario.querySelector('.altura')

        console.log(nome.value, sobrenome.value, peso.value, altura.value)
        let obj = {nome:nome.value, sobrenome:sobrenome.value, peso:peso.value, altura:altura.value}
        console.log(obj)
        pessoas.push(obj)
        console.log(pessoas)
        resultado.innerHTML += `Seu nome é ${nome.value} ${sobrenome.value} com ${peso.value} e ${altura.value} de altura </br>`
    }
    formulario.addEventListener('submit', recebeDados);
    
};
enviar ();

