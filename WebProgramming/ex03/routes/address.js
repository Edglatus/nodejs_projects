const express = require('express')
const router = express.Router();

const db = require('../models/index')
    const Address = db.Address

    //Configuration
        router.use(express.json())
        router.use(express.urlencoded({ extended: true }))

//Routes
    //Create
    router.post('/', function(request, response)
    {
        Array.isArray(request.body) ? request.body.forEach((p) => Address.create(p)) : Address.create(request.body)
        response.send('Address added successfully.')
    })

    //Read
    router.get('/', function(request, response)
    {
        Address.findAll().then((addresss)=>{
            response.send(addresss);
        })
    })
    router.get('/:id', function(request, response)
    {
        Address.findByPk(request.params.id).then((address)=>{
            if (address != null)
                response.send(address)
            else
                response.send('Address not found.')
        })
    })

    //Update
    router.put('/:id', function(request, response){
        let updated = Array.isArray(request.body) ? request.body[0] : request.body

        Address.update(updated, {where: {id: request.params.id}}).then((n)=>{
            if (n[0] > 0)
                response.send('Address updated successfully.')
            else
                response.send('Address not found.')
        })
    })

    //Delete
    router.delete('/:id', function(request, response){
        Address.destroy({where: {id: request.params.id}}).then((n)=>{
            if (n > 0)
                response.send('Address removed successfully.')
            else
                response.send('Address not found.')
        })
    })

module.exports = router
