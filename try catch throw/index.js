/* 
try {
    console.log(inexistente)
} catch(err){
    console.log('Isso não existe!')
    // console.log(err)
}
*/
function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Somente numeros')
    }
    return x + y;
}

try {
    console.log(soma(2,1));
    console.log(soma('a',2))
} catch (e) {
    console.log(e)
    console.log('Algo inesperado ocorreu.')
}