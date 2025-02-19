const express = require('express')
const bcrypt = require('bcrypt');
const User = require('./model')

const router = express.Router()

router.post('/users', function (req, res, next) {
    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
    }

    if (!user.username || !user.password) {
        res.status(401).send({
            message: 'Please supply a valid username and password'
        })
    } else {
        User
            .findOne({
                where: {
                    username: user.username
                }
            })
            .then(entity => {
                if (entity) {
                    res.status(401).send({
                        message: 'User with that username already exist'
                    })
                }
                User
                    .create(user)
                    .then(user => res.status(201).json(user))
                    .catch(err => next(err))
            })
            .catch(err => next(err))
    }
})

module.exports = router