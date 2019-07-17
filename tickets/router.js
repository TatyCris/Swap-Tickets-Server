const express = require('express')
const Ticket = require('./model')
const Event = require('../events/model')
const auth = require('../auth/middleware')

const router = express.Router()

router.get('/events/:id/tickets', function (req, res, next) {
    Event
        .findOne({ where: { id: req.params.id } })
        .then(event => {
            if (!event) {
                res.status(404).send('Event not found')
            }

            Ticket
                .findAll({ where: { eventId: req.params.id } })
                .then(tickets => res.status(200).json(tickets))
                .catch(err => next(err))
        })
})

router.post('/events/:id/tickets', auth, function (req, res, next) {
    Event
        .findOne({ where: { id: req.params.id } })
        .then(event => {
            if (!event) {
                res.status(404).send('Event not found')
            }
            
            req.body.eventId = req.params.id
            req.body.userId = req.user.dataValues.id
            req.body.author = req.user.dataValues.username

            Ticket
                .create(req.body)
                .then(ticket => res.status(201).json(ticket))
                .catch(err => next(err))
        })
})

router.get('/events/:id/tickets/:ticketId', function (req, res, next) {
    const { ticketId } = req.params

    Event
        .findOne({ where: { id: req.params.id } })
        .then(event => {
            if (!event) {
                res.status(404).send('Event not found')
            }

            Ticket
                .findByPk(ticketId)
                .then(ticket => res.status(200).json(ticket))
                .catch(err => next(err))
        })
})

router.put('/events/:id/tickets/:ticketId', function (req, res, next) {
    const { ticketId } = req.params
    const { pictureUrl } = req.body
    const { price } = req.body
    const { description } = req.body

    Event
        .findOne({ where: { id: req.params.id } })
        .then(event => {
            if (!event) {
                res.status(404).send('Event not found')
            }

            Ticket
                .findByPk(ticketId)
                .then(ticket => ticket.update({ pictureUrl, price, description }))
                .then(ticket => res.status(200).json(ticket))
                .catch(err => next(err))
        })
})

router.delete('/events/:id/tickets/:ticketId', function (req, res, next) {
    const { ticketId } = req.params

    Event
        .findOne({ where: { id: req.params.id } })
        .then(event => {
            if (!event) {
                res.status(404).send('Event not found')
            }

            Ticket
                .findByPk(ticketId)
                .then(ticket => ticket.destroy())
                .then(ticket => res.status(200).send('Deleted successfully'))
                .catch(err => next(err))
        })
})

module.exports = router