const paginaInicial = (req, res) => {
    res.send(` 
                <form action= "/" method = "POST" >
                    Nome do cliente: <input type = "text" name = "nome" ></input>
                    <button>Enviar</button>
                </form>          
    `)
}

const post = (req, res) => {
    res.send('Sua nova rota de POST')
}

module.exports = {paginaInicial, post}