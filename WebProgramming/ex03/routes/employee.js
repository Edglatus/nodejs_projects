const express = require('express')
const router = express.Router();

const db = require('../models/index')
    const Employee = db.Employee

    //Configuration
        router.use(express.json())
        router.use(express.urlencoded({ extended: true }))

//Routes
    //Create
    router.post('/', function(request, response)
    {
        Array.isArray(request.body) ? request.body.forEach((p) => Employee.create(p)) : Employee.create(request.body)
        response.send('Employee added successfully.')
    })

    //Read
    router.get('/', function(request, response)
    {
        Employee.findAll().then((employees)=>{
            response.send(employees);
        })
    })
    router.get('/:id', function(request, response)
    {
        Employee.findByPk(request.params.id).then((employee)=>{
            if (employee != null)
                response.send(employee)
            else
                response.send('Employee not found.')
        })
    })

    //Update
    router.put('/:id', function(request, response){
        let updated = Array.isArray(request.body) ? request.body[0] : request.body

        Employee.update(updated, {where: {id: request.params.id}}).then((n)=>{
            if (n[0] > 0)
                response.send('Employee updated successfully.')
            else
                response.send('Employee not found.')
        })
    })

    //Delete
    router.delete('/:id', function(request, response){
        Employee.destroy({where: {id: request.params.id}}).then((n)=>{
            if (n > 0)
                response.send('Employee removed successfully.')
            else
                response.send('Employee not found.')
        })
    })

module.exports = router
