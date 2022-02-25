//console.log("Hello World!")
// capturando o valor do submit 
const form = document.querySelector('#formulario');

form.addEventListener('submit',function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    //console.log(peso, altura)
    if(!peso && !altura){
        setResultado('Dados inválidos', false)
        return;
    }
    if(!peso){
        setResultado('Peso inválido', false)
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false)
        return;
    }
    
    const imc = getImc(peso,altura);
    const avaliacao = getAvaliacao(imc);
    const msg = `Seu IMC é ${imc} (${avaliacao})`
    setResultado(msg, true)
    /*
    setResultado('Hello World');
    criaParagrafo();
    setResultado();
    */
});
function getAvaliacao (imc){
    const avaliacao= ['Abaixo do peso','Peso normal','Sobrepeso',
                    'Obesidade 1 grau','Obesidade 2 grau','Obesidade 3 grau']
    // === NÃO  RECOMENDADO === caso o IF seja pequeno é viavel para deixar mais visual                
    if(imc >= 39.9) return avaliacao[5];
    if(imc >= 34.9) return avaliacao[4];
    if(imc >= 29.9) return avaliacao[3];
    if(imc >= 24.9) return avaliacao[2];
    if(imc >= 18.5) return avaliacao[1];
    if(imc < 18.5) return avaliacao[0];
};

function getImc(peso,altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2);
};

function criaParagrafo(){
    const p = document.createElement('p');
    //p.classList.add('paragrafo') // add uma classe no elemento criado
    return p;
};

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    
    //resultado.innerHTML = `<h3>${msg}</h3>` // mais elegante 
    resultado.innerHTML =''
    const p = criaParagrafo();

    if(isValid){
        p.classList.add('sucesso');
    }else{
        p.classList.add('fracasso');
    };
    p.innerHTML = msg;
    resultado.appendChild(p);
    
    //getAvaliacao();
};