const express = require('express')
const app = express()

//      http://meusite.com/  >>  GET  >>  ENTREGUE A PÁGINA " / "
//      http://meusite.com/sobre  >>  GET  >>  ENTREGUE A PÁGINA " /SOBRE "
//      http://meusite.com/contato  >>  GET  >>  ENTREGUE A PÁGINA " /CONTATO "

// app.get('/', (req, res) => {    //  REQUISIÇÃO (REQUEST) E REPOSTA (RESPONSE) 
//     res.send('Hello World')
// })

app.get('/', (req, res) => {
    res.send(`
                <form action= "/" method = "POST" >
                    Nome do cliente: <input type = "text" name = "nome" ></input>
                    <button>Enviar</button>
                </form>
     `)
})

app.post('/', (req, res) => {
    res.send('Formulário recebido.')
})

app.get('/contato', (req, res) => {
    res.send('Página para contato')
})

app.listen(3000, () => {
    console.log('Acesse http://localhost:3000')
})