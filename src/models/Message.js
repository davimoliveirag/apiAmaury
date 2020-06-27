const {Sequelize, sequelize} = require('../database/connectingDb')

const Message = sequelize.define('message',{
    origin: {
        type: Sequelize.DataTypes.STRING
    },
    destiny: {
        type: Sequelize.DataTypes.STRING
    },
    message: {
        type: Sequelize.DataTypes.TEXT
    }
})

module.exports = Message


