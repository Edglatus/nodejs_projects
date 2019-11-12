const express = require('express')
const router = express.Router()

const db = require('../models/index')
const Address = db.Address

const op = require('./operations')

// Configuration
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// Routes
// Create
router.post('/', (request, response) => { op.post(request, response, Address, 'Address') })

// Read
router.get('/', (request, response) => { op.getAll(response, Address) })
router.get('/:id', (request, response) => { op.getOne(request, response, Address, 'Address') })

// Update
router.put('/:id', (request, response) => { op.put(request, response, Address, 'Address') })

// Delete
router.delete('/:id', (request, response) => { op.del(request, response, Address, 'Address') })

module.exports = router
