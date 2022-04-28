function rand(max,min) {

  max *= 1000
  min *= 1000

  return Math.floor(Math.random() * (max - min) + min)
}

/*
function conection(msg,tempo) {
  setTimeout(() => {
    console.log(msg)
  },tempo)
}

conection('Frase 01', rand(1,5))
conection('Frase 02', rand(1,5))
conection('Frase 03', rand(1,5))
*/

function conection(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('404'))

    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

conection('Primeira conexão sendo realizada.', rand(1,5)).then(r => {
  console.log(r)
  return conection('Conexão realizada com sucesso!', rand(1,3))
}).then(r => {
  console.log(r)
  return conection(123456, rand(1,3))
}).then((r) => {
  console.log(r)
  return conection('Conexão finalizada.', rand(1,3))
}).then( r => {
  console.log(r)
}).catch(e => {
  console.log(e)
})