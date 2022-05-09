const express = require('express')
const route = express.Router()
const {paginaInicial, post} = require('./src/controllers/homeController')
const {contato} = require('./src/controllers/contatoContoller')

//  ROTAS DA HOME
route.get('/', paginaInicial)
route.post('/', post)

//  ROTAS PARA "CONTATO"

route.get('/contato', contato)

module.exports = route