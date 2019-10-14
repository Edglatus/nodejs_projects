const loki = require('lokijs')
const database = new loki('gestao04')

const Guests = database.addCollection('guests', {distinct : ['id']})
const Parties = database.addCollection('parties', {distinct : ['id']})

Guests.insert({name: 'Eddy', extras: '2'})
Guests.insert({name: 'Cake', extras: '3'})
Guests.insert({name: 'Jeffy', extras: '1'})

Parties.insert({name: 'The End', date: new Date('17/12/2015')})
Parties.insert({name: 'RPG', date: new Date('31/12/5420')})

module.exports = {
	Guests : database.getCollection('guests'), 
	Parties : database.getCollection('parties')
}