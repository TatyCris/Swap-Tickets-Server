const { Router } = require('express')
const bcrypt = require('bcrypt')
const {toJWT} = require('./jwt')
const auth = require('./middleware')
const User = require('../user/model')

const router = new Router()

router.post('/login', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    if(!username && !password){
        res.status(400).send({
            message: 'Please enter a valid username and/or password'
        })
    } else {
        User
            .findOne({
                where: {
                    username: username
                }
            })
            .then(user => {
                if (!user) {
                    res.status(400).send({
                        message: `User with this username does not exist`
                    })
                }
                if(bcrypt.compareSync(password, user.password)) {
                    res.send({
                        jwt: toJWT({userId: user.id})
                    })
                }
                else {
                    res.status(400).send({
                        message: 'Password was incorrect'
                    })
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Something is not correct"
                })
            })
    }
})

router.get('/authentication', auth, (req, res) => {
    res.send({
        message: `The user ${req.user.username} is authenticated`,
    })
})

module.exports = router