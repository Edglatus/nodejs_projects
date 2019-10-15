const express = require('express')
const router = express.Router()

const db = require('../collections/collections')
const Guests = db.Guests

//Configuration

//Routes
	//Create
	router.post('/', (request, response) => {
		Guests.insert({
			name: request.body.formName,
			extras: request.body.formExtras
		})
		response.redirect('/guest')
	})

	//Read
	router.get('/', (request, response) => {
		response.render('guestPage', {guest: Guests.find()})
	})

	//Update
	router.get('/update/:id', (request, response) => {
		let updated = Guests.findObject({$loki : {'$aeq': request.params.id}})

		response.render('guestPage', {guest: Guests.find(), nameDefault: updated.name, extrasDefault: updated.extras})
	})
	router.post('/update/:id', (request, response) => {
		let updated = Guests.findObject({$loki : {'$aeq': request.params.id}})

		updated.name = request.body.formName
		updated.extras = request.body.formExtras

		Guests.update(updated)

		response.redirect('/guest')
	})

	//Delete
	router.get('/delete/:id', (request, response) => {
		Guests.chain().find({$loki : {'$aeq': request.params.id}}).remove()

		response.redirect('/guest')
	})

module.exports = router;
