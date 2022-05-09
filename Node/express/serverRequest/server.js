const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send(`
                <form action= "/" method = "POST" >
                    Nome do cliente: <input type = "text" name = "nome" ></input>
                    <button>Enviar</button>
                </form>
     `)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Formulário recebido. Informação enviada: ${req.body.nome}` )  //  BODY DA REQUISIÇÃO | BODY.NOME >> "NAME" DO FORMULARIO 
})


app.get('/users/:id?/:params?', (req, res) => {
    console.log(req.params)     //  REQ.PARAMS  >>  PARAMETROS ENVIDOS 
    console.log(req.query)      //  REQ.QUERY   >>  QUERY STRING ENVIADA  >>  {GET}/?VALOR_DESEJADO=...&VALOR_DESEJADO=...
    // res.send(req.params)
    res.send(req.query)
})

app.listen(3000, () => {
    console.log('Acesse http://localhost:3000')
})