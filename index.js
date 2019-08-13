const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./user/router')
const authRouter = require('./auth/router')
const eventsRouter = require('./events/router')
const ticketsRouter = require('./tickets/router')
const commentsRouter = require('./comments/router')

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
app.use(eventsRouter)
app.use(ticketsRouter)
app.use(commentsRouter)