const express = require('express')
const router = express.Router()

const db = require('../collections/collections')
const Guests = db.Guests

//Configuration

//Routes
	router.get('/', (request, response) => {
		response.render('guestPage', {guest: Guests.find()})
	})
	router.post('/', (request, response) => {
		Guests.insert({
			name: request.body.formName,
			extras: request.body.formExtras
		})
		response.redirect('/guest')
	})
	router.put('/:id', (request, response) => {
		let updated = Guests.find({id: request.params.id})

		updated.name = request.body.formName
		updated.extras = request.body.formExtras
		Guests.update(updated)

		response.redirect('/guest')
	})
	router.delete('/:id', (request, response) => {
		let toDelete = Guests.find({id: request.params.id})
		Guests.remove(toDelete)

		response.redirect('/guest')
	})

module.exports = router;