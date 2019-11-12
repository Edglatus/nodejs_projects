const express = require('express')
const router = express.Router()

const db = require('../models/index')
const Employee = db.Employee

const op = require('./operations')

// Configuration
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// Routes
// Create
router.post('/', (request, response) => { op.post(request, response, Employee, 'Employee') })

// Read
router.get('/', (request, response) => { op.getAll(response, Employee) })
router.get('/:id', (request, response) => { op.getOne(request, response, Employee, 'Employee') })

// Update
router.put('/:id', (request, response) => { op.put(request, response, Employee, 'Employee') })

// Delete
router.delete('/:id', (request, response) => { op.del(request, response, Employee, 'Employee') })

module.exports = router
