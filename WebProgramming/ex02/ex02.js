const express = require('express')
const server = express();

//Configuration
    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))

var persons = []

//Routes
server.get('/client', function(request, response)
{
    response.send(persons);
})

server.get('/client/:name', function(request, response)
{
    let person = persons.find(function(p){
        if(p.name == request.params.name)
            return p
    })

    if (person != null)
        response.send(person)
    else
        response.send('Person not found.')
})

server.post('/client', function(request, response)
{
    request.body.forEach((p) => persons.push(p))

    response.send('Person added successfully.')
})

server.put('/client/:name', function(request, response)
{
    let updated = persons.find(function(p){
        if(p.name == request.params.name)
            return p
    })

    if (updated != null)
    {
        persons[persons.indexOf(updated)] = Array.isArray(request.body) ? request.body[0] : request.body
        response.send('Person updated successfully.')
    }
    else
        response.send('Person not found.')
})

server.delete('/client/:name', function(request, response)
{
    let removed = persons.find(function(p){
        if(p.name == request.params.name)
            return p
    })

    if (removed != null)
    {
        persons.splice(persons.indexOf(removed), 1)
        response.send('Person removed successfully.')
    }
    else
        response.send('Person not found.')
})

const port = 8080
app.listen(port, function()
{
    console.log('Listening on port ' + port)
})
