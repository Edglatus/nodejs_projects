const express = require('express')
const router = express.Router()

const db = require('../collections/collections')
const Parties = db.Parties

//Configuration

//Routes
	//Create
	router.post('/', (request, response) => {
		Parties.insert({
			name: request.body.formName,
			date: request.body.formDate
		})
		response.redirect('/party')
	})

	//Read
	router.get('/', (request, response) => {
		response.render('partyPage', {party: Parties.find()})
	})

	//Update
	router.get('/update/:id', (request, response) => {
		let updated = Parties.findObject({$loki : {'$aeq': request.params.id}})

		response.render('partyPage', {party: Parties.find(), nameDefault: updated.name, dateDefault: updated.date})
	})
	router.post('/update/:id', (request, response) => {
		let updated = Parties.findObject({$loki : {'$aeq': request.params.id}})

		updated.name = request.body.formName
		updated.date = request.body.formDate

		Parties.update(updated)

		response.redirect('/party')
	})

	//Delete
	router.get('/delete/:id', (request, response) => {
		Parties.chain().find({$loki : {'$aeq': request.params.id}}).remove()

		response.redirect('/party')
	})

module.exports = router;
