const express = require('express');
const server = express();

var counter = 0

server.get('/counter', function(req, res)
{
    res.send("Counter: " + counter)
})

server.post('/counter', function(req, res)
{
    counter++
    res.send("Counter Increased.")
})

server.put('/counter', function(req, res)
{
    counter = 0
    res.send("Counter Reset.")
})

server.delete('/counter', function(req, res)
{
    counter--
    res.send("Counter Decreased.")
})

const port = 8080
app.listen(port, function()
{
    console.log('Listening on port ' + port)
})
