// try {
    
// } catch (error) {
    
// } finally {

// } 

function retornaHora(data){
    if (data && !(data instanceof Date)){ // CHECANDO SE É UMA INSTÂNCIA DA FUNÇÃO CONSTRUTORA
        throw new TypeError('Esperando instância de Date');
    } 
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    })
}

try {
    const data = new Date('01-01-1999 12:00:00')
    const hora = retornaHora();
    console.log(hora) 

} catch (error) {
    console.log('Algo de errado ocorreu.')
} finally {
    console.log('Tenha um bom dia!')
}
