pontuacaoUsuario = 999;

if(pontuacaoUsuario >=1000){
    console.log('Usuário VIP')
}else{
    console.log('Usuário normal')
}
// utilizando operador ternário 
pontuacaoUsuario += 2

pontuacaoUsuario>=1000?console.log('VIP'):console.log('Normal')

pontuacaoUsuario -=100
const nivelAcesso = pontuacaoUsuario >= 1000?'VIP':'Standart';

console.log(nivelAcesso)

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //fallback

console.log(corPadrao)