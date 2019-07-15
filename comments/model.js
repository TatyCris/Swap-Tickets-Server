const Sequelize = require('sequelize')
const sequelize = require('../db')
const Ticket = require('../tickets/model')

const Comment = sequelize.define('comment',
    {
        author: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'author'
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'text'
        }
    },

    { tableName: 'comments' }
)

Ticket.hasMany(Comment)
Comment.belongsTo(Ticket)
module.exports = Comment