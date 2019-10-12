const express = require('express')
const server = express();

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

var persons = []

server.get('/client', function(request, response)
{
    response.send(persons);
})

server.get('/client/:name', function(request, response)
{
    response.send(persons.find(function(p){
        if(p.name == request.params.name)
            return p
    }));
})

server.post('/client', function(request, response){
    request.body.forEach(function(p){
        persons.push(p)
    })

    response.send('Person added successfully.')
})

server.put('/client/:name', function(request, response){
    let removed = persons.find(function(p){
        if(p.name == request.params.name)
            return p
    })

    if (removed != null)
    {
        persons[persons.indexOf(removed)] = request.body
        response.send('Person updated successfully.')
    }
    else {
        response.send('Person not found.')
    }
})

server.delete('/client/:name', function(request, response){
    let removed = persons.find(function(p){
        if(p.name == request.params.name)
            return p
    })

    if (removed != null)
    {
        persons.splice(persons.indexOf(removed), 1)
        response.send('Person removed successfully.')
    }
    else {
        response.send('Person not found.')
    }
})

server.listen(8080, function(){
    console.log("Listening on port 8080...")
})
