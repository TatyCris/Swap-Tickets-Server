const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const User = require('./user/model')
const db = require('./db')
const userRouter = require('./user/router')
const authRouter = require('./auth/router')


const app = express()
app.use(cors())

const jsonParser = bodyParser.json()
app.use(jsonParser)

const port = process.env.PORT || 4000

function onListen () {
    console.log(`Listen on: ${port}`);
}

app.listen(port, onListen)
app.use(userRouter)
app.use(authRouter)
