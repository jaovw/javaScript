const express = require('express')
const route = express.Router()
const {paginaInicial, post} = require('./controllers/homeController')
const {contato} = require('./controllers/contatoContoller')

//  ROTAS DA HOME
route.get('/', paginaInicial)
route.post('/', post)

//  ROTAS PARA "CONTATO"

route.get('/contato', contato)

module.exports = route