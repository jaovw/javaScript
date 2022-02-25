function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaClique = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-eq')) this.realizaSoma();
        })
    }
    this.capturaEnter = () => {
        documet.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.realizaSoma();
            
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.clear = () => this.display.value = ''

    this.realizaSoma = () => {
        try {
            const conta = eval(this.display.value)
            if (!conta) {
                alert('Conta Inválida!')
                return;
            }
            this.display.value = conta;
        } catch (error) {
            alert('Conta Inválida!')
            return;
        }
    }
    
    this.inicia = () => {
        this.capturaClique();
        this.capturaEnter();
    }
}
const calculadora = new Calculadora();
calculadora.inicia();