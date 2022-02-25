function criaCalculadora () {
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        inicia(){
            this.cliqueBotao();
            this.pressionaEnter();
        },

        cliqueBotao(){
            document.addEventListener('click', e =>{
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')){
                    this.realizaSoma();
                }
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        },
        clearDisplay(){
            this.display.value = '';
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },
        realizaSoma(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida!');
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta Inválida!');
                    return;
            }
        },
        pressionaEnter(){
            this.display.addEventListener('keypress', e =>{
                if (e.keyCode === 13){
                    this.realizaSoma();
                }
            })
        }
    }
    
}

const calculadora = criaCalculadora();
calculadora.inicia()