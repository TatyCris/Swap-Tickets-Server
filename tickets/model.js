const Sequelize = require('sequelize')
const db = require('../db')
const Event = require('../events/model')
const User = require('../user/model')

const Ticket = db.define('ticket',
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
        },
        author: {
            type: Sequelize.STRING,
            field: 'author'
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
    },
    { tableName: 'tickets' }
)

Event.hasMany(Ticket)
Ticket.belongsTo(Event)
User.hasMany(Ticket)
Ticket.belongsTo(User)
module.exports = Ticket
