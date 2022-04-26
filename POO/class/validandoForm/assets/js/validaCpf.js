class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf() {
         const cpfSemDigito = this.cpfLimpo.slice(0,-2)
         const digito1 = ValidaCpf.geraDigito(cpfSemDigito)             // AO INVES DE INSTANCIAR COM THIS, UTILIZAR A CLASS.FUNCAO()
         const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1)   // AO INVES DE INSTANCIAR COM THIS, UTILIZAR A CLASS.FUNCAO()
         this.novoCpf = cpfSemDigito + digito1 + digito2
    }

    // PARTINDO DO PRINCÍPIO DE QUE NÃO ESTAMOS USANDO THIS NESSA FUNÇÃO, PODEMOS TORNA-LA ESTÁTICA
    static geraDigito(cpfSemDigito) {
        let total = 0
        let reverso = cpfSemDigito.length + 1

        for(let n of cpfSemDigito) {
            total += reverso * Number(n)
            reverso --
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }
    
    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequence()) return false
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo

    }
}
/*
const validaCpf = new ValidaCpf('070.987.720-03')

if(validaCpf.valida()) {
    console.log('CPF válido.')
} else {
    console.log('CPF inválido.')
}
*/