const express = require('express')
const router = express.Router()

const db = require('../collections/collections')
const Parties = db.Parties

//Configuration

//Routes
	router.get('/', (request, response) => {
		console.log(Parties.find())
		response.render('partyPage', {party: Parties.find()})
	})
	router.post('/', (request, response) => {
		Parties.insert({
			name: request.body.formName,
			extras: request.body.formDate
		})
		response.redirect('/party')
	})

	router.get('/delete/:id', (request, response) => {
		Parties.chain().find({$loki : {'$aeq': request.params.id}}).remove()

		response.redirect('/party')
	})

module.exports = router;