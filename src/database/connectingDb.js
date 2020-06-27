const Sequelize = require('sequelize')
const dbConfig = require('./dbconfig')


const sequelize = new Sequelize(dbConfig)


module.exports = { Sequelize, sequelize}

