const Sequelize = require('sequelize')
const EmployeeModel = require('./employee')
const AddressModel = require('./address')

//Sequelize Connection
    const sequelize = new Sequelize('ex3', 'webUser', '', {
      host: 'localhost',
      dialect: 'mysql'
    })

    sequelize.authenticate().then(()=>{console.log("Logged Successfully")}).catch((error)=>{console.log(error)})

//Import Models
    const Employee = EmployeeModel(sequelize, Sequelize)
    const Address = AddressModel(sequelize, Sequelize)

//Create Tables
    sequelize.sync({ force: false })
      .then(() => {
        console.log(`Database & tables created!`)
    })

//Export Module
module.exports = { Employee, Address }
