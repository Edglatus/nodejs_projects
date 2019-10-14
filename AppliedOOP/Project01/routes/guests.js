const express = require('express')
const router = express.Router()

const db = require('../collections/collections')
const Guests = db.Guests

//Configuration

//Routes
	router.get('/', (request, response) => {
		console.log(Guests.find())
		response.render('guestPage', {guest: Guests.find()})
	})
	router.post('/', (request, response) => {
		Guests.insert({
			name: request.body.formName,
			extras: request.body.formExtras
		})
		response.redirect('/guest')
	})

	router.get('/delete/:id', (request, response) => {
		Guests.chain().find({$loki : {'$aeq': request.params.id}}).remove()

		response.redirect('/guest')
	})

module.exports = router;