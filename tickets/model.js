const Sequelize = require('sequelize')
const db = require('../db')
const Event = require('../events/model')

const Ticket = db.define('tiket',
    {
        pictureUrl: {
            type: Sequelize.STRING,
            field: 'picture url'
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'price'
        },
        description: {
            type: Sequelize.STRING,
            field: 'description'
        }
    },
    { tableName: 'tikets' }
)

Event.hasMany(Ticket)
Ticket.belongsTo(Event)
module.exports = Ticket
