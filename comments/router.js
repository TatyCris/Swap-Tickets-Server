const express = require('express')
const Comment = require('./model')
const Ticket = require('../tickets/model')
const Event = require('../events/model')
const auth = require('../auth/middleware')

const router = express.Router()

router.get('/events/:id/tickets/:ticketId/comments', function (req, res, next) {
    const { ticketId } = req.params

    Event
        .findOne({ where: { id: req.params.id } })
        .then(event => {
            if (!event) {
                res.status(404).send('Event not found')
            }

            Ticket
                .findOne({ where: { id: req.params.ticketId } })
                .then(ticket => {
                    if (!ticket) {
                        res.status(404).send('Ticket not found')
                    }

                    Comment
                        .findAll({ where: { ticketId } })
                        .then(comments => res.status(200).json(comments))
                        .catch(err => next(err))
                })
                .catch(err => next(err))
        })
        .catch(err => next(err))
})

router.post('/events/:id/tickets/:ticketId/comments', auth, function (req, res, next) {
    const { ticketId } = req.params

    Event
        .findOne({ where: { id: req.params.id } })
        .then(event => {
            if (!event) {
                res.status(404).send('Event not found')
            }

            Ticket
                .findOne({ where: { id: req.params.ticketId } })
                .then(ticket => {
                    if (!ticket) {
                        res.status(404).send('Ticket not found')
                    }

                    req.body.ticketId = req.params.ticketId

                    Comment
                        .create(req.body)
                        .then(comment => res.status(201).json(comment))
                        .catch(err => next(err))
                })
                .catch(err => next(err))
        })
        .catch(err => next(err))
})

module.exports = router