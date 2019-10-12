const express = require('express');
const server = express();

var counter = 0

server.get('/contador', function(req, res){
    res.send("Contador: " + counter)
})

server.post('/contador', function(req, res){
    counter++
    res.send("Contador Incrementado.")
})

server.put('/contador', function(req, res){
    counter = 0
    res.send("Contador Zerado.")
})

server.delete('/contador', function(req, res){
    counter--
    res.send("Contador Decrementado.")
})

server.listen(8080, function()
{
    console.log("Listening on port 8080...")
})
