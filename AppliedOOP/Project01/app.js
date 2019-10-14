const express = require('express')
const server = express()
const hb = require('express-handlebars') 

//Configuration
	//Express
    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))
	//View Engine
	server.engine('handlebars', hb({defaultLayout: 'main'}))
	server.set('view engine', 'handlebars')

const guest = require('./routes/guests')

server.use('/guest', guest)

const port = 8080
server.listen(port, () => {console.log('Listening on port '+port)})