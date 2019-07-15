const express = require('express')
const router = express.Router()
const Event = require('./model')

router.get('/events', function (req, res, next) {
    const limit = req.query.limit || 9
    const offset = req.query.offset || 0

    Promise.all([
        Event.count(),
        Event.findAll({ limit, offset })
    ])
        .then(([total, events]) => {
            res.status(200).send({ events, total })
        })
        .catch(error => next(error))
})

router.post('/events', function (req, res, next) {
    Event
        .create(req.body)
        .then(events => res.status(201).json(events))
        .catch(err => next(err))
})

router.get('/events/:id', function (req, res, next) {
    const id = req.params.id

    Event
        .findByPk(id)
        .then(events => res.status(200).json(events))
        .catch(err => next(err))
})

router.put('/events/:id', function (req, res, next) {
    const { id } = req.params
    const { name } = req.body
    const { description } = req.body
    const { pictureUrl } = req.body
    const { start } = new Date(req.body)
    const { end } = new Date(req.body)

    Event
        .findByPk(id)
        .then(event => event.update({ name, description, pictureUrl, start, end }))
        .then(event => res.status(200).json(event))
        .catch(err => next(err))
})

router.delete('/events/:id', function (req, res, next) {
    const { id } = req.params

    Event
        .findByPk(id)
        .then(event => event.destroy())
        .then(event => res.status(200).send('Deleted successfully'))
        .catch(err => next(err))
})

module.exports = router
