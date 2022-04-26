class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.isValid()
        const senhasValidas = this.passwordIsValid()

        if(camposValidos && senhasValidas){
            window.alert('Enviado')
            this.formulario.submit()
        }
    }
    passwordIsValid() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.consfirmar-senha')

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, 'Campos distintos')
            this.criaErro(repetirSenha, 'Campos distintos')

            return valid = false
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
            
            return valid = false
        }

        return valid
    }

    isValid() {
        let valid = true
        // LIMPANDO AS MENSAGENS DE ERRO
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            // PEGANDO O CONTEUDO DO ELEMENTO ANTERIOR -> LABEL
            let label = campo.previousElementSibling.innerText

            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
            return false
        }
        return true
    }

    validaUsuario(campo) {
        const ususario = campo.value
        let valid = true

        if(ususario.length < 3 || ususario.length > 12 ) {
            this.criaErro(campo, 'Usuário precisa conter entre 3 e 12 caracteres.')
            valid = false
        }
        
        if(!ususario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário precisa conter apenas letras ou numeros')
            valid = false
        }
        return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()