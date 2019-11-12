const express = require('express')
const server = express()

const employee = require('./routes/employee')
const address = require('./routes/address')

// Configuration
// Express
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/employee', employee)
server.use('/address', address)

const port = 8080
server.listen(port, function () {
  console.log('Listening on port ' + port)
})
