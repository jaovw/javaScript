/* IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION */
(function(idade, peso, altura){
    const sobrenome = 'Victor'
    function criaNome(nome){
        return `${nome} ${sobrenome}`
    }

    function falaNome(){
        console.log(criaNome('João'))
    }
    
    falaNome()
    console.log(idade,peso,altura);
})(22,80,1.74);
