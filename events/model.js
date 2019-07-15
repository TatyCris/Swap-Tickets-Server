const Sequelize = require('sequelize')
const sequelize = require('../db')

const Event = sequelize.define('event',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'name'
        },
        description: {
            type: Sequelize.STRING,
            field: 'description'
        },
        pictureUrl: {
            type: Sequelize.STRING,
            field: 'picture url'
        },
        start: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            field: 'start date'
        },
        end: {
            type: Sequelize.DATEONLY,
            field: 'end date'
        }
    },

    { tableName: 'events' }
)

module.exports = Event